import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ZoneCard from './components/ZoneCard';
import { CURRICULUM_ZONES, getCurriculumZones, GRADE_CONFIGS } from './data/curriculumData';
import { soundManager } from './utils/soundManager';
import { getPetStage } from './data/petData';
import { Award } from 'lucide-react';
import {
  loadAccounts,
  saveAccounts,
  loadActiveAccountId,
  saveActiveAccountId,
  getDeviceId,
  wipeAllAccountsAndReset,
} from './utils/accountStorage';
import UpdateModal from './components/UpdateModal';
import UpdateFloatingBanner from './components/UpdateFloatingBanner';
import { onUpdateAvailable, checkForAppUpdate } from './utils/updateManager';
import {
  syncAccountToCloud,
  removeAccountFromCloud,
  onCloudSyncEvent,
  fetchCloudLeaderboard,
} from './utils/cloudSync';
import { cleanAccountName, isDuplicateAccountName, getAccountNameKey } from './utils/accountName';

const ZoneView = lazy(() => import('./components/ZoneView'));
const TimoArena = lazy(() => import('./components/TimoArena'));
const TrophyRoom = lazy(() => import('./components/TrophyRoom'));
const ParentPortal = lazy(() => import('./components/ParentPortal'));
const AccountModal = lazy(() => import('./components/AccountModal'));

const ViewLoading = () => (
  <div className="min-h-[40vh] flex items-center justify-center text-amber-900 font-black">
    Đang tải nội dung…
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState('map'); // 'map', 'zone', 'timo_arena', 'trophies', 'parents'
  const [selectedZoneId, setSelectedZoneId] = useState(CURRICULUM_ZONES[0]?.id || 'counting_numbers_10');
  const [selectedSemester, setSelectedSemester] = useState('all'); // 'all', 1, 2

  // Update management state
  const [updateInfo, setUpdateInfo] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    const unsub = onUpdateAvailable((info) => {
      setUpdateInfo(info);
    });
    checkForAppUpdate().then((res) => {
      if (res?.hasUpdate) setUpdateInfo(res);
    });

    // Tự động tải và hợp nhất danh sách tài khoản đám mây khi mở ứng dụng
    const initSync = async () => {
      try {
        const res = await fetchCloudLeaderboard();
        // Leaderboard chỉ dùng để hiển thị. Không biến dữ liệu công khai thành
        // tài khoản local và không tự đăng nhập tài khoản từ thiết bị khác.
        void res;
      } catch (err) {
        console.warn('Init sync failed:', err);
      }
    };
    initSync();

    return unsub;
  }, []);

  // Multi-account profile management with 100% persistent synchronous storage
  const [accounts, setAccounts] = useState(() => loadAccounts());
  const [currentAccountId, setCurrentAccountId] = useState(() => {
    const initial = loadAccounts();
    return loadActiveAccountId(initial);
  });

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(() => accounts.length === 0);

  // Independent Audio States: Sound Effects (Loa) & Teacher Voice Reading (Mic)
  const [soundOn, setSoundOn] = useState(() => soundManager.soundEnabled);
  const [voiceOn, setVoiceOn] = useState(() => soundManager.voiceEnabled);

  // Derive active account
  const currentAccount =
    accounts.find((a) => a.id === currentAccountId) ||
    accounts[0] || {
      id: 'student_onboarding',
      name: 'Tài khoản mới',
      avatar: '🦁',
      pin: '1234',
      grade: 1,
      stars: 10,
      completedTasks: [],
      userMedals: [],
      unlockedPets: ['dino'],
      activePet: 'dino',
      redeemedRewards: [],
      usedRewardHistory: [],
    };

  const stars = currentAccount.stars ?? 10;
  const completedTasks = currentAccount.completedTasks || [];
  const userMedals = currentAccount.userMedals || [];
  const unlockedPets = currentAccount.unlockedPets || ['dino'];
  const activePet = currentAccount.activePet || 'dino';
  const redeemedRewards = currentAccount.redeemedRewards || [];

  const [selectedGrade, setSelectedGrade] = useState(() => currentAccount.grade || 1);
  const activeCurriculumZones = getCurriculumZones(selectedGrade);

  const handleSelectGrade = (newGrade) => {
    setSelectedGrade(newGrade);
    const newZones = getCurriculumZones(newGrade);
    setSelectedZoneId(newZones[0]?.id || '');
    updateCurrentAccount({ grade: newGrade });
    soundManager.playPop();
  };

  // Synchronize accounts and active ID to localStorage as safety net
  useEffect(() => {
    saveAccounts(accounts);
  }, [accounts]);

  useEffect(() => {
    if (currentAccountId) {
      saveActiveAccountId(currentAccountId);
    }
  }, [currentAccountId]);

  // Tự động đẩy toàn bộ hồ sơ cục bộ lên Bảng Vàng để không phải tạo lại
  // tài khoản khi mở trên máy khác. Chỉ projection công khai được đồng bộ.
  useEffect(() => {
    if (accounts.length > 0) {
      (async () => {
        try {
          for (const account of accounts) {
            await syncAccountToCloud(account);
          }
        } catch (err) {
          console.warn('Không thể tự đồng bộ toàn bộ hồ sơ lên Bảng Vàng:', err);
        }
      })();
    }
  }, [accounts]);

  // Lắng nghe sự kiện đồng bộ từ các cửa sổ / tab khác
  useEffect(() => {
    const unsub = onCloudSyncEvent((data) => {
      if (data?.type === 'ACCOUNT_UPDATED') {
        // Đồng bộ dữ liệu
      }
    });
    return unsub;
  }, []);

  const updateCurrentAccount = (updater) => {
    setAccounts((prevAccounts) => {
      const targetId = currentAccountId;
      const exists = prevAccounts.some((a) => a.id === targetId);
      const effectiveId = exists ? targetId : prevAccounts[0]?.id;

      const nextAccounts = prevAccounts.map((acc) => {
        if (acc.id === effectiveId) {
          return typeof updater === 'function' ? updater(acc) : { ...acc, ...updater };
        }
        return acc;
      });
      saveAccounts(nextAccounts);
      return nextAccounts;
    });
  };

  const handleAddStars = (amount) => {
    updateCurrentAccount((prev) => ({
      ...prev,
      stars: (prev.stars || 0) + amount,
    }));
  };

  const handleDeductStars = (amount = 1) => {
    updateCurrentAccount((prev) => ({
      ...prev,
      stars: Math.max(0, (prev.stars || 0) - amount),
    }));
  };

  const handleSpendStars = (amount, newPetId) => {
    updateCurrentAccount((prev) => {
      const nextPets = newPetId && !prev.unlockedPets?.includes(newPetId)
        ? [...(prev.unlockedPets || ['dino']), newPetId]
        : (prev.unlockedPets || ['dino']);
      return {
        ...prev,
        stars: Math.max(0, (prev.stars || 0) - amount),
        unlockedPets: nextPets,
      };
    });
  };

  const handleRedeemRealReward = (reward) => {
    updateCurrentAccount((prev) => {
      const currentStars = prev.stars || 0;
      if (currentStars < reward.cost) return prev;
      const newVoucher = {
        id: `voucher_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        rewardId: reward.id,
        title: reward.title,
        icon: reward.icon,
        minutes: reward.minutes,
        cost: reward.cost,
        category: reward.category,
        createdAt: Date.now(),
        status: 'available',
      };
      return {
        ...prev,
        stars: Math.max(0, currentStars - reward.cost),
        redeemedRewards: [newVoucher, ...(prev.redeemedRewards || [])],
      };
    });
  };

  const handleUseRewardVoucher = (voucherId) => {
    updateCurrentAccount((prev) => {
      const allRedeemed = prev.redeemedRewards || [];
      const targetVoucher = allRedeemed.find((v) => v.id === voucherId);
      const remainingVouchers = allRedeemed.filter((v) => v.id !== voucherId);
      const updatedHistory = targetVoucher
        ? [{ ...targetVoucher, status: 'used', usedAt: Date.now() }, ...(prev.usedRewardHistory || [])]
        : (prev.usedRewardHistory || []);

      return {
        ...prev,
        redeemedRewards: remainingVouchers,
        usedRewardHistory: updatedHistory,
      };
    });
  };

  const handleTaskCompleted = (taskId) => {
    updateCurrentAccount((prev) => {
      const tasks = prev.completedTasks || [];
      if (!tasks.includes(taskId)) {
        return {
          ...prev,
          completedTasks: [...tasks, taskId],
        };
      }
      return prev;
    });
  };

  const handleAwardMedal = (medal) => {
    updateCurrentAccount((prev) => ({
      ...prev,
      userMedals: [medal, ...(prev.userMedals || [])],
    }));
  };

  const handleSelectActivePet = (petId) => {
    updateCurrentAccount((prev) => ({
      ...prev,
      activePet: petId,
    }));
  };

  const handleCreateAccount = (accData) => {
    const cleanName = cleanAccountName(accData.name);
    if (!cleanName || isDuplicateAccountName(cleanName, accounts)) return false;
    const newId = accData.id || `acc_${Date.now()}`;
    const cleanPin = String(accData.pin || '1234').replace(/\D/g, '').slice(0, 4) || '1234';
    const targetGrade = Number(accData.grade || selectedGrade || 1);
    const newAcc = {
      id: newId,
      name: cleanName,
      avatar: accData.avatar || '🦁',
      pin: cleanPin,
      createdDeviceId: accData.createdDeviceId || getDeviceId(),
      grade: targetGrade,
      stars: accData.stars ?? 10,
      completedTasks: accData.completedTasks || [],
      userMedals: accData.userMedals || [],
      unlockedPets: accData.unlockedPets || ['dino'],
      activePet: accData.activePet || 'dino',
      redeemedRewards: accData.redeemedRewards || [],
      usedRewardHistory: accData.usedRewardHistory || [],
      createdAt: accData.createdAt || Date.now(),
    };
    const nextAccounts = [...accounts.filter((a) => a.id !== newId), newAcc];
    setAccounts(nextAccounts);
    setCurrentAccountId(newId);
    setSelectedGrade(targetGrade);
    saveAccounts(nextAccounts);
    saveActiveAccountId(newId);
    setIsAccountModalOpen(true);
    return true;
  };

  const handleWipeAllAccounts = () => {
    wipeAllAccountsAndReset();
    setAccounts([]);
    setCurrentAccountId(null);
    setIsAccountModalOpen(true);
    soundManager.playPop();
  };

  const handleUpdateAccountPin = (accountId, newPin) => {
    const cleanPin = String(newPin || '1234').replace(/\D/g, '').slice(0, 4) || '1234';
    setAccounts((prev) => {
      const updated = prev.map((a) => (a.id === accountId ? { ...a, pin: cleanPin } : a));
      saveAccounts(updated);
      return updated;
    });
  };

  const handleBulkImportAccounts = (importedList) => {
    if (!Array.isArray(importedList) || importedList.length === 0) return { imported: 0, skipped: 0 };
    const importResult = { imported: 0, skipped: 0, firstId: null, firstGrade: 1 };
    const mergedMap = new Map();
    accounts.forEach((a) => mergedMap.set(a.id, a));
    const usedNames = new Map(accounts.map((a) => [getAccountNameKey(a.name), a.id]));
    importedList.forEach((a) => {
      if (a && a.id) {
        const cleanName = cleanAccountName(a.name);
        const nameKey = getAccountNameKey(cleanName);
        const existingIdForName = usedNames.get(nameKey);
        if (!cleanName || (existingIdForName && existingIdForName !== a.id)) {
          importResult.skipped += 1;
          return;
        }
        mergedMap.set(a.id, {
          ...mergedMap.get(a.id),
          ...a,
          name: cleanName,
          createdDeviceId: a.createdDeviceId || 'external-device',
        });
        usedNames.set(nameKey, a.id);
        importResult.imported += 1;
        if (!importResult.firstId) {
          importResult.firstId = a.id;
          importResult.firstGrade = Number(a.grade) || 1;
        }
      }
    });
    const next = Array.from(mergedMap.values());
    setAccounts(next);
    saveAccounts(next);
    if (importResult.firstId) {
      setCurrentAccountId(importResult.firstId);
      setSelectedGrade(importResult.firstGrade);
      saveActiveAccountId(importResult.firstId);
    }
    return importResult;
  };

  const handleSwitchAccount = (id, accountData = null) => {
    if (accountData) {
      setAccounts((prev) => {
        const exists = prev.some((a) => a.id === id);
        const next = exists
          ? prev.map((a) => (a.id === id ? { ...a, ...accountData } : a))
          : [...prev, accountData];
        saveAccounts(next);
        return next;
      });
      if (accountData.grade) {
        setSelectedGrade(Number(accountData.grade));
      }
    }
    setCurrentAccountId(id);
    saveActiveAccountId(id);
    setIsAccountModalOpen(false);
  };

  const handleDeleteAccount = (id) => {
    const remaining = accounts.filter((a) => a.id !== id);
    if (remaining.length === 0) return;
    const nextActiveId = currentAccountId === id ? remaining[0].id : currentAccountId;
    setAccounts(remaining);
    setCurrentAccountId(nextActiveId);
    saveAccounts(remaining);
    saveActiveAccountId(nextActiveId);
    removeAccountFromCloud(id);
  };

  const handleRenameAccount = (id, nextName) => {
    const cleanName = cleanAccountName(nextName);
    if (!cleanName || isDuplicateAccountName(cleanName, accounts.filter((a) => a.id !== id))) {
      return false;
    }
    const next = accounts.map((account) =>
      account.id === id ? { ...account, name: cleanName } : account
    );
    setAccounts(next);
    saveAccounts(next);
    const renamed = next.find((account) => account.id === id);
    if (renamed) syncAccountToCloud(renamed);
    return true;
  };

  const handleResetProgress = () => {
    updateCurrentAccount({
      stars: 0,
      completedTasks: [],
      userMedals: [],
      unlockedPets: ['dino'],
      activePet: 'dino',
    });
    soundManager.playPop();
    alert(`Đã đặt lại tiến trình của bé ${currentAccount.name} thành công!`);
  };

  const selectedZone = activeCurriculumZones.find((z) => z.id === selectedZoneId) || activeCurriculumZones[0];
  const currentPet = getPetStage(completedTasks.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50/40 to-yellow-50 flex flex-col font-sans">
      {/* Global Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        stars={stars}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
        voiceOn={voiceOn}
        setVoiceOn={setVoiceOn}
        currentAccount={currentAccount}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
        selectedGrade={selectedGrade}
        onSelectGrade={handleSelectGrade}
        onOpenUpdateModal={() => setIsUpdateModalOpen(true)}
        updateInfo={updateInfo}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* VIEW 1: MAP / DASHBOARD (SIÊU TINH GỌN - VỪA KHÍT MÀN HÌNH ĐIỆN THOẠI) */}
        {currentView === 'map' && (
          <div className="max-w-4xl mx-auto p-2 sm:p-4 pb-20 sm:pb-8 landscape:pb-8 pl-[max(0.5rem,env(safe-area-inset-left))] pr-[max(0.5rem,env(safe-area-inset-right))] flex flex-col gap-2.5">
            {/* Compact Top Bar: Pet Status + Semester Tabs + Luyện Đề Button */}
            <div className="bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 rounded-2xl p-2 sm:p-3 border-2 border-amber-300 shadow-xs flex items-center justify-between gap-2">
              {/* Pet Info */}
              <div
                onClick={() => {
                  soundManager.playPop();
                  setCurrentView('trophies');
                }}
                className="flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
                title="Bấm để xem thú cưng và đổi thưởng"
              >
                <div className="w-10 h-10 rounded-xl bg-white border-2 border-amber-400 flex items-center justify-center text-2xl shadow-xs animate-bounce-slow flex-shrink-0">
                  {currentPet.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-black text-xs sm:text-sm text-amber-950 break-words leading-tight">
                      {currentAccount.name || 'Bé Học'}
                    </span>
                    <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full flex-shrink-0">
                      Cấp {currentPet.stage}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-amber-800">
                    {completedTasks.length} bài xong • ⭐ {stars}
                  </div>
                </div>
              </div>

              {/* Semester Filter Tabs */}
              <div className="flex items-center bg-white/80 p-0.5 rounded-xl border border-amber-300 shadow-2xs">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedSemester('all');
                  }}
                  className={`px-2 py-1 rounded-lg text-xs font-black transition-all ${
                    selectedSemester === 'all'
                      ? 'bg-amber-400 text-amber-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tất Cả
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedSemester(1);
                  }}
                  className={`px-2 py-1 rounded-lg text-xs font-black transition-all ${
                    selectedSemester === 1
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-blue-700'
                  }`}
                >
                  Kì 1
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedSemester(2);
                  }}
                  className={`px-2 py-1 rounded-lg text-xs font-black transition-all ${
                    selectedSemester === 2
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-emerald-700'
                  }`}
                >
                  Kì 2
                </button>
              </div>

              {/* Quick Button to Luyện Đề */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playFanfare();
                  setCurrentView('timo_arena');
                }}
                className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 text-white font-black px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-sm flex items-center gap-1 text-xs sm:text-sm btn-kid-3d transition-all flex-shrink-0 cursor-pointer"
                title="Luyện Đề Toán Tư Duy Timo"
              >
                <Award className="w-3.5 h-3.5 text-yellow-300 animate-bounce" />
                <span>Luyện Đề</span>
              </button>
            </div>

            {/* Multi-Grade Switcher Bar (Lớp 1, 2, 3, 4, 5) */}
            <div className="bg-white/95 rounded-2xl p-1.5 sm:p-2 border-2 border-amber-300 shadow-xs flex items-center justify-between gap-1 overflow-x-auto">
              <div className="text-[11px] sm:text-xs font-black text-amber-950 uppercase px-2 hidden sm:flex items-center gap-1 flex-shrink-0">
                <span>Khối Lớp:</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 flex-1 justify-around">
                {GRADE_CONFIGS.map((g) => {
                  const isActive = Number(selectedGrade) === g.grade;
                  return (
                    <button
                      key={g.grade}
                      type="button"
                      onClick={() => handleSelectGrade(g.grade)}
                      className={`flex-1 py-1.5 px-1 sm:px-2.5 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-1 btn-kid-3d cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 shadow-md ring-2 ring-amber-500 scale-102'
                          : 'bg-amber-50/70 hover:bg-amber-100 text-slate-700 border border-amber-200 shadow-2xs'
                      }`}
                      title={`${g.label}: ${g.desc}`}
                    >
                      <span className="text-sm">{g.icon}</span>
                      <span className="whitespace-nowrap">{g.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Learning Zones for Selected Grade - 2 columns on mobile portrait, 4 columns on landscape & tablet/desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 landscape:grid-cols-4 gap-2 sm:gap-2.5">
              {activeCurriculumZones.filter(
                (zone) => selectedSemester === 'all' || zone.semester === selectedSemester
              ).map((zone) => {
                const completedInZone = completedTasks.filter((t) =>
                  t.startsWith(zone.id)
                ).length;
                return (
                  <ZoneCard
                    key={zone.id}
                    zone={zone}
                    completedCount={completedInZone}
                    onSelect={(zoneId) => {
                      setSelectedZoneId(zoneId);
                      setCurrentView('zone');
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: ZONE INTERACTIVE LEARNING */}
        {currentView === 'zone' && (
          <Suspense fallback={<ViewLoading />}>
            <ZoneView
              zone={selectedZone}
              onBack={() => setCurrentView('map')}
              onAddStars={handleAddStars}
              onDeductStars={handleDeductStars}
              completedTasks={completedTasks}
              onTaskCompleted={handleTaskCompleted}
            />
          </Suspense>
        )}

        {/* VIEW 3: TIMO ARENA */}
        {currentView === 'timo_arena' && (
          <Suspense fallback={<ViewLoading />}>
            <TimoArena
              key={`timo-grade-${selectedGrade}`}
              selectedGrade={selectedGrade}
              onSelectGrade={handleSelectGrade}
              onAddStars={handleAddStars}
              onAwardMedal={handleAwardMedal}
              userMedals={userMedals}
              completedTasks={completedTasks}
            />
          </Suspense>
        )}

        {/* VIEW 4: TROPHY & COMPANION PETS */}
        {currentView === 'trophies' && (
          <Suspense fallback={<ViewLoading />}>
            <TrophyRoom
              stars={stars}
              onSpendStars={handleSpendStars}
              userMedals={userMedals}
              unlockedPets={unlockedPets}
              activePet={activePet}
              onSelectPet={handleSelectActivePet}
              redeemedRewards={redeemedRewards}
              onRedeemRealReward={handleRedeemRealReward}
              onUseRewardVoucher={handleUseRewardVoucher}
            />
          </Suspense>
        )}

        {/* VIEW 5: PARENT PORTAL */}
        {currentView === 'parents' && (
          <Suspense fallback={<ViewLoading />}>
            <ParentPortal
              stars={stars}
              completedTasks={completedTasks}
              userMedals={userMedals}
              redeemedRewards={redeemedRewards}
              usedRewardHistory={currentAccount.usedRewardHistory || []}
              onResetProgress={handleResetProgress}
              currentAccount={currentAccount}
              onOpenAccountModal={() => setIsAccountModalOpen(true)}
              onUpdateAccountPin={handleUpdateAccountPin}
              onWipeAllAccounts={handleWipeAllAccounts}
              selectedGrade={selectedGrade}
              onSelectGrade={handleSelectGrade}
              onOpenUpdateModal={() => setIsUpdateModalOpen(true)}
              updateInfo={updateInfo}
            />
          </Suspense>
        )}
      </main>

      {/* Account Switcher & Creator Modal */}
      <Suspense fallback={accounts.length === 0 ? <ViewLoading /> : null}>
        <AccountModal
          isOpen={isAccountModalOpen || accounts.length === 0}
          onClose={() => {
            if (accounts.length > 0) setIsAccountModalOpen(false);
          }}
          accounts={accounts}
          currentAccountId={currentAccountId}
          onSwitchAccount={handleSwitchAccount}
          onCreateAccount={handleCreateAccount}
          onDeleteAccount={handleDeleteAccount}
          onRenameAccount={handleRenameAccount}
          onBulkImportAccounts={handleBulkImportAccounts}
          onUpdateAccountPin={handleUpdateAccountPin}
          onWipeAllAccounts={handleWipeAllAccounts}
        />
      </Suspense>

      {/* App Update & Install Modal */}
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        updateInfo={updateInfo}
      />

      {/* Persistent Floating Update Banner */}
      <UpdateFloatingBanner
        updateInfo={updateInfo}
        onOpenDetails={() => setIsUpdateModalOpen(true)}
      />

      {/* Compact Desktop-only footer */}
      <footer className="hidden sm:block py-1.5 px-4 text-center text-[11px] font-bold text-slate-400">
        <p>HyhyhocToan • Hệ Thống Học Toán Tiểu Học Lớp 1 - 5 & Đấu Trường Timo 🎈</p>
      </footer>
    </div>
  );
}

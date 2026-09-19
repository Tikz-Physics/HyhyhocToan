import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ZoneCard from './components/ZoneCard';
import ZoneView from './components/ZoneView';
import TimoArena from './components/TimoArena';
import TrophyRoom from './components/TrophyRoom';
import ParentPortal from './components/ParentPortal';
import { CURRICULUM_ZONES } from './data/curriculumData';
import { soundManager } from './utils/soundManager';
import PetEvolution from './components/PetEvolution';
import AccountModal from './components/AccountModal';
import { getPetStage } from './data/petData';
import { Award, Sparkles, ChevronRight } from 'lucide-react';
import {
  loadAccounts,
  saveAccounts,
  loadActiveAccountId,
  saveActiveAccountId,
} from './utils/accountStorage';

export default function App() {
  const [currentView, setCurrentView] = useState('map'); // 'map', 'zone', 'timo_arena', 'trophies', 'parents'
  const [selectedZoneId, setSelectedZoneId] = useState(CURRICULUM_ZONES[0]?.id || 'counting_numbers_10');
  const [selectedSemester, setSelectedSemester] = useState('all'); // 'all', 1, 2

  // Multi-account profile management with 100% persistent synchronous storage
  const [accounts, setAccounts] = useState(() => loadAccounts());
  const [currentAccountId, setCurrentAccountId] = useState(() => {
    const initial = loadAccounts();
    return loadActiveAccountId(initial);
  });

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  // Independent Audio States: Sound Effects (Loa) & Teacher Voice Reading (Mic)
  const [soundOn, setSoundOn] = useState(() => soundManager.soundEnabled);
  const [voiceOn, setVoiceOn] = useState(() => soundManager.voiceEnabled);

  // Derive active account
  const currentAccount =
    accounts.find((a) => a.id === currentAccountId) ||
    accounts[0] || {
      id: 'default_child',
      name: 'Bé Yêu 🎈',
      avatar: '🦁',
      stars: 10,
      completedTasks: [],
      userMedals: [],
      unlockedPets: ['dino'],
      activePet: 'dino',
    };

  const stars = currentAccount.stars ?? 10;
  const completedTasks = currentAccount.completedTasks || [];
  const userMedals = currentAccount.userMedals || [];
  const unlockedPets = currentAccount.unlockedPets || ['dino'];
  const activePet = currentAccount.activePet || 'dino';

  // Synchronize accounts and active ID to localStorage as safety net
  useEffect(() => {
    saveAccounts(accounts);
  }, [accounts]);

  useEffect(() => {
    saveActiveAccountId(currentAccountId);
  }, [currentAccountId]);

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

  const handleCreateAccount = ({ name, avatar }) => {
    const newId = `acc_${Date.now()}`;
    const newAcc = {
      id: newId,
      name,
      avatar,
      stars: 10,
      completedTasks: [],
      userMedals: [],
      unlockedPets: ['dino'],
      activePet: 'dino',
      createdAt: Date.now(),
    };
    const nextAccounts = [...accounts, newAcc];
    setAccounts(nextAccounts);
    setCurrentAccountId(newId);
    saveAccounts(nextAccounts);
    saveActiveAccountId(newId);
    setIsAccountModalOpen(false);
  };

  const handleSwitchAccount = (id) => {
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

  const selectedZone = CURRICULUM_ZONES.find((z) => z.id === selectedZoneId) || CURRICULUM_ZONES[0];
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
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* VIEW 1: MAP / DASHBOARD (SIÊU TINH GỌN - VỪA KHÍT MÀN HÌNH ĐIỆN THOẠI) */}
        {currentView === 'map' && (
          <div className="max-w-4xl mx-auto p-2 sm:p-4 pb-20 sm:pb-8 flex flex-col gap-2.5">
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

            {/* 8 Learning Zones - 2 columns on mobile, 4 columns on tablet/desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {CURRICULUM_ZONES.filter(
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
          <ZoneView
            zone={selectedZone}
            onBack={() => setCurrentView('map')}
            onAddStars={handleAddStars}
            completedTasks={completedTasks}
            onTaskCompleted={handleTaskCompleted}
          />
        )}

        {/* VIEW 3: TIMO ARENA */}
        {currentView === 'timo_arena' && (
          <TimoArena
            onAddStars={handleAddStars}
            onAwardMedal={handleAwardMedal}
            userMedals={userMedals}
            completedTasks={completedTasks}
          />
        )}

        {/* VIEW 4: TROPHY & COMPANION PETS */}
        {currentView === 'trophies' && (
          <TrophyRoom
            stars={stars}
            onSpendStars={handleSpendStars}
            userMedals={userMedals}
            unlockedPets={unlockedPets}
            activePet={activePet}
            onSelectPet={handleSelectActivePet}
          />
        )}

        {/* VIEW 5: PARENT PORTAL */}
        {currentView === 'parents' && (
          <ParentPortal
            stars={stars}
            completedTasks={completedTasks}
            userMedals={userMedals}
            onResetProgress={handleResetProgress}
            currentAccount={currentAccount}
            onOpenAccountModal={() => setIsAccountModalOpen(true)}
          />
        )}
      </main>

      {/* Account Switcher & Creator Modal */}
      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        accounts={accounts}
        currentAccountId={currentAccountId}
        onSwitchAccount={handleSwitchAccount}
        onCreateAccount={handleCreateAccount}
        onDeleteAccount={handleDeleteAccount}
      />

      {/* Compact Desktop-only footer */}
      <footer className="hidden sm:block py-1.5 px-4 text-center text-[11px] font-bold text-slate-400">
        <p>HyhyhocToan • Học Toán Lớp 1 & Luyện Thi Timo 🎈</p>
      </footer>
    </div>
  );
}

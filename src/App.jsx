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

export default function App() {
  const [currentView, setCurrentView] = useState('map'); // 'map', 'zone', 'timo_arena', 'trophies', 'parents'
  const [selectedZoneId, setSelectedZoneId] = useState(CURRICULUM_ZONES[0]?.id || 'counting_numbers_10');
  const [selectedSemester, setSelectedSemester] = useState('all'); // 'all', 1, 2

  // Multi-account profile management
  const [accounts, setAccounts] = useState(() => {
    try {
      const saved = localStorage.getItem('toan_lop1_accounts');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }

    // Migrate from legacy single-profile storage if present
    const existingStars = Number(localStorage.getItem('toan_lop1_stars') || 10);
    let existingTasks = [];
    try { existingTasks = JSON.parse(localStorage.getItem('toan_lop1_completed') || '[]'); } catch {}
    let existingMedals = [];
    try { existingMedals = JSON.parse(localStorage.getItem('toan_lop1_medals') || '[]'); } catch {}
    let existingPets = ['dino'];
    try { existingPets = JSON.parse(localStorage.getItem('toan_lop1_pets') || '["dino"]'); } catch {}
    const existingActivePet = localStorage.getItem('toan_lop1_active_pet') || 'dino';

    return [{
      id: 'default_child',
      name: 'Bé Yêu 🎈',
      avatar: '🦁',
      stars: existingStars,
      completedTasks: existingTasks,
      userMedals: existingMedals,
      unlockedPets: existingPets,
      activePet: existingActivePet,
      createdAt: Date.now(),
    }];
  });

  const [currentAccountId, setCurrentAccountId] = useState(() => {
    return localStorage.getItem('toan_lop1_current_account_id') || 'default_child';
  });

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [audioOn, setAudioOn] = useState(() => {
    try {
      const saved = localStorage.getItem('toan_lop1_master_audio');
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  // Derive active account
  const currentAccount = accounts.find((a) => a.id === currentAccountId) || accounts[0] || {
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

  // Synchronize accounts to localStorage
  useEffect(() => {
    localStorage.setItem('toan_lop1_accounts', JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem('toan_lop1_current_account_id', currentAccountId);
  }, [currentAccountId]);

  const updateCurrentAccount = (updater) => {
    setAccounts((prevAccounts) => {
      return prevAccounts.map((acc) => {
        if (acc.id === currentAccount.id) {
          return typeof updater === 'function' ? updater(acc) : { ...acc, ...updater };
        }
        return acc;
      });
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
    setAccounts((prev) => [...prev, newAcc]);
    setCurrentAccountId(newId);
  };

  const handleSwitchAccount = (id) => {
    setCurrentAccountId(id);
    setIsAccountModalOpen(false);
  };

  const handleDeleteAccount = (id) => {
    setAccounts((prev) => {
      const remaining = prev.filter((a) => a.id !== id);
      if (currentAccountId === id && remaining.length > 0) {
        setCurrentAccountId(remaining[0].id);
      }
      return remaining;
    });
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
        audioOn={audioOn}
        setAudioOn={setAudioOn}
        currentAccount={currentAccount}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* VIEW 1: MAP / DASHBOARD */}
        {currentView === 'map' && (
          <div className="max-w-6xl mx-auto p-3 sm:p-6 space-y-8 pb-24">
            {/* Hero Mascot Welcome Banner */}
            <div className="relative bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400 rounded-3xl p-6 sm:p-8 border-4 border-amber-400 shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-4 sm:gap-6 text-center sm:text-left">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/95 border-4 border-amber-500 flex items-center justify-center text-5xl sm:text-6xl shadow-lg animate-bounce-slow flex-shrink-0">
                    <span>{currentPet.icon}</span>
                    <span className="absolute -bottom-2 bg-rose-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow">
                      Cấp {currentPet.stage}
                    </span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-rose-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 animate-wiggle" />
                      <span>Chào mừng bé vào lớp 1!</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black text-amber-950 leading-tight">
                      Vương Quốc Toán Học Tuổi Thơ 🎈
                    </h1>
                    <p className="text-sm sm:text-base font-bold text-amber-900 mt-1 max-w-xl">
                      Học toán trực quan tương tác, cùng bạn <span className="font-extrabold underline decoration-amber-600">{currentPet.name}</span> tích lũy năng lượng tiến hóa và chinh phục Timo!
                    </p>
                  </div>
                </div>

                {/* Quick Action Button to Timo Arena */}
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      soundManager.playFanfare();
                      setCurrentView('timo_arena');
                    }}
                    className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-black px-6 py-3.5 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-base sm:text-lg ring-4 ring-rose-200 btn-kid-3d transition-all"
                  >
                    <Award className="w-5 h-5 text-yellow-300 animate-bounce" />
                    <span>Luyện Thi Timo 2025</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="text-center text-[11px] font-bold text-amber-900">
                    🏆 25 Câu Chuẩn Thi • Song Ngữ Anh - Việt
                  </div>
                </div>
              </div>
            </div>

            {/* CHUỖI TIẾN HÓA THÚ CƯNG (Phương án A) */}
            <PetEvolution completedTasks={completedTasks} stars={stars} />

            {/* Featured Timo Showcase Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-5 sm:p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-blue-400">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl border border-white/20">
                  🏅
                </div>
                <div>
                  <h3 className="font-black text-lg sm:text-xl flex items-center gap-2">
                    <span>Thử Thách Đan Xen Toán Timo</span>
                    <span className="bg-amber-400 text-amber-950 text-xs px-2 py-0.5 rounded-full font-extrabold">
                      Mới!
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 font-medium mt-0.5">
                    Mỗi khu vườn đều có huy hiệu Timo xanh dương. Bé hãy thử sức để nhận thêm nhiều sao thưởng nhé!
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  soundManager.playClick();
                  setCurrentView('trophies');
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl border border-white/30 whitespace-nowrap"
              >
                Xem Tủ Cúp & Huy Hiệu 🏆
              </button>
            </div>

            {/* 8 Learning Zones by Semester */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🗺️</span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                      Bản Đồ 8 Chủ Đề Học Tập SGK Mới
                    </h2>
                    <p className="text-xs font-bold text-slate-500">
                      Chuẩn Chương trình Giáo dục phổ thông mới (CTGDPT 2018) & Timo
                    </p>
                  </div>
                </div>

                {/* Semester Filter Tabs */}
                <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border-2 border-slate-200 self-start sm:self-auto shadow-xs">
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedSemester('all');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                      selectedSemester === 'all'
                        ? 'bg-amber-400 text-amber-950 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Tất Cả ({CURRICULUM_ZONES.length})
                  </button>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedSemester(1);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                      selectedSemester === 1
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-blue-700'
                    }`}
                  >
                    📘 Học Kì 1 (4)
                  </button>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedSemester(2);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                      selectedSemester === 2
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-emerald-700'
                    }`}
                  >
                    📙 Học Kì 2 (4)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* Friendly Bottom Footer */}
      <footer className="bg-white/80 border-t border-amber-200 py-4 px-4 text-center text-xs font-bold text-slate-500">
        <p>
          🌈 Ứng Dụng Học Toán Lớp 1 & Luyện Thi Timo • Thiết kế sinh động, trực quan dành riêng cho học sinh lớp 1
        </p>
      </footer>
    </div>
  );
}

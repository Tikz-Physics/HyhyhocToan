import React from 'react';
import { Volume2, VolumeX, Trophy, Home, Award, Users } from 'lucide-react';
import { soundManager } from '../utils/soundManager';

export default function Navbar({
  currentView,
  setCurrentView,
  stars,
  audioOn,
  setAudioOn,
  currentAccount,
  onOpenAccountModal,
}) {
  const handleToggleAudio = () => {
    const newState = soundManager.toggleMasterAudio();
    setAudioOn(newState);
    if (newState) {
      soundManager.playPop();
      soundManager.speak('Âm thanh và giọng đọc đã bật!');
    }
  };

  const navBtnClass = (viewName) => `
    flex items-center gap-1.5 px-3.5 py-2 rounded-2xl font-bold text-sm md:text-base transition-all duration-150 btn-kid-3d
    ${currentView === viewName
      ? 'bg-amber-400 text-amber-950 shadow-md ring-2 ring-amber-500 scale-105'
      : 'bg-white/80 hover:bg-white text-slate-700 shadow-sm border border-amber-200'}
  `;

  return (
    <>
      {/* Top Header for all devices */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 border-b-4 border-amber-400 shadow-lg px-3 py-2 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <div
            onClick={() => {
              soundManager.playPop();
              setCurrentView('map');
            }}
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-md border-2 border-amber-400 group-hover:rotate-6 transition-transform flex-shrink-0">
              🦖
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-base sm:text-xl text-amber-950 tracking-tight whitespace-nowrap">
                  HyhyhocToan
                </span>
                <span className="bg-rose-500 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-wider animate-pulse">
                  Lớp 1 + Timo
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-amber-900 hidden xs:block">
                Bé Học Toán Trực Quan & Tư Duy 🎈
              </p>
            </div>
          </div>

          {/* Desktop & Tablet Navigation Tabs (Hidden on small mobile, visible on sm and up) */}
          <nav className="hidden sm:flex items-center gap-1.5 md:gap-2">
            <button
              onClick={() => {
                soundManager.playClick();
                setCurrentView('map');
              }}
              className={navBtnClass('map')}
            >
              <Home className="w-4 h-4 text-orange-600" />
              <span>Khu Vườn</span>
            </button>

            <button
              onClick={() => {
                soundManager.playFanfare();
                setCurrentView('timo_arena');
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl font-bold text-sm md:text-base transition-all duration-150 btn-kid-3d ${
                currentView === 'timo_arena'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md ring-2 ring-rose-300 scale-105'
                  : 'bg-white text-rose-700 hover:bg-rose-50 border-2 border-rose-300 shadow-sm'
              }`}
            >
              <Award className="w-4 h-4 text-amber-400 animate-bounce-slow" />
              <span>Luyện Đề Timo</span>
            </button>

            <button
              onClick={() => {
                soundManager.playStar();
                setCurrentView('trophies');
              }}
              className={navBtnClass('trophies')}
            >
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span>Đổi Thưởng</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setCurrentView('parents');
              }}
              className={navBtnClass('parents')}
            >
              <Users className="w-4 h-4 text-blue-600" />
              <span>Phụ Huynh</span>
            </button>
          </nav>

          {/* Stats & Audio Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Account Profile Switcher Button */}
            {currentAccount && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  if (onOpenAccountModal) onOpenAccountModal();
                }}
                title="Bấm để đổi tài khoản bé học"
                className="flex items-center gap-1.5 bg-white/95 hover:bg-white active:scale-95 border-2 border-amber-300 hover:border-amber-400 px-2 py-1 sm:px-3 sm:py-1.5 rounded-2xl shadow-sm text-amber-950 font-black text-xs sm:text-sm btn-kid-3d cursor-pointer"
              >
                <span className="text-base sm:text-lg">{currentAccount.avatar || '🦁'}</span>
                <span className="max-w-[65px] sm:max-w-[100px] truncate">{currentAccount.name || 'Bé Học'}</span>
              </button>
            )}

            {/* Stars Counter */}
            <div
              title="Số sao bé đã tích lũy"
              className="flex items-center gap-1 bg-white/95 border-2 border-amber-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl shadow-sm text-amber-900 font-black text-xs sm:text-base animate-pop"
            >
              <span className="text-base sm:text-xl animate-bounce-slow">⭐</span>
              <span>{stars}</span>
            </div>

            {/* Single Master Audio Toggle (Cả Âm thanh hiệu ứng & Giọng đọc cô giáo) */}
            <button
              type="button"
              onClick={handleToggleAudio}
              title={
                audioOn
                  ? 'Âm thanh & Giọng đọc: Đang BẬT (Bấm để tắt)'
                  : 'Âm thanh & Giọng đọc: Đang TẮT (Bấm để bật)'
              }
              className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-2xl border-2 transition-all cursor-pointer btn-kid-3d shadow-xs font-black text-xs ${
                audioOn
                  ? 'bg-emerald-100 hover:bg-emerald-200 border-emerald-400 text-emerald-900'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-500 line-through opacity-75'
              }`}
            >
              {audioOn ? (
                <>
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 animate-pulse" />
                  <span className="hidden xs:inline">Âm thanh</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  <span className="hidden xs:inline">Tắt tiếng</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Visible only on mobile screens < 640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-amber-300 shadow-2xl px-2 py-1 flex items-center justify-around">
        <button
          onClick={() => {
            soundManager.playClick();
            setCurrentView('map');
          }}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            currentView === 'map' ? 'text-amber-600 font-black scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Khu Vườn</span>
        </button>

        <button
          onClick={() => {
            soundManager.playFanfare();
            setCurrentView('timo_arena');
          }}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            currentView === 'timo_arena' ? 'text-rose-600 font-black scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Award className="w-5 h-5 text-rose-500" />
          <span className="text-[10px] mt-0.5">Đề Timo</span>
        </button>

        <button
          onClick={() => {
            soundManager.playStar();
            setCurrentView('trophies');
          }}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            currentView === 'trophies' ? 'text-amber-600 font-black scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-[10px] mt-0.5">Đổi Thưởng</span>
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setCurrentView('parents');
          }}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
            currentView === 'parents' ? 'text-blue-600 font-black scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Users className="w-5 h-5 text-blue-500" />
          <span className="text-[10px] mt-0.5">Phụ Huynh</span>
        </button>
      </div>
    </>
  );
}


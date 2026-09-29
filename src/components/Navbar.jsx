import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Mic, MicOff, Trophy, Home, Award, Users, ChevronDown, RefreshCw } from 'lucide-react';
import { soundManager } from '../utils/soundManager';
import { GRADE_CONFIGS } from '../data/curriculumData';

export default function Navbar({
  currentView,
  setCurrentView,
  stars,
  soundOn,
  setSoundOn,
  voiceOn,
  setVoiceOn,
  currentAccount,
  onOpenAccountModal,
  selectedGrade = 1,
  onSelectGrade,
  onOpenUpdateModal,
  updateInfo,
}) {
  const [isGradeMenuOpen, setIsGradeMenuOpen] = useState(false);
  const gradeMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (gradeMenuRef.current && !gradeMenuRef.current.contains(e.target)) {
        setIsGradeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentGradeConfig = GRADE_CONFIGS.find((g) => g.grade === Number(selectedGrade)) || GRADE_CONFIGS[0];

  const handleToggleSound = () => {
    const next = soundManager.toggleSound();
    setSoundOn(next);
    if (next) soundManager.playPop();
  };

  const handleToggleVoice = () => {
    const next = soundManager.toggleVoice();
    setVoiceOn(next);
    if (next) {
      soundManager.speak('Giọng đọc đã bật');
    } else {
      soundManager.stopSpeaking();
    }
  };

  const navBtnClass = (viewName) => `
    flex items-center gap-1.5 px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all duration-150 btn-kid-3d whitespace-nowrap shrink-0
    ${currentView === viewName
      ? 'bg-amber-400 text-amber-950 shadow-md ring-2 ring-amber-500 scale-105'
      : 'bg-white/80 hover:bg-white text-slate-700 shadow-sm border border-amber-200'}
  `;

  return (
    <>
      {/* Top Header for all devices */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 border-b-4 border-amber-400 shadow-lg px-2.5 sm:px-6 py-1.5 landscape:py-1 sm:py-2 pl-[max(0.6rem,env(safe-area-inset-left))] pr-[max(0.6rem,env(safe-area-inset-right))]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
          {/* Logo & Brand & Grade Switcher */}
          <div className="flex items-center gap-2 select-none">
            <div
              onClick={() => {
                soundManager.playPop();
                setCurrentView('map');
              }}
              className="flex items-center gap-1.5 cursor-pointer group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center text-lg sm:text-xl shadow-xs border-2 border-amber-400 group-hover:rotate-6 transition-transform flex-shrink-0">
                🦖
              </div>
              <span className="font-black text-sm sm:text-lg text-amber-950 tracking-tight whitespace-nowrap hidden xs:inline">
                HyhyhocToan
              </span>
            </div>

            {/* Interactive Grade Selector Dropdown */}
            <div className="relative" ref={gradeMenuRef}>
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsGradeMenuOpen(!isGradeMenuOpen);
                }}
                className="min-h-10 sm:min-h-0 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 active:scale-95 text-white text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm border border-white/40 cursor-pointer btn-kid-3d"
                title="Bấm để đổi khối lớp học (Lớp 1 đến Lớp 5)"
              >
                <span>{currentGradeConfig.label}</span>
                <span className="text-xs">{currentGradeConfig.icon}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isGradeMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isGradeMenuOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border-2 border-amber-400 p-1.5 z-50 animate-pop">
                  <div className="px-2 py-1 text-[10px] font-black text-amber-900/60 uppercase tracking-wider border-b border-amber-100 flex items-center justify-between">
                    <span>Chọn Khối Lớp</span>
                    <span>1 - 5</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    {GRADE_CONFIGS.map((g) => {
                      const isActive = Number(selectedGrade) === g.grade;
                      return (
                        <button
                          key={g.grade}
                          type="button"
                          onClick={() => {
                            soundManager.playPop();
                            if (onSelectGrade) onSelectGrade(g.grade);
                            setIsGradeMenuOpen(false);
                          }}
                          className={`w-full px-2.5 py-1.5 rounded-xl flex items-center justify-between text-xs font-black transition-all cursor-pointer ${
                            isActive
                              ? 'bg-amber-400 text-amber-950 shadow-xs'
                              : 'text-slate-700 hover:bg-amber-50 active:bg-amber-100'
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm">{g.icon}</span>
                            <span>{g.label}</span>
                          </div>
                          {isActive && <span className="text-xs font-black">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop, Tablet & Landscape Navigation Tabs */}
          <nav className="hidden sm:flex landscape:flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <button
              onClick={() => {
                soundManager.playClick();
                setCurrentView('map');
              }}
              className={navBtnClass('map')}
            >
              <Home className="w-4 h-4 text-orange-600" />
              <span className="whitespace-nowrap">Khu Vườn</span>
            </button>

            <button
              onClick={() => {
                soundManager.playFanfare();
                setCurrentView('timo_arena');
              }}
              className={`flex items-center gap-1.5 px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all duration-150 btn-kid-3d whitespace-nowrap shrink-0 ${
                currentView === 'timo_arena'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md ring-2 ring-rose-300 scale-105'
                  : 'bg-white text-rose-700 hover:bg-rose-50 border-2 border-rose-300 shadow-sm'
              }`}
            >
              <Award className="w-4 h-4 text-amber-400 animate-bounce-slow" />
              <span className="whitespace-nowrap">Luyện Đề</span>
            </button>

            <button
              onClick={() => {
                soundManager.playStar();
                setCurrentView('trophies');
              }}
              className={navBtnClass('trophies')}
            >
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="whitespace-nowrap">Đổi Thưởng</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setCurrentView('parents');
              }}
              className={navBtnClass('parents')}
            >
              <Users className="w-4 h-4 text-blue-600" />
              <span className="whitespace-nowrap">Phụ Huynh</span>
            </button>
          </nav>

          {/* Stats & Audio Controls */}
          <div className="flex w-full items-center justify-between gap-1.5 sm:w-auto sm:justify-end sm:gap-2">
            {/* Account Profile Switcher Button */}
            {currentAccount && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  if (onOpenAccountModal) onOpenAccountModal();
                }}
                title="Bấm để đổi tài khoản bé học"
                className="flex min-h-10 min-w-10 items-center justify-center gap-1.5 bg-white/95 hover:bg-white active:scale-95 border-2 border-amber-300 hover:border-amber-400 px-2 py-1 sm:px-3 sm:py-1.5 rounded-2xl shadow-sm text-amber-950 font-black text-xs sm:text-sm btn-kid-3d cursor-pointer"
              >
                <span className="text-base sm:text-lg">{currentAccount.avatar || '🦁'}</span>
                <span className="hidden max-w-[100px] truncate sm:inline">{currentAccount.name || 'Tài khoản'}</span>
              </button>
            )}

            {/* Stars Counter */}
            <div
              title="Số sao bé đã tích lũy"
              className="flex min-h-10 items-center justify-center gap-1 bg-white/95 border-2 border-amber-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl shadow-sm text-amber-900 font-black text-xs sm:text-base animate-pop"
            >
              <span className="text-base sm:text-xl animate-bounce-slow">⭐</span>
              <span>{stars}</span>
            </div>

            {/* Nút 1: Loa (Hiệu ứng âm thanh: ting-ting, pháo hoa, click) */}
            <button
              type="button"
              onClick={handleToggleSound}
              title={
                soundOn
                  ? 'Âm thanh hiệu ứng: Đang BẬT (Bấm để tắt)'
                  : 'Âm thanh hiệu ứng: Đang TẮT (Bấm để bật)'
              }
              className={`flex min-h-10 min-w-10 items-center justify-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-2xl border-2 transition-all cursor-pointer btn-kid-3d shadow-xs font-black text-xs ${
                soundOn
                  ? 'bg-amber-100 hover:bg-amber-200 border-amber-400 text-amber-900'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-400 line-through opacity-70'
              }`}
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 animate-pulse" />
                  <span className="hidden md:inline">Loa</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  <span className="hidden md:inline">Tắt loa</span>
                </>
              )}
            </button>

            {/* Nút 2: Mic (Giọng đọc cô giáo đọc đề bài) */}
            <button
              type="button"
              onClick={handleToggleVoice}
              title={
                voiceOn
                  ? 'Giọng đọc cô giáo: Đang BẬT (Bấm để tắt)'
                  : 'Giọng đọc cô giáo: Đang TẮT (Bấm để bật)'
              }
              className={`flex min-h-10 min-w-10 items-center justify-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-2xl border-2 transition-all cursor-pointer btn-kid-3d shadow-xs font-black text-xs ${
                voiceOn
                  ? 'bg-emerald-100 hover:bg-emerald-200 border-emerald-400 text-emerald-900'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-400 line-through opacity-70'
              }`}
            >
              {voiceOn ? (
                <>
                  <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 animate-pulse" />
                  <span className="hidden md:inline">Giọng đọc</span>
                </>
              ) : (
                <>
                  <MicOff className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  <span className="hidden md:inline">Tắt giọng</span>
                </>
              )}
            </button>

            {/* Nút 3: Cập nhật App & Tải về máy */}
            <button
              type="button"
              onClick={() => {
                soundManager.playPop();
                if (onOpenUpdateModal) onOpenUpdateModal();
              }}
              title="Cập nhật ứng dụng & Tải về máy"
              className={`relative flex min-h-10 min-w-10 items-center justify-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-2xl border-2 transition-all cursor-pointer btn-kid-3d shadow-xs font-black text-xs whitespace-nowrap shrink-0 ${
                updateInfo?.hasUpdate
                  ? 'bg-rose-500 hover:bg-rose-600 text-white border-rose-600 animate-bounce'
                  : 'bg-white hover:bg-amber-100/80 border-amber-400 text-amber-950'
              }`}
            >
              <RefreshCw
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 ${
                  updateInfo?.hasUpdate ? 'text-white animate-spin' : ''
                }`}
              />
              <span className="hidden md:inline whitespace-nowrap">
                {updateInfo?.hasUpdate ? 'Có bản mới!' : 'Cập nhật'}
              </span>
              {updateInfo?.hasUpdate && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Visible only on mobile portrait screens) */}
      <div className="sm:hidden landscape:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-amber-300 shadow-2xl px-2 pt-1 pb-[max(0.35rem,env(safe-area-inset-bottom))] flex min-h-16 items-center justify-around">
        <button
          onClick={() => {
            soundManager.playClick();
            setCurrentView('map');
          }}
          className={`flex min-h-12 flex-1 flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
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
          className={`flex min-h-12 flex-1 flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
            currentView === 'timo_arena' ? 'text-rose-600 font-black scale-105' : 'text-slate-500 font-semibold'
          }`}
        >
          <Award className="w-5 h-5 text-rose-500" />
          <span className="text-[10px] mt-0.5">Luyện Đề</span>
        </button>

        <button
          onClick={() => {
            soundManager.playStar();
            setCurrentView('trophies');
          }}
          className={`flex min-h-12 flex-1 flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
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
          className={`flex min-h-12 flex-1 flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
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


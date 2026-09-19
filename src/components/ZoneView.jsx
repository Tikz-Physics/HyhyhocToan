import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, Sparkles, ChevronRight, ChevronLeft, HelpCircle, Target, Minimize2 } from 'lucide-react';
import { soundManager } from '../utils/soundManager';
import InteractiveCanvas from './InteractiveCanvas';
import FloatingPetCompanion from './FloatingPetCompanion';
import { getPetStage } from '../data/petData';

export default function ZoneView({
  zone,
  onBack,
  onAddStars,
  completedTasks,
  onTaskCompleted,
}) {
  const [activeTab, setActiveTab] = useState('basic'); // 'basic' or 'timo'
  const [levelIndex, setLevelIndex] = useState(0);
  const [isCompletedCurrent, setIsCompletedCurrent] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [lastAnswerStatus, setLastAnswerStatus] = useState('idle');
  const [isFocusMode, setIsFocusMode] = useState(false);

  const currentPet = getPetStage(completedTasks.length);
  const currentList = activeTab === 'basic' ? zone.basicLevels : zone.timoChallenges;
  const currentLevel = currentList[levelIndex] || currentList[0];

  useEffect(() => {
    if (currentLevel?.question) {
      soundManager.speak(currentLevel.question);
    }
    return () => {
      soundManager.stopSpeaking();
    };
  }, [levelIndex, activeTab, currentLevel?.question]);

  const handleLevelCompleted = () => {
    setIsCompletedCurrent(true);
    const starReward = activeTab === 'basic' ? 2 : 3;
    onAddStars(starReward);
    onTaskCompleted(`${zone.id}_${activeTab}_${currentLevel.id}`);
  };

  const handleNext = () => {
    soundManager.playPop();
    setIsCompletedCurrent(false);
    setShowHint(false);
    setLastAnswerStatus('idle');
    if (levelIndex < currentList.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else {
      soundManager.playFanfare();
      if (activeTab === 'basic') {
        setActiveTab('timo');
        setLevelIndex(0);
      } else {
        onBack();
      }
    }
  };

  const handlePrev = () => {
    if (levelIndex > 0) {
      soundManager.playPop();
      setIsCompletedCurrent(false);
      setShowHint(false);
      setLastAnswerStatus('idle');
      setLevelIndex(levelIndex - 1);
    }
  };

  const speakCurrent = () => {
    soundManager.speak(currentLevel.question);
  };

  return (
    <div
      className={
        isFocusMode
          ? 'fixed inset-0 z-50 bg-gradient-to-b from-amber-50 via-orange-50/60 to-yellow-50 overflow-y-auto p-2 sm:p-4 landscape:p-2 flex flex-col justify-start'
          : 'max-w-xl landscape:max-w-3xl mx-auto p-1.5 sm:p-3 pb-8 flex flex-col justify-start'
      }
    >
      {/* 1-Line Top Navigation: Back + Tabs + Progress Dots + Read Button + Focus Mode Button */}
      <div className="flex items-center justify-between gap-1.5 mb-1.5 flex-wrap">
        <button
          type="button"
          onClick={() => {
            soundManager.playPop();
            soundManager.stopSpeaking();
            if (isFocusMode) {
              setIsFocusMode(false);
            } else {
              onBack();
            }
          }}
          className="flex items-center gap-1 bg-white border border-slate-300 active:scale-95 text-slate-700 font-bold px-2 py-1 rounded-xl shadow-2xs text-xs btn-kid-3d cursor-pointer flex-shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
          <span>{isFocusMode ? 'Thu nhỏ' : 'Về'}</span>
        </button>

        {/* Tab switch mini */}
        <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setActiveTab('basic');
              setLevelIndex(0);
              setIsCompletedCurrent(false);
              setShowHint(false);
              setLastAnswerStatus('idle');
            }}
            className={`px-2 py-0.5 rounded-lg font-black text-xs transition-all ${
              activeTab === 'basic'
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Học ({zone.basicLevels.length})
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playFanfare();
              setActiveTab('timo');
              setLevelIndex(0);
              setIsCompletedCurrent(false);
              setShowHint(false);
              setLastAnswerStatus('idle');
            }}
            className={`px-2 py-0.5 rounded-lg font-black text-xs transition-all flex items-center gap-0.5 ${
              activeTab === 'timo'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                : 'text-blue-700'
            }`}
          >
            <Sparkles className="w-3 h-3 text-yellow-300" />
            <span>Đề Timo ({zone.timoChallenges.length})</span>
          </button>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Re-read speaker button */}
          <button
            type="button"
            onClick={speakCurrent}
            title="Đọc lại đề bài"
            className="flex items-center gap-1 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-2 py-1 rounded-xl font-black text-xs btn-kid-3d shadow-2xs cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span className="hidden xs:inline">Đọc đề</span>
          </button>

          {/* Focus Mode Button */}
          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setIsFocusMode(!isFocusMode);
            }}
            title={isFocusMode ? 'Thoát chế độ tập trung' : 'Chế độ tập trung vào câu hỏi'}
            className={`flex items-center gap-1 px-2 py-1 rounded-xl font-black text-xs btn-kid-3d shadow-2xs cursor-pointer border ${
              isFocusMode
                ? 'bg-rose-500 hover:bg-rose-600 text-white border-rose-600'
                : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border-indigo-300'
            }`}
          >
            {isFocusMode ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-white" />
                <span className="hidden xs:inline">Thoát</span>
              </>
            ) : (
              <>
                <Target className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span className="hidden xs:inline">Tập trung</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mini Progress Dots Bar */}
      <div className="flex items-center justify-center gap-1.5 mb-1.5">
        {currentList.map((lvl, idx) => {
          const isDone = completedTasks.includes(`${zone.id}_${activeTab}_${lvl.id}`);
          const isCurrent = idx === levelIndex;
          return (
            <div
              key={lvl.id}
              onClick={() => {
                soundManager.playClick();
                setLevelIndex(idx);
                setIsCompletedCurrent(false);
                setShowHint(false);
                setLastAnswerStatus('idle');
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                isCurrent
                  ? 'w-6 bg-amber-500 ring-2 ring-amber-300'
                  : isDone
                  ? 'w-2 bg-emerald-500'
                  : 'w-2 bg-slate-300'
              }`}
            />
          );
        })}
      </div>

      {/* Question Box: Short, Clear, Minimalist */}
      <div
        className={`border-2 border-amber-300 rounded-2xl p-2.5 mb-1.5 text-center shadow-xs transition-all ${
          isFocusMode
            ? 'bg-white focus-glow ring-2 ring-amber-400 py-3 sm:py-4 max-w-2xl mx-auto w-full'
            : 'bg-gradient-to-r from-amber-50 to-orange-50'
        }`}
      >
        <p
          className={`font-black leading-snug ${
            isFocusMode ? 'text-lg sm:text-2xl text-amber-950' : 'text-base sm:text-xl text-slate-800'
          }`}
        >
          {currentLevel.question}
        </p>
      </div>

      {/* Main Interactive Canvas */}
      <div className="w-full">
        <InteractiveCanvas
          key={`${zone.id}_${activeTab}_${currentLevel.id}`}
          level={currentLevel}
          isTimo={activeTab === 'timo'}
          onComplete={handleLevelCompleted}
          onAnswerStatus={setLastAnswerStatus}
        />
      </div>


      {/* Hint Accordion */}
      {!isCompletedCurrent && currentLevel.hint && (
        <div className="mt-1 flex flex-col items-center">
          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setShowHint(!showHint);
            }}
            className="text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer py-0.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>{showHint ? 'Ẩn gợi ý' : 'Gợi ý giải'}</span>
          </button>

          {showHint && (
            <div className="mt-1 p-2 bg-amber-50 border border-amber-300 rounded-xl text-xs font-bold text-amber-900 animate-pop text-center max-w-md">
              💡 {currentLevel.hint}
            </div>
          )}
        </div>
      )}

      {/* Main Question Navigation Bar (Luôn hiển thị: Câu trước, Vị trí câu, Câu tiếp theo) */}
      <div className="mt-3.5 pt-2.5 border-t border-amber-200/80 flex items-center justify-between gap-2 w-full max-w-md mx-auto">
        <button
          type="button"
          onClick={handlePrev}
          disabled={levelIndex === 0}
          className={`flex items-center gap-1 px-3.5 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all btn-kid-3d ${
            levelIndex === 0
              ? 'opacity-35 bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 shadow-xs cursor-pointer active:scale-95'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Câu trước</span>
        </button>

        <div className="flex items-center gap-1.5 bg-amber-100/90 border border-amber-300 px-3 py-1.5 rounded-xl text-amber-950 font-black text-xs sm:text-sm shadow-2xs">
          <span>Câu</span>
          <span className="text-rose-600 font-extrabold text-sm sm:text-base">{levelIndex + 1}</span>
          <span className="text-slate-400">/</span>
          <span>{currentList.length}</span>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-md btn-kid-3d cursor-pointer active:scale-95 ${
            isCompletedCurrent
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-2 border-emerald-600 animate-bounce ring-4 ring-emerald-200'
              : 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 text-amber-950 border-2 border-amber-500'
          }`}
        >
          <span>{levelIndex < currentList.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành 🎉'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Pet Companion */}
      <FloatingPetCompanion
        pet={currentPet}
        lastAnswerStatus={lastAnswerStatus}
        hint={currentLevel.hint}
        onFeed={() => onAddStars(1)}
      />
    </div>
  );
}

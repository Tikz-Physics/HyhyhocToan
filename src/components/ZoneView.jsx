import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';
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

  const speakCurrent = () => {
    soundManager.speak(currentLevel.question);
  };

  return (
    <div className="max-w-xl mx-auto p-1.5 sm:p-3 pb-8 flex flex-col justify-start">
      {/* 1-Line Top Navigation: Back + Tabs + Progress Dots + Read Button */}
      <div className="flex items-center justify-between gap-1.5 mb-1.5">
        <button
          type="button"
          onClick={() => {
            soundManager.playPop();
            soundManager.stopSpeaking();
            onBack();
          }}
          className="flex items-center gap-1 bg-white border border-slate-300 active:scale-95 text-slate-700 font-bold px-2 py-1 rounded-xl shadow-2xs text-xs btn-kid-3d cursor-pointer flex-shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
          <span>Về</span>
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

        {/* Re-read speaker button */}
        <button
          type="button"
          onClick={speakCurrent}
          title="Đọc lại đề bài"
          className="flex items-center gap-1 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-2 py-1 rounded-xl font-black text-xs btn-kid-3d shadow-2xs flex-shrink-0 cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
          <span className="hidden xs:inline">Đọc đề</span>
        </button>
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
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-2.5 mb-1.5 text-center shadow-xs">
        <p className="text-base sm:text-xl font-black text-slate-800 leading-snug">
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

      {/* Success Next Button */}
      {isCompletedCurrent && (
        <div className="mt-2 p-2.5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950 flex items-center justify-between gap-2 animate-pop">
          <span className="font-black text-xs sm:text-sm flex items-center gap-1">
            <span>🎉 Giỏi quá!</span>
          </span>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 text-amber-950 font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md btn-kid-3d cursor-pointer"
          >
            <span>{levelIndex < currentList.length - 1 ? 'Câu kế tiếp' : 'Xong bài!'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

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

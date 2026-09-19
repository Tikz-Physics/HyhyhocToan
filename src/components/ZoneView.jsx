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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastAnswerStatus, setLastAnswerStatus] = useState('idle');

  const currentPet = getPetStage(completedTasks.length);

  const currentList = activeTab === 'basic' ? zone.basicLevels : zone.timoChallenges;
  const currentLevel = currentList[levelIndex] || currentList[0];

  // Listen to speech status for speech bubble
  useEffect(() => {
    const unsub = soundManager.onSpeechChange(({ isSpeaking }) => {
      setIsSpeaking(isSpeaking);
    });
    return unsub;
  }, []);

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
    <div className="max-w-4xl mx-auto p-3 sm:p-6 pb-28 sm:pb-20 relative">
      {/* Top navigation bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-4">
        <button
          onClick={() => {
            soundManager.playPop();
            soundManager.stopSpeaking();
            onBack();
          }}
          className="flex items-center gap-1.5 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-sm text-xs sm:text-base btn-kid-3d"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
          <span>Quay lại</span>
        </button>

        {/* Tab switch: Học Trực Quan vs Thử Thách Timo */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border-2 border-slate-200">
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveTab('basic');
              setLevelIndex(0);
              setIsCompletedCurrent(false);
              setShowHint(false);
              setLastAnswerStatus('idle');
            }}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
              activeTab === 'basic'
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🎈 Trực Quan</span>
            <span className="bg-white/80 px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px]">
              {zone.basicLevels.length}
            </span>
          </button>

          <button
            onClick={() => {
              soundManager.playFanfare();
              setActiveTab('timo');
              setLevelIndex(0);
              setIsCompletedCurrent(false);
              setShowHint(false);
              setLastAnswerStatus('idle');
            }}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
              activeTab === 'timo'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                : 'text-blue-700 hover:text-blue-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Thử Thách Timo</span>
            <span className="bg-white/20 px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px]">
              {zone.timoChallenges.length}
            </span>
          </button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
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
              className={`h-3.5 rounded-full transition-all cursor-pointer ${
                isCurrent
                  ? 'w-10 bg-amber-500 ring-2 ring-amber-300'
                  : isDone
                  ? 'w-3.5 bg-emerald-500'
                  : 'w-3.5 bg-slate-200'
              }`}
            />
          );
        })}
      </div>

      {/* Main Interactive Game Card */}
      <div className="bg-white rounded-3xl border-4 border-amber-300 shadow-xl p-4 sm:p-7 relative overflow-hidden">
        {/* Card Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{zone.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-extrabold text-slate-800">
                  {currentLevel.title}
                </h2>
                {activeTab === 'timo' && (
                  <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {currentLevel.badge || 'Timo'}
                  </span>
                )}
              </div>
              <p className="text-xs font-semibold text-slate-400">
                Bài {levelIndex + 1} / {currentList.length}
              </p>
            </div>
          </div>

          <button
            onClick={speakCurrent}
            className="flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 active:bg-amber-300 text-amber-900 border-2 border-amber-300 px-3.5 py-2 rounded-2xl font-black text-xs sm:text-sm btn-kid-3d shadow-sm"
          >
            <Volume2 className="w-4 h-4 text-amber-700 animate-pulse" />
            <span>Đọc lại đề</span>
          </button>
        </div>

        {/* Question Text Box with Speaking Bubble */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-4 mb-4 text-center relative shadow-sm">
          <p className="text-lg sm:text-2xl font-black text-slate-800 leading-relaxed">
            {currentLevel.question}
          </p>

          {/* Teacher Voice Reading Speech Bubble Indicator */}
          {isSpeaking && (
            <div className="mt-2 inline-flex items-center gap-2 bg-white/90 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold text-amber-900 shadow-sm animate-pop">
              <span className="animate-wiggle">{currentPet.icon}</span>
              <span>Đang đọc tiếng Việt...</span>
              <span className="flex gap-0.5">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce delay-200" />
              </span>
            </div>
          )}
        </div>

        {/* DIRECT INTERACTIVE CANVAS (NO ABCD BUTTONS!) */}
        <div className="my-4">
          <InteractiveCanvas
            key={`${zone.id}_${activeTab}_${currentLevel.id}`}
            level={currentLevel}
            isTimo={activeTab === 'timo'}
            onComplete={handleLevelCompleted}
            onAnswerStatus={setLastAnswerStatus}
          />
        </div>

        {/* Success Banner when finished */}
        {isCompletedCurrent && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3 animate-pop">
            <div className="flex items-center gap-3">
              <div className="text-4xl animate-bounce">🎉</div>
              <div>
                <h4 className="font-black text-base sm:text-lg">
                  Bé giỏi quá! Đã hoàn thành bài này rồi!
                </h4>
                <p className="text-xs sm:text-sm font-bold text-emerald-800">
                  {currentLevel.explanation || 'Bé nhận thêm sao thưởng vào hũ sao! ⭐'}
                </p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 text-amber-950 font-black text-base sm:text-lg px-7 py-3.5 rounded-2xl shadow-xl ring-4 ring-amber-200 btn-kid-3d"
            >
              <span>{levelIndex < currentList.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành bài!'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Hint toggle */}
        {!isCompletedCurrent && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                soundManager.playPop();
                setShowHint(!showHint);
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>{showHint ? 'Ẩn gợi ý' : `Bé cần gợi ý của bạn ${currentPet.name}?`}</span>
            </button>
          </div>
        )}

        {showHint && !isCompletedCurrent && (
          <div className="mt-2 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm font-semibold text-amber-900 animate-pop">
            {currentPet.icon} <strong>Gợi ý:</strong> {currentLevel.hint}
          </div>
        )}
      </div>

      {/* Floating Pet Companion that follows child throughout the lesson */}
      <FloatingPetCompanion
        pet={currentPet}
        lastAnswerStatus={lastAnswerStatus}
        hint={currentLevel.hint}
        onFeed={() => onAddStars(1)}
      />
    </div>
  );
}

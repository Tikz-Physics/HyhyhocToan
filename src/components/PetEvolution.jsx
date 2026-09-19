import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Zap,
  Sparkles,
  Volume2,
  Wand2,
  Info,
  X,
  Lock,
} from 'lucide-react';
import { soundManager } from '../utils/soundManager';
import { PET_STAGES, getPetStage } from '../data/petData';

export default function PetEvolution({ completedTasks = [] }) {
  const completedCount = completedTasks.length;
  const currentStage = getPetStage(completedCount);
  const nextStageIndex = PET_STAGES.findIndex((s) => s.stage === currentStage.stage) + 1;
  const nextStage = PET_STAGES[nextStageIndex] || null;

  const [isWiggling, setIsWiggling] = useState(false);
  const [isFeeding, setIsFeeding] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [floatingHeart, setFloatingHeart] = useState(false);
  const [showCodex, setShowCodex] = useState(false);
  const [celebratingStage, setCelebratingStage] = useState(null);
  const [activeSkillNotice, setActiveSkillNotice] = useState(null);

  // Trigger celebration modal when pet reaches a higher stage
  useEffect(() => {
    const savedStage = Number(localStorage.getItem('toan_lop1_pet_saved_stage') || 1);
    if (currentStage.stage > savedStage) {
      localStorage.setItem('toan_lop1_pet_saved_stage', String(currentStage.stage));
      const timer = setTimeout(() => {
        setCelebratingStage(currentStage);
        soundManager.playFanfare();
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.5 },
        });
      }, 200);
      return () => clearTimeout(timer);
    } else if (currentStage.stage < savedStage) {
      localStorage.setItem('toan_lop1_pet_saved_stage', String(currentStage.stage));
    }
  }, [currentStage.stage, currentStage]);

  // Action 1: Pet touch / cuddle
  const handlePetTouch = () => {
    soundManager.playPop(1.3);
    setIsWiggling(true);
    setFloatingHeart(true);
    setTimeout(() => setIsWiggling(false), 600);
    setTimeout(() => setFloatingHeart(false), 1200);

    const cheers = currentStage.cheers || [
      'Bé giỏi lắm, cùng tớ làm thêm bài nữa nhé! ⭐',
      'Toán học thật là vui và kỳ diệu! 🎈',
      'Cố lên bạn nhỏ dũng cảm của tớ! 💖',
    ];
    const randomCheer = cheers[Math.floor(Math.random() * cheers.length)];
    setCustomMessage(randomCheer);
  };

  // Action 2: Feed sweet apple
  const handleFeedApple = () => {
    if (isFeeding) return;
    setIsFeeding(true);
    soundManager.playPop(1.6);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#ef4444', '#f59e0b', '#ec4899', '#10b981'],
    });

    setCustomMessage(`Bé vừa thưởng cho bạn ${currentStage.name} một quả táo ngọt giòn rụm! 🍎 Tớ tràn đầy năng lượng! ✨`);
    setTimeout(() => setIsFeeding(false), 800);
  };

  // Action 3: Speak with natural Vietnamese voice
  const handleSpeakVoice = () => {
    soundManager.playClick();
    const voiceText = currentStage.spokenVoice || currentStage.quote;
    setCustomMessage(`🗣️ "${voiceText}"`);
    soundManager.speak(voiceText);
  };

  // Action 4: Cast special magic skill
  const handleCastSkill = () => {
    soundManager.playFanfare();
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#6366f1', '#3b82f6', '#ec4899', '#f59e0b'],
    });
    setActiveSkillNotice({
      name: currentStage.skillName,
      icon: currentStage.skillIcon,
      desc: currentStage.skillDesc,
    });
    setCustomMessage(`✨ Phép thuật kích hoạt: [${currentStage.skillName}]! ${currentStage.skillDesc}`);
    setTimeout(() => setActiveSkillNotice(null), 4000);
  };

  // Progress to next stage calculation
  let progressPercent = 100;
  let remainingTasks = 0;
  if (nextStage) {
    const totalSpan = nextStage.minTasks - currentStage.minTasks;
    const currentProgress = completedCount - currentStage.minTasks;
    progressPercent = Math.min(100, Math.round((currentProgress / totalSpan) * 100));
    remainingTasks = nextStage.minTasks - completedCount;
  }

  return (
    <div className="relative bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 rounded-3xl p-4 sm:p-6 border-4 border-amber-300 shadow-xl text-amber-950 overflow-hidden">
      {/* Background Decorative Ambient Stars */}
      <div className="absolute top-2 right-6 text-3xl opacity-20 pointer-events-none select-none animate-bounce-slow">
        ⭐
      </div>
      <div className="absolute bottom-2 left-10 text-2xl opacity-20 pointer-events-none select-none animate-wiggle">
        ✨
      </div>

      {/* TOP ROW: Mascot Sphere + Bio + 3 Interactive Action Buttons */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 relative z-10">
        {/* Left: Interactive Pet Mascot in Glowing Sphere */}
        <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
          <div className="relative flex-shrink-0">
            {/* Pulsing Aura */}
            <div
              className={`absolute -inset-2 bg-gradient-to-r ${currentStage.aura} rounded-full blur-md opacity-75 animate-pulse`}
            />

            {/* Mascot Button */}
            <button
              type="button"
              onClick={handlePetTouch}
              title={currentStage.actionText}
              className={`relative w-22 h-22 sm:w-26 sm:h-26 rounded-3xl bg-white/95 border-4 border-amber-500 shadow-xl flex flex-col items-center justify-center text-5xl sm:text-6xl cursor-pointer transition-all duration-200 active:scale-90 hover:scale-105 ${
                isWiggling
                  ? 'animate-wiggle scale-110'
                  : isFeeding
                  ? 'animate-bounce scale-110'
                  : 'animate-bounce-slow'
              }`}
            >
              <span>{currentStage.icon}</span>
              <span className="absolute -top-2.5 -right-2.5 bg-rose-500 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-md border-2 border-white">
                Cấp {currentStage.stage}
              </span>

              {/* Floating Hearts when touched */}
              {floatingHeart && (
                <span className="absolute -top-6 text-2xl animate-pop pointer-events-none">
                  💖
                </span>
              )}
            </button>
          </div>

          {/* Pet Bio & Speech Bubble */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight">
                {currentStage.name}
              </h3>
              <span className="bg-white/90 text-amber-950 border border-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                {currentStage.badge}
              </span>
            </div>

            {/* Dynamic Dialog Bubble */}
            <div className="bg-white/90 backdrop-blur-sm border-2 border-amber-300 rounded-2xl p-2.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-amber-950 shadow-sm max-w-md">
              <p className="italic leading-relaxed">
                "{customMessage || currentStage.quote}"
              </p>
            </div>

            {/* Quick Skill Tag */}
            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-extrabold text-amber-900">
              <span className="text-sm">{currentStage.skillIcon}</span>
              <span>Tuyệt chiêu: <strong>{currentStage.skillName}</strong></span>
              <span className="opacity-75 hidden sm:inline">• {currentStage.skillDesc}</span>
            </div>
          </div>
        </div>

        {/* Right: 4 Playful Interactive Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full lg:w-auto">
          {/* Feed Apple Button */}
          <button
            type="button"
            onClick={handleFeedApple}
            className="flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-black text-xs sm:text-sm px-3.5 py-2.5 rounded-2xl shadow-md border-2 border-rose-300 btn-kid-3d transition-transform"
            title="Cho thú cưng ăn táo để nạp năng lượng"
          >
            <span className="text-lg">🍎</span>
            <span>Cho Ăn Táo</span>
          </button>

          {/* Voice Talk Button */}
          <button
            type="button"
            onClick={handleSpeakVoice}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black text-xs sm:text-sm px-3.5 py-2.5 rounded-2xl shadow-md border-2 border-indigo-300 btn-kid-3d transition-transform"
            title="Bấm để nghe bạn thú cưng cất giọng nói tiếng Việt"
          >
            <Volume2 className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Trò Chuyện</span>
          </button>

          {/* Cast Magic Skill Button */}
          <button
            type="button"
            onClick={handleCastSkill}
            className="flex items-center gap-1.5 bg-amber-100 hover:bg-white active:scale-95 text-amber-950 font-black text-xs sm:text-sm px-3.5 py-2.5 rounded-2xl shadow-md border-2 border-amber-400 btn-kid-3d transition-transform"
            title="Kích hoạt hiệu ứng phép thuật toán học"
          >
            <Wand2 className="w-4 h-4 text-purple-600 animate-wiggle" />
            <span>Phép Thuật</span>
          </button>

          {/* View Codex Button */}
          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setShowCodex(true);
            }}
            className="flex items-center gap-1 bg-white/75 hover:bg-white active:scale-95 text-amber-900 font-extrabold text-xs px-2.5 py-2 rounded-2xl border border-amber-400 transition-all"
            title="Xem toàn cảnh 5 cấp tiến hóa"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Lộ Trình</span>
          </button>
        </div>
      </div>

      {/* Active Skill Floating Banner Notification */}
      {activeSkillNotice && (
        <div className="mt-3 bg-white border-2 border-purple-400 p-2.5 rounded-2xl shadow-lg flex items-center gap-3 animate-pop">
          <div className="text-3xl">{activeSkillNotice.icon}</div>
          <div>
            <div className="text-xs sm:text-sm font-black text-purple-950">
              Kích hoạt: {activeSkillNotice.name}
            </div>
            <div className="text-[11px] font-bold text-slate-600">
              {activeSkillNotice.desc}
            </div>
          </div>
        </div>
      )}

      {/* MIDDLE: 5-Stage Evolution Timeline Ladder */}
      <div className="mt-5 pt-4 border-t-2 border-amber-500/40">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-900 animate-wiggle" />
            <span>Hành Trình 5 Cấp Tiến Hóa Thú Cưng</span>
          </span>
          <span className="text-xs font-bold text-amber-900 bg-white/70 px-2.5 py-0.5 rounded-full border border-amber-300">
            {completedCount} bài đã hoàn thành
          </span>
        </div>

        {/* 5 Stages Grid with Connectors */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-3 py-1">
          {PET_STAGES.map((stg) => {
            const isReached = completedCount >= stg.minTasks;
            const isCurrent = currentStage.stage === stg.stage;

            let cardStyle = 'bg-white/40 border-slate-300/60 opacity-60 text-slate-600';
            if (isCurrent) {
              cardStyle = 'bg-white border-amber-500 ring-4 ring-amber-200 text-amber-950 shadow-md scale-102';
            } else if (isReached) {
              cardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs';
            }

            return (
              <div
                key={stg.stage}
                onClick={() => {
                  soundManager.playPop();
                  setShowCodex(true);
                }}
                className={`relative rounded-2xl border-2 p-1.5 sm:p-2.5 flex flex-col items-center justify-between text-center transition-all cursor-pointer ${cardStyle}`}
              >
                {/* Stage Number Badge */}
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase opacity-75">
                    Cấp {stg.stage}
                  </span>
                  {isReached && !isCurrent && (
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-black">
                      ✓
                    </span>
                  )}
                  {isCurrent && (
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[9px] font-black animate-ping">
                      ★
                    </span>
                  )}
                  {!isReached && (
                    <Lock className="w-3 h-3 text-slate-400" />
                  )}
                </div>

                {/* Big Mascot Icon */}
                <div className={`text-2xl sm:text-4xl my-0.5 ${isCurrent ? 'animate-bounce-slow' : ''}`}>
                  {stg.icon}
                </div>

                {/* Stage Name */}
                <div className="text-[10px] sm:text-xs font-black truncate w-full mt-0.5">
                  {stg.name}
                </div>

                {/* Target tasks label */}
                <div className="text-[9px] sm:text-[10px] font-bold opacity-80 mt-0.5">
                  {stg.minTasks === 0 ? 'Khởi đầu' : `${stg.minTasks} bài`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM: Evolution Energy Bar */}
      <div className="mt-3.5 bg-white/95 rounded-2xl p-3 border-2 border-amber-500 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Zap className="w-5 h-5 text-amber-600 fill-amber-500 animate-pulse flex-shrink-0" />
          <div>
            <div className="text-xs sm:text-sm font-black text-amber-950">
              Năng Lượng Tiến Hóa Lên Cấp Kế Tiếp
            </div>
            <div className="text-[11px] font-bold text-slate-500">
              {nextStage
                ? `Cần thêm ${remainingTasks} bài tập để tiến hóa thành ${nextStage.name}`
                : 'Bé đã đưa bạn thú cưng đạt cấp độ Tối Thượng Rồng Bay! 🏆'}
            </div>
          </div>
        </div>

        {/* Progress bar container */}
        <div className="w-full sm:w-64 flex flex-col gap-1">
          <div className="flex items-center justify-between text-[11px] font-black">
            <span className="text-emerald-700">{progressPercent}%</span>
            <span className="text-rose-600">
              {nextStage ? `Còn ${remainingTasks} bài` : 'Hoàn Hảo!'}
            </span>
          </div>

          <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-500 rounded-full transition-all duration-700 shadow"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* --- MODAL 1: VIỆN NGHIÊN CỨU TIẾN HÓA THÚ CƯNG (Evolution Codex) --- */}
      {showCodex && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-pop">
          <div className="bg-white rounded-3xl border-4 border-amber-400 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-800">
                    Viện Nghiên Cứu Tiến Hóa Thú Cưng
                  </h3>
                  <p className="text-xs font-bold text-slate-500">
                    Bí kíp 5 dạng tiến hóa & tuyệt chiêu phép thuật toán học
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowCodex(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 5 Stages Detailed Cards */}
            <div className="space-y-3">
              {PET_STAGES.map((stg) => {
                const isReached = completedCount >= stg.minTasks;
                const isCurrent = currentStage.stage === stg.stage;

                return (
                  <div
                    key={stg.stage}
                    className={`rounded-2xl p-3.5 border-2 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      isCurrent
                        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300'
                        : isReached
                        ? 'bg-emerald-50/70 border-emerald-300'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-white border-2 border-amber-300 shadow-sm flex items-center justify-center text-3xl">
                        {stg.icon}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-amber-900 bg-amber-200 px-2 py-0.5 rounded-md">
                            Cấp {stg.stage}
                          </span>
                          <h4 className="text-base font-black text-slate-800">
                            {stg.name}
                          </h4>
                          {isCurrent && (
                            <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                              Đang Nuôi Dưỡng
                            </span>
                          )}
                        </div>

                        <p className="text-xs font-semibold text-slate-600 mt-1 italic">
                          "{stg.quote}"
                        </p>

                        <div className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-purple-700">
                          <span>{stg.skillIcon}</span>
                          <span>Tuyệt chiêu: <strong>{stg.skillName}</strong> - {stg.skillDesc}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right self-end sm:self-center flex-shrink-0">
                      <span className="text-xs font-black text-slate-700 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-2xs block">
                        {stg.minTasks === 0 ? 'Mở đầu (0 bài)' : `Đạt ${stg.minTasks} bài tập`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer Close Button */}
            <div className="mt-5 pt-3 border-t flex justify-end">
              <button
                type="button"
                onClick={() => setShowCodex(false)}
                className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-black px-5 py-2 rounded-2xl shadow-md btn-kid-3d"
              >
                Đã Hiểu, Cùng Nuôi Pet Nào! 🎈
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: MÀN HÌNH CHÚC MỪNG TIẾN HÓA (Evolution Celebration) --- */}
      {celebratingStage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-pop">
          <div className="bg-gradient-to-b from-amber-200 via-orange-100 to-yellow-100 rounded-3xl border-6 border-amber-400 shadow-2xl max-w-md w-full p-6 text-center text-amber-950 relative overflow-hidden">
            <div className="text-6xl my-2 animate-bounce">🎉</div>

            <div className="bg-rose-500 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider inline-block mb-2 shadow-sm">
              ✨ TIẾN HÓA THÀNH CÔNG! ✨
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-amber-950 mb-1">
              {celebratingStage.name}
            </h2>
            <p className="text-xs font-bold text-emerald-800 mb-4">
              {celebratingStage.badge}
            </p>

            {/* Huge Mascot Reveal */}
            <div className="w-28 h-28 mx-auto rounded-3xl bg-white border-4 border-amber-400 shadow-xl flex items-center justify-center text-7xl my-3 animate-wiggle">
              {celebratingStage.icon}
            </div>

            <div className="bg-white/90 rounded-2xl p-3 border border-amber-300 text-xs sm:text-sm font-bold text-slate-800 my-3">
              <p className="italic mb-2">"{celebratingStage.quote}"</p>
              <div className="text-purple-700 font-extrabold flex items-center justify-center gap-1.5">
                <span>{celebratingStage.skillIcon}</span>
                <span>Mở khóa tuyệt chiêu: <strong>{celebratingStage.skillName}</strong>!</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                soundManager.playPop();
                setCelebratingStage(null);
              }}
              className="mt-3 w-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black py-3 rounded-2xl shadow-xl text-base btn-kid-3d"
            >
              Cảm Ơn Bạn Nhỏ! Tiếp Tục Nào! 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

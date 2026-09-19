import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Lightbulb, Music, X } from 'lucide-react';
import { soundManager } from '../utils/soundManager';

export default function FloatingPetCompanion({
  pet,
  lastAnswerStatus = 'idle', // 'idle', 'correct', 'wrong'
  hint = '',
  onFeed = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState('idle'); // 'idle', 'happy', 'encouraging', 'eating', 'dancing'
  const [speechBubble, setSpeechBubble] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const speechTimerRef = useRef(null);

  // Default pet fallback
  const currentPet = pet || {
    stage: 1,
    name: 'Bé Rồng Con',
    icon: '🐣',
    badge: 'Bạn Đồng Hành',
    quote: 'Cùng học toán thật vui nhé!',
    spokenVoice: 'Chào bé yêu! Tớ là bạn đồng hành cùng bé học toán đây!',
    cheers: ['Bé giỏi quá!', 'Tuyệt vời lắm bé ơi!'],
  };

  const showSpeech = (text, duration = 4000) => {
    if (speechTimerRef.current) clearTimeout(speechTimerRef.current);
    setSpeechBubble(text);
    if (duration > 0) {
      speechTimerRef.current = setTimeout(() => {
        setSpeechBubble('');
      }, duration);
    }
  };

  // React to learning answer status changes
  useEffect(() => {
    if (lastAnswerStatus === 'idle') return;

    const reactionTimer = setTimeout(() => {
      if (lastAnswerStatus === 'correct') {
        setMood('happy');
        setShowHearts(true);
        const cheers = currentPet.cheers && currentPet.cheers.length > 0
          ? currentPet.cheers
          : ['Hoan hô bé! Bé làm đúng rồi! 🎉', 'Bé tính nhanh như chớp! ⭐', 'Tuyệt đỉnh luôn bé ơi! 💖'];
        const cheer = cheers[Math.floor(Math.random() * cheers.length)];
        showSpeech(cheer, 4500);

        setTimeout(() => {
          setMood('idle');
          setShowHearts(false);
        }, 2500);
      } else if (lastAnswerStatus === 'wrong') {
        setMood('encouraging');
        const encourages = [
          'Không sao đâu bé, bé thử lại một lần nữa nhé! 💪',
          'Bé đếm lại một chút xíu là đúng ngay nè! 🌟',
          'Cố lên bé ơi, bạn thú cưng luôn tin ở bé! ✨',
        ];
        const enc = encourages[Math.floor(Math.random() * encourages.length)];
        showSpeech(enc, 4500);

        setTimeout(() => {
          setMood('idle');
        }, 3000);
      }
    }, 10);

    return () => clearTimeout(reactionTimer);
  }, [lastAnswerStatus, currentPet.cheers]);

  // Action 1: Feed sweet apple
  const handleFeedApple = (e) => {
    e?.stopPropagation();
    soundManager.playPop(1.5);
    setMood('eating');
    setShowHearts(true);
    showSpeech('Măm măm... Táo ngọt giòn rụm! Tớ no căng bụng rồi, cảm ơn bé yêu! 🍎✨', 3500);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { x: 0.88, y: 0.85 },
      colors: ['#ef4444', '#f59e0b', '#ec4899'],
    });

    if (onFeed) onFeed();

    setTimeout(() => {
      setMood('idle');
      setShowHearts(false);
    }, 1500);
  };

  // Action 2: Chat & Speak Vietnamese voice
  const handleTalk = (e) => {
    e?.stopPropagation();
    soundManager.playClick();
    setMood('happy');
    const voiceText = currentPet.spokenVoice || currentPet.quote;
    showSpeech(`🗣️ "${voiceText}"`, 5000);
    soundManager.speak(voiceText);

    setTimeout(() => {
      setMood('idle');
    }, 2000);
  };

  // Action 3: Hint Clue (whisper hint to the child)
  const handleAskHint = (e) => {
    e?.stopPropagation();
    soundManager.playPop(1.1);
    setMood('thinking');

    const tip = hint || currentPet.skillDesc || 'Bé hãy quan sát thật kỹ các hình và đếm từng món đồ một nhé!';
    showSpeech(`💡 Mách nước: "${tip}"`, 6000);
    soundManager.speak(tip);

    setTimeout(() => {
      setMood('idle');
    }, 2500);
  };

  // Action 4: Dance and cheer
  const handleDance = (e) => {
    e?.stopPropagation();
    soundManager.playFanfare();
    setMood('dancing');
    setShowHearts(true);
    showSpeech('Lá la la ~ Thú cưng nhảy múa cùng bé yêu học toán vui quá! 🪅🎶', 4000);

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { x: 0.88, y: 0.85 },
      colors: ['#a855f7', '#ec4899', '#3b82f6', '#eab308'],
    });

    setTimeout(() => {
      setMood('idle');
      setShowHearts(false);
    }, 2000);
  };

  // If minimized, display a small floating toggle bubble
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40 animate-pop">
        <button
          type="button"
          onClick={() => {
            soundManager.playPop();
            setIsMinimized(false);
          }}
          title="Gọi thú cưng đồng hành"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-3 border-white shadow-xl flex items-center justify-center text-3xl cursor-pointer hover:scale-110 active:scale-95 transition-transform animate-bounce-slow"
        >
          <span>{currentPet.icon}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none select-none">
      {/* Dynamic Floating Speech Bubble */}
      {speechBubble && (
        <div className="pointer-events-auto mb-2 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md border-3 border-amber-400 rounded-3xl p-3 sm:p-3.5 shadow-2xl animate-pop relative">
          <button
            type="button"
            onClick={() => setSpeechBubble('')}
            className="absolute -top-2 -left-2 w-6 h-6 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-full flex items-center justify-center text-slate-600 text-xs font-bold"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2">
            <span className="text-xl flex-shrink-0 animate-bounce">
              {mood === 'happy' ? '🎉' : mood === 'eating' ? '🍎' : mood === 'dancing' ? '🎶' : '💬'}
            </span>
            <p className="text-xs sm:text-sm font-black text-amber-950 leading-snug">
              {speechBubble}
            </p>
          </div>
          {/* Speech bubble arrow pointer */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-3 border-b-3 border-amber-400 transform rotate-45" />
        </div>
      )}

      {/* Radial / Pop-up Quick Interactive 4-Button Menu */}
      {isOpen && (
        <div className="pointer-events-auto mb-2.5 bg-white/95 backdrop-blur-md border-3 border-amber-300 rounded-3xl p-2 sm:p-2.5 shadow-2xl flex flex-col gap-1.5 animate-pop">
          <div className="flex items-center justify-between px-2 pb-1 border-b border-amber-100 text-[11px] font-black text-amber-950">
            <span>Tương tác cùng {currentPet.name}</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 min-w-[210px]">
            {/* 1. Feed Apple */}
            <button
              type="button"
              onClick={handleFeedApple}
              className="flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 font-extrabold text-xs px-2.5 py-2 rounded-2xl transition-transform active:scale-95 shadow-xs btn-kid-3d"
            >
              <span className="text-lg">🍎</span>
              <span>Cho Ăn Táo</span>
            </button>

            {/* 2. Chat Voice */}
            <button
              type="button"
              onClick={handleTalk}
              className="flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-800 font-extrabold text-xs px-2.5 py-2 rounded-2xl transition-transform active:scale-95 shadow-xs btn-kid-3d"
            >
              <Volume2 className="w-4 h-4 text-indigo-600" />
              <span>Trò Chuyện</span>
            </button>

            {/* 3. Hint Clue */}
            <button
              type="button"
              onClick={handleAskHint}
              className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-extrabold text-xs px-2.5 py-2 rounded-2xl transition-transform active:scale-95 shadow-xs btn-kid-3d"
            >
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Mách Nước</span>
            </button>

            {/* 4. Dance */}
            <button
              type="button"
              onClick={handleDance}
              className="flex items-center gap-1.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs px-2.5 py-2 rounded-2xl transition-transform active:scale-95 shadow-xs btn-kid-3d"
            >
              <Music className="w-4 h-4 text-purple-600" />
              <span>Múa Vui</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Mascot Floating Button */}
      <div className="pointer-events-auto relative flex items-center gap-2">
        {/* Minimize Button */}
        <button
          type="button"
          onClick={() => {
            soundManager.playPop();
            setIsMinimized(true);
          }}
          title="Thu nhỏ thú cưng"
          className="w-7 h-7 rounded-full bg-white/80 hover:bg-white border border-slate-300 shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-700 text-xs font-bold transition-all opacity-70 hover:opacity-100"
        >
          _
        </button>

        {/* Mascot Avatar Widget */}
        <div className="relative group">
          {/* Pulsing Aura */}
          <div
            className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400 blur-sm opacity-80 transition-all ${
              mood === 'happy' ? 'scale-125 opacity-100' : 'animate-pulse'
            }`}
          />

          {/* Floating Hearts Animation */}
          {showHearts && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 animate-pop pointer-events-none">
              <span className="text-xl animate-bounce">💖</span>
              <span className="text-lg animate-bounce delay-100">✨</span>
            </div>
          )}

          {/* Clickable Pet Mascot Card */}
          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setIsOpen(!isOpen);
              if (!isOpen && !speechBubble) {
                showSpeech(`Bé muốn chơi trò gì cùng ${currentPet.name} nào? 🎈`, 3000);
              }
            }}
            title="Chạm vào tớ để trò chuyện và chơi đùa nhé!"
            className={`relative w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 sm:border-3 border-amber-400 shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 hover:scale-105 ${
              mood === 'happy'
                ? 'animate-bounce scale-110 ring-2 ring-amber-300'
                : mood === 'eating'
                ? 'animate-wiggle scale-105 ring-2 ring-rose-300'
                : mood === 'dancing'
                ? 'animate-wiggle scale-110 ring-2 ring-purple-300'
                : 'animate-bounce-slow'
            }`}
          >
            <span className="text-2xl sm:text-3xl leading-none">{currentPet.icon}</span>

            {/* Stage indicator tag */}
            <span className="absolute -bottom-1.5 bg-rose-500 text-white text-[8px] font-black px-1 rounded-full border border-white shadow-2xs">
              C{currentPet.stage}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

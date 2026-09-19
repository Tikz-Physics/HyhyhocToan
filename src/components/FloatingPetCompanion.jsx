import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Lightbulb, Music, X, Sparkles, Heart } from 'lucide-react';
import { soundManager } from '../utils/soundManager';

const COMPANION_PETS = [
  { id: 'dino', name: 'Khủng Long Dino', icon: '🦖', quote: 'Dino dũng cảm cùng bé vượt qua mọi thử thách!' },
  { id: 'dragon', name: 'Rồng Thần Lửa', icon: '🐲', quote: 'Gầm vang! Rồng Thần mang phép thuật toán học cho bé!' },
  { id: 'chick', name: 'Bé Rồng Con', icon: '🐣', quote: 'Chíp chíp! Cùng nhau hái táo và đếm số nhé!' },
  { id: 'bunny', name: 'Thỏ Trắng', icon: '🐰', quote: 'Thỏ Trắng tai dài lắng nghe từng bài toán của bé!' },
  { id: 'unicorn', name: 'Kỳ Lân Mộng Mơ', icon: '🦄', quote: 'Kỳ lân cầu vồng tỏa ánh sáng lấp lánh diệu kỳ!' },
  { id: 'puppy', name: 'Cún Bắp Vàng', icon: '🐶', quote: 'Gâu gâu! Cún Bắp yêu bé chăm học nhất trên đời!' },
];

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
  const [activeCompanion, setActiveCompanion] = useState(null);
  const speechTimerRef = useRef(null);

  // Position & Draggable State
  const [position, setPosition] = useState(() => {
    if (typeof window === 'undefined') return { x: 280, y: 500 };
    return {
      x: Math.max(16, window.innerWidth - 72),
      y: Math.max(16, window.innerHeight - 110),
    };
  });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, initX: 0, initY: 0, moved: false });

  // Autonomous Wandering Mode (Auto-Roam)
  const [isWandering, setIsWandering] = useState(() => {
    try {
      const saved = localStorage.getItem('hyhyhoctoan_pet_wander');
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });
  const [isHopping, setIsHopping] = useState(false);
  const [facingDirection, setFacingDirection] = useState(1); // 1 = right, -1 = left

  // Effective companion
  const currentPet = activeCompanion || pet || {
    stage: 1,
    name: 'Bé Rồng Con',
    icon: '🐣',
    badge: 'Bạn Đồng Hành',
    quote: 'Cùng học toán thật vui nhé!',
    spokenVoice: 'Chào bé yêu! Tớ là bạn đồng hành cùng bé học toán đây!',
    cheers: ['Bé giỏi quá!', 'Tuyệt vời lắm bé ơi!'],
  };

  // Keep pet inside screen on resize or flip
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.max(10, Math.min(prev.x, window.innerWidth - 68)),
        y: Math.max(10, Math.min(prev.y, window.innerHeight - 68)),
      }));
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

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

  // Autonomous Wandering Effect
  useEffect(() => {
    if (!isWandering || isDragging || isOpen || isMinimized) return;

    const wanderInterval = setInterval(() => {
      if (Math.random() < 0.75) {
        setPosition((prev) => {
          const maxDx = Math.min(140, window.innerWidth * 0.3);
          const maxDy = Math.min(100, window.innerHeight * 0.2);
          const dx = (Math.random() - 0.5) * 2 * maxDx;
          const dy = (Math.random() - 0.5) * 2 * maxDy;

          const nextX = Math.max(16, Math.min(prev.x + dx, window.innerWidth - 72));
          const nextY = Math.max(16, Math.min(prev.y + dy, window.innerHeight - 72));

          setFacingDirection(nextX >= prev.x ? 1 : -1);
          setIsHopping(true);
          setTimeout(() => setIsHopping(false), 1200);

          return { x: nextX, y: nextY };
        });
      }
    }, 6000);

    return () => clearInterval(wanderInterval);
  }, [isWandering, isDragging, isOpen, isMinimized]);

  // Toggle Wandering mode
  const toggleWandering = (e) => {
    e?.stopPropagation();
    soundManager.playPop();
    setIsWandering((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('hyhyhoctoan_pet_wander', String(next));
      } catch {}
      if (next) {
        showSpeech('Tớ sẽ chạy nhảy tung tăng quanh màn hình cùng bé nhé! 🏃💨', 3000);
      } else {
        showSpeech('Tớ sẽ đứng yên tại đây để bé học bài nhé! 📌', 3000);
      }
      return next;
    });
  };

  // Pointer Down Drag Handler
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: position.x,
      initY: position.y,
      moved: false,
    };
    setIsDragging(true);

    const onPointerMove = (moveEvt) => {
      const dx = moveEvt.clientX - dragRef.current.startX;
      const dy = moveEvt.clientY - dragRef.current.startY;
      if (Math.hypot(dx, dy) > 6) {
        dragRef.current.moved = true;
      }
      const newX = Math.max(8, Math.min(dragRef.current.initX + dx, window.innerWidth - 64));
      const newY = Math.max(8, Math.min(dragRef.current.initY + dy, window.innerHeight - 64));
      setPosition({ x: newX, y: newY });
    };

    const onPointerUp = () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      setIsDragging(false);
      if (dragRef.current.moved) {
        soundManager.playPop(1.2);
      } else {
        soundManager.playPop();
        setIsOpen((prev) => !prev);
        if (!isOpen && !speechBubble) {
          showSpeech(`Bé muốn chơi trò gì cùng ${currentPet.name} nào? 🎈`, 3000);
        }
      }
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  // Action: Petting & Caress (Xoa đầu)
  const handlePetHead = (e) => {
    e?.stopPropagation();
    soundManager.playStar();
    setMood('happy');
    setShowHearts(true);
    const petQuotes = [
      'Dạ thích quá! Tớ yêu bé nhiều lắm! 🥰💖',
      'Bé xoa đầu làm tớ thấy ấm áp và hạnh phúc quá! Cảm ơn bé! ✨',
      'Bạn nhỏ ngoan của tớ ơi, tớ luôn ở cạnh cổ vũ bé! ⭐',
      'Bé tính nhanh như chớp, lại còn dịu dàng nữa! 🎈',
    ];
    const q = petQuotes[Math.floor(Math.random() * petQuotes.length)];
    showSpeech(q, 4500);
    soundManager.speak(q);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: {
        x: Math.max(0.1, Math.min(position.x / window.innerWidth, 0.9)),
        y: Math.max(0.1, Math.min(position.y / window.innerHeight, 0.9)),
      },
      colors: ['#ec4899', '#f43f5e', '#fb7185', '#eab308'],
    });

    setTimeout(() => {
      setMood('idle');
      setShowHearts(false);
    }, 2000);
  };

  // Action: Feed Snack Treats (Táo, Kem, Sữa)
  const handleFeedTreat = (treatType, e) => {
    e?.stopPropagation();
    soundManager.playPop(1.5);
    setMood('eating');
    setShowHearts(true);

    if (treatType === 'apple') {
      showSpeech('Măm măm... Táo giòn ngọt lịm! Tớ no căng bụng rồi! 🍎✨', 4000);
      soundManager.speak('Táo đỏ giòn ngọt! Cảm ơn bé yêu!');
    } else if (treatType === 'icecream') {
      showSpeech('Woa kem ốc quế mát lạnh thơm ngon tuyệt đỉnh! 🍦💖', 4000);
      soundManager.speak('Kem ốc quế mát lạnh! Thích mê luôn bé ơi!');
    } else if (treatType === 'milk') {
      showSpeech('Ực ực... Sữa tươi bổ dưỡng giúp tớ cao lớn và thông minh! 🥛💪', 4000);
      soundManager.speak('Sữa tươi thơm ngon! Năng lượng dồi dào rồi!');
    }

    confetti({
      particleCount: 25,
      spread: 50,
      origin: {
        x: Math.max(0.1, Math.min(position.x / window.innerWidth, 0.9)),
        y: Math.max(0.1, Math.min(position.y / window.innerHeight, 0.9)),
      },
      colors: ['#ef4444', '#f59e0b', '#ec4899', '#3b82f6'],
    });

    if (onFeed) onFeed();

    setTimeout(() => {
      setMood('idle');
      setShowHearts(false);
    }, 1800);
  };

  // Action: Intelligent & Encouraging Chat
  const handleTalk = (e) => {
    e?.stopPropagation();
    soundManager.playClick();
    setMood('happy');

    const funTalks = [
      `Chào bé yêu! ${currentPet.name} luôn ở cạnh cổ vũ bé học toán nhé! 🎈`,
      'Bé có biết không? Học toán giúp não bộ chúng mình thông minh như siêu nhân đấy! 🧠✨',
      'Đố bé nhé: 1 cộng 1 bằng mấy? Bằng 2 chú chim hót líu lo! 🐦',
      'Mỗi ngôi sao bé kiếm được là một điều ước kỳ diệu lấp lánh trên bầu trời! ⭐',
      'Bé hãy uống một ngụm nước và hít thở thật sâu rồi cùng tớ làm tiếp nhé! 💧',
    ];
    const voiceText = funTalks[Math.floor(Math.random() * funTalks.length)];
    showSpeech(`🗣️ "${voiceText}"`, 6000);
    soundManager.speak(voiceText);

    setTimeout(() => {
      setMood('idle');
    }, 2500);
  };

  // Action: Hint Clue
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

  // Action: Dance and cheer
  const handleDance = (e) => {
    e?.stopPropagation();
    soundManager.playFanfare();
    setMood('dancing');
    setShowHearts(true);
    showSpeech('Lá la la ~ Thú cưng nhảy múa cùng bé yêu học toán vui quá! 🪅🎶', 4000);

    confetti({
      particleCount: 40,
      spread: 70,
      origin: {
        x: Math.max(0.1, Math.min(position.x / window.innerWidth, 0.9)),
        y: Math.max(0.1, Math.min(position.y / window.innerHeight, 0.9)),
      },
      colors: ['#a855f7', '#ec4899', '#3b82f6', '#eab308'],
    });

    setTimeout(() => {
      setMood('idle');
      setShowHearts(false);
    }, 2000);
  };

  // Action: Quick Companion Switcher
  const handleSwitchCompanion = (companion, e) => {
    e?.stopPropagation();
    soundManager.playFanfare();
    setActiveCompanion(companion);
    setShowHearts(true);
    showSpeech(`✨ Úm ba la! Tớ là ${companion.name}! Chúng mình cùng học toán nhé! 🎉`, 4000);
    soundManager.speak(`${companion.name} xin chào bé yêu!`);

    confetti({
      particleCount: 35,
      spread: 65,
      origin: {
        x: Math.max(0.1, Math.min(position.x / window.innerWidth, 0.9)),
        y: Math.max(0.1, Math.min(position.y / window.innerHeight, 0.9)),
      },
      colors: ['#3b82f6', '#a855f7', '#f59e0b'],
    });

    setTimeout(() => {
      setShowHearts(false);
    }, 2000);
  };

  // If minimized, display a small floating toggle bubble
  if (isMinimized) {
    return (
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="fixed z-40 animate-pop"
      >
        <button
          type="button"
          onClick={() => {
            soundManager.playPop();
            setIsMinimized(false);
          }}
          title="Gọi thú cưng đồng hành"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-3 border-white shadow-xl flex items-center justify-center text-2xl sm:text-3xl cursor-pointer hover:scale-110 active:scale-95 transition-transform animate-bounce-slow"
        >
          <span>{currentPet.icon}</span>
        </button>
      </div>
    );
  }

  // Dynamic Alignment for speech bubble and menu
  const isRightHalf = position.x > (typeof window !== 'undefined' ? window.innerWidth / 2 : 200);
  const isTopHalf = position.y < 250;

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: isDragging
          ? 'none'
          : 'left 1.1s cubic-bezier(0.34, 1.56, 0.64, 1), top 1.1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        touchAction: 'none',
      }}
      className="fixed z-40 select-none flex flex-col items-center"
    >
      {/* Speech Bubble */}
      {speechBubble && (
        <div
          className={`absolute ${
            isTopHalf ? 'top-full mt-2' : 'bottom-full mb-2'
          } ${isRightHalf ? 'right-0' : 'left-0'} z-50 w-64 sm:w-72 bg-white/95 backdrop-blur-md border-3 border-amber-400 rounded-3xl p-3 shadow-2xl animate-pop`}
        >
          <button
            type="button"
            onClick={() => setSpeechBubble('')}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-full flex items-center justify-center text-slate-600 text-xs font-bold"
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
        </div>
      )}

      {/* Interactive Menu with Petting, Snacks & Companion Switching */}
      {isOpen && (
        <div
          className={`absolute ${
            isTopHalf ? 'top-full mt-2' : 'bottom-full mb-2'
          } ${isRightHalf ? 'right-0' : 'left-0'} z-50 bg-white/95 backdrop-blur-md border-3 border-amber-300 rounded-3xl p-2.5 shadow-2xl flex flex-col gap-2 animate-pop w-64 sm:w-72`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b border-amber-100 text-[11px] font-black text-amber-950">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{currentPet.name}</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Wandering Roam Toggle */}
          <button
            type="button"
            onClick={toggleWandering}
            className={`w-full py-1.5 px-2 rounded-xl text-xs font-black flex items-center justify-between border transition-all cursor-pointer ${
              isWandering
                ? 'bg-amber-100 hover:bg-amber-200 border-amber-400 text-amber-950'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
            }`}
          >
            <span className="flex items-center gap-1 text-[11px]">
              <span>{isWandering ? '🏃' : '📌'}</span>
              <span>{isWandering ? 'Tự do chạy nhảy' : 'Đang đứng yên'}</span>
            </span>
            <span className="text-[10px] font-bold underline text-amber-800">
              {isWandering ? 'Ghim lại' : 'Cho chạy'}
            </span>
          </button>

          {/* Quick Petting Button */}
          <button
            type="button"
            onClick={handlePetHead}
            className="w-full py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 border border-rose-300 text-rose-900 font-black text-xs flex items-center justify-center gap-1.5 shadow-2xs btn-kid-3d cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-500 animate-pulse" />
            <span>Xoa Đầu Vuốt Ve Thú Cưng</span>
          </button>

          {/* Snack Treat Bar (3 Món ăn vặt) */}
          <div>
            <div className="text-[10px] font-bold text-slate-500 mb-1 flex items-center gap-1">
              <span>🍽️ Cho thú cưng ăn (+1 ⭐):</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <button
                type="button"
                onClick={(e) => handleFeedTreat('apple', e)}
                className="py-1 px-1 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl text-xs font-black flex flex-col items-center btn-kid-3d cursor-pointer"
              >
                <span className="text-base">🍎</span>
                <span className="text-[10px] text-red-800">Táo Đỏ</span>
              </button>
              <button
                type="button"
                onClick={(e) => handleFeedTreat('icecream', e)}
                className="py-1 px-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl text-xs font-black flex flex-col items-center btn-kid-3d cursor-pointer"
              >
                <span className="text-base">🍦</span>
                <span className="text-[10px] text-amber-800">Kem Ốc</span>
              </button>
              <button
                type="button"
                onClick={(e) => handleFeedTreat('milk', e)}
                className="py-1 px-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl text-xs font-black flex flex-col items-center btn-kid-3d cursor-pointer"
              >
                <span className="text-base">🥛</span>
                <span className="text-[10px] text-blue-800">Sữa Tươi</span>
              </button>
            </div>
          </div>

          {/* 3 Interactive Buttons: Trò chuyện, Mách nước, Múa vui */}
          <div className="grid grid-cols-3 gap-1 pt-0.5">
            <button
              type="button"
              onClick={handleTalk}
              className="py-1.5 px-1 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-900 rounded-xl text-[11px] font-black flex flex-col items-center gap-0.5 btn-kid-3d cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Nói Chuyện</span>
            </button>
            <button
              type="button"
              onClick={handleAskHint}
              className="py-1.5 px-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 rounded-xl text-[11px] font-black flex flex-col items-center gap-0.5 btn-kid-3d cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              <span>Mách Nước</span>
            </button>
            <button
              type="button"
              onClick={handleDance}
              className="py-1.5 px-1 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 rounded-xl text-[11px] font-black flex flex-col items-center gap-0.5 btn-kid-3d cursor-pointer"
            >
              <Music className="w-3.5 h-3.5 text-purple-600" />
              <span>Múa Vui</span>
            </button>
          </div>

          {/* Quick Companion Switcher */}
          <div className="pt-1 border-t border-slate-100">
            <div className="text-[10px] font-bold text-slate-500 mb-1">
              ✨ Đổi bạn đồng hành:
            </div>
            <div className="flex items-center justify-between gap-1">
              {COMPANION_PETS.map((cp) => (
                <button
                  key={cp.id}
                  type="button"
                  onClick={(e) => handleSwitchCompanion(cp, e)}
                  title={cp.name}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg border transition-all cursor-pointer ${
                    currentPet.name === cp.name
                      ? 'bg-amber-200 border-amber-500 scale-110 shadow-xs'
                      : 'bg-slate-50 hover:bg-amber-50 border-slate-200'
                  }`}
                >
                  {cp.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Draggable & Clickable Pet Mascot */}
      <div className="relative flex items-center gap-1.5">
        {/* Minimize Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            soundManager.playPop();
            setIsMinimized(true);
          }}
          title="Thu nhỏ thú cưng"
          className="w-5 h-5 rounded-full bg-white/80 hover:bg-white border border-slate-300 shadow-2xs flex items-center justify-center text-slate-500 hover:text-slate-700 text-[10px] font-bold transition-all opacity-60 hover:opacity-100 cursor-pointer"
        >
          _
        </button>

        {/* Mascot Avatar Widget */}
        <div
          onPointerDown={handlePointerDown}
          title="Chạm để mở tương tác • Kéo thả để di chuyển khắp màn hình"
          style={{
            transform: `scaleX(${facingDirection})`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          className={`relative select-none transition-transform duration-300 ${
            isHopping ? 'animate-pet-hop' : ''
          }`}
        >
          {/* Aura Glow */}
          <div
            className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400 blur-xs opacity-75 transition-all ${
              mood === 'happy' ? 'scale-125 opacity-100' : isDragging ? 'opacity-100 ring-2 ring-amber-400' : 'animate-pulse'
            }`}
          />

          {/* Floating Hearts */}
          {showHearts && (
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-0.5 animate-pop pointer-events-none">
              <span className="text-base animate-bounce">💖</span>
              <span className="text-sm animate-bounce delay-100">✨</span>
            </div>
          )}

          {/* Mascot Box */}
          <div
            className={`relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white border-2 border-amber-400 shadow-md flex flex-col items-center justify-center transition-all ${
              mood === 'happy'
                ? 'animate-bounce scale-110'
                : mood === 'eating'
                ? 'animate-wiggle scale-105'
                : mood === 'dancing'
                ? 'animate-wiggle scale-110'
                : !isHopping
                ? 'animate-bounce-slow'
                : ''
            }`}
          >
            <span className="text-2xl sm:text-3xl leading-none pointer-events-none">{currentPet.icon}</span>

            {/* Stage Tag */}
            <span className="absolute -bottom-1.5 bg-rose-500 text-white text-[7px] font-black px-1 rounded-full border border-white shadow-2xs pointer-events-none">
              {currentPet.stage ? `C${currentPet.stage}` : '⭐'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

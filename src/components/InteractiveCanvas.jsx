import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/soundManager';
import { getAssetUrl } from '../utils/assetHelper';
import { Check } from 'lucide-react';
import QuestionIllustration from './QuestionIllustration';

const getTimeOfDayInfo = (h) => {
  if (h >= 6 && h <= 10) {
    return {
      period: 'Buổi Sáng',
      icon: '🌅',
      skyGradient: 'from-amber-200 via-sky-200 to-sky-300',
      badgeBg: 'bg-amber-100 border-amber-300 text-amber-900',
      description: 'Mặt trời mọc ☀️ • Bé thức dậy, ăn sáng và đến trường!',
      ambientIcon: '☀️',
    };
  }
  if (h >= 11 && h <= 14) {
    return {
      period: 'Buổi Trưa',
      icon: '☀️',
      skyGradient: 'from-sky-300 via-blue-200 to-amber-100',
      badgeBg: 'bg-sky-100 border-sky-300 text-sky-900',
      description: 'Mặt trời lên đỉnh 🌤️ • Bé ăn cơm trưa và nghỉ ngơi!',
      ambientIcon: '🌤️',
    };
  }
  if (h >= 15 && h <= 17) {
    return {
      period: 'Buổi Chiều',
      icon: '⛅',
      skyGradient: 'from-sky-200 via-amber-100 to-orange-200',
      badgeBg: 'bg-orange-100 border-orange-300 text-orange-900',
      description: 'Nắng chiều dịu ⚽ • Bé tập thể dục và tan học về nhà!',
      ambientIcon: '🪁',
    };
  }
  if (h >= 18 && h <= 19) {
    return {
      period: 'Hoàng Hôn',
      icon: '🌇',
      skyGradient: 'from-orange-300 via-rose-300 to-indigo-300',
      badgeBg: 'bg-rose-100 border-rose-300 text-rose-900',
      description: 'Mặt trời lặn 🌆 • Cả nhà quây quần bên mâm cơm tối!',
      ambientIcon: '🏠',
    };
  }
  return {
    period: 'Ban Đêm',
    icon: '🌙',
    skyGradient: 'from-indigo-900 via-slate-800 to-slate-950',
    badgeBg: 'bg-indigo-950/80 border-indigo-400 text-yellow-200',
    description: 'Trời đêm đầy sao ✨ • Bé chuẩn bị đi ngủ ngon giấc!',
    ambientIcon: '⭐',
  };
};

export default function InteractiveCanvas({
  level,
  onComplete,
  onAnswerStatus,
}) {
  const [userValue, setUserValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [crocDirection, setCrocDirection] = useState(null); // 'left', 'right', 'equal'
  const [clockHour, setClockHour] = useState(level.hour || 12);
  const [applesInBasket, setApplesInBasket] = useState([]);
  const [poppedBalloons, setPoppedBalloons] = useState(new Set());
  const [isSuccess, setIsSuccess] = useState(false);
  const [wrongOption, setWrongOption] = useState(null);
  const [errorShake, setErrorShake] = useState(false);

  // Robust check for any answer value or option index
  const evaluateAnswer = (choice, optIndex = -1) => {
    // 1. If question has correctIndex
    if (level.correctIndex !== undefined) {
      if (optIndex !== -1 && optIndex === level.correctIndex) return true;
      if (level.options && level.options[level.correctIndex] !== undefined) {
        const expected = level.options[level.correctIndex];
        if (String(choice).trim() === String(expected).trim()) return true;
      }
    }

    // 2. If question has targetNumber / correctNumber / correctAnswer
    const target = level.targetNumber ?? level.correctNumber ?? level.correctAnswer;
    if (target !== undefined) {
      if (String(choice).trim() === String(target).trim()) return true;
      if (Number(choice) === Number(target)) return true;
    }

    return false;
  };

  const triggerSuccess = () => {
    if (isSuccess) return;
    setIsSuccess(true);
    setWrongOption(null);
    if (onAnswerStatus) onAnswerStatus('correct');
    soundManager.playCorrect();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  const triggerError = (opt = null) => {
    soundManager.playWrong();
    setWrongOption(opt);
    setErrorShake(true);
    if (onAnswerStatus) onAnswerStatus('wrong');
    setTimeout(() => setErrorShake(false), 500);
  };

  // --- 2. TRAIN: Direct tap carriage ---
  const handleSelectTrainCarriage = (val, idx) => {
    if (isSuccess) return;
    soundManager.playClick();
    setSelectedOption(val);
    setUserValue(String(val));

    if (evaluateAnswer(val, idx)) {
      triggerSuccess(val);
    } else {
      triggerError(val);
    }
  };

  // --- 3. ADDITION: Drop apples into basket ---
  const handleTapApple = (idx) => {
    if (isSuccess) return;
    if (!applesInBasket.includes(idx)) {
      soundManager.playPop(1.1);
      const next = [...applesInBasket, idx];
      setApplesInBasket(next);

      const totalApples = (level.a || 0) + (level.b || 0);
      if (next.length === totalApples) {
        setUserValue(String(totalApples));
        triggerSuccess(String(totalApples));
      }
    }
  };

  // --- 4. SUBTRACTION: Pop balloons ---
  const handlePopBalloon = (idx) => {
    if (isSuccess) return;
    if (!poppedBalloons.has(idx)) {
      soundManager.playPop(1.4);
      const next = new Set(poppedBalloons);
      next.add(idx);
      setPoppedBalloons(next);

      const targetPops = level.b || 2;
      if (next.size === targetPops) {
        const remaining = (level.a || 6) - targetPops;
        setUserValue(String(remaining));
        triggerSuccess(String(remaining));
      }
    }
  };

  // --- 5. CROCODILE: Direct chomp buttons ---
  const handleChomp = (direction) => {
    if (isSuccess) return;
    soundManager.playPop(0.9);
    setCrocDirection(direction);

    let isCorrect = false;
    if (level.leftCount !== undefined && level.rightCount !== undefined) {
      if (level.leftCount > level.rightCount && direction === 'left') isCorrect = true;
      if (level.leftCount < level.rightCount && direction === 'right') isCorrect = true;
      if (level.leftCount === level.rightCount && direction === 'equal') isCorrect = true;
    } else if (level.symbol) {
      if (level.symbol === '>' && direction === 'left') isCorrect = true;
      if (level.symbol === '<' && direction === 'right') isCorrect = true;
      if (level.symbol === '=' && direction === 'equal') isCorrect = true;
    }

    if (isCorrect) {
      triggerSuccess(direction);
    } else {
      triggerError(direction);
    }
  };

  // --- 6. CLOCK: Touch hour numbers on clock ---
  const handleClockTouch = (h) => {
    if (isSuccess) return;
    soundManager.playPop(1.2);
    setClockHour(h);

    const targetH = level.hour || 7;
    if (h === targetH) {
      setUserValue(`${h} giờ đúng`);
      triggerSuccess(`${h} giờ đúng`);
    } else {
      triggerError(h);
    }
  };

  // --- 7. GENERIC OPTION CARD TOUCH (For all questions with options) ---
  const handleOptionCardTouch = (opt, idx) => {
    if (isSuccess) return;
    soundManager.playClick();
    setSelectedOption(opt);
    setUserValue(String(opt));

    if (evaluateAnswer(opt, idx)) {
      triggerSuccess(opt);
    } else {
      triggerError(opt);
    }
  };

  // --- 8. CANDY NUMBER PAD TOUCH ---
  const handleKeypadPress = (num) => {
    if (isSuccess) return;
    soundManager.playPop(1 + (num % 10) * 0.05);
    const numStr = String(num);
    setUserValue(numStr);

    if (evaluateAnswer(num)) {
      triggerSuccess(numStr);
    } else {
      triggerError(numStr);
    }
  };

  // Check if this level has a direct interactive manipulation element
  const hasDirectGame = Boolean(
    level.type === 'train' ||
    level.type === 'visual_add' ||
    level.type === 'visual_sub' ||
    level.type === 'crocodile' ||
    (level.leftCount !== undefined && level.rightCount !== undefined) ||
    level.leftNum !== undefined ||
    level.symbol ||
    (level.hour !== undefined && (!level.options || level.options.length === 0))
  );

  return (
    <div className={`w-full transition-all ${errorShake ? 'animate-wiggle' : ''}`}>
      {/* 1. NÔNG TRẠI ĐẾM SỐ (Ducks, Strawberries, Candies) */}
      {level.itemIcon && level.count && (
        <div className="flex flex-col items-center w-full max-w-sm mx-auto">
          {/* Ao nước / vườn quả hiển thị đồ vật */}
          <div className="w-full bg-gradient-to-b from-sky-100 via-blue-50/70 to-emerald-50/60 p-2.5 sm:p-3 rounded-2xl border-2 border-sky-300 shadow-inner flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 my-1">
            {Array.from({ length: level.count }).map((_, i) => (
              <div
                key={i}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/95 border border-sky-200 shadow-xs flex items-center justify-center text-2xl sm:text-3xl select-none"
              >
                <span>{level.itemIcon}</span>
              </div>
            ))}
          </div>

          {/* Ô kết quả */}
          <div className="mt-1 flex items-center gap-2 bg-white px-3 py-1 rounded-xl border border-amber-300 shadow-2xs text-xs sm:text-sm font-bold text-slate-700">
            <span>Đếm được:</span>
            <div className="w-9 h-7 rounded-lg bg-amber-100 border border-amber-400 flex items-center justify-center text-base font-black text-amber-950">
              {userValue || '?'}
            </div>
            {isSuccess && (
              <span className="flex items-center gap-0.5 text-emerald-600 font-black text-xs">
                <Check className="w-3.5 h-3.5" /> Đúng!
              </span>
            )}
          </div>
        </div>
      )}

      {/* 2. ĐOÀN TÀU TÌM SỐ (Train Carriages) */}
      {level.type === 'train' && (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 max-w-full px-1">
            <div className="text-3xl sm:text-4xl animate-bounce-slow">🚂</div>
            {level.sequence.map((item, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl font-black shadow-xs border-2 transition-all ${
                  item === '?'
                    ? userValue
                      ? isSuccess
                        ? 'bg-emerald-400 border-emerald-600 text-white'
                        : 'bg-rose-400 border-rose-600 text-white'
                      : 'bg-amber-200 border-amber-400 text-rose-700 animate-pulse'
                    : 'bg-white border-blue-400 text-blue-900'
                }`}
              >
                {item === '?' ? userValue || '?' : item}
              </div>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            {level.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelectTrainCarriage(opt, i)}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl font-black text-base sm:text-lg shadow-xs border-2 btn-kid-3d ${
                  selectedOption === opt
                    ? isSuccess
                      ? 'bg-emerald-500 text-white border-emerald-600'
                      : 'bg-rose-500 text-white border-rose-600'
                    : 'bg-amber-400 hover:bg-amber-500 text-amber-950 border-amber-500'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 2b. SƠ ĐỒ TÁCH - GỘP SỐ (Number Bonds) */}
      {level.type === 'number_bond' && (
        <div className="flex flex-col items-center w-full max-w-md mx-auto my-3">
          <div className="bg-amber-100 border border-amber-300 px-4 py-1 rounded-full text-xs font-black text-amber-900 mb-4 flex items-center gap-1.5">
            <span>✨ Sơ đồ Tách - Gộp Số</span>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Vòng tròn Tổng (ở trên) */}
            <div
              className={`w-20 h-20 rounded-full border-4 flex flex-col items-center justify-center shadow-lg transition-all ${
                level.missingPart === 'total'
                  ? userValue
                    ? isSuccess
                      ? 'bg-emerald-400 border-emerald-600 text-white scale-110'
                      : 'bg-rose-400 border-rose-600 text-white'
                    : 'bg-amber-100 border-amber-400 text-amber-950 ring-4 ring-amber-200 animate-pulse'
                  : 'bg-gradient-to-br from-indigo-500 to-purple-600 border-purple-700 text-white'
              }`}
            >
              <span className="text-[10px] font-black uppercase opacity-80">Tổng</span>
              <span className="text-2xl font-black">
                {level.missingPart === 'total' ? userValue || '?' : level.total}
              </span>
            </div>

            {/* Đường rẽ nhánh nối 2 vòng tròn con */}
            <svg className="w-48 h-12 my-1" viewBox="0 0 192 48">
              <path
                d="M 96 0 L 40 48"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 96 0 L 152 48"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* 2 Vòng tròn Phần A và Phần B (ở dưới) */}
            <div className="flex items-center justify-between w-64">
              {/* Nhánh A */}
              <div
                className={`w-18 h-18 rounded-full border-4 flex flex-col items-center justify-center shadow-md transition-all ${
                  level.missingPart === 'partA'
                    ? userValue
                      ? isSuccess
                        ? 'bg-emerald-400 border-emerald-600 text-white scale-110'
                        : 'bg-rose-400 border-rose-600 text-white'
                      : 'bg-amber-100 border-amber-400 text-amber-950 ring-4 ring-amber-200 animate-pulse'
                    : 'bg-gradient-to-br from-sky-400 to-blue-500 border-blue-600 text-white'
                }`}
              >
                <span className="text-[10px] font-black uppercase opacity-80">Phần 1</span>
                <span className="text-xl font-black">
                  {level.missingPart === 'partA' ? userValue || '?' : level.partA}
                </span>
              </div>

              {/* Dấu và / gộp */}
              <div className="bg-white border-2 border-slate-200 px-2 py-1 rounded-xl text-xs font-black text-slate-500 shadow-xs">
                và
              </div>

              {/* Nhánh B */}
              <div
                className={`w-18 h-18 rounded-full border-4 flex flex-col items-center justify-center shadow-md transition-all ${
                  level.missingPart === 'partB'
                    ? userValue
                      ? isSuccess
                        ? 'bg-emerald-400 border-emerald-600 text-white scale-110'
                        : 'bg-rose-400 border-rose-600 text-white'
                      : 'bg-amber-100 border-amber-400 text-amber-950 ring-4 ring-amber-200 animate-pulse'
                    : 'bg-gradient-to-br from-emerald-400 to-teal-500 border-teal-600 text-white'
                }`}
              >
                <span className="text-[10px] font-black uppercase opacity-80">Phần 2</span>
                <span className="text-xl font-black">
                  {level.missingPart === 'partB' ? userValue || '?' : level.partB}
                </span>
              </div>
            </div>
          </div>

          {/* Dòng tóm tắt mô hình */}
          <div className="mt-4 bg-white px-4 py-2 rounded-2xl border-2 border-slate-200 shadow-sm text-sm font-bold text-slate-700">
            {isSuccess
              ? (level.sentence || `${level.total} gồm ${level.partA} và ${level.partB} ✨`)
              : level.missingPart === 'total'
              ? `Gộp ${level.partA} và ${level.partB} được [ ? ]`
              : level.missingPart === 'partA'
              ? `${level.total} gồm [ ? ] và ${level.partB}`
              : level.missingPart === 'partB'
              ? `${level.total} gồm ${level.partA} và [ ? ]`
              : 'Bé hãy tìm số còn thiếu trong sơ đồ'}
          </div>
        </div>
      )}

      {/* 2c. BÓ CHỤC VÀ ĐƠN VỊ (Tens & Ones) */}
      {level.type === 'tens_ones' && (
        <div className="flex flex-col items-center w-full max-w-lg mx-auto my-3">
          <div className="bg-purple-100 border border-purple-300 px-4 py-1.5 rounded-full text-xs font-black text-purple-900 mb-3 flex items-center gap-1.5">
            <span>🎋 Mô hình Bó Chục & Que Tính Rời</span>
          </div>

          <div className="w-full bg-gradient-to-b from-purple-50 to-indigo-50/50 p-4 sm:p-6 rounded-3xl border-3 border-purple-200 shadow-sm flex flex-col sm:flex-row items-center justify-around gap-4">
            {/* Các bó 10 que tính */}
            <div className="flex flex-col items-center bg-white p-3 rounded-2xl border-2 border-purple-200 shadow-xs min-w-36">
              <span className="text-xs font-black text-purple-700 mb-2">
                {level.tens} Chục ({level.tens * 10})
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {Array.from({ length: level.tens }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-amber-50 border-2 border-amber-400 px-2 py-1.5 rounded-xl shadow-xs"
                  >
                    <span className="text-2xl">🎋</span>
                    <span className="text-[10px] font-black text-amber-900 bg-amber-200 px-1.5 py-0.5 rounded-md mt-0.5">
                      10 que
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dấu cộng gộp */}
            <div className="text-2xl font-black text-purple-400">+</div>

            {/* Các que tính rời */}
            <div className="flex flex-col items-center bg-white p-3 rounded-2xl border-2 border-indigo-200 shadow-xs min-w-36">
              <span className="text-xs font-black text-indigo-700 mb-2">
                {level.ones} Đơn Vị ({level.ones})
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-36">
                {Array.from({ length: level.ones }).map((_, i) => (
                  <span key={i} className="text-2xl select-none">
                    🥢
                  </span>
                ))}
                {level.ones === 0 && (
                  <span className="text-xs font-bold text-slate-400 italic">0 que lẻ</span>
                )}
              </div>
            </div>
          </div>

          {/* Ô hiển thị số */}
          <div className="mt-3 flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-2xl border-2 border-purple-300 shadow-sm">
            <span className="font-extrabold text-slate-700 text-sm sm:text-base">
              Số gồm {level.tens} chục và {level.ones} đơn vị là:
            </span>
            <div className="w-14 h-12 rounded-xl bg-purple-100 border-3 border-purple-400 flex items-center justify-center text-xl font-black text-purple-950 shadow-inner">
              {userValue || '?'}
            </div>
            {isSuccess && (
              <span className="flex items-center gap-1 text-emerald-600 font-black text-sm ml-2 animate-pop">
                <Check className="w-4 h-4" /> Chính xác!
              </span>
            )}
          </div>
        </div>
      )}

      {/* 2d. THƯỚC KẺ ĐO XĂNG-TI-MÉT (Ruler cm) */}
      {level.type === 'ruler_cm' && (
        <div className="flex flex-col items-center w-full max-w-xl mx-auto my-3">
          <div className="bg-emerald-100 border border-emerald-300 px-4 py-1.5 rounded-full text-xs font-black text-emerald-900 mb-3 flex items-center gap-1.5">
            <span>📏 Đo độ dài bằng thước kẻ xăng-ti-mét (cm)</span>
          </div>

          <div className="w-full bg-white p-5 rounded-3xl border-3 border-slate-200 shadow-md flex flex-col items-center">
            {/* Vật thể đặt trên thước */}
            <div className="w-full relative h-16 flex items-center px-6">
              <div
                className="h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg shadow-md flex items-center justify-between px-3 text-white font-bold text-xs"
                style={{ width: `${(level.lengthCm / 15) * 100}%`, minWidth: '52px' }}
              >
                <span className="truncate">{level.item || 'Bút chì ✏️'}</span>
                <span>✨</span>
              </div>
            </div>

            {/* Cây thước kẻ chia vạch cm */}
            <div className="w-full bg-yellow-300 border-3 border-yellow-500 rounded-xl shadow-inner relative h-16 px-6 flex items-start select-none">
              {Array.from({ length: 16 }).map((_, cm) => {
                const isMatch = isSuccess && cm === level.lengthCm;
                return (
                  <div
                    key={cm}
                    className="flex-1 flex flex-col items-center relative"
                    style={{ minWidth: '18px' }}
                  >
                    <div
                      className={`w-0.5 ${
                        cm % 5 === 0 ? 'h-6 bg-slate-900' : 'h-3.5 bg-slate-700'
                      }`}
                    />
                    <span
                      className={`text-[10px] font-black mt-1 ${
                        isMatch ? 'text-rose-700 font-extrabold scale-125' : 'text-slate-800'
                      }`}
                    >
                      {cm}
                    </span>
                    {isMatch && (
                      <div className="absolute -top-16 w-0.5 h-16 border-r-2 border-dashed border-rose-500 pointer-events-none" />
                    )}
                  </div>
                );
              })}
              <div className="absolute right-2 bottom-1 text-[10px] font-black text-amber-900">
                cm
              </div>
            </div>
          </div>

          {/* Ô hiển thị kết quả */}
          <div className="mt-3 flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl border-2 border-emerald-300 shadow-sm">
            <span className="font-extrabold text-slate-700 text-sm sm:text-base">
              Độ dài của {level.item || 'vật'} là:
            </span>
            <div className="w-16 h-12 rounded-xl bg-emerald-100 border-3 border-emerald-500 flex items-center justify-center text-xl font-black text-emerald-950 shadow-inner">
              {userValue ? `${userValue}` : '?'}
            </div>
            <span className="font-black text-emerald-800 text-base">cm</span>
            {isSuccess && (
              <span className="flex items-center gap-1 text-emerald-600 font-black text-sm ml-2 animate-pop">
                <Check className="w-4 h-4" /> Chính xác!
              </span>
            )}
          </div>
        </div>
      )}

      {/* 2e. BIỂU ĐỒ TRANH (Picture Graph) */}
      {level.type === 'picture_graph' && (
        <div className="flex flex-col items-center w-full max-w-lg mx-auto my-3">
          <div className="bg-cyan-100 border border-cyan-300 px-4 py-1.5 rounded-full text-xs font-black text-cyan-900 mb-3 flex items-center gap-1.5">
            <span>📊 Biểu Đồ Tranh Thống Kê</span>
          </div>

          <div className="w-full bg-white p-4 sm:p-5 rounded-3xl border-3 border-cyan-200 shadow-sm">
            <div className="divide-y divide-slate-100">
              {level.graphData.map((row, idx) => {
                const isQueried = level.questionTarget === row.label || level.questionTarget === row.icon;
                return (
                  <div
                    key={idx}
                    className={`py-2.5 px-3 flex items-center justify-between rounded-xl transition-all ${
                      isQueried ? 'bg-cyan-50/80 ring-2 ring-cyan-300' : ''
                    }`}
                  >
                    <div className="w-28 sm:w-36 flex items-center gap-2">
                      <span className="text-xl">{row.icon}</span>
                      <span className="text-xs sm:text-sm font-black text-slate-700">
                        {row.label}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-wrap items-center justify-start gap-1.5 pl-3">
                      {Array.from({ length: row.count }).map((_, cIdx) => (
                        <div
                          key={cIdx}
                          className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-lg shadow-2xs"
                        >
                          {row.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ô hiển thị kết quả */}
          <div className="mt-3 flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-2xl border-2 border-cyan-300 shadow-sm">
            <span className="font-extrabold text-slate-700 text-sm sm:text-base">
              Số lượng {level.questionTarget || 'cần tìm'} là:
            </span>
            <div className="w-14 h-12 rounded-xl bg-cyan-100 border-3 border-cyan-500 flex items-center justify-center text-xl font-black text-cyan-950 shadow-inner">
              {userValue || '?'}
            </div>
            {isSuccess && (
              <span className="flex items-center gap-1 text-emerald-600 font-black text-sm ml-2 animate-pop">
                <Check className="w-4 h-4" /> Chính xác!
              </span>
            )}
          </div>
        </div>
      )}

      {/* 3. PHÉP CỘNG: Cây táo hái vào giỏ */}
      {level.type === 'visual_add' && (
        <div className="flex flex-col items-center">
          <div className="bg-emerald-100 border border-emerald-300 px-4 py-1.5 rounded-full text-xs font-black text-emerald-900 mb-2">
            🍎 Chạm vào từng quả táo trên cành để hái táo rơi vào giỏ nhé!
          </div>

          {/* Apple Tree */}
          <div className="relative w-full max-w-sm h-32 bg-gradient-to-b from-green-300 to-emerald-500 rounded-3xl p-3 shadow-md flex items-center justify-around border-3 border-emerald-600">
            <div className="flex gap-1.5">
              {Array.from({ length: level.a }).map((_, i) => {
                const isDropped = applesInBasket.includes(`a_${i}`);
                return (
                  <button
                    key={`a_${i}`}
                    type="button"
                    onClick={() => handleTapApple(`a_${i}`)}
                    className={`text-3xl sm:text-4xl transition-all transform cursor-pointer ${
                      isDropped ? 'opacity-20 scale-50' : 'hover:scale-125 animate-bounce-slow'
                    }`}
                  >
                    🍎
                  </button>
                );
              })}
            </div>

            <div className="flex gap-1.5">
              {Array.from({ length: level.b }).map((_, i) => {
                const isDropped = applesInBasket.includes(`b_${i}`);
                return (
                  <button
                    key={`b_${i}`}
                    type="button"
                    onClick={() => handleTapApple(`b_${i}`)}
                    className={`text-3xl sm:text-4xl transition-all transform cursor-pointer ${
                      isDropped ? 'opacity-20 scale-50' : 'hover:scale-125 animate-bounce-slow'
                    }`}
                  >
                    🍏
                  </button>
                );
              })}
            </div>
          </div>

          {/* Basket */}
          <div className="mt-3 flex flex-col items-center">
            <div className="w-40 h-16 bg-amber-200 border-3 border-amber-600 rounded-b-2xl rounded-t-lg shadow flex items-center justify-center gap-1 px-2">
              {applesInBasket.length === 0 ? (
                <span className="text-xs font-bold text-amber-800">Giỏ táo đang đợi bé</span>
              ) : (
                applesInBasket.map((id, idx) => (
                  <span key={idx} className="text-xl animate-pop">
                    {id.startsWith('a') ? '🍎' : '🍏'}
                  </span>
                ))
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-lg sm:text-xl font-black text-slate-800">
            <span>{level.a} quả</span>
            <span>+</span>
            <span>{level.b} quả</span>
            <span>=</span>
            <div className="w-11 h-11 rounded-xl bg-amber-100 border-3 border-amber-400 flex items-center justify-center text-lg font-black text-amber-950">
              {userValue || '?'}
            </div>
          </div>

          {/* Farm Truck Animation upon completing all apples */}
          {applesInBasket.length === ((level.a || 0) + (level.b || 0)) && (
            <div className="mt-3.5 w-full max-w-sm bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 border-2 border-amber-400 p-2.5 rounded-2xl shadow-md flex items-center gap-3 animate-bounce">
              <div className="text-4xl animate-wiggle">🚛💨</div>
              <div>
                <div className="text-xs sm:text-sm font-black text-amber-950">
                  Xe nông trại chở {applesInBasket.length} quả táo về chợ!
                </div>
                <div className="text-[11px] font-bold text-emerald-700">
                  Bé đã hái đủ táo vào thùng hàng, tuyệt vời lắm! ✨
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. PHÉP TRỪ: Bóp bóng bay */}
      {level.type === 'visual_sub' && (
        <div className="flex flex-col items-center">
          <div className="bg-rose-100 border border-rose-300 px-4 py-1.5 rounded-full text-xs font-black text-rose-900 mb-3">
            {level.iconA || '🎈'} Bé chạm vào {level.b || 2} {level.iconA ? 'chú chim' : 'quả bóng'} để làm {level.iconA ? 'bay đi' : 'nổ'} nhé!
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 py-2 max-w-md">
            {Array.from({ length: level.a || 6 }).map((_, i) => {
              const isPopped = poppedBalloons.has(i);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handlePopBalloon(i)}
                  className={`w-14 h-16 rounded-full flex items-center justify-center text-3xl sm:text-4xl transition-all transform cursor-pointer ${
                    isPopped
                      ? 'scale-0 opacity-0 pointer-events-none'
                      : 'hover:scale-110 active:scale-95 animate-bounce-slow shadow'
                  }`}
                >
                  {level.iconA || '🎈'}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-2 text-lg sm:text-xl font-black text-slate-800">
            <span>{level.a} {level.iconA ? 'chú' : 'quả'}</span>
            <span className="text-rose-600">- {poppedBalloons.size} {level.iconA ? 'đã bay' : 'đã nổ'}</span>
            <span>=</span>
            <div className="w-11 h-11 rounded-xl bg-amber-100 border-3 border-amber-400 flex items-center justify-center text-lg font-black text-amber-950">
              {userValue || '?'}
            </div>
          </div>
        </div>
      )}

      {/* 5. PHÉP TÍNH Ô TRỐNG (Equation 7 + ? = 10) */}
      {level.type === 'equation' && (
        <div className="flex flex-col items-center py-2">
          <div className="flex items-center gap-3 text-3xl sm:text-4xl font-black text-slate-800 mb-4 bg-white px-6 py-4 rounded-2xl border-3 border-amber-300 shadow-sm">
            <span>7</span>
            <span>+</span>
            <div className="w-14 h-14 rounded-2xl bg-amber-200 border-3 border-amber-500 flex items-center justify-center text-2xl font-black text-rose-600 animate-pulse">
              {userValue || '?'}
            </div>
            <span>=</span>
            <span className="text-emerald-600">10</span>
          </div>
        </div>
      )}

      {/* 6. SO SÁNH CÁ SẤU (> < =) */}
      {(level.leftCount !== undefined || level.symbol !== undefined || level.leftNum !== undefined) && (
        <div className="flex flex-col items-center py-2">
          <div className="flex items-center justify-around w-full max-w-md mb-4">
            {/* Left plate */}
            <div className="text-center bg-white p-3 rounded-2xl border-3 border-sky-300 shadow-sm">
              <div className="text-2xl sm:text-3xl mb-1">🍉</div>
              <span className="font-black text-xl text-sky-900">
                {level.leftCount !== undefined ? level.leftCount : level.leftNum}
              </span>
            </div>

            {/* Crocodile */}
            <div className="flex flex-col items-center">
              <div
                className={`text-5xl sm:text-6xl transition-transform duration-300 ${
                  crocDirection === 'left'
                    ? '-scale-x-100 rotate-6'
                    : crocDirection === 'right'
                    ? 'scale-x-100 -rotate-6'
                    : 'scale-100'
                }`}
              >
                🐊
              </div>
              <span className="text-[11px] font-black text-amber-800 mt-1">
                {crocDirection === 'left' ? 'Ngoạm Trái (>)' : crocDirection === 'right' ? 'Ngoạm Phải (<)' : 'Bằng Nhau (=)'}
              </span>
            </div>

            {/* Right plate */}
            <div className="text-center bg-white p-3 rounded-2xl border-3 border-sky-300 shadow-sm">
              <div className="text-2xl sm:text-3xl mb-1">🍉</div>
              <span className="font-black text-xl text-sky-900">
                {level.rightCount !== undefined ? level.rightCount : level.rightNum}
              </span>
            </div>
          </div>

          {/* Direct Chomp Controls */}
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handleChomp('left')}
              className={`px-3 py-2 rounded-xl font-black text-xs sm:text-sm shadow-xs border-2 btn-kid-3d ${
                crocDirection === 'left' ? 'bg-amber-400 border-amber-500 text-amber-950 shadow-sm' : 'bg-white border-slate-300 text-slate-800'
              }`}
            >
              👈 Lớn hơn (&gt;)
            </button>

            <button
              type="button"
              onClick={() => handleChomp('equal')}
              className={`px-3 py-2 rounded-xl font-black text-xs sm:text-sm shadow-xs border-2 btn-kid-3d ${
                crocDirection === 'equal' ? 'bg-amber-400 border-amber-500 text-amber-950 shadow-sm' : 'bg-white border-slate-300 text-slate-800'
              }`}
            >
              🤝 Bằng (=)
            </button>

            <button
              type="button"
              onClick={() => handleChomp('right')}
              className={`px-3 py-2 rounded-xl font-black text-xs sm:text-sm shadow-xs border-2 btn-kid-3d ${
                crocDirection === 'right' ? 'bg-amber-400 border-amber-500 text-amber-950 shadow-sm' : 'bg-white border-slate-300 text-slate-800'
              }`}
            >
              👉 Bé hơn (&lt;)
            </button>
          </div>
        </div>
      )}

      {/* 7. KHÔNG GIAN: Gấu bông & Cây thông (Bear on left, tree on right) */}
      {level.layout === 'bear_tree' && (
        <div className="flex items-center justify-center gap-8 text-5xl py-2 my-2">
          <div className="flex flex-col items-center bg-white p-3 rounded-2xl border-2 border-slate-200 shadow-sm">
            <span>🧸</span>
            <span className="text-xs font-bold text-slate-600 mt-1">Gấu bông</span>
          </div>
          <div className="flex flex-col items-center bg-white p-3 rounded-2xl border-2 border-slate-200 shadow-sm">
            <span>🎄</span>
            <span className="text-xs font-bold text-slate-600 mt-1">Cây thông</span>
          </div>
        </div>
      )}

      {/* 8. ĐỒNG HỒ KIM BÁC CÚ VỚI BẦU TRỜI NGÀY & ĐÊM BIẾN ẢO */}
      {level.hour !== undefined && (() => {
        const timeOfDay = getTimeOfDayInfo(clockHour);
        return (
          <div className="flex flex-col items-center py-2 w-full max-w-md mx-auto">
            {/* Dynamic Sky Card */}
            <div
              className={`w-full bg-gradient-to-b ${timeOfDay.skyGradient} p-4 sm:p-6 rounded-3xl border-4 border-slate-700/20 shadow-xl flex flex-col items-center transition-all duration-500 relative overflow-hidden`}
            >
              {/* Floating Celestial Ambient Decor */}
              <div className="absolute top-3 right-4 text-3xl sm:text-4xl animate-bounce-slow">
                {timeOfDay.ambientIcon}
              </div>

              {/* Time of Day Badge */}
              <div
                className={`text-xs font-black px-3 py-1 rounded-full border shadow-sm backdrop-blur-md mb-2 flex items-center gap-1.5 ${timeOfDay.badgeBg}`}
              >
                <span>{timeOfDay.icon}</span>
                <span>{timeOfDay.period}</span>
              </div>

              {/* Clock Face */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-6 border-slate-800 bg-white shadow-2xl flex items-center justify-center my-2">
                <div className="w-3 h-3 bg-rose-500 rounded-full z-20 shadow" />

                {/* Hour hand */}
                <div
                  className="absolute w-1.5 h-12 sm:h-14 bg-slate-800 rounded-full origin-bottom z-10 transition-transform duration-500 ease-out"
                  style={{
                    bottom: '50%',
                    transform: `rotate(${clockHour * 30}deg)`,
                  }}
                />

                {/* Minute hand */}
                <div
                  className="absolute w-1 h-16 sm:h-20 bg-blue-600 rounded-full origin-bottom z-10"
                  style={{
                    bottom: '50%',
                    transform: 'rotate(0deg)',
                  }}
                />

                {/* 12 Clickable Number Buttons */}
                {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180);
                  const radius = 68;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const isTarget = isSuccess && h === clockHour;

                  return (
                    <button
                      key={h}
                      type="button"
                      onClick={() => handleClockTouch(h)}
                      className={`absolute w-7 h-7 rounded-full font-black text-xs flex items-center justify-center transition-all cursor-pointer ${
                        isTarget
                          ? 'bg-emerald-500 text-white scale-125 shadow-lg ring-2 ring-emerald-300'
                          : 'hover:bg-amber-100 text-slate-800'
                      }`}
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      {h}
                    </button>
                  );
                })}
              </div>

              {/* Activity Routine Story */}
              <div className="text-center mt-2 px-2">
                {isSuccess ? (
                  <>
                    <div className="text-sm font-black text-slate-900 bg-white/95 px-3 py-1 rounded-xl shadow-sm inline-block mb-1 border border-slate-200">
                      ⏰ Đồng hồ đang chỉ: <span className="text-emerald-600 font-extrabold">{clockHour}:00 Đúng</span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-800 bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm block border border-slate-200">
                      {timeOfDay.description}
                    </p>
                  </>
                ) : (
                  <div className="text-sm font-black text-slate-900 bg-white/95 px-4 py-1.5 rounded-xl shadow-sm inline-block mb-1 border border-slate-200">
                    ⏰ Bé hãy quan sát kim đồng hồ và chọn đáp án đúng nhé!
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* 9. IMAGE BANNER (If question has image, e.g. Timo leaves, scales, 3D cubes) */}
      {level.image && (
        <div className="my-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xs flex justify-center">
          <img
            src={getAssetUrl(level.image)}
            alt="Hình bài tập"
            className="max-h-32 sm:max-h-40 object-contain rounded-lg"
          />
        </div>
      )}

      {/* 9b. QUESTION ILLUSTRATION (For all levels needing visual representations) */}
      {!level.image &&
        !level.itemIcon &&
        !level.type?.startsWith('train') &&
        level.type !== 'number_bond' &&
        level.type !== 'tens_ones' &&
        level.type !== 'ruler_cm' &&
        level.type !== 'picture_graph' &&
        level.type !== 'visual_add' &&
        level.type !== 'visual_sub' &&
        level.layout !== 'bear_tree' &&
        level.leftCount === undefined &&
        level.leftNum === undefined &&
        level.symbol === undefined &&
        level.hour === undefined && (
          <QuestionIllustration level={level} />
        )}

      {/* 10. THẺ CHỌN ĐÁP ÁN TRỰC QUAN */}
      {!hasDirectGame && level.options && level.options.length > 0 && (() => {
        const isNumeric = level.options.every((opt) => String(opt).length <= 4);
        const count = level.options.length;
        let gridCols = 'grid-cols-2 max-w-sm';
        if (count === 3) {
          // 3 đáp án: 3 cột thẳng hàng cân đối, tuyệt đối không bị 2 trên 1 dưới
          gridCols = 'grid-cols-3 max-w-md';
        } else if (count === 4) {
          gridCols = isNumeric ? 'grid-cols-2 sm:grid-cols-4 max-w-md' : 'grid-cols-2 max-w-md';
        } else if (count === 2) {
          gridCols = 'grid-cols-2 max-w-xs';
        }

        return (
          <div className="mt-2 pt-2 border-t border-slate-100">
            <div className={`grid ${gridCols} gap-2 mx-auto`}>
              {level.options.map((opt, i) => {
                const isChosen = selectedOption === opt;
                const isWrong = wrongOption === opt;

                let style = 'bg-white hover:bg-amber-50 border-2 border-amber-400 text-amber-950 shadow-xs';
                if (isSuccess && isChosen) {
                  style = 'bg-emerald-500 border-emerald-600 text-white shadow-md';
                } else if (isWrong) {
                  style = 'bg-rose-500 border-rose-600 text-white animate-wiggle shadow-xs';
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleOptionCardTouch(opt, i)}
                    className={`rounded-xl font-black transition-all flex items-center justify-center gap-1 btn-kid-3d ${
                      isNumeric ? 'text-xl sm:text-2xl h-11 sm:h-12' : 'text-xs sm:text-sm h-11 sm:h-12 px-2 text-center'
                    } ${style}`}
                  >
                    <span>{opt}</span>
                    {isSuccess && isChosen && <Check className="w-4 h-4 text-white ml-0.5 animate-pop" />}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* 11. BÀN PHÍM SỐ KẸO NGỌT */}
      {!hasDirectGame && (!level.options || level.options.length === 0) && (
        <div className="mt-2 pt-1.5 border-t border-slate-100 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 max-w-sm">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleKeypadPress(n)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-b from-amber-50 to-orange-100 active:from-amber-200 text-amber-950 border-2 border-amber-300 font-black text-sm sm:text-base shadow-2xs btn-candy-number flex items-center justify-center cursor-pointer"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

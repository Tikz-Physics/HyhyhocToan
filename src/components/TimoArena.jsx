import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Volume2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { TIMO_SECTIONS, TIMO_EXAM_2025 } from '../data/timoQuestions';
import { soundManager } from '../utils/soundManager';
import { getAssetUrl } from '../utils/assetHelper';
import FloatingPetCompanion from './FloatingPetCompanion';
import { getPetStage } from '../data/petData';

export default function TimoArena({ onAddStars, onAwardMedal, completedTasks = [] }) {
  const [selectedSection, setSelectedSection] = useState('all');
  const [examMode, setExamMode] = useState('practice'); // 'practice' (luyện tập tự do) or 'timed' (thi thử bấm giờ)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: 'A' }
  const [showExplanation, setShowExplanation] = useState({}); // { [questionId]: boolean }
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [lastAnswerStatus, setLastAnswerStatus] = useState('idle');
  const timerRef = useRef(null);

  const currentPet = getPetStage(completedTasks.length);

  // Filter questions based on selected section
  const filteredQuestions = TIMO_EXAM_2025.filter((q) => {
    if (selectedSection === 'all') return true;
    return q.section === selectedSection;
  });

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSubmitExam = useCallback(() => {
    clearInterval(timerRef.current);
    setTimerActive(false);
    setIsSubmitted(true);
    soundManager.playFanfare();

    // Calculate score
    let score = 0;
    filteredQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score += q.points;
      }
    });

    const maxScore = filteredQuestions.length * 4;
    const percentage = (score / maxScore) * 100;

    let medal = null;
    if (percentage >= 80) {
      medal = { type: 'gold', name: 'Huy Chương Vàng Timo', icon: '🥇', score };
    } else if (percentage >= 60) {
      medal = { type: 'silver', name: 'Huy Chương Bạc Timo', icon: '🥈', score };
    } else if (percentage >= 40) {
      medal = { type: 'bronze', name: 'Huy Chương Đồng Timo', icon: '🥉', score };
    }

    if (medal && onAwardMedal) {
      onAwardMedal(medal);
    }

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
    });
    onAddStars(score);
  }, [filteredQuestions, userAnswers, onAwardMedal, onAddStars]);

  // Timer logic for 'timed' mode
  useEffect(() => {
    if (examMode === 'timed' && timerActive && !isSubmitted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [examMode, timerActive, isSubmitted, handleSubmitExam]);

  // Read question automatically on question switch if speech is on
  useEffect(() => {
    if (currentQ && examMode === 'practice') {
      soundManager.speak(currentQ.titleVi);
    }
  }, [currentIndex, currentQ, examMode]);

  const handleStartTimedExam = () => {
    soundManager.playFanfare();
    setUserAnswers({});
    setShowExplanation({});
    setIsSubmitted(false);
    setTimeLeft(40 * 60);
    setTimerActive(true);
    setCurrentIndex(0);
  };

  const handleSelectOption = (optId) => {
    if (isSubmitted) return;
    soundManager.playClick();
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optId,
    }));

    if (examMode === 'practice') {
      const isCorrect = optId === currentQ.correctAnswer;
      if (isCorrect) {
        setLastAnswerStatus('correct');
        soundManager.playCorrect();
        confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
        onAddStars(3);
      } else {
        setLastAnswerStatus('wrong');
        soundManager.playWrong();
      }
      setShowExplanation((prev) => ({
        ...prev,
        [currentQ.id]: true,
      }));
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const totalScore = filteredQuestions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswer ? q.points : 0);
  }, 0);

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="max-w-5xl mx-auto p-3 sm:p-6 pb-28 sm:pb-24">
      {/* Title & Badge */}
      <div className="bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 rounded-3xl p-5 sm:p-6 text-white shadow-xl mb-6 relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-8xl opacity-20 pointer-events-none">
          🏆
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Phòng Luyện Thi Chính Thức
              </span>
              <span className="bg-yellow-400 text-amber-950 px-2 py-0.5 rounded-full text-xs font-black">
                Năm 2025
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight">
              Đấu Trường Toán Tư Duy Timo Lớp 1 🏅
            </h1>
            <p className="text-xs sm:text-sm font-medium text-amber-100 mt-1 max-w-xl">
              Bộ đề chuẩn cấu trúc thi Timo vòng loại quốc gia: Tư duy logic, Số học, Lý thuyết số, Hình học và Tổ hợp.
            </p>
          </div>

          {/* Mode Switch Button */}
          <div className="flex items-center bg-black/20 p-1 rounded-2xl backdrop-blur-sm self-start md:self-auto">
            <button
              onClick={() => {
                soundManager.playClick();
                setExamMode('practice');
                setIsSubmitted(false);
              }}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                examMode === 'practice'
                  ? 'bg-white text-rose-600 shadow-md scale-105'
                  : 'text-white hover:text-amber-200'
              }`}
            >
              📖 Luyện Tập
            </button>
            <button
              onClick={() => {
                soundManager.playFanfare();
                setExamMode('timed');
                handleStartTimedExam();
              }}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                examMode === 'timed'
                  ? 'bg-amber-400 text-amber-950 shadow-md scale-105'
                  : 'text-white hover:text-amber-200'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Thi Thử Bấm Giờ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sections Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
        {TIMO_SECTIONS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              soundManager.playPop();
              setSelectedSection(sec.id);
              setCurrentIndex(0);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all btn-kid-3d ${
              selectedSection === sec.id
                ? 'bg-amber-400 text-amber-950 ring-2 ring-amber-500 shadow-md scale-105'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>{sec.icon}</span>
            <span>{sec.name}</span>
          </button>
        ))}
      </div>

      {/* Timed Mode Banner (if in timed exam mode) */}
      {examMode === 'timed' && !isSubmitted && (
        <div className="flex flex-wrap items-center justify-between gap-2 bg-amber-100 border-2 border-amber-400 rounded-2xl p-3 sm:p-4 mb-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-800 animate-spin" />
            <span className="font-extrabold text-amber-900 text-base sm:text-lg">
              Thời gian còn lại: {formatTime(timeLeft)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-600">
              Đã làm: {answeredCount}/{filteredQuestions.length} câu
            </span>
            <button
              onClick={handleSubmitExam}
              className="bg-rose-500 hover:bg-rose-600 text-white font-black px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm shadow-md btn-kid-3d"
            >
              Nộp bài thi
            </button>
          </div>
        </div>
      )}

      {/* Exam Result Summary Card (Shown when submitted) */}
      {isSubmitted && (
        <div className="bg-white rounded-3xl border-4 border-amber-400 p-5 sm:p-8 shadow-2xl mb-8 animate-pop text-center">
          <div className="text-5xl sm:text-6xl mb-2 animate-bounce-slow">
            {totalScore >= 80 ? '🥇' : totalScore >= 60 ? '🥈' : totalScore >= 40 ? '🥉' : '📜'}
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-slate-800 mb-1">
            {totalScore >= 80
              ? 'Xuất Sắc! Huy Chương Vàng Timo!'
              : totalScore >= 60
              ? 'Tuyệt Vời! Huy Chương Bạc Timo!'
              : totalScore >= 40
              ? 'Hoan Hô! Huy Chương Đồng Timo!'
              : 'Chúc Mừng Bé Đã Hoàn Thành Bài Thi!'}
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-600 mb-6">
            Bé đạt <strong className="text-rose-600 text-xl sm:text-2xl">{totalScore}</strong> /{' '}
            {filteredQuestions.length * 4} điểm ({Math.round((totalScore / (filteredQuestions.length * 4)) * 100)}%)
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-lg mx-auto mb-6 text-left">
            <div className="bg-emerald-50 border border-emerald-300 p-2.5 sm:p-3 rounded-2xl">
              <span className="text-[11px] sm:text-xs font-bold text-emerald-700">Câu đúng</span>
              <p className="text-lg sm:text-xl font-black text-emerald-800">
                {filteredQuestions.filter((q) => userAnswers[q.id] === q.correctAnswer).length} câu
              </p>
            </div>
            <div className="bg-rose-50 border border-rose-300 p-2.5 sm:p-3 rounded-2xl">
              <span className="text-[11px] sm:text-xs font-bold text-rose-700">Câu sai</span>
              <p className="text-lg sm:text-xl font-black text-rose-800">
                {filteredQuestions.filter((q) => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer).length} câu
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-300 p-2.5 sm:p-3 rounded-2xl">
              <span className="text-[11px] sm:text-xs font-bold text-amber-700">Chưa làm</span>
              <p className="text-lg sm:text-xl font-black text-amber-800">
                {filteredQuestions.filter((q) => !userAnswers[q.id]).length} câu
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-300 p-2.5 sm:p-3 rounded-2xl">
              <span className="text-[11px] sm:text-xs font-bold text-yellow-700">Sao nhận được</span>
              <p className="text-lg sm:text-xl font-black text-yellow-800">+{totalScore} ⭐</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                soundManager.playPop();
                handleStartTimedExam();
              }}
              className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl shadow-md text-xs sm:text-base btn-kid-3d"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thi Lại Đề Này</span>
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setExamMode('practice');
                setIsSubmitted(false);
              }}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl border shadow-sm text-xs sm:text-base"
            >
              <BookOpen className="w-4 h-4" />
              <span>Xem Lại & Luyện Từng Câu</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Question Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left 3 cols: Current Question */}
        <div className="lg:col-span-3 bg-white rounded-3xl border-4 border-slate-200 shadow-xl p-4 sm:p-7 relative">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-rose-500 text-white font-black text-xs px-2.5 py-1 rounded-xl whitespace-nowrap">
                Câu {currentIndex + 1} / {filteredQuestions.length}
              </span>
              <span className="text-xs font-bold text-slate-500 hidden sm:inline">
                {currentQ.sectionName} (4 điểm)
              </span>
            </div>

            <button
              onClick={() => soundManager.speak(currentQ.titleVi)}
              className="flex items-center gap-1 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl font-bold text-xs btn-kid-3d shadow-sm"
            >
              <Volume2 className="w-4 h-4 text-amber-700 animate-pulse" />
              <span>Đọc đề tiếng Việt</span>
            </button>
          </div>

          {/* Bilingual Questions */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              English:
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-600 italic mb-2">
              {currentQ.titleEn}
            </p>
            <p className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-1">
              Tiếng Việt:
            </p>
            <p className="text-lg sm:text-xl font-extrabold text-slate-800 leading-relaxed">
              {currentQ.titleVi}
            </p>
          </div>

          {/* Question Image (if any) */}
          {currentQ.image && (
            <div className="my-4 p-3 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex justify-center">
              <img
                src={getAssetUrl(currentQ.image)}
                alt="Hình đề thi Timo"
                className="max-h-60 object-contain rounded-xl shadow-sm bg-white p-2"
              />
            </div>
          )}

          {/* Interactive Answer Slot directly on question */}
          <div className="flex items-center justify-center gap-3 my-3 bg-amber-50/80 p-3.5 rounded-2xl border-2 border-amber-300 shadow-sm">
            <span className="font-extrabold text-slate-700 text-sm sm:text-base">
              Đáp án của bé:
            </span>
            <div className="min-w-16 h-12 px-4 rounded-2xl bg-white border-4 border-amber-400 flex items-center justify-center text-lg sm:text-xl font-black text-amber-950 shadow-inner">
              {currentQ.options.find((o) => o.id === userAnswers[currentQ.id])?.text || '?'}
            </div>
          </div>

          <div className="text-xs font-bold text-slate-500 mb-2">
            👇 Bé chạm trực tiếp vào thẻ đáp án đúng:
          </div>

          {/* Interactive Direct Choice Tiles (No ABCD letter tags) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            {currentQ.options.map((opt) => {
              const isChosen = userAnswers[currentQ.id] === opt.id;
              const isCorrectAnswer = opt.id === currentQ.correctAnswer;
              const showResult = (examMode === 'practice' && isChosen) || isSubmitted;

              let btnStyle = 'bg-white hover:bg-amber-50 border-2 border-amber-300 text-slate-800';
              if (showResult) {
                if (isCorrectAnswer) {
                  btnStyle = 'bg-emerald-500 border-emerald-600 text-white ring-4 ring-emerald-200';
                } else if (isChosen && !isCorrectAnswer) {
                  btnStyle = 'bg-rose-500 border-rose-600 text-white';
                }
              } else if (isChosen) {
                btnStyle = 'bg-amber-300 border-amber-500 text-amber-950 font-black ring-2 ring-amber-400 scale-102';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-4 rounded-2xl font-black text-base sm:text-lg text-left transition-all flex items-center justify-between btn-kid-3d shadow-md ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">✨</span>
                    {opt.image && (
                      <img
                        src={getAssetUrl(opt.image)}
                        alt={opt.text}
                        className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg border border-slate-200 p-1 shadow-sm"
                      />
                    )}
                    <span>{opt.text}</span>
                  </div>

                  {showResult && isCorrectAnswer && <CheckCircle2 className="w-6 h-6 text-white animate-pop" />}
                  {showResult && isChosen && !isCorrectAnswer && <XCircle className="w-6 h-6 text-white" />}
                </button>
              );
            })}
          </div>

          {/* Practice Mode Explanation Box */}
          {(showExplanation[currentQ.id] || isSubmitted) && (
            <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-950 mb-4 animate-pop">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h4 className="font-black text-sm text-blue-900">
                  Mẹo giải bài toán Timo của Khủng Long Dino 🦖:
                </h4>
              </div>
              <p className="text-sm font-semibold whitespace-pre-line leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Between Questions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                soundManager.playPop();
                if (currentIndex > 0) {
                  setLastAnswerStatus('idle');
                  setCurrentIndex(currentIndex - 1);
                }
              }}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1 font-bold text-sm px-4 py-2 rounded-xl transition-all ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-slate-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 btn-kid-3d'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Câu trước</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                setLastAnswerStatus('idle');
                if (currentIndex < filteredQuestions.length - 1) {
                  setCurrentIndex(currentIndex + 1);
                } else if (examMode === 'timed' && !isSubmitted) {
                  handleSubmitExam();
                }
              }}
              className="flex items-center gap-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-sm px-5 py-2.5 rounded-xl shadow-md btn-kid-3d"
            >
              <span>
                {currentIndex < filteredQuestions.length - 1
                  ? 'Câu tiếp theo'
                  : examMode === 'timed' && !isSubmitted
                  ? 'Nộp bài thi 🏁'
                  : 'Xem tổng kết'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right 1 col: Question Map / Palette */}
        <div className="bg-white rounded-3xl border-4 border-slate-200 shadow-md p-5 h-fit">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-extrabold text-slate-800 text-sm">Bảng câu hỏi</h3>
            <span className="text-xs font-bold text-slate-500">
              {answeredCount}/{filteredQuestions.length} câu
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {filteredQuestions.map((q, idx) => {
              const isAnswered = Boolean(userAnswers[q.id]);
              const isCurrent = idx === currentIndex;
              let bg = 'bg-slate-100 text-slate-600 hover:bg-slate-200';

              if (isSubmitted) {
                bg =
                  userAnswers[q.id] === q.correctAnswer
                    ? 'bg-emerald-500 text-white font-bold'
                    : 'bg-rose-500 text-white font-bold';
              } else if (isCurrent) {
                bg = 'bg-amber-400 text-amber-950 font-black ring-2 ring-amber-500';
              } else if (isAnswered) {
                bg = 'bg-blue-500 text-white font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    soundManager.playClick();
                    setLastAnswerStatus('idle');
                    setCurrentIndex(idx);
                  }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all btn-kid-3d ${bg}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span>Đã chọn đáp án</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 ring-1 ring-amber-500" />
              <span>Đang làm câu này</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-200" />
              <span>Chưa làm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pet Companion that follows child in Timo Arena */}
      <FloatingPetCompanion
        pet={currentPet}
        lastAnswerStatus={lastAnswerStatus}
        hint={currentQ?.explanation || currentQ?.titleVi}
        onFeed={() => onAddStars(1)}
      />
    </div>
  );
}

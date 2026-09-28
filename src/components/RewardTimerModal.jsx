import React, { useState, useEffect } from 'react';
import { Play, Pause, X, CheckCircle, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/soundManager';

export default function RewardTimerModal({
  voucher,
  onClose,
  onFinishVoucher,
}) {
  const totalSeconds = (voucher.minutes || 10) * 60;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            setIsFinished(true);
            soundManager.playFanfare();
            confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
            if (onFinishVoucher) onFinishVoucher(voucher.id);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, voucher.id, onFinishVoucher]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const percentLeft = Math.round((secondsLeft / totalSeconds) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-pop">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 border-4 border-amber-400 shadow-2xl relative flex flex-col items-center text-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-black cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Voucher Icon & Title */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-300 to-orange-400 border-2 border-amber-400 flex items-center justify-center text-3xl shadow-sm mb-2">
          {voucher.icon || '⏱️'}
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-800">
          {voucher.title}
        </h2>
        <p className="text-xs font-bold text-slate-500 mt-0.5 mb-4">
          Đồng hồ đếm ngược thời gian thưởng của bé
        </p>

        {/* Timer Display */}
        <div className="w-full bg-gradient-to-b from-amber-50 to-orange-50 border-4 border-amber-300 rounded-3xl p-5 mb-4 shadow-inner flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-900 mb-1">
            <Clock className="w-4 h-4 animate-spin-slow text-amber-600" />
            <span>Thời Gian Còn Lại:</span>
          </div>

          <div className="text-5xl sm:text-6xl font-black text-amber-950 font-mono tracking-tight my-1 drop-shadow-xs">
            {formattedTime}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-amber-200/80 h-3 rounded-full overflow-hidden mt-3 p-0.5">
            <div
              className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full rounded-full transition-all duration-1000"
              style={{ width: `${percentLeft}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        {!isFinished ? (
          <div className="flex items-center gap-2 w-full">
            <button
              type="button"
              onClick={() => {
                soundManager.playPop();
                setIsRunning(!isRunning);
              }}
              className={`flex-1 py-3 px-4 rounded-2xl font-black text-sm transition-all btn-kid-3d flex items-center justify-center gap-2 cursor-pointer ${
                isRunning
                  ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-2 border-amber-300'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Tạm Dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Tiếp Tục</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                if (window.confirm('Bé hoặc Ba Mẹ có chắc chắn muốn kết thúc sớm phần thưởng này không?')) {
                  setIsRunning(false);
                  setIsFinished(true);
                  if (onFinishVoucher) onFinishVoucher(voucher.id);
                }
              }}
              className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-2xl font-black text-xs cursor-pointer"
            >
              Xong Sớm
            </button>
          </div>
        ) : (
          <div className="w-full space-y-3">
            <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-950 font-black text-sm flex items-center justify-center gap-1.5 animate-pop">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Đã hết giờ thưởng! Bé đã chơi rất ngoan!</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black rounded-2xl text-sm btn-kid-3d shadow-md cursor-pointer"
            >
              Trở Về & Học Tiếp Để Tích Sao ⭐
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

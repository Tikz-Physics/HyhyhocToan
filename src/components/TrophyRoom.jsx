import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Check, Lock, Heart, Award, Sparkles, Gift, Clock, Tv, Gamepad2, CheckCircle2 } from 'lucide-react';
import { BADGES_DATA } from '../data/curriculumData';
import { DEFAULT_REAL_REWARDS } from '../data/realRewardsData';
import { soundManager } from '../utils/soundManager';
import RewardTimerModal from './RewardTimerModal';

const COMPANIONS = [
  { id: 'dino', name: 'Bé Khủng Long Dino', icon: '🦖', cost: 0, desc: 'Người bạn dẫn đường dũng cảm và vui vẻ!' },
  { id: 'rabbit', name: 'Thỏ Bảy Màu Mimi', icon: '🐰', cost: 20, desc: 'Nhanh nhẹn và cực kỳ thông minh trong phép tính!' },
  { id: 'cat', name: 'Mèo Con Meo Meo', icon: '🐱', cost: 40, desc: 'Khéo léo, tinh mắt tìm quy luật siêu tài!' },
  { id: 'dog', name: 'Cún Bông Lắc Lư', icon: '🐶', cost: 60, desc: 'Trung thành, luôn cổ vũ bé mỗi khi làm bài!' },
  { id: 'dragon', name: 'Rồng Con Phép Thuật', icon: '🐲', cost: 100, desc: 'Vua toán học huyền thoại với lửa sao băng!' },
];

export default function TrophyRoom({
  stars,
  onSpendStars,
  userMedals = [],
  unlockedPets = ['dino'],
  activePet = 'dino',
  onSelectPet,
  redeemedRewards = [],
  onRedeemRealReward,
  onUseRewardVoucher,
}) {
  const [activeTab, setActiveTab] = useState('real_rewards'); // 'real_rewards', 'trophies', 'pets'
  const [notice, setNotice] = useState('');
  const [activeVoucherForTimer, setActiveVoucherForTimer] = useState(null);

  const handleAdoptPet = (pet) => {
    if (unlockedPets.includes(pet.id)) {
      soundManager.playPop();
      onSelectPet(pet.id);
      setNotice(`Đã chọn bạn ${pet.name} đồng hành cùng bé! 🎉`);
      setTimeout(() => setNotice(''), 3000);
    } else if (stars >= pet.cost) {
      soundManager.playFanfare();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      onSpendStars(pet.cost, pet.id);
      onSelectPet(pet.id);
      setNotice(`Chúc mừng bé đã đón thành công bạn ${pet.name}! 🎈`);
      setTimeout(() => setNotice(''), 3500);
    } else {
      soundManager.playWrong();
      setNotice(`Bé cần tích lũy thêm ${pet.cost - stars} ⭐ nữa để đổi bạn ${pet.name} nhé!`);
      setTimeout(() => setNotice(''), 4000);
    }
  };

  const handleClaimRealReward = (reward) => {
    if (stars >= reward.cost) {
      soundManager.playFanfare();
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
      if (onRedeemRealReward) {
        onRedeemRealReward(reward);
      }
      setNotice(`🎉 Tuyệt vời! Bé đã đổi thành công "${reward.title}"! Hãy xem phiếu thưởng bên dưới nhé!`);
      setTimeout(() => setNotice(''), 4500);
    } else {
      soundManager.playWrong();
      setNotice(`Bé chưa đủ sao! Cần thêm ${reward.cost - stars} ⭐ nữa. Bé hãy học chăm chỉ để tích thêm sao nhé!`);
      setTimeout(() => setNotice(''), 4000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 pb-28 sm:pb-24">
      {/* Friendly Notice Toast */}
      {notice && (
        <div className="mb-4 p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-center rounded-2xl shadow-lg animate-pop">
          {notice}
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-3xl p-5 sm:p-6 text-amber-950 shadow-xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-4 border-amber-300">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-white/90 border-2 border-amber-500 flex items-center justify-center text-4xl shadow-inner animate-wiggle flex-shrink-0">
            🎁
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Đổi Thưởng & Phòng Truyền Thống ⭐
            </h1>
            <p className="text-xs sm:text-sm font-bold text-amber-900 mt-0.5">
              Tích lũy sao từ bài tập để đổi thời gian xem hoạt hình, chơi game và đón bạn đồng hành!
            </p>
          </div>
        </div>

        <div className="bg-white/95 border-2 border-amber-500 px-5 py-2.5 rounded-2xl shadow-sm font-black text-base sm:text-lg flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl animate-bounce-slow">⭐</span>
          <span>{stars} Sao Tích Lũy</span>
        </div>
      </div>

      {/* 3 Switch Tabs: Real Rewards, Trophies, Pets */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-6 overflow-x-auto p-1">
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            setActiveTab('real_rewards');
          }}
          className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-black text-xs sm:text-base transition-all btn-kid-3d cursor-pointer flex-shrink-0 ${
            activeTab === 'real_rewards'
              ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md ring-2 ring-rose-400 scale-105'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
          <span>🎁 Phần Thưởng Thực Tế</span>
        </button>

        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            setActiveTab('trophies');
          }}
          className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-black text-xs sm:text-base transition-all btn-kid-3d cursor-pointer flex-shrink-0 ${
            activeTab === 'trophies'
              ? 'bg-amber-400 text-amber-950 shadow-md ring-2 ring-amber-500 scale-105'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
          <span>🏆 Cúp & Huy Hiệu</span>
        </button>

        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            setActiveTab('pets');
          }}
          className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-black text-xs sm:text-base transition-all btn-kid-3d cursor-pointer flex-shrink-0 ${
            activeTab === 'pets'
              ? 'bg-amber-400 text-amber-950 shadow-md ring-2 ring-amber-500 scale-105'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
          <span>🐾 Bạn Đồng Hành</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* TAB 1: PHẦN THƯỞNG THỰC TẾ (VIDEO, GAME, KEM, DÃ NGOẠI)      */}
      {/* ============================================================ */}
      {activeTab === 'real_rewards' && (
        <div className="space-y-6 animate-pop">
          {/* Active Vouchers Section (Phiếu Thưởng Của Bé) */}
          <div className="bg-white rounded-3xl border-4 border-amber-300 p-4 sm:p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-rose-500" />
                <h2 className="font-black text-lg sm:text-xl text-slate-800">
                  Phiếu Thưởng Của Bé ({redeemedRewards.filter(r => r.status === 'available').length} phiếu sẵn sàng)
                </h2>
              </div>
            </div>

            {redeemedRewards.length === 0 ? (
              <div className="p-6 bg-amber-50/70 border-2 border-dashed border-amber-200 rounded-2xl text-center">
                <span className="text-4xl block mb-2">🎟️</span>
                <p className="font-extrabold text-slate-700 text-sm">
                  Bé chưa đổi phiếu thưởng nào!
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Hãy chọn một phần thưởng bên dưới để đổi giờ xem video hoặc chơi game nhé!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {redeemedRewards.map((voucher) => {
                  const isAvailable = voucher.status === 'available';
                  return (
                    <div
                      key={voucher.id}
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                        isAvailable
                          ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-400 shadow-sm'
                          : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white border border-amber-300 flex items-center justify-center text-2xl shadow-2xs flex-shrink-0">
                          {voucher.icon || '🎁'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-sm text-slate-900 truncate">
                              {voucher.title}
                            </span>
                            {isAvailable && (
                              <span className="bg-emerald-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase flex-shrink-0">
                                Sẵn sàng
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Đổi với {voucher.cost} ⭐ • {voucher.minutes > 0 ? `${voucher.minutes} phút` : 'Quà tặng'}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-amber-200/80 flex items-center justify-between gap-2">
                        {isAvailable ? (
                          voucher.minutes > 0 ? (
                            <button
                              type="button"
                              onClick={() => {
                                soundManager.playFanfare();
                                setActiveVoucherForTimer(voucher);
                              }}
                              className="w-full py-2 px-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 text-white font-black text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 btn-kid-3d cursor-pointer"
                            >
                              <Clock className="w-3.5 h-3.5" />
                              <span>Bắt Đầu Bấm Giờ ({voucher.minutes} phút)</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                soundManager.playCorrect();
                                if (onUseRewardVoucher) onUseRewardVoucher(voucher.id);
                              }}
                              className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 btn-kid-3d cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Ba Mẹ Bấm Xác Nhận Đã Nhận Quà</span>
                            </button>
                          )
                        ) : (
                          <div className="w-full py-1 text-center font-bold text-xs text-slate-400 flex items-center justify-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Đã sử dụng xong</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Catalog of Rewards */}
          <div className="bg-white rounded-3xl border-4 border-amber-200 p-4 sm:p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Gift className="w-6 h-6 text-rose-500" />
                <h2 className="font-black text-lg sm:text-xl text-slate-800">
                  Cửa Hàng Phần Thưởng Đổi Bằng Sao ⭐
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {DEFAULT_REAL_REWARDS.map((reward) => {
                const canAfford = stars >= reward.cost;
                return (
                  <div
                    key={reward.id}
                    className="p-4 rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-white to-amber-50/50 hover:shadow-md transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-3xl p-2 bg-white rounded-xl border border-amber-200 shadow-2xs group-hover:scale-110 transition-transform">
                          {reward.icon}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                          {reward.badge}
                        </span>
                      </div>
                      <h3 className="font-black text-slate-900 text-sm sm:text-base leading-snug">
                        {reward.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {reward.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-amber-200/80 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 font-black text-amber-950 text-sm">
                        <span>⭐</span>
                        <span>{reward.cost} Sao</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleClaimRealReward(reward)}
                        className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all flex items-center gap-1 btn-kid-3d cursor-pointer ${
                          canAfford
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 text-amber-950 shadow-xs'
                            : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                        }`}
                      >
                        {canAfford ? (
                          <>
                            <span>Đổi Ngay</span>
                            <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-bounce" />
                          </>
                        ) : (
                          <span>Thiếu {reward.cost - stars} ⭐</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: HUY HIỆU & CÚP TIMO                                   */}
      {/* ============================================================ */}
      {activeTab === 'trophies' && (
        <div className="space-y-6 animate-pop">
          {/* Timo Medals Section */}
          <div className="bg-white rounded-3xl border-4 border-amber-200 p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-rose-500" />
              <h2 className="font-black text-xl text-slate-800">
                Huy Chương Kỳ Thi Timo Của Bé
              </h2>
            </div>

            {userMedals.length === 0 ? (
              <div className="p-6 bg-rose-50 border-2 border-dashed border-rose-200 rounded-2xl text-center">
                <span className="text-4xl block mb-2">🎯</span>
                <p className="font-extrabold text-slate-700">
                  Bé chưa có huy chương Timo nào!
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Hãy vào mục <strong>Luyện Đề</strong> và đạt điểm cao để nhận Huy Chương Vàng, Bạc, Đồng nhé!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {userMedals.map((medal, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-b from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-300 text-center shadow-xs flex flex-col items-center"
                  >
                    <span className="text-4xl mb-1 animate-bounce-slow">
                      {medal.type === 'gold' ? '🥇' : medal.type === 'silver' ? '🥈' : '🥉'}
                    </span>
                    <span className="font-black text-slate-800 text-sm">
                      {medal.name}
                    </span>
                    <span className="text-[11px] font-bold text-amber-800 mt-0.5">
                      {medal.score}/100 Điểm
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Curriculum Badges */}
          <div className="bg-white rounded-3xl border-4 border-amber-200 p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <h2 className="font-black text-xl text-slate-800">
                Huy Hiệu Thành Tích Chinh Phục
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {BADGES_DATA.map((badge) => {
                const isUnlocked = stars >= badge.requiredStars;
                return (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-2xl border-2 text-center transition-all ${
                      isUnlocked
                        ? 'bg-gradient-to-b from-amber-50 to-yellow-50 border-amber-300 shadow-sm'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="text-4xl mb-2">
                      {isUnlocked ? badge.icon : '🔒'}
                    </div>
                    <h3 className="font-black text-slate-800 text-sm">
                      {badge.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {badge.desc}
                    </p>
                    <div className="mt-3">
                      {isUnlocked ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> Đã Mở Khóa
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-slate-500 bg-slate-200 px-2.5 py-0.5 rounded-full">
                          <Lock className="w-3 h-3" /> Cần {badge.requiredStars} ⭐
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 3: BẠN ĐỒNG HÀNH (THÚ CƯNG)                              */}
      {/* ============================================================ */}
      {activeTab === 'pets' && (
        <div className="bg-white rounded-3xl border-4 border-amber-200 p-6 shadow-md animate-pop">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-rose-500" />
            <h2 className="font-black text-xl text-slate-800">
              Bộ Sưu Tập Bạn Đồng Hành
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {COMPANIONS.map((pet) => {
              const isUnlocked = unlockedPets.includes(pet.id);
              const isActive = activePet === pet.id;
              const canAfford = stars >= pet.cost;

              return (
                <div
                  key={pet.id}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center text-center ${
                    isActive
                      ? 'bg-amber-100/80 border-amber-400 shadow-md ring-4 ring-amber-300'
                      : isUnlocked
                      ? 'bg-white border-amber-200 shadow-xs'
                      : 'bg-slate-50 border-slate-200 opacity-70'
                  }`}
                >
                  <div className="w-20 h-20 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-5xl mb-3 shadow-inner">
                    {pet.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-base">
                    {pet.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 min-h-[32px]">
                    {pet.desc}
                  </p>

                  <div className="mt-4 w-full">
                    {isActive ? (
                      <div className="py-2 bg-emerald-500 text-white font-black text-xs rounded-xl shadow-xs flex items-center justify-center gap-1">
                        <Check className="w-4 h-4" />
                        <span>Đang Đồng Hành</span>
                      </div>
                    ) : isUnlocked ? (
                      <button
                        type="button"
                        onClick={() => handleAdoptPet(pet)}
                        className="w-full py-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs rounded-xl shadow-xs btn-kid-3d cursor-pointer"
                      >
                        Chọn Bạn Này
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAdoptPet(pet)}
                        className={`w-full py-2 rounded-xl font-black text-xs transition-all btn-kid-3d cursor-pointer ${
                          canAfford
                            ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {canAfford ? `Đổi Với ${pet.cost} ⭐` : `Cần ${pet.cost} ⭐`}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Countdown Timer Modal */}
      {activeVoucherForTimer && (
        <RewardTimerModal
          voucher={activeVoucherForTimer}
          onClose={() => setActiveVoucherForTimer(null)}
          onFinishVoucher={(id) => {
            if (onUseRewardVoucher) onUseRewardVoucher(id);
          }}
        />
      )}
    </div>
  );
}

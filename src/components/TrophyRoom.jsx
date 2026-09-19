import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Check, Lock, Heart, Award, Sparkles } from 'lucide-react';
import { BADGES_DATA } from '../data/curriculumData';
import { soundManager } from '../utils/soundManager';

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
}) {
  const [activeTab, setActiveTab] = useState('trophies'); // 'trophies' or 'pets'
  const [notice, setNotice] = useState('');

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

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 pb-28 sm:pb-24">
      {/* Friendly Notice Toast */}
      {notice && (
        <div className="mb-4 p-3 bg-amber-500 text-white font-black text-center rounded-2xl shadow-lg animate-pop">
          {notice}
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-3xl p-6 text-amber-950 shadow-xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-4 border-amber-300">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-white/80 border-2 border-amber-500 flex items-center justify-center text-4xl shadow-inner animate-wiggle">
            🏆
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Phòng Truyền Thống & Đổi Thưởng ⭐
            </h1>
            <p className="text-sm font-bold text-amber-900 mt-0.5">
              Nơi vinh danh thành tích, cúp Timo và bộ sưu tập bạn đồng hành đáng yêu!
            </p>
          </div>
        </div>

        <div className="bg-white/90 border-2 border-amber-500 px-5 py-2.5 rounded-2xl shadow-sm font-black text-lg flex items-center gap-2">
          <span className="text-2xl animate-bounce-slow">⭐</span>
          <span>{stars} Sao Tích Lũy</span>
        </div>
      </div>

      {/* Switch Tabs */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('trophies');
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-black text-sm sm:text-base transition-all btn-kid-3d ${
            activeTab === 'trophies'
              ? 'bg-amber-400 text-amber-950 shadow-md ring-2 ring-amber-500 scale-105'
              : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          <Trophy className="w-5 h-5 text-amber-600" />
          <span>Huy Hiệu & Cúp Timo</span>
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('pets');
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-black text-sm sm:text-base transition-all btn-kid-3d ${
            activeTab === 'pets'
              ? 'bg-amber-400 text-amber-950 shadow-md ring-2 ring-amber-500 scale-105'
              : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          <Heart className="w-5 h-5 text-rose-500" />
          <span>Đổi Thú Cưng Đồng Hành</span>
        </button>
      </div>

      {/* Tab 1: Huy Hiệu & Cúp Timo */}
      {activeTab === 'trophies' && (
        <div className="space-y-6">
          {/* Timo Medals Section */}
          <div className="bg-white rounded-3xl border-4 border-amber-200 p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-rose-500" />
              <h2 className="font-black text-xl text-slate-800">
                Huy Chương Kỳ Thi Timo Của Bé
              </h2>
            </div>

            {userMedals.length === 0 ? (
              <div className="text-center py-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl">
                <div className="text-5xl mb-2 opacity-50">🏅</div>
                <p className="font-bold text-slate-500">
                  Bé chưa có huy chương Timo nào!
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Hãy vào mục <strong>Luyện Đề Timo</strong> và thử sức bấm giờ để rinh huy chương Vàng, Bạc, Đồng nhé!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {userMedals.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 flex items-center gap-3 shadow-sm"
                  >
                    <span className="text-4xl">{m.icon}</span>
                    <div>
                      <h4 className="font-black text-sm text-slate-800">{m.name}</h4>
                      <p className="text-xs font-bold text-amber-700">Điểm: {m.score} điểm</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* General Badges List */}
          <div className="bg-white rounded-3xl border-4 border-slate-200 p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h2 className="font-black text-xl text-slate-800">Huy Hiệu Trưởng Thành</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BADGES_DATA.map((badge) => {
                const isUnlocked = stars >= badge.requiredStars;
                return (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                      isUnlocked
                        ? 'bg-amber-50/80 border-amber-400 shadow-sm'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${
                        isUnlocked ? 'bg-amber-300' : 'bg-slate-200'
                      }`}
                    >
                      {isUnlocked ? badge.icon : '🔒'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-base text-slate-800">{badge.name}</h4>
                        {isUnlocked && (
                          <span className="bg-emerald-500 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
                            Đã đạt
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">{badge.desc}</p>
                      <p className="text-[11px] font-bold text-amber-700 mt-1">
                        Yêu cầu: {badge.requiredStars} ⭐
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Thú Cưng Đồng Hành */}
      {activeTab === 'pets' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {COMPANIONS.map((pet) => {
            const isUnlocked = unlockedPets.includes(pet.id);
            const isSelected = activePet === pet.id;
            const canAfford = stars >= pet.cost;

            return (
              <div
                key={pet.id}
                className={`bg-white rounded-3xl border-4 p-5 text-center transition-all shadow-md flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500 ring-4 ring-emerald-200 shadow-xl'
                    : isUnlocked
                    ? 'border-amber-300 hover:border-amber-400'
                    : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="text-6xl my-3 animate-bounce-slow">{pet.icon}</div>
                  <h3 className="font-black text-lg text-slate-800">{pet.name}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 mb-4">{pet.desc}</p>
                </div>

                <div>
                  {isSelected ? (
                    <div className="bg-emerald-500 text-white font-black py-2 rounded-2xl flex items-center justify-center gap-1.5 shadow-sm text-sm">
                      <Check className="w-4 h-4" />
                      <span>Đang đồng hành</span>
                    </div>
                  ) : isUnlocked ? (
                    <button
                      onClick={() => handleAdoptPet(pet)}
                      className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-2 rounded-2xl shadow-sm text-sm btn-kid-3d"
                    >
                      Chọn bạn này
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAdoptPet(pet)}
                      disabled={!canAfford}
                      className={`w-full py-2 rounded-2xl font-black text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                        canAfford
                          ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white btn-kid-3d'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <Lock className="w-4 h-4" />
                      <span>Đổi với {pet.cost} ⭐</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

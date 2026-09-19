import React, { useState } from 'react';
import { BarChart3, Lightbulb, RotateCcw } from 'lucide-react';
import { CURRICULUM_ZONES } from '../data/curriculumData';

export default function ParentPortal({
  stars,
  completedTasks = [],
  userMedals = [],
  onResetProgress,
  currentAccount,
  onOpenAccountModal,
}) {
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const totalAvailableTasks = CURRICULUM_ZONES.reduce(
    (acc, z) => acc + z.basicLevels.length + z.timoChallenges.length,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 pb-28 sm:pb-24 space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-3xl p-6 text-white shadow-xl flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Báo Cáo Tiến Độ
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            Góc Phụ Huynh & Thầy Cô 👨‍👩‍👧
          </h1>
          <p className="text-sm font-medium text-blue-100 mt-0.5">
            Theo dõi năng lực toán học, mức độ làm quen tư duy Timo và lời khuyên đồng hành cùng con.
          </p>
        </div>
        <div className="text-5xl hidden sm:block">📚</div>
      </div>

      {/* Current Child Indicator & Switcher */}
      {currentAccount && (
        <div className="bg-white border-2 border-amber-300 rounded-2xl p-3.5 sm:p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl shadow-sm flex-shrink-0">
              {currentAccount.avatar || '🦁'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-slate-400 uppercase">Hồ sơ bé:</span>
                <span className="text-lg font-black text-slate-800">{currentAccount.name}</span>
              </div>
              <p className="text-xs font-semibold text-slate-500">
                Đang xem kết quả học tập và tiến độ tiến hóa thú cưng của bé
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (onOpenAccountModal) onOpenAccountModal();
            }}
            className="w-full sm:w-auto px-4 py-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs sm:text-sm rounded-xl shadow-sm btn-kid-3d cursor-pointer whitespace-nowrap"
          >
            👥 Đổi Bé Khác / + Thêm Bé
          </button>
        </div>
      )}

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-black">
            ⭐
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500">Tổng sao tích lũy</span>
            <p className="text-2xl font-black text-slate-800">{stars} Sao</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-black">
            ✅
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500">Nhiệm vụ hoàn thành</span>
            <p className="text-2xl font-black text-slate-800">
              {completedTasks.length} / {totalAvailableTasks} bài
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-black">
            🏅
          </div>
          <div>
            <span className="text-xs font-bold text-slate-500">Huy chương Timo</span>
            <p className="text-2xl font-black text-slate-800">
              {userMedals.length} huy chương
            </p>
          </div>
        </div>
      </div>

      {/* Progress Breakdown across 6 Zones */}
      <div className="bg-white rounded-3xl border-4 border-slate-200 p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">
            Tiến Trình Theo 8 Chủ Đề Toán Lớp 1 (SGK Mới)
          </h2>
        </div>

        <div className="space-y-4">
          {CURRICULUM_ZONES.map((zone) => {
            const totalInZone = zone.basicLevels.length + zone.timoChallenges.length;
            const completedInZone = completedTasks.filter((t) =>
              t.startsWith(zone.id)
            ).length;
            const percent = Math.round((completedInZone / totalInZone) * 100);

            return (
              <div key={zone.id} className="border border-slate-100 rounded-2xl p-4 bg-slate-50/60">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{zone.icon}</span>
                    <span className="font-extrabold text-slate-800 text-sm sm:text-base">
                      {zone.title}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">
                    {completedInZone}/{totalInZone} ({percent}%)
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pedagogical Guidance for Parents */}
      <div className="bg-white rounded-3xl border-4 border-amber-200 p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">
            Lời Khuyên Sư Phạm Cho Cha Mẹ Có Con Học Lớp 1
          </h2>
        </div>

        <div className="space-y-3.5 text-sm font-semibold text-slate-700 leading-relaxed">
          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <strong className="text-amber-900 block mb-1">
              1. Trực quan hóa trước khi viết số:
            </strong>
            Trẻ 6 tuổi cần nhìn thấy các vật thể cụ thể (quả táo, chiếc kẹo, ngón tay) trước khi làm quen với các con số trừu tượng. Việc cho bé chạm đếm trực tiếp trên màn hình giúp hình thành cảm giác số học vững chắc.
          </div>

          <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200">
            <strong className="text-blue-900 block mb-1">
              2. Phương pháp tiếp cận Toán Timo / Kangaroo:
            </strong>
            Toán Timo lớp 1 không yêu cầu tính toán quá phức tạp mà chú trọng **nhận biết quy luật (pattern)** và **hình dung không gian (3D cubes, gấp giấy)**. Hãy khuyến khích con tìm sự lặp lại của màu sắc, hình dáng thay vì chỉ chăm chú vào phép tính.
          </div>

          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <strong className="text-emerald-900 block mb-1">
              3. Luôn khen ngợi nỗ lực thay vì chỉ điểm số:
            </strong>
            Khi con làm sai, hãy cùng con ấn nút "Đọc đề" và "Mẹo của Dino" để con tự phát hiện chỗ nhầm lẫn. Việc không phạt hay trừ điểm khi làm sai giúp bé nuôi dưỡng sự tự tin và đam mê học tập lâu dài.
          </div>
        </div>
      </div>

      {/* Reset Progress Option */}
      <div className="flex justify-end pt-2">
        {!isConfirmingReset ? (
          <button
            type="button"
            onClick={() => setIsConfirmingReset(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-rose-600 transition-colors py-2 px-3 rounded-xl hover:bg-rose-50"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại tiến trình học tập</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 p-2 rounded-2xl animate-pop">
            <span className="text-xs font-bold text-rose-800">
              Đặt lại toàn bộ sao và huy chương?
            </span>
            <button
              type="button"
              onClick={() => {
                setIsConfirmingReset(false);
                onResetProgress();
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white font-black text-xs px-3 py-1.5 rounded-xl shadow-xs"
            >
              Đồng ý xóa
            </button>
            <button
              type="button"
              onClick={() => setIsConfirmingReset(false)}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs px-2.5 py-1.5 rounded-xl"
            >
              Hủy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { soundManager } from '../utils/soundManager';

const SHORT_TITLES = {
  counting_numbers_10: 'Đếm Số 0 - 10',
  geometry_spatial: 'Hình Khối & Vị Trí',
  add_sub_10: 'Cộng & Trừ Đến 10',
  numbers_20: 'Số & Tính Đến 20',
  numbers_100: 'Số Đến 100 & Chục',
  measurement_cm: 'Đo Độ Dài (cm)',
  add_sub_100: 'Cộng & Trừ Đến 100',
  time_statistics: 'Đồng Hồ & Lịch',
};

export default function ZoneCard({ zone, onSelect, completedCount = 0 }) {
  const totalLevels = zone.basicLevels.length + zone.timoChallenges.length;
  const isCompleted = completedCount >= totalLevels;
  const shortTitle = SHORT_TITLES[zone.id] || zone.title;

  return (
    <button
      type="button"
      onClick={() => {
        soundManager.playPop();
        onSelect(zone.id);
      }}
      className={`w-full bg-white hover:bg-amber-50/70 active:scale-98 rounded-2xl p-2 sm:p-3 border-2 transition-all flex items-center justify-between gap-2 text-left shadow-xs hover:shadow-md btn-kid-3d cursor-pointer ${
        isCompleted ? 'border-emerald-400 bg-emerald-50/50' : zone.borderColor
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-xs bg-gradient-to-br ${zone.color} text-white flex-shrink-0`}
        >
          {zone.icon}
        </div>
        <div className="min-w-0">
          <h3 className="font-black text-xs sm:text-sm text-slate-800 truncate">
            {shortTitle}
          </h3>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[11px] font-extrabold text-amber-600">
              ⭐ {completedCount}/{totalLevels}
            </span>
            {isCompleted && (
              <span className="text-[9px] font-black text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded">
                Đã xong
              </span>
            )}
          </div>
        </div>
      </div>

      <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-black text-xs flex-shrink-0">
        ➜
      </span>
    </button>
  );
}

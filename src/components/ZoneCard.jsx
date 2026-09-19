import React from 'react';
import { soundManager } from '../utils/soundManager';

const ZONE_TITLES = {
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
  const displayTitle = ZONE_TITLES[zone.id] || zone.title;

  return (
    <button
      type="button"
      onClick={() => {
        soundManager.playPop();
        onSelect(zone.id);
      }}
      className={`w-full bg-white hover:bg-amber-50/70 active:scale-98 rounded-2xl p-2.5 sm:p-3 border-2 transition-all flex items-center gap-2.5 text-left shadow-xs hover:shadow-md btn-kid-3d cursor-pointer ${
        isCompleted ? 'border-emerald-400 bg-emerald-50/50' : zone.borderColor
      }`}
    >
      {/* Icon Box */}
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-xs bg-gradient-to-br ${zone.color} text-white flex-shrink-0`}
      >
        {zone.icon}
      </div>

      {/* Full Content Text (100% visible, no truncate) */}
      <div className="flex-1 min-w-0">
        <h3 className="font-black text-xs sm:text-sm text-slate-800 leading-tight whitespace-normal break-words">
          {displayTitle}
        </h3>
        <div className="flex items-center gap-1.5 mt-0.5">
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
    </button>
  );
}

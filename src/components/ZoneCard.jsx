import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/soundManager';

export default function ZoneCard({ zone, onSelect, completedCount = 0 }) {
  const totalLevels = zone.basicLevels.length + zone.timoChallenges.length;
  const isCompleted = completedCount >= totalLevels;

  return (
    <div
      onClick={() => {
        soundManager.playPop();
        onSelect(zone.id);
      }}
      className={`relative group bg-white rounded-3xl p-5 border-4 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1.5 ${zone.borderColor}`}
    >
      {/* Top Banner & Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
          {zone.badge}
        </span>
        <div className="flex items-center gap-1 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-full text-xs font-bold text-amber-800">
          <span className="text-amber-500">⭐</span>
          <span>{completedCount}/{totalLevels} bài</span>
        </div>
      </div>

      {/* Main Icon & Title */}
      <div className="flex items-center gap-4 my-2">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-inner bg-gradient-to-br ${zone.color} text-white group-hover:scale-110 group-hover:rotate-3 transition-transform`}
        >
          {zone.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-amber-600 transition-colors">
            {zone.title}
          </h3>
          <p className="text-xs font-semibold text-slate-500 line-clamp-2 mt-0.5">
            {zone.description}
          </p>
        </div>
      </div>

      {/* Timo Integration Highlight Tag */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
        <div className="flex items-center gap-1.5 text-blue-700 bg-blue-50 px-2.5 py-1 rounded-xl border border-blue-200">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-wiggle" />
          <span>Có {zone.timoCount} bài Tư Duy Timo</span>
        </div>

        <span className="flex items-center gap-1 text-amber-600 group-hover:text-amber-700 font-extrabold cursor-pointer">
          <span>Vào chơi</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>

      {/* Completed Stamp */}
      {isCompleted && (
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">
          <CheckCircle2 className="w-3 h-3" />
          <span>Hoàn thành!</span>
        </div>
      )}
    </div>
  );
}

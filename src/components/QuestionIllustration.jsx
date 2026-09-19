import React from 'react';

/**
 * Helper: Bó 10 Que Tính Tre (1 chục)
 */
function QueTinhBo({ label = '10 que', isCrossed = false }) {
  return (
    <div
      className={`relative flex flex-col items-center transition-all ${
        isCrossed ? 'opacity-40 scale-90' : 'hover:scale-105'
      }`}
    >
      <div className="relative bg-amber-50 border-2 border-amber-400 px-2 py-1 rounded-xl shadow-xs flex flex-col items-center">
        <span className="text-2xl select-none">🎋</span>
        <span className="text-[9px] font-black text-amber-950 bg-amber-200 px-1.5 py-0.2 rounded mt-0.5 whitespace-nowrap">
          {label}
        </span>
      </div>
      {isCrossed && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-3xl font-black text-rose-600 drop-shadow">❌</span>
        </div>
      )}
    </div>
  );
}

/**
 * Helper: Que Tính Đơn Lẻ Nhiều Màu (Đơn vị)
 */
function QueTinhLe({ color = 'blue', isCrossed = false }) {
  const colorMap = {
    blue: 'bg-blue-500 border-blue-600',
    red: 'bg-rose-500 border-rose-600',
    amber: 'bg-amber-400 border-amber-600',
    green: 'bg-emerald-500 border-emerald-600',
    purple: 'bg-purple-500 border-purple-600',
  };
  const colorClass = colorMap[color] || colorMap.blue;

  return (
    <div className={`relative flex flex-col items-center select-none ${isCrossed ? 'opacity-35' : ''}`}>
      <div className={`w-2.5 h-10 rounded-full border shadow-2xs ${colorClass}`} />
      {isCrossed && (
        <span className="absolute -top-1.5 text-xs text-rose-600 font-black">❌</span>
      )}
    </div>
  );
}

/**
 * QuestionIllustration: Renders rich, engaging visual representations
 * using real counting sticks (bó que tính tre & que tính rời) and familiar daily objects.
 */
export default function QuestionIllustration({ level }) {
  if (!level) return null;

  const id = level.id;

  // 1. GEOMETRY: Circle, Square, Triangle (Cohesive Scene - No button-like cards)
  if (id === 'geo1') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-md mx-auto">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
          <div className="flex flex-col items-center">
            <span className="text-3xl animate-bounce-slow">⚽</span>
            <span className="text-[10px] font-bold text-slate-600">Quả bóng</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl animate-bounce-slow">🛞</span>
            <span className="text-[10px] font-bold text-slate-600">Bánh xe</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl animate-bounce-slow">⏰</span>
            <span className="text-[10px] font-bold text-slate-600">Đồng hồ</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl animate-bounce-slow">🪙</span>
            <span className="text-[10px] font-bold text-slate-600">Đồng xu</span>
          </div>
        </div>
        <div className="text-xs font-black text-amber-900 bg-amber-100/90 px-3 py-1 rounded-xl border border-amber-300 shadow-2xs text-center">
          ✨ Các đồ vật trên đều cong tròn đều và lăn tròn vo được!
        </div>
      </div>
    );
  }

  // 2. GEOMETRY: Triangle Edges & Vertices
  if (id === 'geo2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 120" className="w-40 h-28">
          <line x1="80" y1="20" x2="20" y2="105" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
          <line x1="80" y1="20" x2="140" y2="105" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
          <line x1="20" y1="105" x2="140" y2="105" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />
          <circle cx="80" cy="20" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <circle cx="20" cy="105" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <circle cx="140" cy="105" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
        </svg>
        <span className="text-xs font-black text-rose-900 mt-1">🔺 Bé hãy đếm số cạnh của hình tam giác nhé!</span>
      </div>
    );
  }

  // 3. GEOMETRY: Rectangle
  if (id === 'geo3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex items-center justify-center gap-4 my-1">
          <div className="flex flex-col items-center">
            <span className="text-4xl">✉️</span>
            <span className="text-[10px] font-bold text-emerald-800">Phong bì thư</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">📘</span>
            <span className="text-[10px] font-bold text-emerald-800">Quyển sách toán</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">📱</span>
            <span className="text-[10px] font-bold text-emerald-800">Điện thoại</span>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-900 mt-2 bg-emerald-100/90 px-3 py-1 rounded-xl border border-emerald-300">
          Các đồ vật này đều có dạng Hình Chữ Nhật 🟩
        </span>
      </div>
    );
  }

  // 4. GEOMETRY: Milk Carton 3D Box
  if (id === 'geo5') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-2.5 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-5xl animate-bounce-slow">🧃</div>
        <div className="text-left">
          <div className="text-xs sm:text-sm font-black text-sky-950">Hộp sữa tươi dinh dưỡng</div>
          <div className="text-[11px] font-bold text-sky-800">Các mặt của hộp sữa là hình chữ nhật</div>
        </div>
      </div>
    );
  }

  // 5. ADDITION: 7 + 0 = 7 (7 Stars + Empty Plate)
  if (id === 'as3') {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-4 my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-md mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-amber-300 shadow-2xs">
          <div className="flex flex-wrap items-center justify-center gap-1 w-24">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="text-base animate-bounce-slow">⭐</span>
            ))}
          </div>
          <span className="text-xs font-black text-amber-900 mt-1">7 ngôi sao</span>
        </div>
        <span className="text-2xl font-black text-amber-700">+</span>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-slate-200 shadow-2xs w-20 h-16 justify-center">
          <span className="text-xs font-bold text-slate-400 italic">Đĩa trống</span>
          <span className="text-xs font-black text-slate-700 mt-1">0 sao</span>
        </div>
        <span className="text-2xl font-black text-amber-700">=</span>
        <div className="w-10 h-10 rounded-xl bg-amber-200 border-2 border-amber-500 flex items-center justify-center text-lg font-black text-amber-950">
          ?
        </div>
      </div>
    );
  }

  // 6. ADDITION: 6 + ? = 10 (10-Frame with Apples)
  if (id === 'as4') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-blue-50 rounded-2xl border-2 border-blue-200 shadow-2xs max-w-md mx-auto">
        <span className="text-[11px] font-black text-blue-900 mb-2">Khung 10 ô: 6 quả táo + [ ? ] ô trống = 10</span>
        <div className="grid grid-cols-5 gap-1.5 bg-white p-2 rounded-xl border-2 border-blue-300 shadow-inner">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-9 h-9 rounded-lg bg-red-100 border border-red-300 flex items-center justify-center text-xl">
              🍎
            </div>
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-9 h-9 rounded-lg bg-amber-100 border-2 border-dashed border-amber-400 flex items-center justify-center text-sm font-black text-amber-800 animate-pulse">
              ?
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 7. SUBTRACTION: 8 birds on branch, 3 fly away
  if (id === 'as5') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-200 shadow-2xs max-w-md mx-auto">
        <div className="relative w-full bg-gradient-to-r from-sky-100 to-emerald-100 p-3 rounded-xl border border-emerald-300 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-2xl animate-bounce-slow">🐦</span>
              ))}
            </div>
            <div className="w-32 h-2.5 bg-amber-700 rounded-full mt-1" />
            <span className="text-[10px] font-black text-emerald-900 mt-0.5">5 chú còn đậu trên cành</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-1 animate-pulse">
              <span className="text-xl">💨🐦</span>
              <span className="text-xl">💨🐦</span>
              <span className="text-xl">💨🐦</span>
            </div>
            <span className="text-[10px] font-black text-rose-700 mt-1.5">3 chú bay đi</span>
          </div>
        </div>
      </div>
    );
  }

  // 8. QUICK ADDITION: 8 + 9 + 1 + 2 + 3 (Candies)
  if (id === 'tas1') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-md mx-auto">
        <span className="text-xs font-black text-purple-950 mb-1.5">
          🍬 Ghép các nhóm tròn 10 viên kẹo:
        </span>
        <div className="flex items-center gap-2 flex-wrap justify-center text-xs font-black">
          <div className="flex items-center gap-1 bg-white border-2 border-blue-300 px-2 py-1 rounded-xl">
            <span>🍬 8 + 2</span>
            <span className="bg-blue-100 text-blue-900 text-[10px] px-1 rounded">= 10</span>
          </div>
          <span>+</span>
          <div className="flex items-center gap-1 bg-white border-2 border-pink-300 px-2 py-1 rounded-xl">
            <span>🍬 9 + 1</span>
            <span className="bg-pink-100 text-pink-900 text-[10px] px-1 rounded">= 10</span>
          </div>
          <span>+</span>
          <div className="flex items-center gap-1 bg-white border-2 border-emerald-300 px-2 py-1 rounded-xl">
            <span>🍬 3</span>
          </div>
        </div>
        <div className="mt-1.5 text-[11px] font-bold text-purple-900">
          👉 10 + 10 + 3 = 23 viên kẹo
        </div>
      </div>
    );
  }

  // 9. ADDITION: Cars and Motorbike
  if (id === 'tas3') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-md mx-auto">
        <div className="flex items-center justify-around w-full text-xs font-bold text-slate-700">
          <div className="flex flex-col items-center bg-white p-1.5 rounded-xl border border-slate-200">
            <span className="text-2xl">🚗 17</span>
            <span className="text-[10px]">Ban đầu</span>
          </div>
          <span>➖</span>
          <div className="flex flex-col items-center bg-rose-50 p-1.5 rounded-xl border border-rose-200 text-rose-800">
            <span className="text-2xl">🚗 3 + 2</span>
            <span className="text-[10px]">Rời đi (5 ô tô)</span>
          </div>
          <span>ℹ️</span>
          <div className="flex flex-col items-center bg-slate-50 p-1.5 rounded-xl border border-slate-200 text-slate-500">
            <span className="text-2xl">🛵 1</span>
            <span className="text-[10px]">Xe máy (không tính)</span>
          </div>
        </div>
      </div>
    );
  }

  // 10. NUMBERS TO 20: 1 ten + 4 units (Bó que tính tre & que tính rời)
  if (id === 'n20_2') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-purple-300 shadow-2xs">
          <QueTinhBo label="10 que" />
          <span className="text-[11px] font-black text-purple-900 mt-1">1 Chục (10)</span>
        </div>
        <span className="text-2xl font-black text-purple-400">+</span>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-indigo-300 shadow-2xs">
          <div className="flex gap-1">
            <QueTinhLe color="blue" />
            <QueTinhLe color="blue" />
            <QueTinhLe color="blue" />
            <QueTinhLe color="blue" />
          </div>
          <span className="text-[11px] font-black text-indigo-900 mt-2">4 Đơn Vị</span>
        </div>
      </div>
    );
  }

  // 11. TÍNH NHẨM: 12 + 3 = ? (Que tính trực quan)
  if (id === 'n20_3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-emerald-950 mb-2 flex items-center gap-1">
          <span>🎋 1 bó 10 que và 2 que lẻ + thêm 3 que lẻ:</span>
        </div>

        <div className="flex items-center justify-around w-full bg-white p-2.5 rounded-xl border border-emerald-200">
          {/* Số 12: 1 bó 10 + 2 que lẻ */}
          <div className="flex items-center gap-1.5">
            <QueTinhBo label="10 que" />
            <div className="flex gap-1 pl-1 border-l-2 border-slate-200">
              <QueTinhLe color="blue" />
              <QueTinhLe color="blue" />
            </div>
          </div>

          <span className="text-xl font-black text-emerald-600">➕</span>

          {/* Thêm 3 que lẻ */}
          <div className="flex gap-1">
            <QueTinhLe color="amber" />
            <QueTinhLe color="amber" />
            <QueTinhLe color="amber" />
          </div>
        </div>

        <div className="mt-2 text-[11px] font-bold text-slate-700">
          👉 2 que lẻ + 3 que lẻ = <span className="text-emerald-700 font-black">5 que lẻ</span> • 10 + 5 = 15
        </div>
      </div>
    );
  }

  // 12. TÍNH NHẨM: 18 - 5 = ? (Que tính trực quan có gạch bớt ❌)
  if (id === 'n20_4') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-300 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-rose-950 mb-2 flex items-center gap-1">
          <span>🎋 Có 1 bó 10 que và 8 que lẻ, bớt đi 5 que lẻ:</span>
        </div>

        <div className="w-full bg-white p-2.5 rounded-xl border border-rose-200 flex items-center justify-around">
          <QueTinhBo label="10 que" />
          {/* 8 que lẻ, 5 que bị bớt */}
          <div className="flex gap-1 pl-2 border-l-2 border-slate-200">
            <QueTinhLe color="purple" isCrossed={false} />
            <QueTinhLe color="purple" isCrossed={false} />
            <QueTinhLe color="purple" isCrossed={false} />
            <QueTinhLe color="purple" isCrossed={true} />
            <QueTinhLe color="purple" isCrossed={true} />
            <QueTinhLe color="purple" isCrossed={true} />
            <QueTinhLe color="purple" isCrossed={true} />
            <QueTinhLe color="purple" isCrossed={true} />
          </div>
        </div>

        <div className="mt-2 text-[11px] font-bold text-slate-700">
          👉 8 que bớt 5 que còn <span className="text-rose-700 font-black">3 que lẻ</span> • 10 + 3 = 13
        </div>
      </div>
    );
  }

  // 13. NUMBERS TO 20: 17 ... 14 (Túi kẹo quả táo so sánh)
  if (id === 'n20_5') {
    return (
      <div className="flex items-center justify-around my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2.5 rounded-xl border-2 border-amber-400 shadow-2xs">
          <div className="flex items-center gap-1 text-lg mb-0.5">🍎 17</div>
          <span className="text-[10px] font-bold text-amber-800">1 chục & 7 quả</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-amber-200 border-2 border-amber-500 flex items-center justify-center text-base font-black text-amber-950">
          ?
        </div>
        <div className="flex flex-col items-center bg-white p-2.5 rounded-xl border-2 border-amber-400 shadow-2xs">
          <div className="flex items-center gap-1 text-lg mb-0.5">🍎 14</div>
          <span className="text-[10px] font-bold text-amber-800">1 chục & 4 quả</span>
        </div>
      </div>
    );
  }

  // 14. NUMBERS TO 20: 13 cups, 6 broken
  if (id === 'tn20_1') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex items-center justify-around w-full text-xs font-black">
          <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-sky-300">
            <div className="flex gap-1 text-lg">🥛🥛🥛</div>
            <span className="text-[11px] text-sky-900 mt-1">7 chiếc còn nguyên</span>
          </div>
          <span>➕</span>
          <div className="flex flex-col items-center bg-rose-50 p-2 rounded-xl border border-rose-300 text-rose-800">
            <div className="flex gap-1 text-lg">💥💥💥</div>
            <span className="text-[11px] text-rose-900 mt-1">6 chiếc bị vỡ</span>
          </div>
        </div>
      </div>
    );
  }

  // 15. NUMBERS TO 100: 4 bundles of 10
  if (id === 'n100_1') {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-3 my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <QueTinhBo key={i} label={`Bó ${i + 1}`} />
        ))}
      </div>
    );
  }

  // 16. NUMBERS TO 100: 68
  if (id === 'n100_4') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-3 bg-indigo-50 rounded-2xl border-2 border-indigo-200 shadow-2xs max-w-sm mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-md">
          68
        </div>
        <div className="text-left text-xs font-black text-indigo-950">
          <div>• 6 chục (sáu mươi que 🎋)</div>
          <div>• 8 que rời (tám 🥢)</div>
          <div className="text-rose-600 text-[11px] font-bold mt-0.5">👉 Đọc là: Sáu mươi tám</div>
        </div>
      </div>
    );
  }

  // 17. NUMBERS TO 100: 45 vs 54
  if (id === 'n100_5') {
    return (
      <div className="flex items-center justify-around my-2 p-3 bg-cyan-50 rounded-2xl border-2 border-cyan-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2.5 rounded-xl border-2 border-cyan-400">
          <span className="text-xl font-black text-cyan-950">45</span>
          <span className="text-[10px] font-bold text-cyan-800">4 bó 🎋 & 5 que</span>
        </div>
        <div className="w-9 h-9 rounded-xl bg-cyan-200 border-2 border-cyan-400 flex items-center justify-center font-black text-cyan-950">
          ?
        </div>
        <div className="flex flex-col items-center bg-white p-2.5 rounded-xl border-2 border-cyan-400">
          <span className="text-xl font-black text-cyan-950">54</span>
          <span className="text-[10px] font-bold text-cyan-800">5 bó 🎋 & 4 que</span>
        </div>
      </div>
    );
  }

  // 18. NUMBERS TO 100: Number train next 89
  if (id === 'n100_6') {
    return (
      <div className="flex items-center justify-center gap-2 my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <span className="text-2xl">🚂</span>
        <div className="w-10 h-10 rounded-xl bg-white border-2 border-blue-400 flex items-center justify-center text-sm font-black text-blue-900">
          88
        </div>
        <span>➡️</span>
        <div className="w-10 h-10 rounded-xl bg-white border-2 border-amber-500 flex items-center justify-center text-sm font-black text-amber-950">
          89
        </div>
        <span>➡️</span>
        <div className="w-11 h-11 rounded-xl bg-rose-100 border-2 border-rose-500 flex items-center justify-center text-base font-black text-rose-700 animate-pulse">
          ?
        </div>
      </div>
    );
  }

  // 19. MEASUREMENT CM: 6cm + 3cm
  if (id === 'cm4') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-200 shadow-2xs max-w-sm mx-auto">
        <div className="w-full bg-white p-2 rounded-xl border border-emerald-300 flex items-center gap-1">
          <div className="h-6 bg-blue-500 text-white text-[10px] font-black rounded-l flex items-center justify-center" style={{ width: '66%' }}>
            6 cm
          </div>
          <div className="h-6 bg-amber-400 text-amber-950 text-[10px] font-black rounded-r flex items-center justify-center" style={{ width: '34%' }}>
            3 cm
          </div>
        </div>
        <span className="text-xs font-black text-emerald-900 mt-2">Đoạn thẳng ghép: 6 cm + 3 cm = [ ? ] cm</span>
      </div>
    );
  }

  // 20. MEASUREMENT CM: 15cm - 5cm
  if (id === 'cm5') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <div className="w-full bg-white p-2 rounded-xl border border-rose-300 flex items-center gap-1 relative">
          <div className="h-6 bg-emerald-500 text-white text-[10px] font-black rounded flex items-center justify-center" style={{ width: '66%' }}>
            Còn lại 10 cm
          </div>
          <div className="h-6 bg-rose-200 text-rose-800 border-dashed border-2 border-rose-400 text-[10px] font-black rounded flex items-center justify-center" style={{ width: '34%' }}>
            ✂️ Cắt 5 cm
          </div>
        </div>
      </div>
    );
  }

  // 21. TÍNH NHẨM: 30 + 20 = ? (Que tính trực quan: 3 bó + 2 bó = 5 bó que tính)
  if (id === 'as100_1') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50/70 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-md mx-auto">
        <div className="text-xs font-black text-amber-950 mb-2 flex items-center gap-1.5">
          <span>🎋 Gộp 3 bó que tính (30) và 2 bó que tính (20):</span>
        </div>

        <div className="w-full bg-white p-2.5 rounded-2xl border-2 border-amber-300 shadow-inner flex items-center justify-around gap-2">
          {/* 3 bó que tính */}
          <div className="flex items-center gap-1 p-1 bg-blue-50 border border-blue-300 rounded-xl">
            {Array.from({ length: 3 }).map((_, i) => (
              <QueTinhBo key={`a_${i}`} label="10 que" />
            ))}
          </div>

          <span className="text-xl font-black text-amber-600">➕</span>

          {/* 2 bó que tính */}
          <div className="flex items-center gap-1 p-1 bg-orange-50 border border-orange-300 rounded-xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <QueTinhBo key={`b_${i}`} label="10 que" />
            ))}
          </div>
        </div>

        <div className="mt-2 text-xs font-bold text-slate-700">
          👉 3 bó que + 2 bó que = <span className="text-emerald-700 font-black">5 bó que tính</span> (50 que)
        </div>
      </div>
    );
  }

  // 22. TÍNH NHẨM: 70 - 30 = ? (7 bó que tính tre, bớt đi 3 bó ❌)
  if (id === 'as100_2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50/70 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-md mx-auto">
        <div className="text-xs font-black text-amber-950 mb-2 flex items-center gap-1.5">
          <span>🎋 Có 7 bó que tính (70 que), bớt đi 3 bó que tính (30 que):</span>
        </div>

        {/* Khay que tính: 4 bó còn lại + 3 bó bớt đi */}
        <div className="w-full bg-white p-2.5 rounded-2xl border-2 border-amber-300 shadow-inner flex flex-wrap items-center justify-center gap-2">
          {/* 4 bó còn lại */}
          <div className="flex items-center gap-1.5 p-1 bg-emerald-50/90 border border-emerald-300 rounded-xl">
            {Array.from({ length: 4 }).map((_, i) => (
              <QueTinhBo key={`c_${i}`} label="10 que" isCrossed={false} />
            ))}
          </div>

          <span className="text-xl font-black text-rose-600">➖</span>

          {/* 3 bó bị bớt đi */}
          <div className="flex items-center gap-1.5 p-1 bg-rose-50/90 border border-rose-300 rounded-xl">
            {Array.from({ length: 3 }).map((_, i) => (
              <QueTinhBo key={`x_${i}`} label="Bớt 10" isCrossed={true} />
            ))}
          </div>
        </div>

        <div className="mt-2 text-xs font-bold text-slate-700">
          👉 Còn lại: <span className="text-emerald-700 font-black">4 bó que tính</span> = <span className="text-rose-600 font-black">40 que</span>
        </div>
      </div>
    );
  }

  // 23. TÍNH: 43 + 5 = ? (Que tính trực quan: 4 bó chục và que lẻ gộp lại)
  if (id === 'as100_3') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-blue-50 rounded-2xl border-2 border-blue-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-blue-950 mb-2 flex items-center gap-1">
          <span>🎋 4 bó chục que tính (40) + 3 que lẻ và thêm 5 que lẻ:</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-xl border border-blue-200 flex items-center justify-around">
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <QueTinhBo key={i} label="10" />
            ))}
          </div>
          <span className="text-lg font-black text-blue-600">➕</span>
          <div className="flex gap-0.5 items-center">
            <QueTinhLe color="red" />
            <QueTinhLe color="red" />
            <QueTinhLe color="red" />
            <span className="text-xs font-bold text-slate-400 mx-1">+</span>
            <QueTinhLe color="green" />
            <QueTinhLe color="green" />
            <QueTinhLe color="green" />
            <QueTinhLe color="green" />
            <QueTinhLe color="green" />
          </div>
        </div>
        <div className="mt-2 text-[11px] font-bold text-slate-700">
          👉 3 que lẻ + 5 que lẻ = <span className="text-blue-700 font-black">8 que lẻ</span> • 40 + 8 = 48
        </div>
      </div>
    );
  }

  // 24. TÍNH: 34 + 23 = ? (Que tính trực quan)
  if (id === 'as100_4') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-purple-950 mb-1.5 flex items-center gap-1">
          <span>🎋 34 que (3 bó + 4 que) gộp với 23 que (2 bó + 3 que):</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-xl border border-purple-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-bold px-2">
            <span>Bó chục:</span>
            <span className="text-purple-900 font-black">3 bó 🎋🎋🎋 + 2 bó 🎋🎋 = 5 bó (50 que)</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold px-2 border-t pt-1.5">
            <span>Que lẻ:</span>
            <span className="text-indigo-900 font-black">4 que 🥢 + 3 que 🥢 = 7 que lẻ</span>
          </div>
        </div>
        <div className="mt-1.5 text-[11px] font-bold text-emerald-800">
          👉 Tổng cộng = <span className="font-black text-emerald-900">57 que tính</span>
        </div>
      </div>
    );
  }

  // 25. TÍNH: 68 - 25 = ? (Que tính trực quan bớt đi)
  if (id === 'as100_5') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-rose-950 mb-1.5 flex items-center gap-1">
          <span>🎋 68 que (6 bó + 8 que), bớt đi 25 que (2 bó + 5 que):</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-xl border border-rose-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-bold px-2">
            <span>Bó chục:</span>
            <span className="text-rose-900 font-black">6 bó bớt 2 bó ➡️ còn 4 bó chục (40)</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold px-2 border-t pt-1.5">
            <span>Que lẻ:</span>
            <span className="text-rose-900 font-black">8 que bớt 5 que ➡️ còn 3 que lẻ</span>
          </div>
        </div>
        <div className="mt-1.5 text-[11px] font-bold text-emerald-800">
          👉 Còn lại = <span className="font-black text-emerald-900">43 que tính</span>
        </div>
      </div>
    );
  }

  // 26. DUCKS IN POND
  if (id === 'as100_6') {
    return (
      <div className="flex items-center justify-around my-2 p-2.5 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-sky-300">
          <span className="text-2xl">🦆</span>
          <span className="text-xs font-black text-sky-900 mt-0.5">35 vịt trắng</span>
        </div>
        <span className="text-xl font-black text-sky-600">+</span>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-amber-300">
          <span className="text-2xl">🐥</span>
          <span className="text-xs font-black text-amber-900 mt-0.5">12 vịt nâu</span>
        </div>
      </div>
    );
  }

  // 27. STACK OF BOOKS: Alan's notebook
  if (id === 'tas100_3') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-xs mx-auto">
        <span className="text-[10px] font-black text-amber-900 mb-1">Chồng vở của lớp:</span>
        <div className="flex flex-col gap-1 w-32 items-center">
          <div className="w-28 h-5 bg-sky-200 border border-sky-400 rounded text-[9px] font-bold flex items-center justify-center">
            3 quyển bên trên
          </div>
          <div className="w-32 h-6 bg-gradient-to-r from-amber-400 to-orange-400 border-2 border-amber-600 rounded text-[10px] font-black text-white flex items-center justify-center shadow-xs">
            ⭐ Vở của Alan (1)
          </div>
          <div className="w-28 h-5 bg-purple-200 border border-purple-400 rounded text-[9px] font-bold flex items-center justify-center">
            4 quyển bên dưới
          </div>
        </div>
      </div>
    );
  }

  // 28. TIME: ts2 (9h tối / 21:00)
  if (id === 'ts2') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-3 bg-indigo-950 text-white rounded-2xl border-2 border-indigo-500 shadow-md max-w-sm mx-auto">
        <div className="text-3xl animate-bounce-slow">🌙✨</div>
        <div className="text-left">
          <div className="text-xs sm:text-sm font-black text-yellow-300">9 giờ tối (21:00)</div>
          <div className="text-[11px] text-indigo-200">Giờ bé đi ngủ ngoan giấc 🛏️</div>
          <div className="text-[10px] font-bold text-amber-200 mt-0.5">Kim ngắn chỉ số mấy trên mặt đồng hồ?</div>
        </div>
      </div>
    );
  }

  // 29. TIME: ts3 (7 days in a week)
  if (id === 'ts3') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-1 my-2 p-2.5 bg-gradient-to-r from-rose-50 via-amber-50 to-sky-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-md mx-auto">
        {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'].map((d, i) => (
          <span key={i} className="text-[10px] font-black bg-white border border-amber-300 text-amber-900 px-2 py-1 rounded-lg shadow-2xs">
            {d}
          </span>
        ))}
      </div>
    );
  }

  // 30. TIME: ts4 (Thursday -> Friday)
  if (id === 'ts4') {
    return (
      <div className="flex items-center justify-center gap-2 my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="bg-amber-400 text-amber-950 px-3 py-1.5 rounded-xl font-black text-xs shadow-xs">
          📅 Hôm nay: Thứ Năm
        </div>
        <span className="text-xl">➡️</span>
        <div className="bg-white border-2 border-dashed border-rose-400 text-rose-700 px-3 py-1.5 rounded-xl font-black text-xs animate-pulse">
          Ngày mai: [ ? ]
        </div>
      </div>
    );
  }

  // 31. TIME: tts2 (Emily 9, Alice +5)
  if (id === 'tts2') {
    return (
      <div className="flex items-center justify-around my-2 p-2.5 bg-pink-50 rounded-2xl border-2 border-pink-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-pink-300">
          <span className="text-2xl">👧</span>
          <span className="text-xs font-black text-pink-900">Emily (9 tuổi)</span>
        </div>
        <span className="text-base font-black text-pink-500">+ 5 tuổi 🎂</span>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-purple-300">
          <span className="text-2xl">👱‍♀️</span>
          <span className="text-xs font-black text-purple-900">Alice [ ? ] tuổi</span>
        </div>
      </div>
    );
  }

  // 32. TÍNH: 24 - 8 + 1 (Bút chì màu trong hộp)
  if (id === 'tas100_1') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-amber-950 mb-1.5">
          ✏️ Hộp bút chì màu của bé:
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold">
          <span className="bg-white border px-2 py-1 rounded-lg">24 bút ✏️</span>
          <span>➖</span>
          <span className="bg-rose-50 text-rose-700 border border-rose-200 px-2 py-1 rounded-lg">Bớt 8</span>
          <span>➡️</span>
          <span className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-1 rounded-lg">16 bút</span>
          <span>➕</span>
          <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-1 rounded-lg">Thêm 1</span>
        </div>
      </div>
    );
  }

  // 33. TÍNH NHANH: 4 + 1 + 5 + 7 + 4 + 1 + 5 = ? (Nhóm sao lấp lánh)
  if (id === 'tn20_3') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-teal-50 rounded-2xl border-2 border-teal-200 shadow-2xs max-w-md mx-auto">
        <div className="text-xs font-black text-teal-950 mb-1.5">
          ⭐ Ghép các nhóm 10 ngôi sao lấp lánh:
        </div>
        <div className="flex items-center gap-2 text-xs font-black flex-wrap justify-center">
          <span className="bg-white border border-teal-300 px-2.5 py-1 rounded-xl text-teal-900 shadow-2xs">
            (4 + 1 + 5 = 10 ⭐)
          </span>
          <span>+</span>
          <span className="bg-white border border-amber-300 px-2.5 py-1 rounded-xl text-amber-900 shadow-2xs">
            7 ⭐
          </span>
          <span>+</span>
          <span className="bg-white border border-teal-300 px-2.5 py-1 rounded-xl text-teal-900 shadow-2xs">
            (4 + 1 + 5 = 10 ⭐)
          </span>
        </div>
      </div>
    );
  }

  // Default generic math card for any other level
  return (
    <div className="my-1.5 p-2 bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-2xl border border-amber-200 shadow-2xs flex items-center justify-center gap-2 max-w-sm mx-auto">
      <span className="text-2xl animate-bounce-slow">✨</span>
      <span className="text-xs font-black text-amber-950">
        Bé hãy suy nghĩ và chọn câu trả lời đúng nhé!
      </span>
      <span className="text-2xl animate-bounce-slow">💡</span>
    </div>
  );
}

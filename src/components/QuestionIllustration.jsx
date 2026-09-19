import React from 'react';

/**
 * QuestionIllustration: Renders rich, engaging cartoon illustrations for questions
 * ensuring that 6-year-olds always have visual representations of math problems.
 */
export default function QuestionIllustration({ level }) {
  if (!level) return null;

  const id = level.id;

  // 1. GEOMETRY: Circle, Square, Triangle
  if (id === 'geo1') {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 p-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 shadow-2xs">
        <div className="flex flex-col items-center bg-white p-2 sm:p-2.5 rounded-xl border border-amber-300 shadow-2xs">
          <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-yellow-500 shadow-xs flex items-center justify-center text-xl animate-bounce-slow">
            🟡
          </div>
          <span className="text-[11px] font-black text-amber-900 mt-1">Hình Tròn</span>
        </div>
        <div className="flex flex-col items-center bg-white p-2 sm:p-2.5 rounded-xl border border-blue-200 shadow-2xs">
          <div className="w-12 h-12 bg-blue-400 border-2 border-blue-600 rounded-lg shadow-xs flex items-center justify-center text-xl">
            🟦
          </div>
          <span className="text-[11px] font-black text-blue-900 mt-1">Hình Vuông</span>
        </div>
        <div className="flex flex-col items-center bg-white p-2 sm:p-2.5 rounded-xl border border-rose-200 shadow-2xs">
          <svg viewBox="0 0 50 50" className="w-12 h-12">
            <polygon points="25,5 45,45 5,45" fill="#f43f5e" stroke="#be123c" strokeWidth="2" />
          </svg>
          <span className="text-[11px] font-black text-rose-900 mt-1">Hình Tam Giác</span>
        </div>
      </div>
    );
  }

  // 2. GEOMETRY: Triangle Edges & Vertices
  if (id === 'geo2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 120" className="w-44 h-32">
          {/* Edges with distinct colors */}
          <line x1="80" y1="20" x2="20" y2="105" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
          <line x1="80" y1="20" x2="140" y2="105" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" />
          <line x1="20" y1="105" x2="140" y2="105" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />

          {/* Glowing Vertices (Đỉnh) */}
          <circle cx="80" cy="20" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <circle cx="20" cy="105" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <circle cx="140" cy="105" r="7" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />

          {/* Edge labels */}
          <text x="35" y="55" fill="#ef4444" fontSize="11" fontWeight="bold">Cạnh 1</text>
          <text x="115" y="55" fill="#3b82f6" fontSize="11" fontWeight="bold">Cạnh 2</text>
          <text x="70" y="118" fill="#10b981" fontSize="11" fontWeight="bold">Cạnh 3</text>
        </svg>
        <span className="text-xs font-black text-rose-900 mt-1">🔺 Hình tam giác có 3 đỉnh vàng và 3 cạnh</span>
      </div>
    );
  }

  // 3. GEOMETRY: Rectangle 2 Long & 2 Short Sides
  if (id === 'geo3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-200 shadow-2xs max-w-sm mx-auto">
        <div className="relative w-48 h-24 bg-emerald-100 border-4 border-emerald-600 rounded-xl flex flex-col items-center justify-center shadow-xs">
          <span className="absolute -top-3 text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full">
            Cạnh dài (trên)
          </span>
          <span className="absolute -bottom-3 text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full">
            Cạnh dài (dưới)
          </span>
          <span className="absolute -left-3 rotate-90 text-[9px] font-black bg-emerald-500 text-white px-1.5 rounded-full">
            Cạnh ngắn
          </span>
          <span className="absolute -right-3 -rotate-90 text-[9px] font-black bg-emerald-500 text-white px-1.5 rounded-full">
            Cạnh ngắn
          </span>
          <span className="text-xs font-black text-emerald-900">🟩 Hình Chữ Nhật</span>
        </div>
        <span className="text-[11px] font-bold text-emerald-800 mt-3">2 cạnh dài bằng nhau • 2 cạnh ngắn bằng nhau</span>
      </div>
    );
  }

  // 4. GEOMETRY: Milk Carton 3D Box
  if (id === 'geo5') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-2.5 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-5xl animate-bounce-slow">🧃</div>
        <div className="text-left">
          <div className="text-xs sm:text-sm font-black text-sky-950">Hộp sữa tươi 100%</div>
          <div className="text-[11px] font-bold text-sky-800">Có 6 mặt hình chữ nhật</div>
          <span className="inline-block mt-1 bg-sky-200 text-sky-900 text-[10px] font-black px-2 py-0.5 rounded-md">
            👉 Khối hộp chữ nhật
          </span>
        </div>
      </div>
    );
  }

  // 5. ADDITION: 7 + 0 = 7 (Stars + Empty Plate)
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

  // 6. ADDITION: 6 + ? = 10 (10-Frame)
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
          {/* 5 birds on branch */}
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-2xl animate-bounce-slow">🐦</span>
              ))}
            </div>
            <div className="w-32 h-2.5 bg-amber-700 rounded-full mt-1" />
            <span className="text-[10px] font-black text-emerald-900 mt-0.5">5 chú còn đậu trên cành</span>
          </div>

          {/* 3 birds flying away */}
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

  // 8. ADDITION: Quick group (8+2=10, 9+1=10)
  if (id === 'tas1') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-md mx-auto">
        <span className="text-[11px] font-black text-purple-900 mb-1.5">Gợi ý ghép cặp tròn 10:</span>
        <div className="flex items-center gap-1.5 flex-wrap justify-center text-xs font-black">
          <span className="bg-blue-100 text-blue-900 border border-blue-300 px-2 py-1 rounded-xl">
            (8 + 2 = 10) 🔵
          </span>
          <span>+</span>
          <span className="bg-pink-100 text-pink-900 border border-pink-300 px-2 py-1 rounded-xl">
            (9 + 1 = 10) 🟣
          </span>
          <span>+</span>
          <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-1 rounded-xl">
            3 🟢
          </span>
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

  // 10. NUMBERS TO 20: 1 ten + 4 units
  if (id === 'n20_2') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-sm mx-auto">
        {/* 1 Ten Rod */}
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-purple-300 shadow-2xs">
          <div className="w-6 h-20 bg-purple-500 border border-purple-700 rounded-md grid grid-rows-10 divide-y divide-purple-400" />
          <span className="text-[11px] font-black text-purple-900 mt-1">1 Chục (10)</span>
        </div>
        <span className="text-2xl font-black text-purple-400">+</span>
        {/* 4 Unit Cubes */}
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-indigo-300 shadow-2xs">
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-5 h-5 bg-indigo-500 border border-indigo-700 rounded-xs shadow-2xs" />
            ))}
          </div>
          <span className="text-[11px] font-black text-indigo-900 mt-2">4 Đơn Vị</span>
        </div>
      </div>
    );
  }

  // 11. NUMBERS TO 20: 12 + 3 = ?
  if (id === 'n20_3') {
    return (
      <div className="flex items-center justify-center gap-3 my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-emerald-300">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-black bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded">10</span>
            <span className="text-xs font-black text-emerald-700">+ 2 que 🥢</span>
          </div>
          <span className="text-[10px] text-slate-500 mt-0.5">Số 12</span>
        </div>
        <span className="text-xl font-black text-emerald-600">+</span>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-amber-300">
          <span className="text-xs font-black text-amber-700">3 que 🥢</span>
          <span className="text-[10px] text-slate-500 mt-0.5">Số 3</span>
        </div>
      </div>
    );
  }

  // 12. NUMBERS TO 20: 18 - 5 = ?
  if (id === 'n20_4') {
    return (
      <div className="flex items-center justify-center gap-3 my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-slate-700 bg-white p-2.5 rounded-xl border border-rose-200">
          <span>18 gồm </span>
          <span className="text-purple-700">10</span>
          <span> và </span>
          <span className="text-rose-700">8</span>
          <div className="text-emerald-700 text-[11px] font-bold mt-1">
            👉 Lấy 8 trừ 5 bằng 3 • Vậy 10 + 3 = ?
          </div>
        </div>
      </div>
    );
  }

  // 13. NUMBERS TO 20: 17 ... 14
  if (id === 'n20_5') {
    return (
      <div className="flex items-center justify-around my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border-2 border-amber-400 shadow-2xs">
          <span className="text-2xl font-black text-amber-950">17</span>
          <span className="text-[10px] font-bold text-amber-800">1 chục & 7</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-amber-200 border-2 border-amber-500 flex items-center justify-center text-base font-black text-amber-950">
          ?
        </div>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border-2 border-amber-400 shadow-2xs">
          <span className="text-2xl font-black text-amber-950">14</span>
          <span className="text-[10px] font-bold text-amber-800">1 chục & 4</span>
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
          <div key={i} className="flex flex-col items-center bg-white p-2 rounded-xl border-2 border-amber-400 shadow-2xs">
            <span className="text-2xl">🎋</span>
            <span className="text-[10px] font-black text-amber-900 bg-amber-200 px-1.5 py-0.5 rounded mt-0.5">
              10 que
            </span>
          </div>
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
          <div>• 6 chục (sáu mươi)</div>
          <div>• 8 đơn vị (tám)</div>
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
          <span className="text-[10px] font-bold text-cyan-800">4 chục • 5 đơn vị</span>
        </div>
        <div className="w-9 h-9 rounded-xl bg-cyan-200 border-2 border-cyan-400 flex items-center justify-center font-black text-cyan-950">
          ?
        </div>
        <div className="flex flex-col items-center bg-white p-2.5 rounded-xl border-2 border-cyan-400">
          <span className="text-xl font-black text-cyan-950">54</span>
          <span className="text-[10px] font-bold text-cyan-800">5 chục • 4 đơn vị</span>
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

  // 21. ADD / SUB TO 100: 30 + 20
  if (id === 'as100_1') {
    return (
      <div className="flex items-center justify-center gap-3 my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-amber-300">
          <span className="text-xl">🪙🪙🪙</span>
          <span className="text-xs font-black text-amber-900 mt-1">3 Chục (30)</span>
        </div>
        <span className="text-xl font-black text-amber-600">+</span>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-amber-300">
          <span className="text-xl">🪙🪙</span>
          <span className="text-xs font-black text-amber-900 mt-1">2 Chục (20)</span>
        </div>
      </div>
    );
  }

  // 22. ADD / SUB TO 100: 70 - 30
  if (id === 'as100_2') {
    return (
      <div className="flex items-center justify-center gap-3 my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-slate-700 bg-white p-2.5 rounded-xl border border-rose-200">
          <span>7 chục trừ 3 chục = </span>
          <span className="text-rose-600 font-extrabold">[ ? ] chục</span>
          <div className="text-slate-500 text-[11px] font-bold mt-1">70 - 30 = ?</div>
        </div>
      </div>
    );
  }

  // 23. ADD / SUB TO 100: Column addition/subtraction (as100_3, as100_4, as100_5)
  if (id === 'as100_3' || id === 'as100_4' || id === 'as100_5') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-blue-50 rounded-2xl border-2 border-blue-200 shadow-2xs max-w-xs mx-auto">
        <div className="bg-white p-3 rounded-xl border-2 border-blue-300 shadow-2xs text-center font-black">
          <div className="grid grid-cols-2 gap-3 text-xs border-b pb-1 text-slate-500 uppercase tracking-wider">
            <span>Hàng Chục</span>
            <span>Đơn Vị</span>
          </div>
          <div className="text-base font-mono text-slate-800 py-1">
            {id === 'as100_3' && '43 + 5'}
            {id === 'as100_4' && '34 + 23'}
            {id === 'as100_5' && '68 - 25'}
          </div>
        </div>
      </div>
    );
  }

  // 24. ADD / SUB TO 100: Ducks in pond
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

  // 25. STACK OF BOOKS: Alan's notebook
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

  // 26. TIME: ts2 (9h tối / 21:00)
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

  // 27. TIME: ts3 (7 days in a week)
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

  // 28. TIME: ts4 (Thursday -> Friday)
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

  // 29. TIME: tts2 (Emily 9, Alice +5)
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

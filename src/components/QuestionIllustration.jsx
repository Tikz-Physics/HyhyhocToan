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
 * QuestionIllustration:
 * CHỈ hiển thị hình minh hoạ khi câu hỏi CÓ HÌNH ĐẶC THÙ đã được căn chỉnh 100% khớp với đề bài.
 * Với các câu hỏi số học thuần túy hoặc toán đố chữ, trả về null để giao diện thoáng, rõ ràng, không bị lệch hình!
 */
export default function QuestionIllustration({ level }) {
  if (!level) return null;
  const id = level.id || '';

  // =========================================================================
  // KHỐI LỚP 1: 41 CÂU HỎI TRỰC QUAN ĐẶC THÙ (ĐÃ ĐỐI SOÁT 100% ĐỀ BÀI)
  // =========================================================================

  // 1. GEOMETRY: Circle, Square, Triangle
  if (id === 'geo1') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-md mx-auto">
        <div className="flex items-center justify-around w-full max-w-xs mb-2">
          <div className="flex flex-col items-center p-2 bg-white/90 rounded-xl border border-amber-200 shadow-2xs">
            <span className="text-3xl animate-bounce-slow">⚽</span>
            <span className="text-[11px] font-bold text-slate-700 mt-1">Quả bóng đá</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-white/90 rounded-xl border border-amber-200 shadow-2xs">
            <span className="text-3xl">🎁</span>
            <span className="text-[11px] font-bold text-slate-700 mt-1">Hộp quà vuông</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-white/90 rounded-xl border border-amber-200 shadow-2xs">
            <span className="text-3xl">🔺</span>
            <span className="text-[11px] font-bold text-slate-700 mt-1">Biển báo</span>
          </div>
        </div>
        <div className="text-xs font-black text-amber-900 bg-amber-100/90 px-3 py-1 rounded-xl border border-amber-300 shadow-2xs text-center">
          🔍 Bé hãy quan sát 3 đồ vật này và tìm đồ vật có dạng Hình Tròn nhé!
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
          🔍 Bé hãy quan sát các đồ vật quen thuộc này nhé!
        </span>
      </div>
    );
  }

  // 4. GEOMETRY: Milk Carton 3D Box
  if (id === 'geo5') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-5xl animate-bounce-slow">🧃</div>
        <div className="text-left">
          <div className="text-xs sm:text-sm font-black text-sky-950">Hộp sữa tươi thơm ngon</div>
          <div className="text-[11px] font-bold text-sky-800">Đồ vật quen thuộc bé uống hàng ngày</div>
        </div>
      </div>
    );
  }

  // 5. HÌNH VUÔNG: geo6 (KHÔNG LỘ ĐÁP ÁN)
  if (id === 'geo6') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg border-4 border-amber-600 shadow-md flex items-center justify-center text-white font-black text-4xl">
          🟧
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-2 bg-amber-800" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1.5 h-2 bg-amber-800" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-1.5 bg-amber-800" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-1.5 bg-amber-800" />
        </div>
        <span className="text-xs font-black text-amber-900 mt-2">
          🔍 Bé hãy quan sát hình vuông và chọn đặc điểm đúng bên dưới nhé!
        </span>
      </div>
    );
  }

  // 6. KHỐI LẬP PHƯƠNG: geo7
  if (id === 'geo7') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-5xl animate-bounce-slow">🎲</div>
        <span className="text-xs font-black text-purple-900 mt-1.5">
          Viên xúc xắc đồ chơi có các mặt đều là hình vuông!
        </span>
      </div>
    );
  }

  // 7. VỊ TRÍ: geo8 (KHÔNG LỘ ĐÁP ÁN)
  if (id === 'geo8') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-3xl animate-bounce-slow">🕊️</div>
        <span className="text-xs font-black text-sky-900">Chú chim bồ câu</span>
        <div className="text-4xl mt-1">🏠</div>
        <span className="text-xs font-bold text-slate-700">Mái nhà</span>
      </div>
    );
  }

  // 8. VỊ TRÍ: geo9 (KHÔNG LỘ ĐÁP ÁN)
  if (id === 'geo9') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-slate-300 text-xs font-bold text-slate-600">
          <span>🏁 Đích</span>
          <span>⬅️</span>
        </div>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-amber-300 shadow-2xs">
          <span className="text-3xl animate-bounce-slow">🐰</span>
          <span className="text-xs font-black text-amber-950">Bạn Thỏ</span>
        </div>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-emerald-300 shadow-2xs">
          <span className="text-3xl">🐢</span>
          <span className="text-xs font-bold text-slate-700">Bạn Rùa</span>
        </div>
      </div>
    );
  }

  // 9. SO SÁNH: c9 (4 táo đỏ vs 6 cam vàng)
  if (id === 'c9') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-rose-200">
            <span className="text-2xl">🍎🍎🍎🍎</span>
            <span className="text-xs font-black text-rose-800 mt-1">4 quả táo đỏ</span>
          </div>
          <span className="text-sm font-black text-amber-700">so với</span>
          <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-orange-200">
            <span className="text-2xl">🍊🍊🍊🍊🍊🍊</span>
            <span className="text-xs font-black text-orange-800 mt-1">6 quả cam vàng</span>
          </div>
        </div>
      </div>
    );
  }

  // 10. ADDITION: 7 + 0 = 7
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

  // 11. ADDITION: 6 + ? = 10
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

  // 12. SUBTRACTION: 8 birds, 3 fly away
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
            <span className="text-[10px] font-black text-emerald-900 mt-0.5">Còn lại: [ ? ] chú chim</span>
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

  // 13. TÍNH: as6 (4 + 5 = ?)
  if (id === 'as6') {
    return (
      <div className="flex items-center justify-center gap-3 my-2 p-2.5 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex items-center gap-1 bg-white p-1.5 rounded-xl border">
          {Array.from({ length: 4 }).map((_, i) => (
            <QueTinhLe key={i} color="blue" />
          ))}
          <span className="text-xs font-black text-blue-700 ml-1">4 que</span>
        </div>
        <span className="text-lg font-black text-amber-600">➕</span>
        <div className="flex items-center gap-1 bg-white p-1.5 rounded-xl border">
          {Array.from({ length: 5 }).map((_, i) => (
            <QueTinhLe key={i} color="red" />
          ))}
          <span className="text-xs font-black text-rose-700 ml-1">5 que</span>
        </div>
      </div>
    );
  }

  // 14. TÍNH: as7 (10 - 6 = ?)
  if (id === 'as7') {
    return (
      <div className="flex items-center justify-center gap-3 my-2 p-2.5 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex items-center gap-1 bg-white p-1.5 rounded-xl border">
          {Array.from({ length: 10 }).map((_, i) => (
            <QueTinhLe key={i} color={i < 6 ? 'red' : 'green'} isCrossed={i < 6} />
          ))}
        </div>
        <span className="text-xs font-black text-rose-800">Bớt đi 6 que ❌</span>
      </div>
    );
  }

  // 15. TÍNH NHANH: tas1 (8 + 9 + 1 + 2 + 3)
  if (id === 'tas1') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-md mx-auto">
        <div className="flex items-center justify-around w-full max-w-sm mb-2 flex-wrap gap-1.5 text-xs font-black">
          <span className="bg-white border-2 border-purple-300 px-2.5 py-1 rounded-xl shadow-2xs text-purple-950">🍬 8</span>
          <span>+</span>
          <span className="bg-white border-2 border-pink-300 px-2.5 py-1 rounded-xl shadow-2xs text-pink-950">🍬 9</span>
          <span>+</span>
          <span className="bg-white border-2 border-pink-300 px-2.5 py-1 rounded-xl shadow-2xs text-pink-950">🍬 1</span>
          <span>+</span>
          <span className="bg-white border-2 border-purple-300 px-2.5 py-1 rounded-xl shadow-2xs text-purple-950">🍬 2</span>
          <span>+</span>
          <span className="bg-white border-2 border-emerald-300 px-2.5 py-1 rounded-xl shadow-2xs text-emerald-950">🍬 3</span>
        </div>
        <div className="text-xs font-black text-purple-900 bg-purple-100/90 px-3 py-1 rounded-xl border border-purple-300 shadow-2xs text-center">
          💡 Mẹo tính nhanh: Bé hãy gộp 8 + 2 = 10 và 9 + 1 = 10 nhé!
        </div>
      </div>
    );
  }

  // 16. TOÁN Ô TÔ: tas3
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
            <span className="text-[10px]">Rời đi: 3 rồi 2 xe</span>
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

  // 17. SỐ ĐẾN 20: n20_2 (1 chục và 4 đơn vị)
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

  // 18. TÍNH NHẨM: n20_3 (12 + 3)
  if (id === 'n20_3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-emerald-950 mb-2 flex items-center gap-1">
          <span>🎋 1 bó 10 que và 2 que lẻ + thêm 3 que lẻ:</span>
        </div>
        <div className="flex items-center justify-around w-full bg-white p-2.5 rounded-xl border border-emerald-200">
          <div className="flex items-center gap-1.5">
            <QueTinhBo label="10 que" />
            <div className="flex gap-1 pl-1 border-l-2 border-slate-200">
              <QueTinhLe color="blue" />
              <QueTinhLe color="blue" />
            </div>
          </div>
          <span className="text-xl font-black text-emerald-600">➕</span>
          <div className="flex gap-1">
            <QueTinhLe color="amber" />
            <QueTinhLe color="amber" />
            <QueTinhLe color="amber" />
          </div>
        </div>
      </div>
    );
  }

  // 19. TÍNH NHẨM: n20_4 (18 - 5)
  if (id === 'n20_4') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-300 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-rose-950 mb-2 flex items-center gap-1">
          <span>🎋 Có 1 bó 10 que và 8 que lẻ, bớt đi 5 que lẻ:</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-xl border border-rose-200 flex items-center justify-around">
          <QueTinhBo label="10 que" />
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
      </div>
    );
  }

  // 20. SO SÁNH: n20_5 (17 ... 14)
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

  // 21. BÀI TOÁN CỐC NƯỚC: tn20_1
  if (id === 'tn20_1') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex items-center justify-around w-full text-xs font-black">
          <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-sky-300">
            <div className="flex gap-1 text-lg">🥛🥛🥛</div>
            <span className="text-[11px] text-sky-900 mt-1">Còn nguyên: [ ? ] chiếc</span>
          </div>
          <span>➕</span>
          <div className="flex flex-col items-center bg-rose-50 p-2 rounded-xl border border-rose-300 text-rose-800">
            <div className="flex gap-1 text-lg">💥💥💥</div>
            <span className="text-[11px] text-rose-900 mt-1">Bị vỡ: 6 chiếc</span>
          </div>
        </div>
      </div>
    );
  }

  // 22. TÍNH NHANH: tn20_3
  if (id === 'tn20_3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-teal-50 rounded-2xl border-2 border-teal-200 shadow-2xs max-w-md mx-auto">
        <div className="flex items-center gap-2 text-xs font-black flex-wrap justify-center mb-2">
          <span className="bg-white border border-teal-300 px-2.5 py-1 rounded-xl text-teal-900 shadow-2xs">
            ⭐ (4 + 1 + 5)
          </span>
          <span>+</span>
          <span className="bg-white border border-amber-300 px-2.5 py-1 rounded-xl text-amber-900 shadow-2xs">
            ⭐ 7
          </span>
          <span>+</span>
          <span className="bg-white border border-teal-300 px-2.5 py-1 rounded-xl text-teal-900 shadow-2xs">
            ⭐ (4 + 1 + 5)
          </span>
        </div>
        <div className="text-xs font-black text-teal-900 bg-teal-100/90 px-3 py-1 rounded-xl border border-teal-300 shadow-2xs text-center">
          💡 Mẹo tính nhanh: 4 + 1 + 5 = 10. Hai nhóm tròn 10 là 20, cộng thêm 7 nhé!
        </div>
      </div>
    );
  }

  // 23. SỐ ĐẾN 100: n100_1 (4 bó chục)
  if (id === 'n100_1') {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-3 my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <QueTinhBo key={i} label={`Bó ${i + 1}`} />
        ))}
      </div>
    );
  }

  // 24. SỐ ĐẾN 100: n100_4 (Số 68)
  if (id === 'n100_4') {
    return (
      <div className="flex items-center justify-center gap-4 my-2 p-3 bg-indigo-50 rounded-2xl border-2 border-indigo-200 shadow-2xs max-w-sm mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-md">
          68
        </div>
        <div className="text-left text-xs font-black text-indigo-950">
          <div>• Hàng chục: 6 chục (60 que 🎋)</div>
          <div>• Hàng đơn vị: 8 que rời (🥢)</div>
          <div className="text-amber-800 text-[11px] font-bold mt-0.5">👉 Bé hãy chọn cách đọc số đúng bên dưới nhé!</div>
        </div>
      </div>
    );
  }

  // 25. SO SÁNH: n100_5 (45 vs 54)
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

  // 26. SỐ LIỀN SAU: n100_6 (89 -> 90)
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

  // 27. ĐO ĐỘ DÀI: cm4 (6cm + 3cm)
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

  // 28. ĐO ĐỘ DÀI: cm5 (15cm - 5cm)
  if (id === 'cm5') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <div className="w-full bg-white p-2 rounded-xl border border-rose-300 flex items-center gap-1 relative">
          <div className="h-6 bg-emerald-500 text-white text-[10px] font-black rounded flex items-center justify-center" style={{ width: '66%' }}>
            Còn lại: [ ? ] cm
          </div>
          <div className="h-6 bg-rose-200 text-rose-800 border-dashed border-2 border-rose-400 text-[10px] font-black rounded flex items-center justify-center" style={{ width: '34%' }}>
            ✂️ Cắt 5 cm
          </div>
        </div>
      </div>
    );
  }

  // 29. TÍNH NHẨM: as100_1 (30 + 20)
  if (id === 'as100_1') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50/70 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-md mx-auto">
        <div className="text-xs font-black text-amber-950 mb-2 flex items-center gap-1.5">
          <span>🎋 Gộp 3 bó que tính (30) và 2 bó que tính (20):</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-2xl border-2 border-amber-300 shadow-inner flex items-center justify-around gap-2">
          <div className="flex items-center gap-1 p-1 bg-blue-50 border border-blue-300 rounded-xl">
            {Array.from({ length: 3 }).map((_, i) => (
              <QueTinhBo key={`a_${i}`} label="10 que" />
            ))}
          </div>
          <span className="text-xl font-black text-amber-600">➕</span>
          <div className="flex items-center gap-1 p-1 bg-orange-50 border border-orange-300 rounded-xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <QueTinhBo key={`b_${i}`} label="10 que" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 30. TÍNH NHẨM: as100_2 (70 - 30)
  if (id === 'as100_2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50/70 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-md mx-auto">
        <div className="text-xs font-black text-amber-950 mb-2 flex items-center gap-1.5">
          <span>🎋 Có 7 bó que tính (70 que), bớt đi 3 bó que tính (30 que):</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-2xl border-2 border-amber-300 shadow-inner flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 p-1 bg-emerald-50/90 border border-emerald-300 rounded-xl">
            {Array.from({ length: 4 }).map((_, i) => (
              <QueTinhBo key={`c_${i}`} label="10 que" isCrossed={false} />
            ))}
          </div>
          <span className="text-xl font-black text-rose-600">➖</span>
          <div className="flex items-center gap-1.5 p-1 bg-rose-50/90 border border-rose-300 rounded-xl">
            {Array.from({ length: 3 }).map((_, i) => (
              <QueTinhBo key={`x_${i}`} label="Bớt 10" isCrossed={true} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 31. TÍNH: as100_3 (43 + 5)
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
      </div>
    );
  }

  // 32. TÍNH: as100_4 (34 + 23)
  if (id === 'as100_4') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-purple-50 rounded-2xl border-2 border-purple-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-purple-950 mb-1.5 flex items-center gap-1">
          <span>🎋 34 que (3 bó + 4 que) gộp với 23 que (2 bó + 3 que):</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-xl border border-purple-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-bold px-2">
            <span>Bó chục:</span>
            <span className="text-purple-900 font-black">3 bó 🎋🎋🎋 + 2 bó 🎋🎋 = [ ? ] bó</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold px-2 border-t pt-1.5">
            <span>Que lẻ:</span>
            <span className="text-indigo-900 font-black">4 que 🥢 + 3 que 🥢 = [ ? ] que</span>
          </div>
        </div>
      </div>
    );
  }

  // 33. TÍNH: as100_5 (68 - 25)
  if (id === 'as100_5') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-rose-50 rounded-2xl border-2 border-rose-200 shadow-2xs max-w-sm mx-auto">
        <div className="text-xs font-black text-rose-950 mb-1.5 flex items-center gap-1">
          <span>🎋 68 que (6 bó + 8 que), bớt đi 25 que (2 bó + 5 que):</span>
        </div>
        <div className="w-full bg-white p-2.5 rounded-xl border border-rose-200 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-bold px-2">
            <span>Bó chục:</span>
            <span className="text-rose-900 font-black">6 bó bớt 2 bó ➡️ còn [ ? ] bó chục</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold px-2 border-t pt-1.5">
            <span>Que lẻ:</span>
            <span className="text-rose-900 font-black">8 que bớt 5 que ➡️ còn [ ? ] que lẻ</span>
          </div>
        </div>
      </div>
    );
  }

  // 34. TOÁN ĐÀN VỊT: as100_6
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

  // 35. BÓNG BAY: as100_11 (48 - 16)
  if (id === 'as100_11') {
    return (
      <div className="flex items-center justify-around my-2 p-2.5 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border">
          <span className="text-2xl">🎈🎈🎈</span>
          <span className="text-xs font-black text-slate-800">Có 48 quả</span>
        </div>
        <span className="text-base font-black text-rose-600">➖ Đã bán 16 🎈</span>
        <div className="flex flex-col items-center bg-white p-2 rounded-xl border border-dashed border-blue-400">
          <span className="text-2xl">❓</span>
          <span className="text-xs font-black text-blue-800">Còn lại [ ? ]</span>
        </div>
      </div>
    );
  }

  // 36. TOÁN HỘP BÚT: tas100_1 (24 - 8 + 1)
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
          <span>➕</span>
          <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-1 rounded-lg">Thêm 1</span>
          <span>🟰</span>
          <span className="bg-blue-50 text-blue-900 border-2 border-dashed border-blue-400 px-2 py-1 rounded-lg font-black animate-pulse">[ ? ] bút</span>
        </div>
      </div>
    );
  }

  // 37. CHỒNG VỞ ALAN: tas100_3 (KHỚP 100% ĐỀ BÀI: 4 TRÊN, ALAN, 3 DƯỚI)
  if (id === 'tas100_3') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-xs mx-auto">
        <span className="text-[10px] font-black text-amber-900 mb-1">Chồng vở của lớp:</span>
        <div className="flex flex-col gap-1 w-32 items-center">
          <div className="w-28 h-5 bg-sky-200 border border-sky-400 rounded text-[9px] font-bold flex items-center justify-center">
            4 quyển bên trên
          </div>
          <div className="w-32 h-6 bg-gradient-to-r from-amber-400 to-orange-400 border-2 border-amber-600 rounded text-[10px] font-black text-white flex items-center justify-center shadow-xs">
            ⭐ Vở của Alan (1)
          </div>
          <div className="w-28 h-5 bg-purple-200 border border-purple-400 rounded text-[9px] font-bold flex items-center justify-center">
            3 quyển bên dưới
          </div>
        </div>
      </div>
    );
  }

  // 38. THỜI GIAN: ts2 (9h tối / 21:00)
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

  // 39. THỜI GIAN: ts3 (7 ngày trong tuần)
  if (id === 'ts3') {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-gradient-to-r from-rose-50 via-amber-50 to-sky-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-md mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-1">
          {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'].map((d, i) => (
            <span key={i} className="text-[10px] font-black bg-white border border-amber-300 text-amber-900 px-2 py-1 rounded-lg shadow-2xs">
              {d}
            </span>
          ))}
        </div>
        <span className="text-xs font-black text-amber-900 mt-1">🗓️ Bé hãy đếm xem có bao nhiêu ngày trong một tuần nhé!</span>
      </div>
    );
  }

  // 40. THỜI GIAN: ts4 (Thứ Năm -> Thứ Sáu)
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

  // 41. BÀI TOÁN TUỔI: tts2 (Emily 9, Alice +5)
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

  // =========================================================================
  // KHỐI LỚP 2: CÁC BÀI TOÁN CÓ HÌNH MINH HOẠ CHUẨN XÁC
  // =========================================================================

  // Cân thăng bằng: g2_l4_7 (Dưa hấu và hai quả cân 2kg + 3kg)
  if (id === 'g2_l4_7') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <span className="text-xs font-black text-emerald-950 mb-2">⚖️ Cân thăng bằng (hai đĩa cân ngang bằng nhau):</span>
        <div className="w-full flex items-center justify-around bg-white p-3 rounded-xl border border-emerald-200 shadow-inner">
          <div className="flex flex-col items-center p-2 bg-emerald-100/70 rounded-xl border border-emerald-400">
            <span className="text-3xl">🍉</span>
            <span className="text-xs font-black text-emerald-900 mt-1">Dưa hấu [ ? ] kg</span>
          </div>
          <div className="text-2xl font-black text-amber-600">⚖️=</div>
          <div className="flex flex-col items-center p-2 bg-amber-100/70 rounded-xl border border-amber-400">
            <div className="flex gap-1.5">
              <span className="px-2 py-1 bg-amber-300 rounded font-black text-xs text-amber-950">2 kg</span>
              <span className="px-2 py-1 bg-amber-300 rounded font-black text-xs text-amber-950">3 kg</span>
            </div>
            <span className="text-[11px] font-bold text-amber-900 mt-1">Hai quả cân</span>
          </div>
        </div>
      </div>
    );
  }

  // Đồng hồ: g2_l8_1 (Kim ngắn qua số 8, kim dài chỉ số 3 -> 8 giờ 15 phút)
  if (id === 'g2_l8_1') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 120 120" className="w-32 h-32">
          <circle cx="60" cy="60" r="54" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
          <circle cx="60" cy="60" r="4" fill="#0f172a" />
          <text x="60" y="20" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">12</text>
          <text x="104" y="64" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="black">3</text>
          <text x="60" y="108" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">6</text>
          <text x="24" y="82" textAnchor="middle" fill="#e11d48" fontSize="11" fontWeight="black">8</text>
          <text x="16" y="64" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">9</text>
          {/* Minute hand pointing at 3 (angle 90 deg) */}
          <line x1="60" y1="60" x2="96" y2="60" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
          {/* Hour hand slightly past 8 (angle ~ 247 deg) */}
          <line x1="60" y1="60" x2="32" y2="72" stroke="#e11d48" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
        <span className="text-xs font-black text-sky-950 mt-1">
          🔴 Kim ngắn (giờ): qua số 8 • 🔵 Kim dài (phút): chỉ số 3
        </span>
      </div>
    );
  }

  // Đồng hồ: g2_l8_2 (10 giờ rưỡi -> 10 giờ 30 phút)
  if (id === 'g2_l8_2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 120 120" className="w-32 h-32">
          <circle cx="60" cy="60" r="54" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
          <circle cx="60" cy="60" r="4" fill="#0f172a" />
          <text x="60" y="20" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">12</text>
          <text x="104" y="64" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">3</text>
          <text x="60" y="108" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="black">6</text>
          <text x="16" y="64" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">9</text>
          <text x="26" y="42" textAnchor="middle" fill="#e11d48" fontSize="11" fontWeight="black">10</text>
          {/* Minute hand pointing at 6 (30 min) */}
          <line x1="60" y1="60" x2="60" y2="100" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
          {/* Hour hand halfway between 10 and 11 */}
          <line x1="60" y1="60" x2="36" y2="38" stroke="#e11d48" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
        <span className="text-xs font-black text-sky-950 mt-1">
          Đồng hồ chỉ: 10 giờ rưỡi
        </span>
      </div>
    );
  }

  // Biểu đồ tranh: g2_l8_6 (Lan hái được 4 biểu tượng hoa đỏ, mỗi 🌹 = 2 bông)
  if (id === 'g2_l8_6') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50 rounded-2xl border-2 border-rose-300 shadow-2xs max-w-sm mx-auto">
        <span className="text-xs font-black text-rose-950 mb-1.5">📊 Biểu đồ tranh số hoa của bạn Lan:</span>
        <div className="w-full bg-white p-2.5 rounded-xl border border-rose-200 flex items-center justify-between">
          <span className="text-xs font-black text-slate-800">Bạn Lan:</span>
          <div className="flex gap-1.5 text-2xl">
            <span>🌹</span>
            <span>🌹</span>
            <span>🌹</span>
            <span>🌹</span>
          </div>
        </div>
        <div className="mt-1.5 text-[11px] font-bold text-rose-800 bg-rose-100/90 px-3 py-0.5 rounded-lg border border-rose-300">
          ℹ️ Ghi chú: Mỗi biểu tượng 🌹 biểu thị cho <strong>2 bông hoa</strong>
        </div>
      </div>
    );
  }

  // =========================================================================
  // KHỐI LỚP 3: CÁC BÀI TOÁN HÌNH HỌC VÀ ĐO LƯỜNG CHUẨN XÁC
  // =========================================================================

  // Hình chữ nhật 4 góc vuông: g3_l2_3
  if (id === 'g3_l2_3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 100" className="w-40 h-28">
          <rect x="25" y="20" width="110" height="60" fill="#d1fae5" stroke="#059669" strokeWidth="3" rx="2" />
          <rect x="25" y="20" width="12" height="12" fill="none" stroke="#e11d48" strokeWidth="2" />
          <rect x="123" y="20" width="12" height="12" fill="none" stroke="#e11d48" strokeWidth="2" />
          <rect x="25" y="68" width="12" height="12" fill="none" stroke="#e11d48" strokeWidth="2" />
          <rect x="123" y="68" width="12" height="12" fill="none" stroke="#e11d48" strokeWidth="2" />
        </svg>
        <span className="text-xs font-black text-emerald-950 mt-1">
          📐 Hình chữ nhật và các góc đỉnh (ký hiệu góc vuông màu đỏ)
        </span>
      </div>
    );
  }

  // Hình tròn đường kính d = 16 cm: g3_l2_5
  if (id === 'g3_l2_5') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 120" className="w-40 h-30">
          <circle cx="80" cy="60" r="45" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
          <line x1="35" y1="60" x2="125" y2="60" stroke="#0284c7" strokeWidth="2.5" />
          <circle cx="80" cy="60" r="4" fill="#e11d48" />
          <text x="80" y="54" textAnchor="middle" fill="#e11d48" fontSize="10" fontWeight="black">O</text>
          <text x="30" y="64" fill="#0284c7" fontSize="10" fontWeight="bold">A</text>
          <text x="130" y="64" fill="#0284c7" fontSize="10" fontWeight="bold">B</text>
          <text x="80" y="78" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="black">Đường kính d = 16 cm</text>
        </svg>
        <span className="text-xs font-black text-sky-950 mt-1">
          Bán kính r = AB ÷ 2
        </span>
      </div>
    );
  }

  // Hình chữ nhật 8cm x 5cm: g3_l6_2
  if (id === 'g3_l6_2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 100" className="w-40 h-26">
          <rect x="25" y="20" width="110" height="60" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
          <text x="80" y="15" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="black">Chiều dài: 8 cm</text>
          <text x="142" y="54" fill="#b45309" fontSize="11" fontWeight="black">5 cm</text>
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          Chu vi = (Dài + Rộng) × 2
        </span>
      </div>
    );
  }

  // Hình chữ nhật 9cm x 4cm: g3_l6_3
  if (id === 'g3_l6_3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 90" className="w-40 h-24">
          <rect x="20" y="20" width="120" height="50" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
          <text x="80" y="15" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="black">Chiều dài: 9 cm</text>
          <text x="145" y="50" fill="#b45309" fontSize="11" fontWeight="black">4 cm</text>
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          Diện tích = Chiều dài × Chiều rộng
        </span>
      </div>
    );
  }

  // Hình vuông cạnh 6cm: g3_l6_4
  if (id === 'g3_l6_4') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 120 120" className="w-28 h-28">
          <rect x="20" y="20" width="80" height="80" fill="#d1fae5" stroke="#059669" strokeWidth="3" />
          <text x="60" y="15" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="black">Cạnh: 6 cm</text>
        </svg>
        <span className="text-xs font-black text-emerald-950 mt-1">
          Chu vi hình vuông = Cạnh × 4
        </span>
      </div>
    );
  }

  // Hình vuông cạnh 7cm: g3_l6_5
  if (id === 'g3_l6_5') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 120 120" className="w-28 h-28">
          <rect x="20" y="20" width="80" height="80" fill="#d1fae5" stroke="#059669" strokeWidth="3" />
          <text x="60" y="15" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="black">Cạnh: 7 cm</text>
        </svg>
        <span className="text-xs font-black text-emerald-950 mt-1">
          Diện tích hình vuông = Cạnh × Cạnh
        </span>
      </div>
    );
  }

  // =========================================================================
  // KHỐI LỚP 4: CÁC BÀI TOÁN HÌNH HỌC VÀ PHÂN SỐ TRỰC QUAN
  // =========================================================================

  // Đồng hồ 6 giờ đúng: g4_l3_7
  if (id === 'g4_l3_7') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 120 120" className="w-32 h-32">
          <circle cx="60" cy="60" r="54" fill="#ffffff" stroke="#0284c7" strokeWidth="4" />
          <circle cx="60" cy="60" r="4" fill="#0f172a" />
          <text x="60" y="22" textAnchor="middle" fill="#0284c7" fontSize="11" fontWeight="black">12</text>
          <text x="60" y="106" textAnchor="middle" fill="#e11d48" fontSize="11" fontWeight="black">6</text>
          <line x1="60" y1="26" x2="60" y2="96" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        <span className="text-xs font-black text-sky-950 mt-1">
          Hai kim thẳng hàng tạo thành góc 180° (Góc bẹt)
        </span>
      </div>
    );
  }

  // Phân số ô vuông: g4_l5_8 (Hình vuông chia 8 ô, đã tô màu 5 ô)
  if (id === 'g4_l5_8') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-indigo-50 rounded-2xl border-2 border-indigo-300 shadow-2xs max-w-sm mx-auto">
        <span className="text-xs font-black text-indigo-950 mb-2">
          Hình vuông chia 8 ô bằng nhau (5 ô xanh, 3 ô trắng):
        </span>
        <div className="grid grid-cols-4 gap-1 bg-white p-2 rounded-xl border-2 border-indigo-400 shadow-inner">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`s_${i}`} className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-black">
              ✓
            </div>
          ))}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={`u_${i}`} className="w-10 h-10 bg-slate-100 border border-dashed border-slate-400 rounded flex items-center justify-center text-slate-400 text-xs font-bold">
              Trắng
            </div>
          ))}
        </div>
        <span className="text-xs font-black text-indigo-900 mt-2">
          🔍 Hỏi: Phân số chỉ phần CHƯA TÔ MÀU (ô trắng) là bao nhiêu?
        </span>
      </div>
    );
  }

  // Hình bình hành: g4_l7_3 (Đáy 12 cm, chiều cao 7 cm)
  if (id === 'g4_l7_3') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 180 90" className="w-44 h-24">
          <polygon points="35,20 160,20 135,75 10,75" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
          <line x1="35" y1="20" x2="35" y2="75" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <text x="40" y="50" fill="#ef4444" fontSize="10" fontWeight="black">h = 7 cm</text>
          <text x="75" y="88" fill="#92400e" fontSize="11" fontWeight="black">Đáy a = 12 cm</text>
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          Diện tích hình bình hành = Đáy × Chiều cao
        </span>
      </div>
    );
  }

  // Hình thoi: g4_l7_6 (Hai đường chéo 8 dm và 6 dm)
  if (id === 'g4_l7_6') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 100" className="w-40 h-26">
          <polygon points="80,10 145,50 80,90 15,50" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" />
          <line x1="15" y1="50" x2="145" y2="50" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <line x1="80" y1="10" x2="80" y2="90" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
          <text x="85" y="35" fill="#3b82f6" fontSize="10" fontWeight="black">6 dm</text>
          <text x="110" y="46" fill="#ef4444" fontSize="10" fontWeight="black">8 dm</text>
        </svg>
        <span className="text-xs font-black text-purple-950 mt-1">
          Diện tích hình thoi = (d₁ × d₂) ÷ 2
        </span>
      </div>
    );
  }

  // Hình thoi cạnh 9cm: g4_l7_7
  if (id === 'g4_l7_7') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 140 100" className="w-36 h-26">
          <polygon points="70,15 125,50 70,85 15,50" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" />
          <text x="98" y="32" fill="#7e22ce" fontSize="11" fontWeight="black">9 cm</text>
        </svg>
        <span className="text-xs font-black text-purple-950 mt-1">
          Hình thoi có 4 cạnh bằng nhau: Chu vi = Cạnh × 4
        </span>
      </div>
    );
  }

  // =========================================================================
  // KHỐI LỚP 5: HÌNH HỌC KHÔNG GIAN, TAM GIÁC, HÌNH THANG, HÌNH TRÒN
  // =========================================================================

  // Tam giác đáy 14cm, cao 8cm: g5_l4_2
  if (id === 'g5_l4_2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 100" className="w-40 h-26">
          <polygon points="60,20 140,80 20,80" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
          <line x1="60" y1="20" x2="60" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <text x="65" y="50" fill="#ef4444" fontSize="10" fontWeight="black">h = 8 cm</text>
          <text x="80" y="94" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="black">Đáy = 14 cm</text>
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          Diện tích tam giác = (Đáy × Chiều cao) ÷ 2
        </span>
      </div>
    );
  }

  // Hình thang: g5_l4_6 (Đáy lớn 20m, đáy bé 12m, cao 10m)
  if (id === 'g5_l4_6') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 180 100" className="w-44 h-26">
          <polygon points="40,25 120,25 155,80 15,80" fill="#d1fae5" stroke="#059669" strokeWidth="3" />
          <line x1="40" y1="25" x2="40" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <text x="80" y="18" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="black">Đáy bé: 12 m</text>
          <text x="45" y="55" fill="#ef4444" fontSize="10" fontWeight="black">h = 10 m</text>
          <text x="85" y="95" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="black">Đáy lớn: 20 m</text>
        </svg>
        <span className="text-xs font-black text-emerald-950 mt-1">
          Diện tích hình thang = (Đáy lớn + Đáy bé) × Chiều cao ÷ 2
        </span>
      </div>
    );
  }

  // Hình tròn đường kính d = 10cm: g5_l5_2
  if (id === 'g5_l5_2') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 140 120" className="w-36 h-30">
          <circle cx="70" cy="60" r="45" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
          <line x1="25" y1="60" x2="115" y2="60" stroke="#ef4444" strokeWidth="2.5" />
          <circle cx="70" cy="60" r="3.5" fill="#0369a1" />
          <text x="70" y="54" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="black">O</text>
          <text x="70" y="76" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="black">d = 10 cm</text>
        </svg>
        <span className="text-xs font-black text-sky-950 mt-1">
          Chu vi hình tròn = Đường kính × 3,14
        </span>
      </div>
    );
  }

  // Hình tròn bán kính r = 2cm: g5_l5_4
  if (id === 'g5_l5_4') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 140 120" className="w-36 h-30">
          <circle cx="70" cy="60" r="45" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
          <line x1="70" y1="60" x2="115" y2="60" stroke="#ef4444" strokeWidth="2.5" />
          <circle cx="70" cy="60" r="3.5" fill="#0369a1" />
          <text x="64" y="58" fill="#0369a1" fontSize="10" fontWeight="black">O</text>
          <text x="92" y="54" fill="#ef4444" fontSize="10" fontWeight="black">r = 2 cm</text>
        </svg>
        <span className="text-xs font-black text-sky-950 mt-1">
          Diện tích hình tròn = Bán kính × Bán kính × 3,14
        </span>
      </div>
    );
  }

  // Hình vành khăn: g5_l5_8 (50 cm2 và 20 cm2)
  if (id === 'g5_l5_8') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-indigo-50 rounded-2xl border-2 border-indigo-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 140 130" className="w-36 h-32">
          <circle cx="70" cy="65" r="52" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="2.5" />
          <circle cx="70" cy="65" r="26" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />
          <circle cx="70" cy="65" r="3" fill="#4f46e5" />
          <text x="70" y="45" textAnchor="middle" fill="#4338ca" fontSize="9" fontWeight="black">S_ngoài = 50 cm²</text>
          <text x="70" y="78" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">S_trong = 20 cm²</text>
        </svg>
        <span className="text-xs font-black text-indigo-950 mt-1">
          Diện tích hình vành khăn = S(lớn) − S(bé)
        </span>
      </div>
    );
  }

  // Hình vuông cạnh 10cm và hình tròn nội tiếp: g5_t5_1
  if (id === 'g5_t5_1') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 130 130" className="w-36 h-36">
          <rect x="15" y="15" width="100" height="100" fill="#fed7aa" stroke="#c2410c" strokeWidth="3" />
          <circle cx="65" cy="65" r="50" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
          <text x="65" y="11" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="black">Cạnh: 10 cm</text>
          <text x="65" y="68" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="bold">Hình tròn nội tiếp (d = 10 cm)</text>
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          Diện tích 4 góc ngoài = S(vuông) − S(tròn)
        </span>
      </div>
    );
  }

  // Hình hộp chữ nhật 3D: g5_l6_4 (8cm x 5cm x 6cm)
  if (id === 'g5_l6_4') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 110" className="w-40 h-28">
          <rect x="30" y="35" width="70" height="55" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
          <polygon points="30,35 60,15 130,15 100,35" fill="#ffedd5" stroke="#c2410c" strokeWidth="2" />
          <polygon points="100,35 130,15 130,70 100,90" fill="#fdba74" stroke="#c2410c" strokeWidth="2" />
          <text x="65" y="103" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="black">Dài: 8 cm</text>
          <text x="13" y="65" fill="#9a3412" fontSize="10" fontWeight="black">Cao 6cm</text>
          <text x="122" y="45" fill="#9a3412" fontSize="9" fontWeight="black">Rộng 5cm</text>
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          Thể tích = Dài × Rộng × Cao
        </span>
      </div>
    );
  }

  // Hình lập phương 3D: g5_l6_5 (Cạnh 5cm)
  if (id === 'g5_l6_5') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 140 110" className="w-36 h-28">
          <rect x="30" y="40" width="55" height="55" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="2" />
          <polygon points="30,40 55,18 110,18 85,40" fill="#f3e8ff" stroke="#7e22ce" strokeWidth="2" />
          <polygon points="85,40 110,18 110,73 85,95" fill="#d8b4fe" stroke="#7e22ce" strokeWidth="2" />
          <text x="57" y="106" textAnchor="middle" fill="#6b21a8" fontSize="10" fontWeight="black">Cạnh a = 5 cm</text>
        </svg>
        <span className="text-xs font-black text-purple-950 mt-1">
          Thể tích = Cạnh × Cạnh × Cạnh
        </span>
      </div>
    );
  }

  // Các câu hỏi không có hình đặc thù: Không hiển thị hình ngẫu nhiên để tránh lệch đề bài
  return null;
}

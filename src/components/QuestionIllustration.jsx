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
 * QuestionIllustration: Renders rich, pedagogically accurate visual representations
 * for ALL grades (Grade 1 - 5 and TIMO challenges).
 * Prevents answer leaks and generates mathematically precise geometry, fraction,
 * place value, and word problem diagrams.
 */
export default function QuestionIllustration({ level }) {
  if (!level) return null;

  const id = level.id || '';
  const q = (level.question || '').toLowerCase();
  const title = (level.title || '').toLowerCase();

  // =========================================================================
  // PHẦN 1: CÁC CÂU HỎI ĐẶC THÙ LỚP 1 (ĐÃ SỬA TOÀN BỘ LỖI LỘ ĐÁP ÁN)
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

  // 5. HÌNH VUÔNG: geo6 (ĐÃ SỬA: KHÔNG LỘ ĐÁP ÁN)
  if (id === 'geo6') {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 shadow-2xs max-w-sm mx-auto">
        <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg border-4 border-amber-600 shadow-md flex items-center justify-center text-white font-black text-4xl">
          🟧
          {/* Tick marks on 4 sides */}
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

  // 7. VỊ TRÍ: geo8 (ĐÃ SỬA: KHÔNG LỘ ĐÁP ÁN)
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

  // 8. VỊ TRÍ: geo9 (ĐÃ SỬA: KHÔNG LỘ ĐÁP ÁN)
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

  // 9. STACK OF BOOKS: Alan's notebook (tas100_3) - (ĐÃ SỬA KHỚP 100% ĐỀ BÀI)
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

  // 11. ADDITION: 6 + ? = 10 (Khung 10 ô)
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

  // 12. SUBTRACTION: 8 birds on branch, 3 fly away
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

  // =========================================================================
  // PHẦN 2: DYNAMIC SMART ILLUSTRATION ENGINE (TỰ ĐỘNG VẼ HÌNH CHÍNH XÁC)
  // =========================================================================

  // 1. Phân số (Fractions: a/b)
  const fracMatch = level.question.match(/(\d+)\/(\d+)/) || (level.options && level.options[0]?.match?.(/(\d+)\/(\d+)/));
  if (fracMatch || q.includes('phân số') || q.includes('tử số') || q.includes('mẫu số')) {
    const num = fracMatch ? Math.min(Number(fracMatch[1]), 12) : 3;
    const denom = fracMatch ? Math.min(Number(fracMatch[2]), 12) : 4;
    const validDenom = denom > 0 ? denom : 4;
    const validNum = Math.min(num, validDenom);

    return (
      <div className="flex flex-col items-center my-2 p-3 bg-indigo-50/90 rounded-2xl border-2 border-indigo-200 shadow-2xs max-w-sm mx-auto">
        <span className="text-xs font-black text-indigo-950 mb-2">
          📊 Mô hình Phân số trực quan:
        </span>
        <div className="w-full flex h-10 border-2 border-indigo-600 rounded-xl overflow-hidden shadow-inner bg-white">
          {Array.from({ length: validDenom }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 border-r border-indigo-300 last:border-r-0 flex items-center justify-center text-xs font-black transition-colors ${
                i < validNum
                  ? 'bg-gradient-to-t from-indigo-500 to-sky-400 text-white shadow-xs'
                  : 'bg-white text-slate-300'
              }`}
            >
              {i < validNum ? '✓' : ''}
            </div>
          ))}
        </div>
        <div className="mt-2 text-[11px] font-bold text-indigo-800 flex items-center gap-2">
          <span>Tô màu {validNum} phần</span>
          <span>•</span>
          <span>Tổng số {validDenom} phần bằng nhau</span>
        </div>
      </div>
    );
  }

  // 2. Hình bình hành (Parallelogram)
  if (q.includes('hình bình hành') || title.includes('hình bình hành')) {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50/90 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 200 100" className="w-48 h-24">
          <polygon points="40,20 180,20 150,80 10,80" fill="#fef3c7" stroke="#d97706" strokeWidth="3" />
          <line x1="40" y1="20" x2="40" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
          <text x="45" y="55" fill="#ef4444" fontSize="12" fontWeight="bold">h</text>
          <text x="80" y="95" fill="#92400e" fontSize="12" fontWeight="bold">đáy a</text>
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          📐 Hình bình hành: Đáy (a) và Chiều cao tương ứng (h)
        </span>
      </div>
    );
  }

  // 3. Hình thoi (Rhombus)
  if (q.includes('hình thoi') || title.includes('hình thoi')) {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-purple-50/90 rounded-2xl border-2 border-purple-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 200 110" className="w-48 h-26">
          <polygon points="100,10 180,55 100,100 20,55" fill="#f3e8ff" stroke="#9333ea" strokeWidth="3" />
          <line x1="20" y1="55" x2="180" y2="55" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <line x1="100" y1="10" x2="100" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
          <text x="105" y="35" fill="#3b82f6" fontSize="11" fontWeight="bold">d₁</text>
          <text x="140" y="50" fill="#ef4444" fontSize="11" fontWeight="bold">d₂</text>
        </svg>
        <span className="text-xs font-black text-purple-950 mt-1">
          🔷 Hình thoi: Hai đường chéo vuông góc d₁ và d₂
        </span>
      </div>
    );
  }

  // 4. Hình thang (Trapezoid)
  if (q.includes('hình thang') || title.includes('hình thang')) {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-emerald-50/90 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 200 110" className="w-48 h-26">
          <polygon points="50,20 150,20 180,85 20,85" fill="#ecfdf5" stroke="#059669" strokeWidth="3" />
          <line x1="50" y1="20" x2="50" y2="85" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
          <text x="90" y="16" fill="#047857" fontSize="11" fontWeight="bold">đáy bé a</text>
          <text x="90" y="102" fill="#047857" fontSize="11" fontWeight="bold">đáy lớn b</text>
          <text x="55" y="55" fill="#ef4444" fontSize="11" fontWeight="bold">h</text>
        </svg>
        <span className="text-xs font-black text-emerald-950 mt-1">
          📐 Hình thang: Đáy bé (a), Đáy lớn (b) và Chiều cao (h)
        </span>
      </div>
    );
  }

  // 5. Hình tròn & Bán kính, Đường kính (Circle)
  if (q.includes('hình tròn') || q.includes('bán kính') || q.includes('đường kính')) {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-sky-50/90 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 140" className="w-40 h-32">
          <circle cx="80" cy="70" r="50" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3" />
          <line x1="80" y1="70" x2="130" y2="70" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="80" cy="70" r="4" fill="#0369a1" />
          <text x="75" y="65" fill="#0369a1" fontSize="11" fontWeight="bold">O</text>
          <text x="100" y="65" fill="#ef4444" fontSize="11" fontWeight="bold">r</text>
        </svg>
        <span className="text-xs font-black text-sky-950 mt-1">
          ⭕ Hình tròn tâm O: Bán kính r (Đường kính d = 2 × r)
        </span>
      </div>
    );
  }

  // 6. Khối lập phương & Khối hộp chữ nhật 3D (Cubes / Rectangular Prisms)
  if (q.includes('lập phương') || q.includes('hộp chữ nhật') || q.includes('khối hộp') || q.includes('diện tích xung quanh')) {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-amber-50/90 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 160 120" className="w-40 h-28">
          {/* Front face */}
          <rect x="30" y="40" width="60" height="60" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
          {/* Top face */}
          <polygon points="30,40 60,15 120,15 90,40" fill="#ffedd5" stroke="#c2410c" strokeWidth="2" />
          {/* Right face */}
          <polygon points="90,40 120,15 120,75 90,100" fill="#fdba74" stroke="#c2410c" strokeWidth="2" />
        </svg>
        <span className="text-xs font-black text-amber-950 mt-1">
          📦 Khối hình học không gian 3D
        </span>
      </div>
    );
  }

  // 7. Góc vuông, góc nhọn, góc tù (Angles)
  if (q.includes('góc vuông') || q.includes('góc nhọn') || q.includes('góc tù')) {
    return (
      <div className="flex flex-col items-center my-2 p-3 bg-rose-50/90 rounded-2xl border-2 border-rose-300 shadow-2xs max-w-sm mx-auto">
        <svg viewBox="0 0 140 100" className="w-36 h-26">
          <line x1="20" y1="80" x2="120" y2="80" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="80" x2="20" y2="15" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />
          {/* Square marker for right angle */}
          <rect x="20" y="65" width="15" height="15" fill="none" stroke="#059669" strokeWidth="2" />
          <circle cx="20" cy="80" r="4" fill="#be123c" />
          <text x="10" y="95" fill="#be123c" fontSize="11" fontWeight="bold">O</text>
        </svg>
        <span className="text-xs font-black text-rose-950 mt-1">
          📐 Góc vuông đỉnh O (90°)
        </span>
      </div>
    );
  }

  // 8. Tiền tệ Việt Nam (Money / Currency)
  if (q.includes('đồng') || q.includes('tiền') || q.includes('mua') || q.includes('bán')) {
    return (
      <div className="flex items-center justify-around my-2 p-2.5 bg-emerald-50/90 rounded-2xl border-2 border-emerald-300 shadow-2xs max-w-sm mx-auto">
        <div className="flex flex-col items-center bg-white px-3 py-1.5 rounded-xl border-2 border-emerald-500 shadow-xs">
          <span className="text-2xl">💵</span>
          <span className="text-[10px] font-black text-emerald-900 mt-0.5">Tiền Việt Nam</span>
        </div>
        <span className="text-sm font-black text-emerald-700">🪙 Đơn vị: Đồng (VNĐ)</span>
      </div>
    );
  }

  // 9. Cấu tạo số có 3 chữ số (Trăm - Chục - Đơn vị: Grade 2)
  if (q.includes('trăm') && q.includes('chục') && q.includes('đơn vị')) {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-blue-50/90 rounded-2xl border-2 border-blue-300 shadow-2xs max-w-sm mx-auto">
        <span className="text-xs font-black text-blue-950 mb-1.5">
          🔢 Bảng Cấu Tạo Số:
        </span>
        <div className="grid grid-cols-3 gap-1.5 w-full text-center">
          <div className="bg-white p-1.5 rounded-xl border border-blue-300">
            <span className="text-[10px] font-bold text-slate-500 block">Hàng Trăm</span>
            <span className="text-lg font-black text-blue-900">💯</span>
          </div>
          <div className="bg-white p-1.5 rounded-xl border border-amber-300">
            <span className="text-[10px] font-bold text-slate-500 block">Hàng Chục</span>
            <span className="text-lg font-black text-amber-900">🎋</span>
          </div>
          <div className="bg-white p-1.5 rounded-xl border border-emerald-300">
            <span className="text-[10px] font-bold text-slate-500 block">Hàng Đơn Vị</span>
            <span className="text-lg font-black text-emerald-900">🥢</span>
          </div>
        </div>
      </div>
    );
  }

  // 10. Toán chuyển động đều: Vận tốc, Quãng đường, Thời gian (Grade 5)
  if (q.includes('vận tốc') || q.includes('quãng đường') || q.includes('km/h')) {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-sky-50/90 rounded-2xl border-2 border-sky-300 shadow-2xs max-w-sm mx-auto">
        <div className="w-full flex items-center justify-between text-xs font-black text-sky-950 mb-1">
          <span>🏁 Điểm A</span>
          <span className="text-2xl animate-bounce-slow">🚗💨</span>
          <span>🏁 Điểm B</span>
        </div>
        <div className="w-full h-2.5 bg-slate-300 rounded-full relative overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full w-3/4" />
        </div>
        <div className="mt-1.5 text-[11px] font-bold text-sky-900">
          Công thức: <strong className="text-rose-600">s = v × t</strong> (Quãng đường = Vận tốc × Thời gian)
        </div>
      </div>
    );
  }

  // 11. Sơ đồ Tỉ số & Tổng - Tỉ / Hiệu - Tỉ (Grade 4)
  if (q.includes('tổng số phần') || q.includes('số lớn') && q.includes('số bé') || q.includes('tỉ số')) {
    return (
      <div className="flex flex-col items-center my-2 p-2.5 bg-amber-50/90 rounded-2xl border-2 border-amber-300 shadow-2xs max-w-sm mx-auto">
        <span className="text-xs font-black text-amber-950 mb-1.5">
          📊 Sơ đồ đoạn thẳng biểu thị tỉ số:
        </span>
        <div className="w-full space-y-1.5 text-xs font-bold text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-12 text-[11px] font-black">Số bé:</span>
            <div className="flex gap-1 flex-1">
              <div className="h-4 flex-1 bg-amber-400 rounded border border-amber-600 shadow-2xs" />
              <div className="h-4 flex-1 bg-amber-400 rounded border border-amber-600 shadow-2xs" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-12 text-[11px] font-black">Số lớn:</span>
            <div className="flex gap-1 flex-1">
              <div className="h-4 flex-1 bg-blue-500 rounded border border-blue-700 shadow-2xs" />
              <div className="h-4 flex-1 bg-blue-500 rounded border border-blue-700 shadow-2xs" />
              <div className="h-4 flex-1 bg-blue-500 rounded border border-blue-700 shadow-2xs" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default clean pedagogical visual card
  return (
    <div className="my-1.5 p-2 bg-gradient-to-r from-amber-50/90 to-orange-50/90 rounded-2xl border border-amber-300 shadow-2xs flex items-center justify-center gap-2 max-w-sm mx-auto">
      <span className="text-xl animate-bounce-slow">💡</span>
      <span className="text-xs font-black text-amber-950">
        Bé hãy suy nghĩ và chọn câu trả lời đúng nhé!
      </span>
      <span className="text-xl animate-bounce-slow">✨</span>
    </div>
  );
}

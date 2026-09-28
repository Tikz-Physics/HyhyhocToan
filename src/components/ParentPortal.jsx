import React, { useState } from 'react';
import { BarChart3, Lightbulb, RotateCcw, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { getCurriculumZones, GRADE_CONFIGS } from '../data/curriculumData';
import { CURRENT_APP_VERSION } from '../utils/updateManager';

export default function ParentPortal({
  stars,
  completedTasks = [],
  userMedals = [],
  redeemedRewards = [],
  usedRewardHistory = [],
  onResetProgress,
  currentAccount,
  onOpenAccountModal,
  onUpdateAccountPin,
  onWipeAllAccounts,
  selectedGrade = 1,
  onSelectGrade,
  onOpenUpdateModal,
  updateInfo,
}) {
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPinInput, setNewPinInput] = useState('');
  const [pinChangeSuccess, setPinChangeSuccess] = useState(false);
  const currentZones = getCurriculumZones(selectedGrade);
  const totalAvailableTasks = currentZones.reduce(
    (acc, z) => acc + z.basicLevels.length + z.timoChallenges.length,
    0
  );

  const availableVouchers = redeemedRewards.filter((r) => r.status === 'available');
  const usedVouchers = [
    ...usedRewardHistory,
    ...redeemedRewards.filter((r) => r.status === 'used'),
  ];
  const allVouchers = [...availableVouchers, ...usedVouchers];
  const totalScreenMinutes = allVouchers
    .filter((r) => r.minutes > 0)
    .reduce((sum, r) => sum + r.minutes, 0);

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 pb-28 sm:pb-24 landscape:pb-12 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] space-y-6">
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

      {/* Child PIN Security Setting Card */}
      {currentAccount && (
        <div className="bg-white rounded-3xl border-4 border-indigo-200 p-4 sm:p-5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border-2 border-indigo-300 flex items-center justify-center text-2xl text-indigo-600 flex-shrink-0">
              🔒
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-slate-800">
                  Mật Mã 4 Số Bảo Vệ Bé ({currentAccount.name})
                </h3>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Đang bật
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Mỗi bé cần nhập 4 số này để đăng nhập, tránh việc các bé tự ý bấm sang tài khoản của nhau.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 font-mono text-sm font-black text-slate-800">
              <span>{showPin ? (currentAccount.pin || '1234') : '••••'}</span>
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                title={showPin ? 'Ẩn mật mã' : 'Hiện mật mã'}
              >
                {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setNewPinInput(currentAccount.pin || '1234');
                setIsChangingPin(true);
                setPinChangeSuccess(false);
              }}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl shadow-xs cursor-pointer btn-kid-3d whitespace-nowrap"
            >
              Đổi Mã PIN
            </button>
          </div>
        </div>
      )}

      {/* Change PIN Modal Popup */}
      {isChangingPin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-pop">
          <div className="bg-white rounded-3xl border-4 border-indigo-400 p-5 max-w-sm w-full shadow-2xl text-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h4 className="font-black text-base text-slate-800 flex items-center gap-2">
                <span>🔒</span> Đổi Mật Mã 4 Số Cho Bé
              </h4>
              <button
                onClick={() => {
                  setIsChangingPin(false);
                  setNewPinInput('');
                  setPinChangeSuccess(false);
                }}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 font-medium">
              Nhập mật mã 4 số mới cho bé <strong>{currentAccount.name}</strong>:
            </p>

            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              autoFocus
              value={newPinInput}
              onChange={(e) => setNewPinInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="VD: 5678"
              className="w-full text-center text-3xl font-black font-mono tracking-widest py-3 border-2 border-indigo-300 focus:border-indigo-600 rounded-2xl bg-indigo-50/50 text-indigo-950 outline-none"
            />

            {pinChangeSuccess && (
              <p className="text-xs font-black text-emerald-600 text-center animate-pop">
                🎉 Đã đổi mật mã thành công!
              </p>
            )}

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setIsChangingPin(false);
                  setNewPinInput('');
                }}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Hủy
              </button>
              <button
                type="button"
                disabled={newPinInput.length !== 4}
                onClick={() => {
                  if (newPinInput.length === 4 && onUpdateAccountPin) {
                    onUpdateAccountPin(currentAccount.id, newPinInput);
                    setPinChangeSuccess(true);
                    setTimeout(() => {
                      setIsChangingPin(false);
                      setPinChangeSuccess(false);
                      setNewPinInput('');
                    }, 1000);
                  }
                }}
                className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-black text-xs rounded-xl shadow-xs btn-kid-3d"
              >
                Lưu Mật Mã 💾
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Metrics Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
            ⭐
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-slate-500 block truncate">Sao tích lũy</span>
            <p className="text-xl sm:text-2xl font-black text-slate-800">{stars} Sao</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
            ✅
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-slate-500 block truncate">Bài đã hoàn thành</span>
            <p className="text-lg sm:text-2xl font-black text-slate-800 truncate">
              {completedTasks.length} / {totalAvailableTasks}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
            🏅
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-slate-500 block truncate">Huy chương Timo</span>
            <p className="text-xl sm:text-2xl font-black text-slate-800">{userMedals.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl sm:text-2xl font-black flex-shrink-0">
            🎟️
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-bold text-slate-500 block truncate">Phiếu thưởng đổi</span>
            <p className="text-xl sm:text-2xl font-black text-slate-800">
              {availableVouchers.length} <span className="text-xs font-semibold text-slate-400">/ {allVouchers.length}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Real-World Reward Management Section */}
      <div className="bg-white rounded-3xl border-4 border-rose-200 p-4 sm:p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-rose-100">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl sm:text-3xl">🎁</span>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-800">
                Nhật Ký Đổi Thưởng Ngoài Đời Thực
              </h2>
              <p className="text-xs font-semibold text-slate-500">
                Phụ huynh theo dõi thời gian xem video, chơi game bé đã đổi bằng điểm tự học
              </p>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-xl text-xs font-black text-rose-800 self-start sm:self-auto">
            Tổng giờ màn hình đã quy đổi: {totalScreenMinutes} phút
          </div>
        </div>

        {allVouchers.length === 0 ? (
          <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-center text-xs font-bold text-slate-500">
            Bé chưa dùng sao để đổi phiếu thưởng nào. Khi bé đổi xem TV hoặc chơi game trong Phòng Truyền Thống, phiếu sẽ hiển thị tại đây.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {allVouchers.map((v) => {
              const isAvailable = v.status === 'available';
              return (
                <div
                  key={v.id}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
                    isAvailable
                      ? 'bg-rose-50/70 border-rose-300'
                      : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-2xl flex-shrink-0">{v.icon}</span>
                    <div className="min-w-0">
                      <div className="font-black text-xs sm:text-sm text-slate-800 truncate">
                        {v.title}
                      </div>
                      <div className="text-[11px] font-bold text-slate-500">
                        {v.minutes > 0 ? `Thời lượng: ${v.minutes} phút` : 'Phần thưởng trải nghiệm'} • {v.cost} ⭐
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase flex-shrink-0 ${
                      isAvailable
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-slate-300 text-slate-600'
                    }`}
                  >
                    {isAvailable ? 'Sẵn sàng dùng' : 'Đã sử dụng'}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* App Installation & Auto-Update Section */}
      <div className="bg-white rounded-3xl border-4 border-amber-300 p-4 sm:p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-xs flex-shrink-0 animate-bounce-slow">
              📲
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-800">
                  Cài Đặt & Cập Nhật Tự Động
                </h2>
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full">
                  v{CURRENT_APP_VERSION}
                </span>
                {updateInfo?.hasUpdate && (
                  <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">
                    Có bản mới
                  </span>
                )}
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Tải ứng dụng về màn hình chính điện thoại hoặc cập nhật các đề toán mới nhất từ máy chủ
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (onOpenUpdateModal) onOpenUpdateModal();
            }}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 text-amber-950 font-black text-xs sm:text-sm rounded-xl shadow-sm btn-kid-3d cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-auto active:scale-95 transition-all"
          >
            <RefreshCw className="w-4 h-4 text-amber-950" />
            <span>Kiểm Tra & Cập Nhật App</span>
          </button>
        </div>
      </div>

      {/* Progress Breakdown across Zones */}
      <div className="bg-white rounded-3xl border-4 border-slate-200 p-4 sm:p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">
              Tiến Trình Theo 8 Chủ Đề Toán Lớp {selectedGrade} (CTGDPT 2018)
            </h2>
          </div>

          {/* Grade selection pills */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl overflow-x-auto">
            {GRADE_CONFIGS.map((g) => (
              <button
                key={g.grade}
                type="button"
                onClick={() => onSelectGrade && onSelectGrade(g.grade)}
                className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  Number(selectedGrade) === g.grade
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {currentZones.map((zone) => {
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
            Cơ Chế Sư Phạm & Lời Khuyên Dành Cho Phụ Huynh
          </h2>
        </div>

        <div className="space-y-3.5 text-sm font-semibold text-slate-700 leading-relaxed">
          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <strong className="text-amber-900 block mb-1">
              1. Cơ chế tính điểm 1 lần & Phạt khi làm sai:
            </strong>
            Mỗi bài tập chỉ được cộng điểm một lần duy nhất khi giải đúng, ngăn chặn việc bấm đi bấm lại để cày sao. Khi chọn sai, bé bị trừ 1 ⭐ và các phương án lập tức bị khóa để bé đọc kỹ hướng dẫn giải chi tiết trước khi bấm "Làm lại". Điều này rèn luyện tính cẩn thận và suy nghĩ kỹ trước khi quyết định.
          </div>

          <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200">
            <strong className="text-rose-900 block mb-1">
              2. Phần thưởng thực tế & Kiểm soát thời gian màn hình:
            </strong>
            Số sao bé tích lũy được đổi thành các phiếu thưởng thực tế ngoài đời (10 phút xem YouTube, 15 phút chơi game iPad, ăn kem, đi dạo công viên). Đồng hồ đếm ngược tích hợp giúp cha mẹ và bé dễ dàng thiết lập kỷ luật sử dụng thiết bị lành mạnh.
          </div>

          <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200">
            <strong className="text-blue-900 block mb-1">
              3. Phương pháp tiếp cận Toán Timo / Kangaroo:
            </strong>
            Toán Timo chú trọng **nhận biết quy luật (pattern)** và **hình dung không gian (3D cubes, gấp giấy)**. Mọi câu hỏi đều có phần Hướng dẫn giải chi tiết với phương pháp tư duy từng bước giúp con hiểu bản chất.
          </div>
        </div>
      </div>

      {/* Reset & Wipe Options for Parents */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200">
        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                '⚠️ XÁC NHẬN TỪ PHỤ HUYNH:\nBạn có chắc chắn muốn XÓA TOÀN BỘ tài khoản trên thiết bị này và thiết lập lại từ đầu không?\n\nToàn bộ dữ liệu sẽ được làm sạch để phụ huynh lập tài khoản mới kèm Mật mã 4 số.'
              )
            ) {
              if (onWipeAllAccounts) onWipeAllAccounts();
            }
          }}
          className="flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-700 transition-colors py-2 px-3 rounded-xl hover:bg-rose-50 cursor-pointer"
        >
          <span>🗑️</span>
          <span>Xóa toàn bộ tài khoản máy này & Làm lại từ đầu</span>
        </button>

        {!isConfirmingReset ? (
          <button
            type="button"
            onClick={() => setIsConfirmingReset(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-rose-600 transition-colors py-2 px-3 rounded-xl hover:bg-rose-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại tiến trình học của bé này</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 p-2 rounded-2xl animate-pop">
            <span className="text-xs font-bold text-rose-800">
              Đặt lại toàn bộ sao và huy chương của {currentAccount?.name}?
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

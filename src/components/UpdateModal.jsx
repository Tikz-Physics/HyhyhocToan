import React, { useState } from 'react';
import { RefreshCw, Download, CheckCircle, Sparkles, X, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import {
  CURRENT_APP_VERSION,
  applyAppUpdate,
  promptInstallApp,
  canInstallApp,
  isRunningStandalone,
} from '../utils/updateManager';
import { soundManager } from '../utils/soundManager';

export default function UpdateModal({
  isOpen,
  onClose,
  updateInfo,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);
  const isInstalled = isRunningStandalone();
  const installable = canInstallApp();

  if (!isOpen) return null;

  const handleUpdateNow = async () => {
    soundManager.playPop();
    setIsUpdating(true);
    setTimeout(async () => {
      await applyAppUpdate();
    }, 600);
  };

  const handleInstallApp = async () => {
    soundManager.playClick();
    const success = await promptInstallApp();
    if (success) {
      soundManager.playFanfare();
      setInstallSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs animate-pop">
      <div className="bg-white rounded-3xl border-4 border-amber-400 shadow-2xl max-w-md w-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 p-4 sm:p-5 text-amber-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/90 border-2 border-amber-500 flex items-center justify-center text-xl shadow-xs animate-wiggle">
              🔄
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg leading-tight">
                Cập Nhật & Tải App Về Máy
              </h3>
              <p className="text-xs font-bold text-amber-900">
                Phiên bản hiện tại: <span className="bg-white/80 px-1.5 py-0.2 rounded-md font-black">v{CURRENT_APP_VERSION}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center font-black transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Notice if update available */}
          {updateInfo?.hasUpdate ? (
            <div className="p-3 bg-emerald-50 border-2 border-emerald-300 rounded-2xl flex items-start gap-2.5 text-emerald-950">
              <Sparkles className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5 animate-bounce" />
              <div className="text-xs sm:text-sm font-bold">
                <div className="font-black text-emerald-900">
                  🎉 Đã có bản cập nhật mới ({updateInfo.version || 'Mới nhất'})!
                </div>
                <div className="text-emerald-800 text-xs mt-0.5">
                  {updateInfo.changelog || 'Bổ sung các đề toán mới, sửa lỗi hiển thị và nâng cấp hệ thống phần thưởng.'}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Ứng dụng đang ở trạng thái sẵn sàng cập nhật dữ liệu máy chủ mới nhất.</span>
            </div>
          )}

          {/* Nút Cập Nhật Ngay */}
          <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-amber-300 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs sm:text-sm text-amber-950 uppercase tracking-wide">
                1. Cập nhật dữ liệu & bài học mới
              </span>
              <span className="text-xs bg-amber-200 text-amber-950 font-black px-2 py-0.5 rounded-full">
                Khuyên dùng
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Xóa bỏ bộ nhớ đệm (cache) cũ trên máy, tự động tải về các đề thi Timo và bài tập lớp 1 - 5 mới nhất từ máy chủ.
            </p>

            <button
              type="button"
              disabled={isUpdating}
              onClick={handleUpdateNow}
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-amber-950 font-black text-sm rounded-xl shadow-md btn-kid-3d flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <RefreshCw className={`w-4 h-4 ${isUpdating ? 'animate-spin' : ''}`} />
              <span>{isUpdating ? 'Đang cập nhật phiên bản mới...' : '🔄 Cập Nhật Ứng Dụng Ngay'}</span>
            </button>
          </div>

          {/* Nút Tải App Về Máy / Cài Đặt (PWA) */}
          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs sm:text-sm text-blue-950 uppercase tracking-wide">
                2. Tải App về màn hình chính
              </span>
              <span className="text-xs bg-blue-100 text-blue-900 font-black px-2 py-0.5 rounded-full">
                {isInstalled ? 'Đã cài đặt' : 'Tiện lợi'}
              </span>
            </div>

            {isInstalled ? (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100/80 p-2.5 rounded-xl border border-emerald-300">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Ứng dụng đã được cài đặt và đang chạy dưới dạng App độc lập trên thiết bị của bạn!</span>
              </div>
            ) : installable ? (
              <div>
                <p className="text-xs text-slate-600 mb-2.5 font-semibold">
                  Cài ứng dụng ra màn hình chính của điện thoại hoặc máy tính để mở nhanh mà không cần gõ web.
                </p>
                <button
                  type="button"
                  onClick={handleInstallApp}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md btn-kid-3d flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>📲 Cài Đặt App Vào Máy Ngay</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2 text-xs font-semibold text-slate-700 bg-white/80 p-3 rounded-xl border border-blue-200">
                <div className="font-bold text-blue-900 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  <span>Cách tải về máy (iPhone / Android / Máy tính):</span>
                </div>
                <ul className="space-y-1 list-disc pl-4 text-slate-600 text-[11px] sm:text-xs">
                  <li>
                    <strong className="text-slate-800">iPhone/iPad:</strong> Bấm biểu tượng <strong className="text-blue-600">Chia sẻ (Share 📤)</strong> ở thanh dưới Safari ➔ Chọn <strong className="text-slate-900">"Thêm vào MH chính" (Add to Home Screen)</strong>.
                  </li>
                  <li>
                    <strong className="text-slate-800">Android:</strong> Bấm biểu tượng <strong className="text-slate-900">3 chấm (⋮)</strong> ở góc Chrome ➔ Chọn <strong className="text-blue-600">"Cài đặt ứng dụng"</strong> hoặc "Thêm vào màn hình chính".
                  </li>
                  <li>
                    <strong className="text-slate-800">Máy tính (Chrome/Edge):</strong> Bấm biểu tượng <strong>Cài đặt (Install 💻)</strong> trên thanh địa chỉ.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cam kết an toàn dữ liệu */}
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>
              Quá trình cập nhật hoàn toàn an toàn: Số sao ⭐, tiến trình học và các phiếu thưởng của bé được giữ nguyên 100%.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

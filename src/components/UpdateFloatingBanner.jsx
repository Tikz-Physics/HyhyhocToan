import React, { useState } from 'react';
import { RefreshCw, X } from 'lucide-react';
import { applyAppUpdate, CURRENT_APP_VERSION } from '../utils/updateManager';
import { soundManager } from '../utils/soundManager';

export default function UpdateFloatingBanner({
  updateInfo,
}) {
  const [dismissed, setDismissed] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  if (!updateInfo?.hasUpdate || dismissed) return null;

  const handleQuickUpdate = async () => {
    soundManager.playPop();
    setIsUpdating(true);
    setTimeout(async () => {
      await applyAppUpdate();
    }, 400);
  };

  return (
    <div className="fixed bottom-16 sm:bottom-4 left-3 right-3 sm:left-auto sm:right-4 z-50 max-w-sm animate-pop">
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white p-3 rounded-2xl shadow-2xl border-2 border-white/60 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-lg flex-shrink-0 animate-bounce">
            🚀
          </div>
          <div className="min-w-0">
            <div className="font-black text-xs sm:text-sm truncate">
              Đã có bản cập nhật mới!
            </div>
            <div className="text-[10px] text-amber-100 font-bold truncate">
              {updateInfo.version || `v${CURRENT_APP_VERSION}`} • Thêm bài tập & sửa lỗi
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            disabled={isUpdating}
            onClick={handleQuickUpdate}
            className="px-2.5 py-1.5 bg-white text-orange-900 hover:bg-amber-100 font-black text-xs rounded-xl shadow-xs active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
            title="Cập nhật ngay lập tức"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isUpdating ? 'animate-spin' : ''}`} />
            <span>{isUpdating ? 'Đang tải...' : 'Cập nhật'}</span>
          </button>

          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="w-6 h-6 rounded-lg bg-black/20 hover:bg-black/30 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
            title="Đóng tạm thời"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

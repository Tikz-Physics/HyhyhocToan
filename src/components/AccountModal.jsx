import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Plus, Check, Trash2, X, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/soundManager';
import { getPetStage } from '../data/petData';

const AVATAR_OPTIONS = ['🦁', '🐯', '🐼', '🐰', '🦄', '🚀', '🌟', '🦖', '👑', '🦊', '🐬', '🐱'];

export default function AccountModal({
  isOpen,
  onClose,
  accounts,
  currentAccountId,
  onSwitchAccount,
  onCreateAccount,
  onDeleteAccount,
}) {
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🦁');

  if (!isOpen) return null;

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) return;

    soundManager.playFanfare();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });

    onCreateAccount({
      name: trimmed,
      avatar: selectedAvatar,
    });

    setNewName('');
    setIsCreating(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-pop">
      <div className="bg-white rounded-3xl border-4 border-amber-400 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 text-slate-800 relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-sm">
              👥
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-800">
                Tài Khoản Bé Học
              </h3>
              <p className="text-xs font-bold text-slate-500">
                Lưu tiến trình và huân chương riêng biệt cho từng bé
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode 1: List of Accounts */}
        {!isCreating && (
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">
              Danh sách bạn học ({accounts.length})
            </div>

            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
              {accounts.map((acc) => {
                const isCurrent = acc.id === currentAccountId;
                const pet = getPetStage(acc.completedTasks ? acc.completedTasks.length : 0);

                return (
                  <div
                    key={acc.id}
                    onClick={() => {
                      if (!isCurrent) {
                        soundManager.playClick();
                        onSwitchAccount(acc.id);
                      }
                    }}
                    className={`p-3 sm:p-3.5 rounded-2xl border-2 flex items-center justify-between gap-3 cursor-pointer transition-all ${
                      isCurrent
                        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 shadow-sm'
                        : 'bg-slate-50 hover:bg-amber-50/50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-amber-300 shadow-sm flex items-center justify-center text-2xl flex-shrink-0">
                        {acc.avatar || '🦁'}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-black text-base text-slate-800 break-words">
                            {acc.name}
                          </h4>
                          {isCurrent && (
                            <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5 flex-shrink-0">
                              <Check className="w-3 h-3" /> Đang học
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-0.5">
                          <span className="flex items-center gap-0.5 text-amber-800">
                            ⭐ {acc.stars || 0} sao
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5 text-emerald-800">
                            {pet.icon} Cấp {pet.stage}
                          </span>
                          <span>•</span>
                          <span className="text-blue-800">
                            {acc.completedTasks ? acc.completedTasks.length : 0} bài
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0">
                      {!isCurrent && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            soundManager.playFanfare();
                            onSwitchAccount(acc.id);
                          }}
                          className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs px-3 py-1.5 rounded-xl shadow-xs btn-kid-3d"
                        >
                          Chọn
                        </button>
                      )}

                      {accounts.length > 1 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`Bạn có chắc muốn xóa tài khoản của bé "${acc.name}" không?`)) {
                              soundManager.playPop();
                              onDeleteAccount(acc.id);
                            }
                          }}
                          title="Xóa tài khoản này"
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button to Open Create Account Form */}
            <button
              type="button"
              onClick={() => {
                soundManager.playPop();
                setIsCreating(true);
              }}
              className="w-full mt-3 py-3 border-2 border-dashed border-amber-400 hover:border-amber-500 hover:bg-amber-50/70 rounded-2xl flex items-center justify-center gap-2 text-amber-900 font-black text-sm transition-all cursor-pointer"
            >
              <Plus className="w-5 h-5 text-amber-600" />
              <span>+ Tạo Thêm Tài Khoản Bé Mới</span>
            </button>
          </div>
        )}

        {/* Mode 2: Create New Account Form */}
        {isCreating && (
          <form onSubmit={handleCreateSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                Tên bé học:
              </label>
              <input
                type="text"
                autoFocus
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Ví dụ: Bé Nam, Bé Sam, Bé Bắp..."
                maxLength={25}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 focus:border-amber-500 rounded-2xl font-bold text-base text-slate-800 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Chọn hình đại diện yêu thích:
              </label>
              <div className="grid grid-cols-6 gap-2">
                {AVATAR_OPTIONS.map((avt) => (
                  <button
                    key={avt}
                    type="button"
                    onClick={() => {
                      soundManager.playPop(1.2);
                      setSelectedAvatar(avt);
                    }}
                    className={`w-12 h-12 rounded-2xl text-2xl flex items-center justify-center transition-all cursor-pointer border-2 ${
                      selectedAvatar === avt
                        ? 'bg-amber-100 border-amber-500 scale-110 shadow-md ring-2 ring-amber-300'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {avt}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-3 rounded-2xl text-xs font-bold text-amber-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Mỗi bé sẽ có hũ sao, huân chương và thú cưng tiến hóa độc lập!</span>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setIsCreating(false);
                }}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-sm"
              >
                Hủy bỏ
              </button>

              <button
                type="submit"
                disabled={!newName.trim()}
                className={`flex-1 py-3 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black rounded-2xl text-sm shadow-md btn-kid-3d ${
                  !newName.trim() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Tạo Tài Khoản 🎉
              </button>
            </div>
          </form>
        )}

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t text-center text-[11px] font-bold text-slate-400">
          Tiến trình học tập được lưu tự động và an toàn trên thiết bị
        </div>
      </div>
    </div>
  );
}

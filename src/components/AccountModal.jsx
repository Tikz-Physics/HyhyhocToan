import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Plus,
  Check,
  Trash2,
  X,
  Sparkles,
  Trophy,
  Users,
  RefreshCw,
  Globe,
  Download,
  Share2,
  Key,
  ShieldCheck,
  Smartphone,
  Laptop,
} from 'lucide-react';
import { soundManager } from '../utils/soundManager';
import { getPetStage } from '../data/petData';
import {
  getSyncRoomCode,
  setSyncRoomCode,
  fetchCloudLeaderboard,
  syncAccountToCloud,
  generateSyncExportCode,
  importSyncExportCode,
} from '../utils/cloudSync';

const AVATAR_OPTIONS = ['🦁', '🐯', '🐼', '🐰', '🦄', '🚀', '🌟', '🦖', '👑', '🦊', '🐬', '🐱'];

export default function AccountModal({
  isOpen,
  onClose,
  accounts,
  currentAccountId,
  onSwitchAccount,
  onCreateAccount,
  onDeleteAccount,
  onBulkImportAccounts,
}) {
  const [activeTab, setActiveTab] = useState('local'); // 'local' | 'leaderboard' | 'transfer'
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🦁');

  // Cloud leaderboard state
  const [cloudStudents, setCloudStudents] = useState([]);
  const [roomCode, setRoomCodeState] = useState(() => getSyncRoomCode());
  const [isEditingRoom, setIsEditingRoom] = useState(false);
  const [newRoomInput, setNewRoomInput] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState('');

  // Transfer code state
  const [transferCode, setTransferCode] = useState('');
  const [inputTransferCode, setInputTransferCode] = useState('');

  // Tải bảng xếp hạng đám mây khi mở modal hoặc đổi tab
  const loadLeaderboardData = async (targetRoom = null) => {
    setIsRefreshing(true);
    try {
      const res = await fetchCloudLeaderboard(targetRoom);
      if (res && res.students) {
        // Hợp nhất cả tài khoản cục bộ hiện tại vào danh sách hiển thị
        const mergedMap = new Map();
        res.students.forEach((s) => mergedMap.set(s.id, s));
        accounts.forEach((acc) => {
          if (!mergedMap.has(acc.id)) {
            mergedMap.set(acc.id, {
              id: acc.id,
              name: acc.name,
              avatar: acc.avatar,
              grade: acc.grade || 1,
              stars: acc.stars || 0,
              completedTasksCount: (acc.completedTasks || []).length,
              userMedalsCount: (acc.userMedals || []).length,
              lastActive: Date.now(),
              deviceInfo: 'Máy này 💻',
            });
          }
        });
        const sorted = Array.from(mergedMap.values()).sort(
          (a, b) => (b.stars || 0) - (a.stars || 0)
        );
        setCloudStudents(sorted);
      }
    } catch (e) {
      console.error('Lỗi tải bảng xếp hạng:', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeaderboardData();
    }
  }, [isOpen, activeTab]);

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

  const handleSaveRoomCode = () => {
    const clean = setSyncRoomCode(newRoomInput);
    setRoomCodeState(clean);
    setIsEditingRoom(false);
    soundManager.playPop();
    loadLeaderboardData(clean);
  };

  // Đồng bộ một bé từ Đám Mây về máy này để học tiếp
  const handleImportStudentToLocal = (student) => {
    soundManager.playStar();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
    });

    const newAcc = {
      id: student.id || `acc_${Date.now()}`,
      name: student.name,
      avatar: student.avatar || '🦁',
      grade: student.grade || 1,
      stars: student.stars || 0,
      completedTasks: student.completedTasks || [],
      userMedals: student.userMedals || [],
      unlockedPets: ['dino'],
      activePet: student.activePet || 'dino',
      createdAt: student.createdAt || Date.now(),
    };

    if (onBulkImportAccounts) {
      onBulkImportAccounts([newAcc]);
    } else {
      onCreateAccount(newAcc);
    }

    setSyncStatusMsg(`Đã đồng bộ bé "${student.name}" về máy này thành công!`);
    setTimeout(() => setSyncStatusMsg(''), 4000);
  };

  const handleGenerateTransferCode = () => {
    const code = generateSyncExportCode(accounts);
    setTransferCode(code || '');
    soundManager.playPop();
  };

  const handleApplyTransferCode = () => {
    if (!inputTransferCode.trim()) return;
    const imported = importSyncExportCode(inputTransferCode);
    if (imported && imported.length > 0) {
      soundManager.playFanfare();
      if (onBulkImportAccounts) {
        onBulkImportAccounts(imported);
      }
      setSyncStatusMsg(`Đã khôi phục thành công ${imported.length} tài khoản bạn học!`);
      setInputTransferCode('');
      setTimeout(() => {
        setSyncStatusMsg('');
        setActiveTab('local');
      }, 2000);
    } else {
      alert('Mã sao lưu không hợp lệ. Vui lòng kiểm tra lại!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-pop">
      <div className="bg-white rounded-3xl border-4 border-amber-400 shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 text-slate-800 relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 text-white flex items-center justify-center text-xl shadow-sm">
              🏆
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-black text-slate-800 leading-tight">
                Tài Khoản & Bảng Vàng Thi Đua
              </h3>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500">
                Đồng bộ liên máy • Thi đua giữa các bé
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

        {/* Tab Switcher: Local Accounts vs Cloud Leaderboard vs Chuyển Máy */}
        <div className="flex items-center gap-1.5 p-1 bg-amber-50 rounded-2xl border border-amber-200 mb-3.5">
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setActiveTab('local');
            }}
            className={`flex-1 py-1.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'local'
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Máy Này ({accounts.length})</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playFanfare();
              setActiveTab('leaderboard');
              loadLeaderboardData();
            }}
            className={`flex-1 py-1.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'leaderboard'
                ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4 text-yellow-300 animate-bounce" />
            <span>Thi Đua Liên Máy 🔥</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setActiveTab('transfer');
            }}
            className={`py-1.5 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1 ${
              activeTab === 'transfer'
                ? 'bg-white text-indigo-900 shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            title="Chuyển dữ liệu sang máy khác"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Chuyển Máy</span>
          </button>
        </div>

        {/* Sync notification banner if any */}
        {syncStatusMsg && (
          <div className="mb-3 p-2 bg-emerald-100 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-900 text-center animate-pop">
            🎉 {syncStatusMsg}
          </div>
        )}

        {/* TAB 1: LOCAL ACCOUNTS */}
        {activeTab === 'local' && (
          <>
            {!isCreating && (
              <div className="space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-between">
                  <span>Danh sách bạn học trên máy</span>
                  <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Đã sẵn sàng
                  </span>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
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
                        className={`p-2.5 sm:p-3 rounded-2xl border-2 flex items-center justify-between gap-3 cursor-pointer transition-all ${
                          isCurrent
                            ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 shadow-sm'
                            : 'bg-slate-50 hover:bg-amber-50/50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-11 h-11 rounded-2xl bg-white border-2 border-amber-300 shadow-sm flex items-center justify-center text-2xl flex-shrink-0">
                            {acc.avatar || '🦁'}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-black text-sm sm:text-base text-slate-800 truncate">
                                {acc.name}
                              </h4>
                              {isCurrent && (
                                <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5 flex-shrink-0">
                                  <Check className="w-3 h-3" /> Đang học
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-slate-500 mt-0.5">
                              <span className="flex items-center gap-0.5 text-amber-800 font-extrabold">
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
                                if (
                                  window.confirm(
                                    `Bạn có chắc muốn xóa tài khoản của bé "${acc.name}" không?`
                                  )
                                ) {
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
                  className="w-full mt-2 py-2.5 border-2 border-dashed border-amber-400 hover:border-amber-500 hover:bg-amber-50/70 rounded-2xl flex items-center justify-center gap-2 text-amber-900 font-black text-xs sm:text-sm transition-all cursor-pointer btn-kid-3d"
                >
                  <Plus className="w-4 h-4 text-amber-600" />
                  <span>+ Tạo Thêm Tài Khoản Bé Mới</span>
                </button>
              </div>
            )}

            {/* Mode 2: Create New Account Form */}
            {isCreating && (
              <form onSubmit={handleCreateSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                    Tên bé học:
                  </label>
                  <input
                    type="text"
                    autoFocus
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ví dụ: Bé Nam, Bé Sam, Bé Bắp..."
                    maxLength={25}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border-2 border-slate-300 focus:border-amber-500 rounded-2xl font-bold text-sm text-slate-800 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
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
                        className={`w-11 h-11 rounded-2xl text-xl flex items-center justify-center transition-all cursor-pointer border-2 ${
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

                <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-xs font-bold text-amber-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Mỗi bé sẽ có hũ sao, huân chương và thú cưng tiến hóa riêng biệt!</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setIsCreating(false);
                    }}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-xs sm:text-sm"
                  >
                    Hủy bỏ
                  </button>

                  <button
                    type="submit"
                    disabled={!newName.trim()}
                    className={`flex-1 py-2.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black rounded-2xl text-xs sm:text-sm shadow-md btn-kid-3d ${
                      !newName.trim() ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Tạo Tài Khoản 🎉
                  </button>
                </div>
              </form>
            )}
          </>
        )}

        {/* TAB 2: CLOUD LEADERBOARD (BẢNG VÀNG THI ĐUA LIÊN MÁY) */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-3">
            {/* Room info bar */}
            <div className="bg-gradient-to-r from-indigo-50 to-amber-50 border border-indigo-200 rounded-2xl p-2.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <Globe className="w-4 h-4 text-indigo-600 flex-shrink-0 animate-spin-slow" />
                {!isEditingRoom ? (
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase text-indigo-600 block">
                      Phòng Thi Đua Đám Mây:
                    </span>
                    <span className="text-xs sm:text-sm font-black text-indigo-950 truncate block">
                      {roomCode}
                    </span>
                  </div>
                ) : (
                  <input
                    type="text"
                    value={newRoomInput}
                    onChange={(e) => setNewRoomInput(e.target.value.toUpperCase())}
                    placeholder="MÃ PHÒNG (VD: LOP_1A)"
                    className="px-2 py-1 bg-white border border-indigo-300 rounded-xl text-xs font-black uppercase text-indigo-900 outline-none w-36"
                  />
                )}
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                {!isEditingRoom ? (
                  <button
                    type="button"
                    onClick={() => {
                      setNewRoomInput(roomCode);
                      setIsEditingRoom(true);
                    }}
                    className="text-[11px] font-bold text-indigo-700 bg-white hover:bg-indigo-50 border border-indigo-200 px-2 py-1 rounded-xl"
                  >
                    Đổi phòng
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={handleSaveRoomCode}
                      className="text-[11px] font-black text-white bg-indigo-600 hover:bg-indigo-700 px-2 py-1 rounded-xl"
                    >
                      Lưu
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingRoom(false)}
                      className="text-[11px] text-slate-500 px-1"
                    >
                      Hủy
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => loadLeaderboardData()}
                  disabled={isRefreshing}
                  title="Làm mới bảng xếp hạng"
                  className="p-1.5 bg-white hover:bg-indigo-100 border border-indigo-200 rounded-xl text-indigo-800 transition-all cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Hint for parents/kids */}
            <div className="text-[11px] font-bold text-slate-500 bg-slate-50 p-2 rounded-xl border border-slate-200 flex items-center justify-between">
              <span>Bé kiếm được sao ở bất kì máy nào sẽ tự động cập nhật lên đây!</span>
              <span className="text-emerald-600 font-black">🟢 Trực tiếp</span>
            </div>

            {/* Leaderboard Table */}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {cloudStudents.length === 0 ? (
                <div className="text-center py-6 text-slate-400 text-xs font-bold">
                  Đang tải bảng xếp hạng các bé...
                </div>
              ) : (
                cloudStudents.map((st, idx) => {
                  const isCurrent = st.id === currentAccountId;
                  const isLocal = accounts.some((a) => a.id === st.id);
                  let rankBadge = `${idx + 1}`;
                  let rankBg = 'bg-slate-100 text-slate-700';

                  if (idx === 0) {
                    rankBadge = '🥇';
                    rankBg = 'bg-amber-100 text-amber-900 border-2 border-amber-400 shadow-xs';
                  } else if (idx === 1) {
                    rankBadge = '🥈';
                    rankBg = 'bg-slate-200 text-slate-800 border border-slate-300';
                  } else if (idx === 2) {
                    rankBadge = '🥉';
                    rankBg = 'bg-amber-50 text-amber-800 border border-amber-300';
                  }

                  return (
                    <div
                      key={st.id || idx}
                      className={`p-2.5 rounded-2xl border-2 flex items-center justify-between gap-2.5 transition-all ${
                        isCurrent
                          ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300 shadow-sm'
                          : 'bg-white hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Rank */}
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 ${rankBg}`}
                        >
                          {rankBadge}
                        </div>

                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-amber-300 flex items-center justify-center text-xl flex-shrink-0">
                          {st.avatar || '🦁'}
                        </div>

                        {/* Info */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-sm text-slate-800 truncate">
                              {st.name}
                            </span>
                            {st.grade && (
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded-md bg-blue-100 text-blue-800">
                                Lớp {st.grade}
                              </span>
                            )}
                            {isCurrent && (
                              <span className="text-[9px] font-black px-1.5 py-0.2 rounded-md bg-emerald-500 text-white">
                                Bé này
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mt-0.5">
                            <span className="text-amber-800 font-extrabold flex items-center gap-0.5">
                              ⭐ {st.stars || 0} sao
                            </span>
                            <span>•</span>
                            <span className="text-blue-700">
                              📚 {st.completedTasksCount || 0} bài
                            </span>
                            <span>•</span>
                            <span className="text-slate-400 hidden xs:inline">
                              {st.deviceInfo || 'Thiết bị'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action: Switch to this child or import if not yet on local machine */}
                      <div className="flex-shrink-0">
                        {isLocal ? (
                          !isCurrent && (
                            <button
                              type="button"
                              onClick={() => {
                                soundManager.playFanfare();
                                onSwitchAccount(st.id);
                                onClose();
                              }}
                              className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs px-2.5 py-1 rounded-xl shadow-2xs btn-kid-3d"
                            >
                              Chọn bé
                            </button>
                          )
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleImportStudentToLocal(st)}
                            title="Tải tiến trình của bé này về máy này"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-black text-xs px-2.5 py-1 rounded-xl shadow-2xs flex items-center gap-1 btn-kid-3d"
                          >
                            <Download className="w-3 h-3" />
                            <span>Tải về máy</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* TAB 3: TRANSFER & BACKUP CODE */}
        {activeTab === 'transfer' && (
          <div className="space-y-3.5 text-xs font-bold text-slate-700">
            <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-2xl">
              <h4 className="font-black text-sm text-indigo-950 flex items-center gap-1.5 mb-1">
                <Share2 className="w-4 h-4 text-indigo-600" />
                Chuyển Tiến Trình Học Sang Máy Khác
              </h4>
              <p className="text-indigo-800 text-[11px] leading-relaxed">
                Ba mẹ có thể sao chép Mã Đồng Bộ từ máy này và nhập vào máy tính bảng/điện thoại khác
                để giữ nguyên 100% số sao và bài tập đã làm.
              </p>
            </div>

            {/* Bước 1: Xuất mã từ máy này */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span className="font-black text-slate-800 uppercase tracking-wide text-[10px] block">
                Cách 1: Lấy Mã Sao Lưu từ máy này
              </span>
              <button
                type="button"
                onClick={handleGenerateTransferCode}
                className="w-full py-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-xl text-xs btn-kid-3d shadow-xs flex items-center justify-center gap-1.5"
              >
                <Key className="w-4 h-4" />
                <span>Bấm Vào Đây Để Tạo Mã Đồng Bộ</span>
              </button>

              {transferCode && (
                <div className="mt-2 space-y-1.5 animate-pop">
                  <textarea
                    readOnly
                    value={transferCode}
                    rows={3}
                    className="w-full p-2 bg-white border border-amber-300 rounded-xl font-mono text-[10px] text-slate-700 outline-none select-all"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(transferCode);
                      soundManager.playPop();
                      alert('Đã sao chép mã đồng bộ vào bộ nhớ tạm!');
                    }}
                    className="text-xs font-black text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded-lg"
                  >
                    📋 Sao Chép Mã
                  </button>
                </div>
              )}
            </div>

            {/* Bước 2: Nhập mã từ máy khác vào máy này */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span className="font-black text-slate-800 uppercase tracking-wide text-[10px] block">
                Cách 2: Nhập Mã Từ Máy Khác Vào Máy Này
              </span>
              <textarea
                value={inputTransferCode}
                onChange={(e) => setInputTransferCode(e.target.value)}
                placeholder="Dán mã sao lưu nhận được từ máy khác vào đây..."
                rows={2}
                className="w-full p-2 bg-white border border-slate-300 focus:border-amber-500 rounded-xl font-mono text-[10px] outline-none"
              />
              <button
                type="button"
                onClick={handleApplyTransferCode}
                disabled={!inputTransferCode.trim()}
                className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-black rounded-xl text-xs btn-kid-3d shadow-xs flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Nhập Dữ Liệu Vào Máy Này 🎉</span>
              </button>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-3.5 pt-2.5 border-t text-center text-[10px] sm:text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Tiến trình được bảo lưu an toàn & tự động kết nối đám mây thi đua</span>
        </div>
      </div>
    </div>
  );
}

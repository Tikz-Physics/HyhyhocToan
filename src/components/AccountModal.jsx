import React, { useState, useEffect, useCallback } from 'react';
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
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from 'lucide-react';
import { soundManager } from '../utils/soundManager';
import { getPetStage } from '../data/petData';
import { cleanAccountName, isDuplicateAccountName } from '../utils/accountName';
import {
  getSyncRoomCode,
  setSyncRoomCode,
  fetchCloudLeaderboard,
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
  onWipeAllAccounts,
}) {
  const hasLocalAccounts = Boolean(accounts && accounts.length > 0);
  // Thiết bị mới chưa có tài khoản cục bộ sẽ hiển thị ngay Bảng Vàng để thấy mọi tài khoản đã tạo!
  const [activeTab, setActiveTab] = useState(() => (!hasLocalAccounts ? 'leaderboard' : 'local'));
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🦁');
  const [newGrade, setNewGrade] = useState(1);
  const [newPin, setNewPin] = useState('1234');
  const [showNewPin, setShowNewPin] = useState(false);

  // PIN verification state
  const [pinTargetAccount, setPinTargetAccount] = useState(null);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [pinSuccess, setPinSuccess] = useState(false);
  const [showParentHelp, setShowParentHelp] = useState(false);
  const [parentChallenge, setParentChallenge] = useState({ n1: 24, n2: 35, ans: 59 });
  const [parentChallengeInput, setParentChallengeInput] = useState('');
  const [parentChallengeError, setParentChallengeError] = useState(false);
  const [revealedPin, setRevealedPin] = useState(null);

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

  const finalizeLogin = useCallback((targetAccount) => {
    if (!targetAccount) return;
    const isLocal = accounts.some((a) => a.id === targetAccount.id);
    if (!isLocal) return;
    const fullAcc = {
      id: targetAccount.id,
      name: targetAccount.name,
      avatar: targetAccount.avatar || '🦁',
      pin: targetAccount.pin || '1234',
      grade: targetAccount.grade || 1,
      stars: targetAccount.stars || 0,
      completedTasks: targetAccount.completedTasks || [],
      userMedals: targetAccount.userMedals || [],
      unlockedPets: targetAccount.unlockedPets || ['dino'],
      activePet: targetAccount.activePet || 'dino',
      redeemedRewards: targetAccount.redeemedRewards || [],
      usedRewardHistory: targetAccount.usedRewardHistory || [],
      highestTimoScore: targetAccount.highestTimoScore || 0,
      createdAt: targetAccount.createdAt || Date.now(),
    };
    onSwitchAccount(fullAcc.id, fullAcc);
    setPinTargetAccount(null);
    setEnteredPin('');
    setPinSuccess(false);
    onClose();
  }, [accounts, onSwitchAccount, onClose]);

  // Tải bảng xếp hạng đám mây khi mở modal hoặc đổi tab
  const loadLeaderboardData = useCallback(async (targetRoom = null) => {
    try {
      const res = await fetchCloudLeaderboard(targetRoom);
      if (res && res.students) {
        // Hợp nhất cả tài khoản cục bộ hiện tại vào danh sách hiển thị
        const mergedMap = new Map();
        res.students.forEach((s) => mergedMap.set(s.id, s));
        (accounts || []).forEach((acc) => {
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
          } else {
            const remote = mergedMap.get(acc.id);
            mergedMap.set(acc.id, {
              ...remote,
              ...acc,
              stars: Math.max(acc.stars || 0, remote.stars || 0),
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
  }, [accounts]);

  useEffect(() => {
    if (!isOpen) return;
    const timerId = window.setTimeout(() => loadLeaderboardData(), 0);
    return () => window.clearTimeout(timerId);
  }, [isOpen, loadLeaderboardData]);

  const handlePinDigit = useCallback((digit) => {
    if (enteredPin.length >= 4 || pinSuccess) return;
    soundManager.playPop(1.1 + enteredPin.length * 0.1);
    const nextPin = enteredPin + String(digit);
    setEnteredPin(nextPin);

    if (nextPin.length === 4) {
      const correctPin = pinTargetAccount?.pin || '1234';
      if (nextPin === correctPin) {
        setPinSuccess(true);
        soundManager.playFanfare();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
        setTimeout(() => {
          finalizeLogin(pinTargetAccount);
        }, 500);
      } else {
        setPinError(true);
        soundManager.playWrong();
        setTimeout(() => {
          setEnteredPin('');
          setPinError(false);
        }, 750);
      }
    }
  }, [enteredPin, pinSuccess, pinTargetAccount, finalizeLogin]);

  const handlePinBackspace = useCallback(() => {
    if (enteredPin.length > 0) {
      soundManager.playClick();
      setEnteredPin(enteredPin.slice(0, -1));
      setPinError(false);
    }
  }, [enteredPin]);

  const handleClosePinPrompt = useCallback(() => {
    soundManager.playPop();
    setPinTargetAccount(null);
    setEnteredPin('');
    setPinError(false);
    setPinSuccess(false);
    setShowParentHelp(false);
    setRevealedPin(null);
  }, []);

  // Keyboard listener for 4-digit PIN keypad
  useEffect(() => {
    if (!pinTargetAccount || showParentHelp) return;

    const handleKeyDown = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        handlePinDigit(e.key);
      } else if (e.key === 'Backspace') {
        handlePinBackspace();
      } else if (e.key === 'Escape') {
        handleClosePinPrompt();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pinTargetAccount, showParentHelp, handlePinDigit, handlePinBackspace, handleClosePinPrompt]);

  const startParentHelp = () => {
    soundManager.playPop();
    const n1 = Math.floor(Math.random() * 40) + 15;
    const n2 = Math.floor(Math.random() * 40) + 12;
    setParentChallenge({ n1, n2, ans: n1 + n2 });
    setParentChallengeInput('');
    setParentChallengeError(false);
    setShowParentHelp(true);
    setRevealedPin(null);
  };

  const verifyParentHelp = (e) => {
    e.preventDefault();
    if (Number(parentChallengeInput.trim()) === parentChallenge.ans) {
      soundManager.playFanfare();
      setRevealedPin(pinTargetAccount?.pin || '1234');
      setParentChallengeError(false);
    } else {
      soundManager.playWrong();
      setParentChallengeError(true);
    }
  };

  const handleParentDirectLogin = () => {
    if (!pinTargetAccount) return;
    soundManager.playFanfare();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    finalizeLogin(pinTargetAccount);
  };

  if (!isOpen) return null;

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const cleanedName = cleanAccountName(newName);
    if (!cleanedName) {
      alert('Vui lòng nhập tên tài khoản để tiếp tục!');
      return;
    }

    if (isDuplicateAccountName(cleanedName, [...accounts, ...cloudStudents])) {
      alert('Tên tài khoản này đã tồn tại. Vui lòng chọn tên khác!');
      return;
    }

    const cleanPin = newPin.trim().replace(/\D/g, '');
    if (cleanPin.length !== 4) {
      alert('Mật mã bảo vệ phải gồm đúng 4 chữ số (Ví dụ: 1234)!');
      return;
    }

    const wasCreated = onCreateAccount({
      name: cleanedName,
      avatar: selectedAvatar,
      grade: newGrade,
      pin: cleanPin,
    });

    if (wasCreated === false) {
      alert('Tên tài khoản này đã tồn tại. Vui lòng chọn tên khác!');
      return;
    }

    soundManager.playFanfare();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });

    setNewName('');
    setNewPin('1234');
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
      let result = { imported: imported.length, skipped: 0 };
      if (onBulkImportAccounts) {
        result = onBulkImportAccounts(imported) || result;
      }
      const skippedText = result.skipped > 0 ? ` Bỏ qua ${result.skipped} tài khoản trùng tên.` : '';
      setSyncStatusMsg(`Đã khôi phục thành công ${result.imported} tài khoản!${skippedText}`);
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
        {/* PIN VERIFICATION KEYPAD OVERLAY */}
        {pinTargetAccount && (
          <div className="absolute inset-0 z-40 bg-white/98 backdrop-blur-md rounded-3xl p-4 sm:p-6 flex flex-col justify-between overflow-y-auto animate-pop shadow-2xl">
            {/* Header with back button */}
            <div className="flex items-center justify-between border-b pb-2.5">
              <button
                type="button"
                onClick={handleClosePinPrompt}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </button>

              <span className="text-xs font-black uppercase text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                Mật Mã 4 Số Bảo Vệ
              </span>
            </div>

            {/* Normal PIN Keypad Mode: 1-col on portrait, 2-col on landscape/tablets */}
            {!showParentHelp ? (
              <div className="flex flex-col landscape:flex-row items-center justify-around gap-2 landscape:gap-6 my-auto py-2">
                {/* Left Column in Landscape: Avatar, Name, PIN slots, Status */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 landscape:w-12 landscape:h-12 rounded-2xl bg-amber-100 border-4 border-amber-300 shadow-md flex items-center justify-center text-3xl landscape:text-2xl mb-1 flex-shrink-0 animate-bounce-slow">
                    {pinTargetAccount.avatar || '🦁'}
                  </div>

                  <h4 className="text-base font-black text-slate-800">
                    {pinTargetAccount.name}
                  </h4>
                  <p className="text-[11px] font-bold text-slate-500 mb-2 max-w-[200px]">
                    Nhập mật mã 4 số để vào học
                  </p>

                  {/* 4 Bubble Indicator Slots */}
                  <div className={`flex items-center gap-2.5 my-1 ${pinError ? 'animate-shake' : ''}`}>
                    {[0, 1, 2, 3].map((slotIdx) => {
                      const isFilled = slotIdx < enteredPin.length;
                      return (
                        <div
                          key={slotIdx}
                          className={`w-10 h-10 landscape:w-9 landscape:h-9 rounded-xl flex items-center justify-center text-xl font-black border-2 transition-all duration-150 ${
                            pinError
                              ? 'border-rose-500 bg-rose-50 text-rose-600 shadow-sm'
                              : pinSuccess
                              ? 'border-emerald-500 bg-emerald-100 text-emerald-700 scale-105 shadow-md'
                              : isFilled
                              ? 'border-amber-400 bg-amber-400 text-amber-950 shadow-md scale-105'
                              : 'border-slate-300 bg-slate-50 text-slate-300'
                          }`}
                        >
                          {isFilled ? '⭐' : '•'}
                        </div>
                      );
                    })}
                  </div>

                  {/* Status Message */}
                  <div className="h-5 flex items-center justify-center my-0.5">
                    {pinError && (
                      <span className="text-[11px] font-black text-rose-600 animate-shake">
                        ❌ Mật mã chưa đúng, thử lại nhé!
                      </span>
                    )}
                    {pinSuccess && (
                      <span className="text-[11px] font-black text-emerald-600 animate-pop">
                        🎉 Đúng rồi! Đang mở...
                      </span>
                    )}
                    {!pinError && !pinSuccess && (
                      <span className="text-[10px] font-bold text-slate-400">
                        Gợi ý: Mật mã mặc định khi tạo là <span className="font-extrabold text-amber-700">1234</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column in Landscape: Tactile 3x4 Numeric Keypad */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full max-w-[260px] landscape:max-w-[220px]">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => handlePinDigit(num)}
                      className="h-11 sm:h-12 landscape:h-10 rounded-2xl bg-white hover:bg-amber-100 active:bg-amber-200 border-2 border-slate-200 hover:border-amber-400 text-slate-800 font-black text-lg landscape:text-base shadow-xs transition-all flex items-center justify-center cursor-pointer btn-kid-3d"
                    >
                      {num}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={startParentHelp}
                    className="h-11 sm:h-12 landscape:h-10 rounded-2xl bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 border-2 border-indigo-200 text-indigo-700 font-black text-[10px] leading-tight flex flex-col items-center justify-center cursor-pointer p-0.5"
                    title="Ba mẹ trợ giúp khi quên mật mã"
                  >
                    <span className="text-xs">👨‍👩‍👧</span>
                    <span>Quên mã</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePinDigit(0)}
                    className="h-11 sm:h-12 landscape:h-10 rounded-2xl bg-white hover:bg-amber-100 active:bg-amber-200 border-2 border-slate-200 hover:border-amber-400 text-slate-800 font-black text-lg landscape:text-base shadow-xs transition-all flex items-center justify-center cursor-pointer btn-kid-3d"
                  >
                    0
                  </button>

                  <button
                    type="button"
                    onClick={handlePinBackspace}
                    className="h-11 sm:h-12 landscape:h-10 rounded-2xl bg-rose-50 hover:bg-rose-100 active:bg-rose-200 border-2 border-rose-200 text-rose-700 font-black text-base flex items-center justify-center cursor-pointer transition-all"
                    title="Xóa 1 số"
                  >
                    ⌫
                  </button>
                </div>
              </div>
            ) : (
              /* Parent Override Challenge Card */
              <div className="flex flex-col items-center justify-center my-auto p-4 bg-indigo-50/80 border-2 border-indigo-300 rounded-3xl w-full max-w-sm mx-auto space-y-3.5 animate-pop">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-2xl">
                  👨‍👩‍👧
                </div>

                <div className="text-center">
                  <h4 className="font-black text-sm sm:text-base text-indigo-950">
                    Góc Ba Mẹ Hỗ Trợ Quên Mật Mã
                  </h4>
                  <p className="text-xs text-indigo-800 font-medium mt-0.5">
                    Để chắc chắn là người lớn thao tác, ba mẹ hãy tính phép cộng sau:
                  </p>
                </div>

                {!revealedPin ? (
                  <form onSubmit={verifyParentHelp} className="w-full space-y-3">
                    <div className="bg-white border-2 border-indigo-200 rounded-2xl p-3 text-center">
                      <span className="text-lg font-black text-indigo-900 tracking-wider">
                        {parentChallenge.n1} + {parentChallenge.n2} = ?
                      </span>
                    </div>

                    <input
                      type="number"
                      autoFocus
                      value={parentChallengeInput}
                      onChange={(e) => setParentChallengeInput(e.target.value)}
                      placeholder="Nhập kết quả..."
                      className="w-full px-3 py-2 text-center bg-white border-2 border-indigo-300 focus:border-indigo-600 rounded-xl font-black text-base text-indigo-950 outline-none"
                    />

                    {parentChallengeError && (
                      <p className="text-xs font-black text-rose-600 text-center animate-shake">
                        Kết quả chưa đúng, ba mẹ thử lại nhé!
                      </p>
                    )}

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowParentHelp(false)}
                        className="flex-1 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs"
                      >
                        Quay lại
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl text-xs shadow-xs"
                      >
                        Kiểm Tra 🚀
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="w-full space-y-3 text-center animate-pop">
                    <div className="bg-white border-2 border-emerald-400 rounded-2xl p-3.5 space-y-1">
                      <span className="text-xs font-bold text-slate-500 block">
                        Mật mã 4 số của bé {pinTargetAccount.name}:
                      </span>
                      <span className="text-3xl font-black text-emerald-600 tracking-widest block font-mono">
                        {revealedPin}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setShowParentHelp(false);
                          setRevealedPin(null);
                        }}
                        className="flex-1 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs"
                      >
                        Đóng
                      </button>
                      <button
                        type="button"
                        onClick={handleParentDirectLogin}
                        className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-xl text-xs shadow-xs"
                      >
                        Đăng Nhập Ngay 🎉
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="text-center text-[10px] text-slate-400 font-semibold pt-1">
              Bảo vệ tài khoản học và tránh nhầm lẫn giữa các bạn nhỏ
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 text-white flex items-center justify-center text-xl shadow-sm">
              {isCreating ? '🎒' : activeTab === 'leaderboard' ? '🏆' : '👥'}
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-black text-slate-800 leading-tight">
                {isCreating
                  ? 'Tạo Tài Khoản Bé Học Mới 🎉'
                  : activeTab === 'leaderboard'
                  ? 'Bảng Vàng Thi Đua & Chọn Bạn Học 🔥'
                  : 'Tài Khoản Bé Học Trên Máy Này 💻'}
              </h3>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500">
                {isCreating
                  ? 'Bảo mật với Mã PIN 4 số • Điền thông tin bé để bắt đầu'
                  : activeTab === 'leaderboard'
                  ? 'Sắp xếp theo số sao ⭐ • Chỉ tài khoản đã có trên máy mới đăng nhập được'
                  : 'Danh sách các bạn nhỏ đang học trên máy này'}
              </p>
            </div>
          </div>

          {hasLocalAccounts && (
            <button
              type="button"
              aria-label="Đóng cửa sổ tài khoản"
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-amber-50 rounded-2xl border border-amber-200 mb-3.5 flex-wrap sm:flex-nowrap">
          {hasLocalAccounts && (
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab('local');
                setIsCreating(false);
              }}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'local' && !isCreating
                  ? 'bg-amber-400 text-amber-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Máy Này ({accounts.length})</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              soundManager.playFanfare();
              setActiveTab('leaderboard');
              setIsCreating(false);
              loadLeaderboardData();
            }}
            className={`flex-1 py-1.5 px-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'leaderboard' && !isCreating
                ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4 text-yellow-300 animate-bounce" />
            <span>Bảng Vàng ({cloudStudents.length}) 🔥</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setIsCreating(true);
            }}
            className={`py-1.5 px-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1 cursor-pointer ${
              isCreating
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-blue-700 bg-blue-50 hover:bg-blue-100'
            }`}
            title="Tạo tài khoản bé mới"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tạo Bé Mới</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setActiveTab('transfer');
              setIsCreating(false);
            }}
            className={`py-1.5 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'transfer' && !isCreating
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

        {/* MODE: CREATE NEW ACCOUNT FORM */}
        {isCreating && (
          <div>
            {(hasLocalAccounts || cloudStudents.length > 0) && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setIsCreating(false);
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 mb-3 cursor-pointer bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl w-fit"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại Bảng Vàng chọn tài khoản</span>
              </button>
            )}

            <form onSubmit={handleCreateSubmit} className="space-y-3.5">
              {!hasLocalAccounts && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-3 rounded-2xl text-xs font-bold text-blue-900 flex items-start gap-2.5">
                  <span className="text-xl flex-shrink-0">🚀</span>
                  <div>
                    <strong className="block text-blue-950 font-black">Hệ Thống Thi Đua Liên Máy!</strong>
                    <span>Bé và Ba Mẹ vui lòng tạo hồ sơ và cài đặt Mật mã 4 chữ số (PIN) để học tập và thi đua an toàn.</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Tên tài khoản:
                </label>
                <input
                  type="text"
                  autoFocus
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Ví dụ: Nam, Sam, Bắp, Mèo Mun..."
                  maxLength={50}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border-2 border-slate-300 focus:border-amber-500 rounded-2xl font-bold text-sm text-slate-800 outline-none transition-colors"
                />
              </div>

              {/* Grade selection */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Chọn lớp học của bé:
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => {
                        soundManager.playPop();
                        setNewGrade(g);
                      }}
                      className={`py-2 rounded-xl text-xs font-black border-2 transition-all cursor-pointer ${
                        newGrade === g
                          ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Lớp {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4-digit PIN setup */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                    Mật mã 4 chữ số (Mã PIN bảo vệ):
                  </label>
                  <span className="text-[11px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    Bắt buộc 4 số
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={showNewPin ? 'text' : 'password'}
                    value={newPin}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                      setNewPin(val);
                    }}
                    placeholder="Nhập 4 chữ số (VD: 1234)"
                    maxLength={4}
                    inputMode="numeric"
                    className="w-full pl-3.5 pr-10 py-2.5 bg-slate-50 border-2 border-slate-300 focus:border-amber-500 rounded-2xl font-black text-base tracking-widest text-slate-800 outline-none transition-colors font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPin(!showNewPin)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    title={showNewPin ? 'Ẩn mật mã' : 'Hiện mật mã'}
                  >
                    {showNewPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 font-bold mt-1">
                  🔒 Bé sẽ nhập 4 số này khi đăng nhập để tránh bấm nhầm tài khoản của nhau.
                </p>
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
                {(hasLocalAccounts || cloudStudents.length > 0) && (
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setIsCreating(false);
                    }}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-xs sm:text-sm cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                )}

                <button
                  type="submit"
                  disabled={!newName.trim() || newPin.replace(/\D/g, '').length !== 4}
                  className={`${
                    !hasLocalAccounts && cloudStudents.length === 0
                      ? 'w-full py-3.5 text-sm sm:text-base'
                      : 'flex-1 py-2.5 text-xs sm:text-sm'
                  } bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black rounded-2xl shadow-md btn-kid-3d cursor-pointer ${
                    !newName.trim() || newPin.replace(/\D/g, '').length !== 4 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Tạo Tài Khoản & Vào Học Ngay 🚀
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 1: LOCAL ACCOUNTS */}
        {!isCreating && activeTab === 'local' && (
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
                        soundManager.playPop();
                        setPinTargetAccount(acc);
                        setEnteredPin('');
                        setPinError(false);
                        setPinSuccess(false);
                        setShowParentHelp(false);
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
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-black text-sm sm:text-base text-slate-800 truncate">
                            {acc.name}
                          </h4>
                          {isCurrent ? (
                            <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5 flex-shrink-0">
                              <Check className="w-3 h-3" /> Đang học
                            </span>
                          ) : (
                            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[9px] font-black px-1.5 py-0.2 rounded-md flex items-center gap-0.5">
                              <Lock className="w-2.5 h-2.5 text-amber-700" /> PIN 4 số
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
                            soundManager.playPop();
                            setPinTargetAccount(acc);
                            setEnteredPin('');
                            setPinError(false);
                            setPinSuccess(false);
                            setShowParentHelp(false);
                          }}
                          className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs px-3 py-1.5 rounded-xl shadow-xs btn-kid-3d flex items-center gap-1"
                        >
                          <Lock className="w-3 h-3 text-amber-900" />
                          <span>Chọn</span>
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

            {/* Option for Parents to Wipe All Local Accounts & Restart */}
            <div className="pt-2 border-t border-slate-100 mt-2">
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      '⚠️ XÁC NHẬN TỪ PHỤ HUYNH:\nBạn có chắc muốn XÓA TOÀN BỘ tài khoản trên thiết bị này và thiết lập lại từ đầu không?\n\nMọi tiến trình, sao và huân chương trên máy này sẽ được làm sạch.'
                    )
                  ) {
                    if (onWipeAllAccounts) onWipeAllAccounts();
                  }
                }}
                className="w-full py-2 text-[11px] font-bold text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa toàn bộ tài khoản trên máy này & làm lại từ đầu</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: CLOUD LEADERBOARD (BẢNG VÀNG THI ĐUA LIÊN MÁY) */}
        {!isCreating && activeTab === 'leaderboard' && (
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

            {/* Instruction banner */}
            <div className="text-[11px] font-bold text-amber-900 bg-amber-50 p-2.5 rounded-xl border border-amber-200 flex items-center justify-between gap-2">
              <span>🌟 Bé bấm <strong>"Vào học 🔒"</strong> và nhập mật mã 4 số để đăng nhập nhé!</span>
              <span className="text-emerald-600 font-black flex items-center gap-1 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Trực tiếp
              </span>
            </div>

            {/* Leaderboard List */}
            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {cloudStudents.length === 0 ? (
                isRefreshing ? (
                  <div className="text-center py-8 text-slate-500 text-xs font-bold flex flex-col items-center justify-center gap-2">
                    <RefreshCw className="w-6 h-6 text-indigo-600 animate-spin" />
                    <span>Đang kết nối Bảng Vàng Đám Mây... ⏳</span>
                  </div>
                ) : (
                  <div className="text-center py-8 px-4 bg-amber-50/60 border-2 border-dashed border-amber-300 rounded-3xl space-y-3">
                    <div className="text-4xl animate-bounce-slow">🎒</div>
                    <h4 className="text-base font-black text-slate-800">
                      Chưa có tài khoản nào trên hệ thống!
                    </h4>
                    <p className="text-xs font-bold text-slate-500 max-w-sm mx-auto">
                      Bé và Ba Mẹ hãy bấm nút bên dưới để tạo tài khoản đầu tiên và bắt đầu học nhé!
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        soundManager.playFanfare();
                        setIsCreating(true);
                      }}
                      className="py-2.5 px-6 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black rounded-2xl shadow-md btn-kid-3d text-xs sm:text-sm cursor-pointer"
                    >
                      ✨ Tạo Tài Khoản Cho Bé Ngay ✨
                    </button>
                  </div>
                )
              ) : (
                <>
                  {cloudStudents.map((st, idx) => {
                    const isCurrent = st.id === currentAccountId && hasLocalAccounts;
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
                            <div className="flex items-center gap-1.5 flex-wrap">
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
                                  Đang học
                                </span>
                              )}
                              {!isLocal && (
                                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                                  Đám mây ☁️
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 mt-0.5">
                              <span className="text-amber-800 font-extrabold flex items-center gap-0.5">
                                ⭐ {st.stars || 0} sao
                              </span>
                              <span>•</span>
                              <span className="text-blue-700">
                                📚 {st.completedTasksCount || (st.completedTasks || []).length} bài
                              </span>
                              <span>•</span>
                              <span className="text-slate-400 hidden xs:inline">
                                {st.deviceInfo || 'Thiết bị'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Action: Switch / Login to this child */}
                        <div className="flex-shrink-0">
                          {isCurrent ? (
                            <span className="bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-xl flex items-center gap-1">
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>Đang học</span>
                            </span>
                          ) : isLocal ? (
                            <button
                              type="button"
                              onClick={() => {
                                soundManager.playPop();
                                const fullAcc = accounts.find((a) => a.id === st.id) || st;
                                setPinTargetAccount(fullAcc);
                                setEnteredPin('');
                                setPinError(false);
                                setPinSuccess(false);
                                setShowParentHelp(false);
                              }}
                              className="bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-amber-950 font-black text-xs px-3 py-1.5 rounded-xl shadow-2xs btn-kid-3d flex items-center gap-1.5 cursor-pointer"
                              title="Nhập mã PIN 4 số để vào học"
                            >
                              <Lock className="w-3.5 h-3.5 text-amber-900" />
                              <span>Vào học 🔒</span>
                            </button>
                          ) : (
                            <span className="bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-black px-2.5 py-1 rounded-xl">
                              Chỉ xếp hạng
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Create New Account Button at Bottom of Leaderboard */}
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setIsCreating(true);
                    }}
                    className="w-full mt-3 py-2.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black rounded-2xl shadow-md text-xs sm:text-sm btn-kid-3d cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4 text-amber-900" />
                    <span>+ Bé Mới Chưa Có Tên? Bấm Vào Đây Để Tạo Mới 🚀</span>
                  </button>
                </>
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

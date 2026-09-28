// SoundManager - Web Audio API Synthesizer & Natural Vietnamese Speech Engine
// Ensures 100% natural Vietnamese pronunciation across all devices (Windows, iPad, iPhone, Android)

/**
 * Helper: Pre-processes Vietnamese math questions for natural, accurate Speech Synthesis (TTS).
 * Fixes:
 * - Hyphens between numbers (e.g. '68 - 25') being misinterpreted as a range ('68 đến 25') -> converts to '68 trừ 25'
 * - Plus signs ('+') -> converts to 'cộng'
 * - Equal question ('= ?') -> converts to 'bằng bao nhiêu?'
 * - Missing operand in equations ('6 + ? = 10') -> converts to '6 cộng mấy bằng 10'
 * - Units ('cm') -> converts to 'xăng-ti-mét'
 * - All emojis stripped cleanly
 * - Colons after keywords softened to pauses
 */
const VIETNAMESE_MATH_LETTER_MAP = {
  A: 'A',
  B: 'Bê',
  C: 'Xê',
  D: 'Đê',
  E: 'E',
  F: 'Ép',
  G: 'Gờ',
  H: 'Hát',
  I: 'I',
  K: 'Ca',
  L: 'E-lờ',
  M: 'Mờ',
  N: 'Nờ',
  O: 'O',
  P: 'Pê',
  Q: 'Quy',
  R: 'E-rờ',
  S: 'Sờ',
  T: 'Tê',
  U: 'U',
  V: 'Vê',
  X: 'Ích',
  Y: 'I',
};

export function formatMathForSpeech(text) {
  if (!text) return '';
  let res = String(text);

  // 1. Remove emojis and pictographs
  res = res.replace(/\p{Extended_Pictographic}/gu, '');

  // 2. Units of Area and Volume: cm2, m2, dm2, mm2, cm3, dm3, m3
  res = res.replace(/(\d+)\s*cm2\b/gi, (m, n) => `${n} xăng-ti-mét vuông`);
  res = res.replace(/(\d+)\s*m2\b/gi, (m, n) => `${n} mét vuông`);
  res = res.replace(/(\d+)\s*dm2\b/gi, (m, n) => `${n} đề-xi-mét vuông`);
  res = res.replace(/(\d+)\s*mm2\b/gi, (m, n) => `${n} mi-li-mét vuông`);
  res = res.replace(/(\d+)\s*cm3\b/gi, (m, n) => `${n} xăng-ti-mét khối`);
  res = res.replace(/(\d+)\s*dm3\b/gi, (m, n) => `${n} đề-xi-mét khối`);
  res = res.replace(/(\d+)\s*m3\b/gi, (m, n) => `${n} mét khối`);

  // 3. Units of Length, Mass, Speed and Volume
  res = res.replace(/(\d+)\s*km\/h\b/gi, (m, n) => `${n} ki-lô-mét trên giờ`);
  res = res.replace(/(\d+)\s*km\b/gi, (m, n) => `${n} ki-lô-mét`);
  res = res.replace(/(\d+)\s*dm\b/gi, (m, n) => `${n} đề-xi-mét`);
  res = res.replace(/(\d+)\s*cm\b/gi, (m, num) => `${num} xăng-ti-mét`);
  res = res.replace(/(\d+)\s*mm\b/gi, (m, n) => `${n} mi-li-mét`);
  res = res.replace(/(\d+)\s*kg\b/gi, (m, n) => `${n} ki-lô-gam`);
  res = res.replace(/(\d+)\s*ml\b/gi, (m, n) => `${n} mi-li-lít`);
  res = res.replace(/\bcm\b/gi, 'xăng-ti-mét');
  res = res.replace(/(\d+)\s*%/g, (m, n) => `${n} phần trăm`);

  // 4. Fractions: 1/2 -> một phần hai, 3/4 -> ba phần tư, a/b -> a phần b
  res = res.replace(/\b1\/2\b/g, 'một phần hai');
  res = res.replace(/\b1\/3\b/g, 'một phần ba');
  res = res.replace(/\b1\/4\b/g, 'một phần tư');
  res = res.replace(/\b3\/4\b/g, 'ba phần tư');
  res = res.replace(/\b1\/5\b/g, 'một phần năm');
  res = res.replace(/(\d+)\/(\d+)/g, (m, a, b) => `${a} phần ${b}`);

  // 5. Question equals: '= ?' -> 'bằng bao nhiêu?'
  res = res.replace(/\s*=\s*\?/g, ' bằng bao nhiêu?');

  // 6. Missing number in equation: '6 + ? = 10'
  res = res.replace(/(?<=\+|\-|\×|\*|\:|\÷)\s*\?/g, ' mấy');
  res = res.replace(/\?\s*(?==)/g, 'mấy ');

  // 7. Multiplication and Division
  res = res.replace(/(\d+)\s*[x×*]\s*(\d+)/g, (m, a, b) => `${a} nhân ${b}`);
  res = res.replace(/(\d+)\s*[:÷]\s*(\d+)/g, (m, a, b) => `${a} chia ${b}`);

  // 8. Minus sign between numbers or operands -> 'trừ'
  res = res.replace(/(\d+)\s*[-−–]\s*(\d+)/g, (m, a, b) => `${a} trừ ${b}`);
  res = res.replace(/(?<=\d|\))\s*[-−–]\s*/g, ' trừ ');
  res = res.replace(/\s*[-−–]\s*(?=\d|\()/g, ' trừ ');

  // 9. Plus sign -> 'cộng'
  res = res.replace(/(\d+)\s*\+\s*(\d+)/g, (m, a, b) => `${a} cộng ${b}`);
  res = res.replace(/(?<=\d|\))\s*\+\s*/g, ' cộng ');
  res = res.replace(/\s*\+\s*(?=\d|\()/g, ' cộng ');
  res = res.replace(/\s*\+\s*/g, ' cộng ');

  // 10. Equal sign -> 'bằng'
  res = res.replace(/\s*=\s*/g, ' bằng ');

  // 11. Comparisons & ranges
  res = res.replace(/(\d+)\s*(\.{3,}|…)\s*(\d+)/g, (m, a, dots, b) => `${a} với ${b}`);
  res = res.replace(/\s*>\s*/g, ' lớn hơn ');
  res = res.replace(/\s*<\s*/g, ' bé hơn ');

  // 12. Soften colons after keywords to avoid TTS saying "hai chấm"
  res = res.replace(/(Tính|Tính nhẩm|Tìm giá trị của|Đố bé|Quan sát)\s*:/gi, (m, word) => `${word},`);

  // -------------------------------------------------------------
  // 13. CHUẨN HÓA CÁCH ĐỌC ĐIỂM, ĐOẠN THẲNG, HÌNH HỌC TIẾNG VIỆT (M, N, P, Q, A, B, C, D...)
  // -------------------------------------------------------------
  // a) Các tên đoạn thẳng, đa giác gồm 2 đến 6 chữ cái in hoa liền nhau: MNPQ, MN, NP, PQ, ABCD, ABC, AB, CD, v.v.
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])[A-Z]{2,6}(?![a-zA-ZÀ-ỹ])/gu, (match) => {
    const chars = match.split('');
    if (chars.every((ch) => VIETNAMESE_MATH_LETTER_MAP[ch])) {
      return chars.map((ch) => VIETNAMESE_MATH_LETTER_MAP[ch]).join(' ');
    }
    return match;
  });

  // b) Danh sách các điểm cách nhau bởi dấu phẩy hoặc chữ "và", "hoặc": "M, N, P, Q" hoặc "A, B và C"
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])[A-Z](?:\s*,\s*[A-Z])*(?:\s+và\s+[A-Z])?(?![a-zA-ZÀ-ỹ])/gu, (match) => {
    if (match.includes(',') || match.includes(' và ') || match.includes(' hoặc ')) {
      return match.replace(/[A-Z]/g, (ch) => VIETNAMESE_MATH_LETTER_MAP[ch] || ch);
    }
    return match;
  });

  // c) Điểm hoặc biến số đứng sau các từ khóa hình học (hỗ trợ cả từ có dấu tiếng Việt):
  // "điểm M", "Điểm M", "đoạn thẳng AB", "cạnh a", "tâm O", "góc A", "tia Ox"
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])(các điểm|điểm|đỉnh|đoạn thẳng|đoạn|cạnh|góc|tâm|tia|đường thẳng|hình|tam giác|tứ giác|đường gấp khúc)\s+([A-Z])(?![a-zA-ZÀ-ỹ])/giu, (m, kw, ch) => {
    return `${kw} ${VIETNAMESE_MATH_LETTER_MAP[ch.toUpperCase()] || ch}`;
  });

  // d) Tên điểm đứng trước từ nối hoặc phép tính: "M bằng", "N cộng"
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])([A-Z])\s+(?=bằng|cộng|trừ|nhân|chia)/gu, (m, ch) => {
    return `${VIETNAMESE_MATH_LETTER_MAP[ch] || ch} `;
  });

  // e) Đọc các đáp án lựa chọn A, B, C, D theo tiếng Việt: "Đáp án A", "Đáp án B" -> "Đáp án A", "Đáp án Bê"
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])Đáp án\s+([A-D])(?![a-zA-ZÀ-ỹ])/giu, (m, ch) => {
    return `Đáp án ${VIETNAMESE_MATH_LETTER_MAP[ch.toUpperCase()] || ch}`;
  });

  // f) Đọc ẩn số x, y trong toán: "Tìm x" -> "Tìm ích", "x cộng" -> "ích cộng", "x bằng" -> "ích bằng"
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])([Tt]ìm)\s+x(?![a-zA-ZÀ-ỹ])/gu, '$1 ích');
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])([Tt]ìm)\s+y(?![a-zA-ZÀ-ỹ])/gu, '$1 y');
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])x\s+(bằng|cộng|trừ|nhân|chia)(?![a-zA-ZÀ-ỹ])/gu, 'ích $1');
  res = res.replace(/(?<![a-zA-ZÀ-ỹ])(cộng|trừ|nhân|chia)\s+x(?![a-zA-ZÀ-ỹ])/gu, '$1 ích');

  // 14. Clean up spaces
  res = res.replace(/\s+/g, ' ').trim();
  return res;
}

class SoundManager {
  constructor() {
    this.ctx = null;
    let savedSound = true;
    let savedVoice = true;
    try {
      const s = localStorage.getItem('hyhyhoctoan_sound_enabled') ?? localStorage.getItem('toan_lop1_sound_enabled');
      if (s !== null) {
        savedSound = s === 'true';
      } else {
        localStorage.setItem('hyhyhoctoan_sound_enabled', 'true');
        localStorage.setItem('toan_lop1_sound_enabled', 'true');
      }
      const v = localStorage.getItem('hyhyhoctoan_voice_enabled') ?? localStorage.getItem('toan_lop1_voice_enabled');
      if (v !== null) {
        savedVoice = v === 'true';
      } else {
        localStorage.setItem('hyhyhoctoan_voice_enabled', 'true');
        localStorage.setItem('toan_lop1_voice_enabled', 'true');
      }
    } catch {
      // ignore
    }
    this.soundEnabled = savedSound;
    this.voiceEnabled = savedVoice;
    this.vietnameseVoice = null;
    this.currentAudio = null;
    this.isSpeaking = false;
    this.speechCallbacks = new Set();
    this.lastSpokenText = '';
    this.lastSpokenTime = 0;
    this.initSpeech();
  }

  getAudioContext() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  initSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = () => {
        this.vietnameseVoice = this.getVietnameseVoice();
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  getVietnameseVoice() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length === 0) return null;

    // 1. Exact Vietnamese language tags
    let match = voices.find(
      (v) => v.lang === 'vi-VN' || v.lang === 'vi_VN' || v.lang.toLowerCase() === 'vi'
    );
    if (match) return match;

    // 2. Prefixed with 'vi'
    match = voices.find((v) => v.lang.toLowerCase().startsWith('vi'));
    if (match) return match;

    // 3. Known Vietnamese voice names (Microsoft HoaiMy, NamMinh, Google Tiếng Việt, Apple Linh, etc.)
    match = voices.find((v) =>
      /vietnam|tiếng việt|tieng viet|hoaimy|namminh|linh/i.test(v.name)
    );
    if (match) return match;

    return null;
  }

  onSpeechChange(callback) {
    this.speechCallbacks.add(callback);
    return () => this.speechCallbacks.delete(callback);
  }

  notifySpeech(speaking, text = '') {
    this.isSpeaking = speaking;
    this.speechCallbacks.forEach((cb) => cb({ isSpeaking: speaking, text }));
  }

  speak(text) {
    if (!this.voiceEnabled || !text) return;

    const cleanText = formatMathForSpeech(text);

    if (!cleanText) return;

    // Prevent immediate duplicate triggers (debounce 600ms)
    const now = Date.now();
    if (this.lastSpokenText === cleanText && now - this.lastSpokenTime < 600) {
      return;
    }
    this.lastSpokenText = cleanText;
    this.lastSpokenTime = now;

    this.stopSpeaking();
    this.notifySpeech(true, cleanText);

    // Primary Engine: Standard Google Vietnamese TTS Audio (Warm, Natural, Authentic Vietnamese)
    this.speakGoogleVietnamese(cleanText);
  }

  speakGoogleVietnamese(cleanText) {
    try {
      const encoded = encodeURIComponent(cleanText.substring(0, 190));
      const primaryUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
      const audio = new Audio();
      audio.referrerPolicy = 'no-referrer';
      audio.src = primaryUrl;
      this.currentAudio = audio;

      audio.onended = () => {
        if (this.currentAudio === audio) {
          this.notifySpeech(false, '');
          this.currentAudio = null;
        }
      };

      audio.onerror = () => {
        if (this.currentAudio !== audio) return;
        // Secondary Google TTS endpoint fallback
        this.speakGoogleBackup(cleanText);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (this.currentAudio !== audio) return;
          if (err && (err.name === 'AbortError' || err.code === 20)) return;
          this.speakGoogleBackup(cleanText);
        });
      }
    } catch {
      this.speakGoogleBackup(cleanText);
    }
  }

  speakGoogleBackup(cleanText) {
    try {
      const encoded = encodeURIComponent(cleanText.substring(0, 190));
      const backupUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=vi&ie=UTF-8&q=${encoded}`;
      const audio = new Audio();
      audio.referrerPolicy = 'no-referrer';
      audio.src = backupUrl;
      this.currentAudio = audio;

      audio.onended = () => {
        if (this.currentAudio === audio) {
          this.notifySpeech(false, '');
          this.currentAudio = null;
        }
      };

      audio.onerror = () => {
        if (this.currentAudio !== audio) return;
        this.speakBrowserFallback(cleanText);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (this.currentAudio !== audio) return;
          if (err && (err.name === 'AbortError' || err.code === 20)) return;
          this.speakBrowserFallback(cleanText);
        });
      }
    } catch {
      this.speakBrowserFallback(cleanText);
    }
  }

  speakBrowserFallback(cleanText) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.notifySpeech(false, '');
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const viVoice = this.getVietnameseVoice();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'vi-VN';
      if (viVoice) {
        utterance.voice = viVoice;
      }
      utterance.rate = 0.9;
      utterance.pitch = 1.05;

      utterance.onend = () => this.notifySpeech(false, '');
      utterance.onerror = () => this.notifySpeech(false, '');

      window.speechSynthesis.speak(utterance);
    } catch {
      this.notifySpeech(false, '');
    }
  }

  speakPet(text) {
    if (!text) return;
    // Play cute animal chirp sound effect
    this.playPetChirp();

    if (!this.voiceEnabled) return;
    const cleanText = formatMathForSpeech(text).replace(/^[\p{Extended_Pictographic}\s"“”]+|[\p{Extended_Pictographic}\s"“”]+$/gu, '').trim();
    if (!cleanText) return;

    // Use higher pitch for a cute, child-friendly animal companion voice
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const viVoice = this.getVietnameseVoice();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'vi-VN';
        if (viVoice) {
          utterance.voice = viVoice;
        }
        utterance.rate = 1.0;
        utterance.pitch = 1.35; // Cute kid pet pitch

        utterance.onend = () => this.notifySpeech(false, '');
        utterance.onerror = () => {
          this.speakGoogleVietnamese(cleanText);
        };

        this.notifySpeech(true, cleanText);
        window.speechSynthesis.speak(utterance);
        return;
      } catch {
        // Fallback below
      }
    }

    this.speakGoogleVietnamese(cleanText);
  }

  playPetChirp() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      // Two-tone sweet chirp
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(600, now);
      osc1.frequency.exponentialRampToValueAtTime(950, now + 0.08);
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.1);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(950, now + 0.08);
      osc2.frequency.exponentialRampToValueAtTime(1300, now + 0.18);
      gain2.gain.setValueAtTime(0.22, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.22);
    } catch {}
  }

  stopSpeaking() {
    if (this.currentAudio) {
      this.currentAudio.onended = null;
      this.currentAudio.onerror = null;
      this.currentAudio.pause();
      this.currentAudio.src = '';
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.notifySpeech(false, '');
  }

  // Web Audio Synthesizer sound effects
  playCorrect() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const now = ctx.currentTime;

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);

      gain.gain.setValueAtTime(0.001, now + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.3, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.28);
    });
  }

  playWrong() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.3);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playPop(pitchMultiplier = 1) {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const baseFreq = 420 * pitchMultiplier;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 2.2, now + 0.08);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  playClick() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(850, now + 0.04);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // AudioContext fallback
    }
  }

  playStar() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [1046.5, 1318.5, 1567.98].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.2, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.4);
    });
  }

  playFanfare() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const sequence = [
      { f: 523.25, t: 0, d: 0.12 },
      { f: 523.25, t: 0.12, d: 0.12 },
      { f: 523.25, t: 0.24, d: 0.12 },
      { f: 659.25, t: 0.36, d: 0.25 },
      { f: 523.25, t: 0.65, d: 0.12 },
      { f: 783.99, t: 0.8, d: 0.45 },
    ];

    sequence.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, now + n.t);

      gain.gain.setValueAtTime(0.25, now + n.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + n.t);
      osc.stop(now + n.t + n.d);
    });
  }

  setSound(enabled) {
    this.soundEnabled = !!enabled;
    try {
      localStorage.setItem('hyhyhoctoan_sound_enabled', this.soundEnabled ? 'true' : 'false');
      localStorage.setItem('toan_lop1_sound_enabled', this.soundEnabled ? 'true' : 'false');
    } catch {}
    return this.soundEnabled;
  }

  toggleSound() {
    return this.setSound(!this.soundEnabled);
  }

  setVoice(enabled) {
    this.voiceEnabled = !!enabled;
    if (!this.voiceEnabled) {
      this.stopSpeaking();
    }
    try {
      localStorage.setItem('hyhyhoctoan_voice_enabled', this.voiceEnabled ? 'true' : 'false');
      localStorage.setItem('toan_lop1_voice_enabled', this.voiceEnabled ? 'true' : 'false');
    } catch {}
    return this.voiceEnabled;
  }

  toggleVoice() {
    return this.setVoice(!this.voiceEnabled);
  }

  setMasterAudio(enabled) {
    this.setSound(enabled);
    this.setVoice(enabled);
    try {
      localStorage.setItem('toan_lop1_master_audio', enabled ? 'true' : 'false');
    } catch {}
    return enabled;
  }

  toggleMasterAudio() {
    return this.setMasterAudio(!this.soundEnabled);
  }
}

export const soundManager = new SoundManager();

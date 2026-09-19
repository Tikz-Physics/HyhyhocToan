// SoundManager - Web Audio API Synthesizer & Natural Vietnamese Speech Engine
// Ensures 100% natural Vietnamese pronunciation across all devices (Windows, iPad, iPhone, Android)

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

    const cleanText = text
      .replace(/[🎨🍎🍏🎈🦆🍓🍬🧸🎄🍉🐊🦉🧩🏆⭐]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();

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

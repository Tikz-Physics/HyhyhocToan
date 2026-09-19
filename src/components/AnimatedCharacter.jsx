import React from 'react';

/**
 * AnimatedCharacter: A lively, mischievous full-body cartoon mascot that stands, walks,
 * blinks, wags its tail, and eats treats - not just a static emoji icon!
 * Supports all 6 companion pets:
 * - 'dino': Khủng Long Dino Tinh Nghịch (T-Rex xanh lá gai vàng)
 * - 'dragon': Rồng Thần Lửa (Cánh vỗ, sừng vàng, đuôi ngoe nguẩy)
 * - 'bunny': Thỏ Trắng (Tai dài, má hồng, chân bước lon ton)
 * - 'chick': Bé Gà / Rồng Con (Tròn xoe, mỏ cam, cánh vẫy)
 * - 'puppy': Cún Bắp Vàng (Tai cụp, đuôi lắc lư, cười tươi)
 * - 'unicorn': Kỳ Lân Mộng Mơ (Sừng vàng phép thuật, bờm cầu vồng)
 */
export default function AnimatedCharacter({
  type = 'dino', // 'dino', 'dragon', 'bunny', 'chick', 'puppy', 'unicorn'
  mood = 'idle', // 'idle', 'happy', 'encouraging', 'eating', 'dancing', 'thinking'
  isHopping = false,
  isDragging = false,
  eatingTreat = null, // 'apple', 'icecream', 'milk'
}) {
  const isWalking = isHopping || isDragging;

  // 1. RỒNG THẦN LỬA (Dragon)
  if (type === 'dragon') {
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="50" cy="94" rx={isWalking ? 16 : 20} ry="3.5" fill="rgba(0,0,0,0.18)" />

          {/* Wings */}
          <path
            d="M28 45 C15 30 5 45 18 55 Z"
            fill="#f97316"
            stroke="#ea580c"
            strokeWidth="2"
            className={isWalking ? 'animate-wiggle' : 'anim-arm-wave'}
          />
          <path
            d="M72 45 C85 30 95 45 82 55 Z"
            fill="#f97316"
            stroke="#ea580c"
            strokeWidth="2"
            className={isWalking ? 'animate-wiggle' : ''}
          />

          {/* Tail */}
          <path
            d="M75 70 C88 65 92 50 96 46 C94 56 86 78 72 78 Z"
            fill="#ea580c"
            className="anim-tail-wag"
          />

          {/* Legs */}
          <g className={isWalking ? 'anim-walk-leg-l' : ''}>
            <ellipse cx="38" cy="85" rx="8" ry="6" fill="#c2410c" />
          </g>
          <g className={isWalking ? 'anim-walk-leg-r' : ''}>
            <ellipse cx="62" cy="85" rx="8" ry="6" fill="#c2410c" />
          </g>

          {/* Body */}
          <ellipse cx="50" cy="65" rx="24" ry="20" fill="#f97316" />
          {/* Belly */}
          <ellipse cx="50" cy="67" rx="16" ry="14" fill="#fef08a" />

          {/* Head */}
          <circle cx="50" cy="38" r="22" fill="#fb923c" />
          {/* Horns */}
          <polygon points="36,20 30,8 42,16" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
          <polygon points="64,20 70,8 58,16" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />

          {/* Eyes */}
          <g className={mood === 'happy' ? '' : 'anim-eye-blink'}>
            {mood === 'happy' ? (
              <>
                <path d="M38 36 Q43 30 48 36" stroke="#431407" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M52 36 Q57 30 62 36" stroke="#431407" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : (
              <>
                <ellipse cx="42" cy="36" rx="5" ry="6" fill="#431407" />
                <circle cx="44" cy="34" r="2" fill="#ffffff" />
                <ellipse cx="58" cy="36" rx="5" ry="6" fill="#431407" />
                <circle cx="60" cy="34" r="2" fill="#ffffff" />
              </>
            )}
          </g>

          {/* Cheeks */}
          <circle cx="34" cy="43" r="4" fill="#f43f5e" opacity="0.6" />
          <circle cx="66" cy="43" r="4" fill="#f43f5e" opacity="0.6" />

          {/* Mouth */}
          {mood === 'eating' ? (
            <ellipse cx="50" cy="46" rx="6" ry="5" fill="#7c2d12" />
          ) : mood === 'happy' ? (
            <path d="M43 44 Q50 52 57 44" stroke="#7c2d12" strokeWidth="2.5" fill="#ef4444" strokeLinecap="round" />
          ) : (
            <path d="M44 44 Q50 49 56 44" stroke="#7c2d12" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          )}

          {/* Arms */}
          <path d="M30 62 Q22 68 28 72" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" fill="none" className="anim-arm-wave" />
          <path d="M70 62 Q78 68 72 72" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>

        {/* Snack Treat */}
        {mood === 'eating' && (
          <div className="absolute top-6 right-0 text-xl animate-bounce">
            {eatingTreat === 'icecream' ? '🍦' : eatingTreat === 'milk' ? '🥛' : '🍎'}
          </div>
        )}
      </div>
    );
  }

  // 2. THỎ TRẮNG (Bunny)
  if (type === 'bunny') {
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="50" cy="94" rx={isWalking ? 15 : 19} ry="3.5" fill="rgba(0,0,0,0.18)" />

          {/* Long Floppy Ears */}
          <ellipse cx="38" cy="20" rx="8" ry="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className={isWalking ? 'animate-wiggle' : ''} />
          <ellipse cx="38" cy="20" rx="4" ry="12" fill="#fbcfe8" />
          <ellipse cx="62" cy="20" rx="8" ry="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className={isWalking ? 'animate-wiggle' : ''} />
          <ellipse cx="62" cy="20" rx="4" ry="12" fill="#fbcfe8" />

          {/* Legs */}
          <g className={isWalking ? 'anim-walk-leg-l' : ''}>
            <ellipse cx="38" cy="88" rx="8" ry="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          </g>
          <g className={isWalking ? 'anim-walk-leg-r' : ''}>
            <ellipse cx="62" cy="88" rx="8" ry="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          </g>

          {/* Fluffy Body */}
          <circle cx="50" cy="68" r="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="50" cy="70" r="14" fill="#fdf2f8" />

          {/* Head */}
          <circle cx="50" cy="44" r="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />

          {/* Eyes */}
          <g className={mood === 'happy' ? '' : 'anim-eye-blink'}>
            {mood === 'happy' ? (
              <>
                <path d="M40 42 Q45 36 50 42" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M52 42 Q57 36 62 42" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="43" cy="42" r="4.5" fill="#1e293b" />
                <circle cx="45" cy="40" r="1.5" fill="#ffffff" />
                <circle cx="57" cy="42" r="4.5" fill="#1e293b" />
                <circle cx="59" cy="40" r="1.5" fill="#ffffff" />
              </>
            )}
          </g>

          {/* Pink Nose & Cheeks */}
          <polygon points="50,47 47,45 53,45" fill="#f43f5e" />
          <circle cx="36" cy="48" r="3.5" fill="#f43f5e" opacity="0.5" />
          <circle cx="64" cy="48" r="3.5" fill="#f43f5e" opacity="0.5" />

          {/* Mouth */}
          {mood === 'eating' ? (
            <ellipse cx="50" cy="51" rx="5" ry="4" fill="#881337" />
          ) : (
            <path d="M47 49 Q50 52 53 49" stroke="#1e293b" strokeWidth="1.5" fill="none" />
          )}

          {/* Paws */}
          <ellipse cx="34" cy="66" rx="5" ry="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="anim-arm-wave" />
          <ellipse cx="66" cy="66" rx="5" ry="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>

        {/* Snack Treat */}
        {mood === 'eating' && (
          <div className="absolute top-6 right-0 text-xl animate-bounce">
            {eatingTreat === 'icecream' ? '🍦' : eatingTreat === 'milk' ? '🥛' : '🍎'}
          </div>
        )}
      </div>
    );
  }

  // 3. BÉ GÀ / RỒNG CON (Chick)
  if (type === 'chick') {
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="50" cy="94" rx={isWalking ? 15 : 18} ry="3.5" fill="rgba(0,0,0,0.18)" />

          {/* Tuft of hair */}
          <path d="M50 20 Q52 10 56 16 Q60 8 62 18" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Legs */}
          <g className={isWalking ? 'anim-walk-leg-l' : ''}>
            <path d="M40 82 L40 91 L34 93" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
          <g className={isWalking ? 'anim-walk-leg-r' : ''}>
            <path d="M60 82 L60 91 L66 93" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>

          {/* Round Body */}
          <circle cx="50" cy="56" r="30" fill="#facc15" stroke="#eab308" strokeWidth="2" />
          {/* Belly */}
          <circle cx="50" cy="62" r="18" fill="#fef08a" />

          {/* Wings */}
          <ellipse cx="23" cy="58" rx="8" ry="12" fill="#eab308" className={isWalking ? 'animate-wiggle' : 'anim-arm-wave'} />
          <ellipse cx="77" cy="58" rx="8" ry="12" fill="#eab308" className={isWalking ? 'animate-wiggle' : ''} />

          {/* Big Curious Eyes */}
          <g className={mood === 'happy' ? '' : 'anim-eye-blink'}>
            {mood === 'happy' ? (
              <>
                <path d="M38 46 Q43 40 48 46" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M52 46 Q57 40 62 46" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="42" cy="46" r="6" fill="#78350f" />
                <circle cx="44" cy="44" r="2.2" fill="#ffffff" />
                <circle cx="58" cy="46" r="6" fill="#78350f" />
                <circle cx="60" cy="44" r="2.2" fill="#ffffff" />
              </>
            )}
          </g>

          {/* Orange Beak */}
          <polygon points="50,56 43,51 57,51" fill="#f97316" stroke="#c2410c" strokeWidth="1" />

          {/* Cheeks */}
          <circle cx="33" cy="54" r="4" fill="#f43f5e" opacity="0.6" />
          <circle cx="67" cy="54" r="4" fill="#f43f5e" opacity="0.6" />
        </svg>

        {/* Snack Treat */}
        {mood === 'eating' && (
          <div className="absolute top-6 right-0 text-xl animate-bounce">
            {eatingTreat === 'icecream' ? '🍦' : eatingTreat === 'milk' ? '🥛' : '🍎'}
          </div>
        )}
      </div>
    );
  }

  // 4. CÚN BẮP VÀNG (Puppy)
  if (type === 'puppy') {
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="50" cy="94" rx={isWalking ? 16 : 20} ry="3.5" fill="rgba(0,0,0,0.18)" />

          {/* Tail Wag */}
          <path d="M72 70 C84 66 90 54 94 48" stroke="#d97706" strokeWidth="6" strokeLinecap="round" fill="none" className="anim-tail-wag" />

          {/* Stepping Paws */}
          <g className={isWalking ? 'anim-walk-leg-l' : ''}>
            <ellipse cx="38" cy="87" rx="7" ry="5" fill="#b45309" />
          </g>
          <g className={isWalking ? 'anim-walk-leg-r' : ''}>
            <ellipse cx="62" cy="87" rx="7" ry="5" fill="#b45309" />
          </g>

          {/* Body */}
          <ellipse cx="50" cy="68" rx="22" ry="18" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
          <ellipse cx="50" cy="70" rx="14" ry="12" fill="#fef3c7" />

          {/* Floppy Ears */}
          <ellipse cx="30" cy="40" rx="8" ry="16" fill="#b45309" transform="rotate(-20 30 40)" className={isWalking ? 'animate-wiggle' : ''} />
          <ellipse cx="70" cy="40" rx="8" ry="16" fill="#b45309" transform="rotate(20 70 40)" className={isWalking ? 'animate-wiggle' : ''} />

          {/* Head */}
          <circle cx="50" cy="44" r="21" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />

          {/* Eyes */}
          <g className={mood === 'happy' ? '' : 'anim-eye-blink'}>
            {mood === 'happy' ? (
              <>
                <path d="M40 42 Q45 36 50 42" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M52 42 Q57 36 62 42" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="43" cy="42" r="5" fill="#451a03" />
                <circle cx="45" cy="40" r="1.8" fill="#ffffff" />
                <circle cx="57" cy="42" r="5" fill="#451a03" />
                <circle cx="59" cy="40" r="1.8" fill="#ffffff" />
              </>
            )}
          </g>

          {/* Black Nose */}
          <ellipse cx="50" cy="48" rx="4" ry="3" fill="#1f2937" />

          {/* Cheerful Mouth & Tongue */}
          <path d="M45 51 Q50 55 55 51" stroke="#451a03" strokeWidth="2" fill="none" />
          <path d="M48 53 Q50 61 52 53" fill="#f43f5e" stroke="#e11d48" strokeWidth="1" />

          {/* Cheeks */}
          <circle cx="35" cy="49" r="3.5" fill="#f43f5e" opacity="0.5" />
          <circle cx="65" cy="49" r="3.5" fill="#f43f5e" opacity="0.5" />
        </svg>

        {/* Snack Treat */}
        {mood === 'eating' && (
          <div className="absolute top-6 right-0 text-xl animate-bounce">
            {eatingTreat === 'icecream' ? '🍦' : eatingTreat === 'milk' ? '🥛' : '🍎'}
          </div>
        )}
      </div>
    );
  }

  // 5. KỲ LÂN MỘNG MƠ (Unicorn)
  if (type === 'unicorn') {
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="50" cy="94" rx={isWalking ? 16 : 20} ry="3.5" fill="rgba(0,0,0,0.18)" />

          {/* Magic Golden Horn with stars */}
          <polygon points="50,6 46,24 54,24" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
          <line x1="47" y1="18" x2="53" y2="18" stroke="#fef08a" strokeWidth="1.5" />
          <line x1="48" y1="12" x2="52" y2="12" stroke="#fef08a" strokeWidth="1.5" />

          {/* Rainbow Mane */}
          <path d="M42 22 C34 18 28 32 32 42" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M40 28 C30 28 26 40 30 50" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M38 34 C28 36 26 48 30 58" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Tail */}
          <path d="M72 68 C86 64 92 50 88 42 C92 56 86 78 70 76" fill="#a855f7" className="anim-tail-wag" />

          {/* Stepping Hooves */}
          <g className={isWalking ? 'anim-walk-leg-l' : ''}>
            <rect x="36" y="80" width="8" height="10" rx="3" fill="#e9d5ff" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="36" y="86" width="8" height="4" rx="1" fill="#facc15" />
          </g>
          <g className={isWalking ? 'anim-walk-leg-r' : ''}>
            <rect x="58" y="80" width="8" height="10" rx="3" fill="#e9d5ff" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="58" y="86" width="8" height="4" rx="1" fill="#facc15" />
          </g>

          {/* Body */}
          <ellipse cx="50" cy="66" rx="23" ry="18" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="2" />

          {/* Head */}
          <circle cx="50" cy="40" r="20" fill="#ffffff" stroke="#e9d5ff" strokeWidth="2" />

          {/* Sparkling Eyes */}
          <g className={mood === 'happy' ? '' : 'anim-eye-blink'}>
            {mood === 'happy' ? (
              <>
                <path d="M40 38 Q45 32 50 38" stroke="#581c87" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M52 38 Q57 32 62 38" stroke="#581c87" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="43" cy="38" r="5" fill="#581c87" />
                <circle cx="45" cy="36" r="1.8" fill="#ffffff" />
                <circle cx="57" cy="38" r="5" fill="#581c87" />
                <circle cx="59" cy="36" r="1.8" fill="#ffffff" />
              </>
            )}
          </g>

          {/* Cheeks */}
          <circle cx="35" cy="44" r="3.5" fill="#f43f5e" opacity="0.5" />
          <circle cx="65" cy="44" r="3.5" fill="#f43f5e" opacity="0.5" />

          {/* Mouth */}
          <path d="M46 45 Q50 49 54 45" stroke="#581c87" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </svg>

        {/* Snack Treat */}
        {mood === 'eating' && (
          <div className="absolute top-6 right-0 text-xl animate-bounce">
            {eatingTreat === 'icecream' ? '🍦' : eatingTreat === 'milk' ? '🥛' : '🍎'}
          </div>
        )}
      </div>
    );
  }

  // 6. DEFAULT MASCOT: KHỦNG LONG DINO TINH NGHỊCH (Baby T-Rex)
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 select-none">
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
        {/* Shadow */}
        <ellipse cx="50" cy="94" rx={isWalking ? 17 : 22} ry="3.8" fill="rgba(0,0,0,0.2)" />

        {/* Back Spikes */}
        <polygon points="30,46 22,42 28,52" fill="#eab308" />
        <polygon points="26,56 18,52 24,62" fill="#eab308" />
        <polygon points="24,66 16,64 22,72" fill="#eab308" />

        {/* Wagging Tail */}
        <path
          d="M32 74 C16 78 8 68 4 60 C8 72 20 84 34 82 Z"
          fill="#16a34a"
          className="anim-tail-wag"
        />

        {/* Stepping Feet (Left & Right alternating when walking) */}
        <g className={isWalking ? 'anim-walk-leg-l' : ''}>
          <path d="M38 78 L38 88 L32 90" stroke="#15803d" strokeWidth="6" strokeLinecap="round" fill="none" />
          <ellipse cx="34" cy="89" rx="6" ry="4" fill="#15803d" />
        </g>
        <g className={isWalking ? 'anim-walk-leg-r' : ''}>
          <path d="M58 78 L58 88 L52 90" stroke="#166534" strokeWidth="6" strokeLinecap="round" fill="none" />
          <ellipse cx="54" cy="89" rx="6" ry="4" fill="#166534" />
        </g>

        {/* Rounded Belly / Body */}
        <ellipse cx="48" cy="66" rx="22" ry="18" fill="#22c55e" />
        <ellipse cx="52" cy="67" rx="14" ry="13" fill="#fef08a" />

        {/* Playful Spots on back */}
        <circle cx="36" cy="62" r="3" fill="#16a34a" opacity="0.6" />
        <circle cx="42" cy="58" r="2.5" fill="#16a34a" opacity="0.6" />

        {/* Head */}
        <ellipse cx="54" cy="38" rx="22" ry="19" fill="#22c55e" />

        {/* Big Curious Eyes */}
        <g className={mood === 'happy' ? '' : 'anim-eye-blink'}>
          {mood === 'happy' ? (
            <>
              <path d="M44 36 Q49 30 54 36" stroke="#064e3b" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M58 36 Q63 30 68 36" stroke="#064e3b" strokeWidth="3" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* White eye backgrounds */}
              <circle cx="48" cy="36" r="7" fill="#ffffff" />
              <circle cx="64" cy="36" r="7" fill="#ffffff" />
              {/* Big Black pupils */}
              <circle cx="50" cy="36" r="4.5" fill="#064e3b" />
              <circle cx="66" cy="36" r="4.5" fill="#064e3b" />
              {/* Eye sparkle reflections */}
              <circle cx="51.5" cy="34.5" r="1.8" fill="#ffffff" />
              <circle cx="67.5" cy="34.5" r="1.8" fill="#ffffff" />
            </>
          )}
        </g>

        {/* Cute Blushing Cheeks */}
        <ellipse cx="42" cy="43" rx="4.5" ry="3" fill="#f43f5e" opacity="0.55" />
        <ellipse cx="70" cy="43" rx="4.5" ry="3" fill="#f43f5e" opacity="0.55" />

        {/* Mischievous Smile or Chewing Mouth */}
        {mood === 'eating' ? (
          <ellipse cx="58" cy="46" rx="6" ry="5" fill="#064e3b" />
        ) : mood === 'happy' ? (
          <path
            d="M48 44 Q58 53 66 44"
            stroke="#064e3b"
            strokeWidth="3"
            fill="#ef4444"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M50 44 Q58 49 65 44"
            stroke="#064e3b"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        )}

        {/* Little Cute Dino Hands */}
        <path
          d="M62 64 Q70 68 66 73"
          stroke="#15803d"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          className="anim-arm-wave"
        />
      </svg>

      {/* Floating Snack when eating */}
      {mood === 'eating' && (
        <div className="absolute top-6 right-0 text-xl animate-bounce">
          {eatingTreat === 'icecream' ? '🍦' : eatingTreat === 'milk' ? '🥛' : '🍎'}
        </div>
      )}
    </div>
  );
}

# Theme

## Compact token summary

- Font: `Nunito`, fallback `Quicksand`, system sans-serif.
- Primary learning palette: amber 100–500, orange 400–500, white and slate 50–900.
- Feedback: emerald 400–600 for success; rose 400–600 for retry/error; sky/blue for counting; purple/indigo for total/group concepts.
- Corners: `rounded-xl` and `rounded-2xl`; pill labels use full rounding.
- Shadows: small card shadows plus tactile 3D button bottom shadow.
- Spacing: compact mobile-first scale, typically 0.25–1rem gaps and 0.5–1rem padding.
- Motion: pop, slow bounce, wiggle, glow, float and shake; reduced-motion respected for pet animations.
- Responsive: Tailwind `sm` plus landscape variants.

## Raw global foundation

Path: `src/index.css`

```css
@import "tailwindcss";

@layer base {
  :root {
    --sat: env(safe-area-inset-top, 0px);
    --sar: env(safe-area-inset-right, 0px);
    --sab: env(safe-area-inset-bottom, 0px);
    --sal: env(safe-area-inset-left, 0px);
  }
  body {
    font-family: 'Nunito', 'Quicksand', system-ui, -apple-system, sans-serif;
    user-select: none;
    min-height: 100vh;
    min-height: 100dvh;
    touch-action: manipulation;
  }
}

.btn-kid-3d {
  transition: transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.12s ease;
  position: relative;
  user-select: none;
}
.btn-kid-3d:active {
  transform: translateY(4px) scale(0.98);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2) !important;
}
```

Tailwind is provided by `@tailwindcss/vite` v4; there is no separate Tailwind config file.


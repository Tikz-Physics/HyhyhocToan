# Shared layouts

## Root application bootstrap

Path: `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker, checkForAppUpdate } from './utils/updateManager'

registerServiceWorker()
checkForAppUpdate()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## App shell

- Path: `src/App.jsx`
- Persistent top navigation: `src/components/Navbar.jsx`.
- Main branches: curriculum map, zone lesson, Timo arena, trophy room and parent portal.
- The target lesson branch renders `ZoneView`, which renders the question header, `InteractiveCanvas`, navigation controls and `FloatingPetCompanion`.


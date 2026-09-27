import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker, checkForAppUpdate } from './utils/updateManager'

// Kích hoạt Service Worker và kiểm tra cập nhật nền
registerServiceWorker()
checkForAppUpdate()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

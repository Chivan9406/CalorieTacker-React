import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ActivityProvider from './context/Activity.provider'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Routes from './routes.jsx'
import GlobalStyles from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Routes />
    <GlobalStyles />
      </StrictMode>,
)

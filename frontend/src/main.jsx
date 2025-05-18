import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Routes />
    <GlobalStyles />
      </StrictMode>,
)

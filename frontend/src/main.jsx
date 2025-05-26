import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import App from "./App.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions:{ queries: { retry: false } },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client = { queryClient }>
    <Routes />
    <GlobalStyles />
    </QueryClientProvider>
      </StrictMode>,
)

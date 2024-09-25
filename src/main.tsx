import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { RouterProvider } from './app/providers/routerProvider'
import { ThemeProvider } from './app/providers/themeProvider'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider>
            <ThemeProvider>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </RouterProvider>
    </StrictMode>,
)

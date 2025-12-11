import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { Toaster } from "sonner";
import { AuthProvider } from './context/auth.context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)

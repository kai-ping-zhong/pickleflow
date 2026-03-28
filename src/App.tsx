import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LoginPage } from '@/features/auth/LoginPage'
import { HomePage } from '@/features/session/HomePage'
import { SessionSetupPage } from '@/features/session/SessionSetupPage'
import { CommandCenterPage } from '@/features/session/CommandCenterPage'
import { TVDisplayPage } from '@/features/tv/TVDisplayPage'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tv/:sessionCode" element={<TVDisplayPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<SessionSetupPage />} />
            <Route path="/session/:sessionId" element={<CommandCenterPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

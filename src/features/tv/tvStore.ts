import { create } from 'zustand'
import type { Session } from '@/types/session'

interface TVStore {
  session: Session | null
  connected: boolean
  setSession: (session: Session | null) => void
  setConnected: (connected: boolean) => void
}

export const useTVStore = create<TVStore>((set) => ({
  session: null,
  connected: false,
  setSession: (session) => set({ session }),
  setConnected: (connected) => set({ connected }),
}))

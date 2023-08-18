import { StateCreator } from "zustand"

export interface AuthSlice {
    isAuthModalOpen: boolean
    toggleAuthModal: () => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
    isAuthModalOpen: false,
    toggleAuthModal: () => {
        set({ isAuthModalOpen: !get().isAuthModalOpen })
    },
})

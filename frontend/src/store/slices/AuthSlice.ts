import { StateCreator } from "zustand"

export interface AuthSlice {
    isModalOpen: boolean
    setIsModalOpen: (state: boolean) => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
    isModalOpen: false,
    setIsModalOpen: () => {
        set({ isModalOpen: !get().isModalOpen })
    },
})

import { MyProfile } from "@/model/Auth"
import { StateCreator } from "zustand"

export interface AuthSlice {
    isAuthModalOpen: boolean
    isLoggedIn: boolean
    userInfo: MyProfile | null

    toggleAuthModal: () => void
    setIsLoggedIn: (status: boolean) => void
    setUserInfo: (user: MyProfile | null) => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
    isAuthModalOpen: false,
    isLoggedIn: false,
    userInfo: null,

    toggleAuthModal: () => {
        set({ isAuthModalOpen: !get().isAuthModalOpen })
    },

    setIsLoggedIn: (isLoggedIn: boolean) => {
        set({ isLoggedIn })
    },

    setUserInfo: (userInfo: MyProfile | null) => {
        set({ userInfo })
    },
})

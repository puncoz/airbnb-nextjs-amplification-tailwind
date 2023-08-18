import { createAuthSlice } from "@/store/slices"
import { AuthSlice } from "@/store/slices/AuthSlice"
import { create } from "zustand"

type Store = AuthSlice

export const useStore = create<Store>()((...a) => ({
    ...createAuthSlice(...a),
}))

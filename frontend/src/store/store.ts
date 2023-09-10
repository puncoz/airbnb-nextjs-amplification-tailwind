import { createAuthSlice, createListingSlice, createProcessSlice, ListingSlice } from "@/store/slices"
import { AuthSlice } from "@/store/slices/AuthSlice"
import { ProcessSlice } from "@/store/slices/ProcessSlice"
import { create } from "zustand"

type Store = AuthSlice & ProcessSlice & ListingSlice

export const useStore = create<Store>()((...a) => ({
    ...createAuthSlice(...a),
    ...createProcessSlice(...a),
    ...createListingSlice(...a),
}))

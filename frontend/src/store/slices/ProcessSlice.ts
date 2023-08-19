import { ReactNode } from "react"
import { StateCreator } from "zustand"

export interface ListingType {
    name: string
    svgPath: ReactNode
}

export interface PlaceType {
    title: string
    subTitle: string
    svg: ReactNode
}

export interface ProcessSlice {
    listingType?: ListingType
    placeType?: PlaceType

    setListingType: (listingType?: ListingType) => void
    setPlaceType: (placeType?: PlaceType) => void
}

export const createProcessSlice: StateCreator<ProcessSlice> = (set, get) => ({
    listingType: undefined,
    placeType: undefined,

    setListingType: (listingType?: ListingType) => set({ listingType }),
    setPlaceType: (placeType?: PlaceType) => set({ placeType }),
})

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

export interface MapData {
    latitude: number
    longitude: number
}

export interface LocationData {
    landmark: string
    neighborhood: string
    postcode: string
    locality: string
    place: string
    district: string
    region: string
    country: string
}

export interface PlaceSpace {
    bathrooms: number
    beds: number
    guests: number
}

export interface ProcessSlice {
    listingType?: ListingType
    placeType?: PlaceType
    mapData?: MapData
    locationData?: LocationData
    placeSpace: PlaceSpace

    setListingType: (listingType?: ListingType) => void
    setPlaceType: (placeType?: PlaceType) => void
    setMapData: (mapData?: MapData) => void
    setLocationData: (locationData?: LocationData) => void
    setPlaceSpace: (placeSpace?: PlaceSpace) => void
}

export const createProcessSlice: StateCreator<ProcessSlice> = (set, get) => ({
    placeSpace: { bathrooms: 1, beds: 2, guests: 4 },

    setListingType: (listingType?: ListingType) => set({ listingType }),
    setPlaceType: (placeType?: PlaceType) => set({ placeType }),
    setMapData: (mapData?: MapData) => set({ mapData }),
    setLocationData: (locationData?: LocationData) => set({ locationData }),
    setPlaceSpace: (placeSpace?: PlaceSpace) => set({ placeSpace }),
})

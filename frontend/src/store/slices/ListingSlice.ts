import { StateCreator } from "zustand"

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

export interface MapData {
    latitude: number
    longitude: number
}

export interface PlaceSpace {
    bathrooms: number
    beds: number
    guests: number
}

export interface Listing {
    createdAt: string
    description: string
    id: string
    listingCreatedBy: {
        id: string
    }
    locationData: LocationData
    locationType: string
    mapData: MapData
    photos: string[]
    placeAmenities: string[]
    placeSpace: PlaceSpace
    placeType: string
    price: number
    title: string
    updatedAt: string
}

export interface ListingSlice {
    listings: Listing[]

    setListings: (listings: Listing[]) => void
}

export const createListingSlice: StateCreator<ListingSlice> = (set, get) => ({
    listings: [],

    setListings: (listings: Listing[]) => set({ listings }),
})

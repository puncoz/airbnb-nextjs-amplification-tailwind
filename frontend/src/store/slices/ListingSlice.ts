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
    isMapview: boolean
    userListings: Listing[]

    setListings: (listings: Listing[]) => void
    toggleMapView: () => void
    setUserListings: (listings: Listing[]) => void
    removeUserListing: (id: string) => void
}

export const createListingSlice: StateCreator<ListingSlice> = (set, get) => ({
    listings: [],
    isMapview: false,
    userListings: [],

    setListings: (listings: Listing[]) => set({ listings }),
    toggleMapView: () => set({ isMapview: !get().isMapview }),
    setUserListings: (userListings: Listing[]) => set({ userListings }),

    removeUserListing: (id: string) => {
        const userListings = get().userListings
        const newListings = userListings.filter(listing => listing.id !== id)
        set({ userListings: newListings })
    },
})

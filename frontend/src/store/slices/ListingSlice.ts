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
        firstName: string
        lastName: string
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

export interface WishList {
    id: string
    createdAt: string
    updatedAt: string
    listing: Listing
}

export interface ListingSlice {
    listings: Listing[]
    isMapview: boolean
    userListings: Listing[]
    currentListing: Listing | null

    wishLists: WishList[]

    setListings: (listings: Listing[]) => void
    toggleMapView: () => void
    setUserListings: (listings: Listing[]) => void
    removeUserListing: (id: string) => void

    setWishLists: (wishLists: WishList[]) => void
    addToWishList: (wishList: WishList) => void

    setCurrentListing: (listing: Listing | null) => void
}

export const createListingSlice: StateCreator<ListingSlice> = (set, get) => ({
    listings: [],
    isMapview: false,
    userListings: [],
    wishLists: [],
    currentListing: null,

    setListings: (listings: Listing[]) => set({ listings }),
    toggleMapView: () => set({ isMapview: !get().isMapview }),
    setUserListings: (userListings: Listing[]) => set({ userListings }),

    removeUserListing: (id: string) => {
        const userListings = get().userListings
        const newListings = userListings.filter(listing => listing.id !== id)
        set({ userListings: newListings })
    },

    setWishLists: (wishLists: WishList[]) => set({ wishLists }),
    addToWishList: (wishList: WishList) => {
        const wishLists = [...get().wishLists]
        wishLists.push(wishList)
        set({ wishLists })
    },

    setCurrentListing: (listing: Listing | null) => set({ currentListing: listing }),
})

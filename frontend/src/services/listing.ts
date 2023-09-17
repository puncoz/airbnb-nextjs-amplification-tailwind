import { createUrl, deleteCall, get, post } from "@/services/http"
import { Listing, ProcessData, WishList } from "@/store/slices"
import { stringify } from "qs"

export interface CreateListingApiData extends ProcessData {
    listingCreatedBy: {
        id: string
    }
}

export const createListingApi = async (data: CreateListingApiData) => {
    const result = await post(createUrl("/api/listings"), {
        ...data,
    }).catch(() => null)

    if (!result || !result.data) {
        return alert("Couldn't create listing")
    }

    return result
}

export const getAllListingApi = async () => {
    const query = stringify({
        orderBy: {
            createdAt: "asc",
        },
    })

    const result = await get(createUrl(`/api/listings?${query}`)).catch(() => null)

    if (!result || !result.data) {
        return alert("Couldn't get listings")
    }

    return result.data
}

export const getUserListingsApi = async (userId: string) => {
    const query = stringify({
        where: {
            listingCreatedBy: {
                id: userId,
            },
        },
    })

    const result = await get(createUrl(`/api/listings?${query}`)).catch(() => null)

    if (!result || !result.data) {
        return alert("Couldn't get listings")
    }

    return result.data
}

export const deleteListingApi = async (id: string) => {
    const result = await deleteCall(createUrl(`/api/listings/${id}`)).catch(() => null)

    if (!result || !result.data) {
        return alert("Couldn't delete listing")
    }

    return result.data
}

export const getUserWishListsApi = async (userId: string): Promise<WishList[]> => {
    const query = stringify({
        where: {
            user: {
                id: userId,
            },
        },
        select: {
            listing: true,
        },
    })

    const result = await get(createUrl(`/api/wishlists?${query}`)).catch(() => null)

    if (!result || !result.data) {
        alert("Couldn't get wishlists")
        return []
    }

    return result.data
}

export const addToWishListsApi = async (id: string, userId: string): Promise<WishList> => {
    const query = {
        listing: { id },
        user: { id: userId },
    }

    const result = await post(createUrl("/api/wishlists"), query).catch(() => null)

    if (!result || !result.data) {
        alert("Couldn't add to wishlist")
        throw new Error("Couldn't add to wishlist")
    }

    return result.data
}

export const removeFromWishListsApi = async (id: string) => {
    const result = await deleteCall(createUrl(`/api/wishlists/${id}`)).catch(() => null)

    if (!result || !result.data) {
        alert("Couldn't remove from wishlist")
    }
}

export const getListDetailsApi = async (listingId: string): Promise<Listing> => {
    const result = await get(createUrl(`/api/listings/${listingId}`)).catch(() => null)

    if (!result || !result.data) {
        alert("Couldn't get listing details")
        throw new Error("Couldn't get listing details")
    }

    return result.data
}

export interface TripRequestData {
    listingId: string
    userId: string
    tripData: {
        startDate: string
        endDate: string
        price: string
    },
}

export const addTrip = async (data: TripRequestData) => {
    const query = {
        listing: {
            id: data.listingId,
        },
        user: {
            id: data.userId,
        },
        tripinfo: data.tripData,
    }

    const result = await post(createUrl("/api/trips"), { ...query })

    if (!result) {
        alert("Failed to create trips.")
    }

    return result
}

export interface TripData {
    id: string
    listing: Listing
    tripinfo: TripRequestData["tripData"]
    createdAt: string
    updatedAt: string
    user: {
        id: string
    }
}

export const getUserTripsApi = async (userId: string): Promise<TripData[]> => {
    const query = stringify({
        where: {
            user: { id: userId },
        },
        select: {
            listing: true,
        },
    })

    const result = await get(createUrl(`/api/trips?${query}`)).catch(() => null)

    if (!result || !result.data) {
        alert("Couldn't get trips")
        throw new Error("Couldn't get trips")
    }

    console.log(result.data, "tripdata")

    return result.data
}

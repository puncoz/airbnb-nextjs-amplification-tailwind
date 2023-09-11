import { createUrl, deleteCall, get, post } from "@/services/http"
import { ProcessData } from "@/store/slices"
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

    console.log(query, "query")

    const result = await get(createUrl(`/api/listings?${query}`)).catch(() => null)

    if (!result || !result.data) {
        return alert("Couldn't get listings")
    }

    return result.data
}

export const getUserListings = async (userId: string) => {
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

import { createUrl, post } from "@/services/http"
import { ProcessData } from "@/store/slices"

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

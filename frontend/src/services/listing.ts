import { createUrl, get, post } from "@/services/http"
import { ProcessData } from "@/store/slices"
import { stringify } from "querystring"

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
        // orderBy: {
        //     createdAt: "asc",
        // },
    } as any, "&", "=", {
        encodeURIComponent: (str: string) => str,
    })

    console.log(query, "query")

    const result = await get(createUrl(`/api/listings?${query}`)).catch(() => null)

    if (!result || !result.data) {
        return alert("Couldn't get listings")
    }

    return result.data
}

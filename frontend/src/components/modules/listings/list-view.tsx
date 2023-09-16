import { ListingCard } from "@/components/modules/listings"
import { useStore } from "@/store"
import React from "react"

const ListView = () => {
    const { listings } = useStore()

    return (
        <div className="grid grid-cols-5 px-20 gap-10 py-10 justify-start items-start overflow-auto">
            {listings.map((listing, index) => (
                <ListingCard key={listing.id} data={listing} isPublicListing/>
            ))}
        </div>
    )
}

export default ListView

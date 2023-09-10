import { ListingCard } from "@/components/modules/listings"
import { useStore } from "@/store"
import React from "react"

const ListView = () => {
    const { listings } = useStore()

    console.log(listings, "listings")

    return (
        <div className="grid grid-cols-5 h-[80vh] px-20 gap-10 py-10 justify-start items-start overflow-auto">
            {listings.map((listing, index) => (
                <ListingCard key={listing.id} data={listing}/>
            ))}

            {listings.map((listing, index) => (
                <ListingCard key={listing.id} data={listing}/>
            ))}

            {listings.map((listing, index) => (
                <ListingCard key={listing.id} data={listing}/>
            ))}
        </div>
    )
}

export default ListView

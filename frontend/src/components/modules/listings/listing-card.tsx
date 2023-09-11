import { deleteListingApi } from "@/services/listing"
import { useStore } from "@/store"
import { Listing } from "@/store/slices"
import Image from "next/image"
import React, { FC } from "react"

type Props = {
    data: Listing
    isMyListing?: boolean
    className?: string
}
const ListingCard: FC<Props> = ({ data, className, isMyListing = false }) => {
    const { removeUserListing } = useStore()

    const deleteListing = async () => {
        const response = await deleteListingApi(data.id)

        if (response) {
            removeUserListing(data.id)
        }
    }

    return (
        <div className={`flex items-center justify-center flex-col gap-2 cursor-pointer w-full
                        ${className || ""}`}>
            <div className="relative min-w-full w-full aspect-square">
                <Image src={data.photos[0]}
                       fill
                       alt="listing"
                       className="rounded-lg object-cover"/>
            </div>

            <div className="w-full">
                <h3>{data.title}</h3>
                <span>${data.price}</span>
            </div>

            {isMyListing && (
                <button className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md
                                    cursor-pointer w-full"
                        onClick={deleteListing}>
                    Delete
                </button>
            )}
        </div>
    )
}

export default ListingCard

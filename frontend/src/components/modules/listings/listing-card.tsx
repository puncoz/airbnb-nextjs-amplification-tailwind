import { Listing } from "@/store/slices"
import Image from "next/image"
import React, { FC } from "react"

type Props = {
    data: Listing
    className?: string
}
const ListingCard: FC<Props> = ({ data, className }) => {
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
        </div>
    )
}

export default ListingCard

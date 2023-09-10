import { Listing } from "@/store/slices"
import Image from "next/image"
import React, { FC } from "react"

type Props = {
    data: Listing
}
const ListingCard: FC<Props> = ({ data }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-1">
            <div className="flex items-center justify-center cursor-pointer w-full">
                <div className="flex flex-col gap-2">
                    <div className="relative w-64 h-56">
                        <Image src={data.photos[0]}
                               fill
                               alt="listing"
                               className="rounded-lg object-cover"/>
                    </div>

                    <div>
                        <h3>{data.title}</h3>
                        <span>${data.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingCard

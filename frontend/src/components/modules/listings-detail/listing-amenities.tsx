import { AmenitiesType } from "@/data"
import { useStore } from "@/store"
import React, { FunctionComponent } from "react"

const ListingAmenities: FunctionComponent = () => {
    const { currentListing } = useStore()

    const getSvgPathByName = (name: string) => {
        for (const amenity of AmenitiesType) {
            for (const data of amenity.data) {
                if (data.name === name) {
                    return data.svgPath
                }
            }
        }

        return null
    }

    return (
        <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">
                Amenities
            </h4>

            <ul className="grid grid-cols-5 gap-2">
                {currentListing?.placeAmenities.map((amenity) => (
                    <li key={amenity}
                        className="border border-gray-300 p-3 rounded-lg flex flex-col justify-start items-start">
                        {getSvgPathByName(amenity)}
                        <span>{amenity}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListingAmenities

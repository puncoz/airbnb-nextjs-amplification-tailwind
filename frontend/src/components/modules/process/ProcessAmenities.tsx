import { AmenitiesType } from "@/data"
import { useStore } from "@/store"
import React from "react"

const ProcessAmenities = () => {
    const { placeAmenities, setPlaceAmenities, removePlaceAmenity } = useStore()

    const handleClick = (name: string) => {
        if (placeAmenities.includes(name)) {
            removePlaceAmenity(name)
        } else {
            setPlaceAmenities([...placeAmenities, name])
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-4xl">
                    Tell guests what your place has to offer
                </h2>
                <p>You can add more amenities after you publish your listing.</p>
                <div className="flex flex-col gap-4 max-h-[65vh] overflow-auto scroll no-scrollbar">
                    {AmenitiesType.map(({ type, data }) => (
                        <div key={type} className="flex flex-col gap-5">
                            {type === "advanced" && (
                                <span className="text-lg font-medium">
                                    Do you have any standout amenities?
                                </span>
                            )}

                            {type === "safety" && (
                                <span className="text-lg font-medium">
                                    Do you have any safety items?
                                </span>
                            )}

                            <div className="grid grid-cols-3 gap-5">
                                {data.map(({ name, svgPath }) => (
                                    <button key={name}
                                            className={`
                                                flex flex-col justify-start font-semibold border border-gray-300
                                                rounded-md p-3 hover:border-gray-950 transition-all duration-300
                                                ${placeAmenities.includes(name) && "border-gray-950"}
                                            `}
                                            onClick={() => handleClick(name)}>
                                        {svgPath}
                                        <span className="text-airbnb-light-black font-medium">
                                            {name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProcessAmenities

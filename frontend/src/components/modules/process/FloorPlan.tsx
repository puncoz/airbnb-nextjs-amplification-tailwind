import { useStore } from "@/store"
import { PlaceSpace } from "@/store/slices"
import React from "react"

const FloorPlan = () => {
    const { placeSpace, setPlaceSpace } = useStore()

    const handleIncrement = (type: keyof PlaceSpace) => {
        setPlaceSpace({ ...placeSpace, [type]: placeSpace[type] + 1 })
    }
    const handleDecrement = (type: keyof PlaceSpace) => {
        setPlaceSpace({ ...placeSpace, [type]: placeSpace[type] - 1 })
    }

    return (
        <div className="flex flex-col justify-center items-center h-full gap-5 w-full">
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-4xl">Share some basics about your place</h2>
                <p className="">You&apos;ll add more details later, such as bed types.</p>
            </div>

            <div className="flex flex-col w-[40%] gap-5">
                {Object.keys(placeSpace).map((place) => (
                    <div key={place} className="flex justify-between w-full text-lg items-center">
                        <span className="capitalize">{place}</span>
                        <div className="flex gap-10 items-center justify-between w-48">
                            <button className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center
                                                justify-center hover:border-gray-500"
                                    onClick={e => handleDecrement(place as keyof PlaceSpace)}>
                                -
                            </button>

                            <button className="">
                                {placeSpace[place as keyof PlaceSpace]}
                            </button>

                            <button className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center
                                                justify-center hover:border-gray-500"
                                    onClick={e => handleIncrement(place as keyof PlaceSpace)}>
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FloorPlan

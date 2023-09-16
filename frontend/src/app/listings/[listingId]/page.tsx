"use client"
import { Footer } from "@/components/layout"
import { ListingAmenities, ListingMap, ListingPhotos, TripScheduler } from "@/components/modules/listings-detail"
import { getListDetailsApi } from "@/services/listing"
import { useStore } from "@/store"
import { PlaceSpace } from "@/store/slices"
import dynamic from "next/dynamic"
import React, { FC, useEffect } from "react"

const Navbar = dynamic(() => import("@/components/layout/navbar"))

type Props = {
    params: {
        listingId: string
    }
}

const ListingDetails: FC<Props> = ({ params: { listingId } }) => {
    const { currentListing, setCurrentListing } = useStore()

    useEffect(() => {
        const getData = async () => {
            const data = await getListDetailsApi(listingId)

            setCurrentListing(data)
        }

        if (listingId) {
            getData().then()
        }
    }, [listingId, setCurrentListing])

    if (!currentListing) {
        return null
    }

    return (
        <div>
            <Navbar/>
            <div className="px-20 pt-10 text-airbnb-light-black grid gap-10"
                 style={{ gridTemplateColumns: "70fr 30fr" }}>
                <div className="flex gap-5 flex-col">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-5xl">
                            {currentListing.title}
                        </h2>

                        <span className="text-lg cursor-pointer underline">
                            {currentListing.locationData.landmark}
                        </span>
                    </div>

                    <ListingPhotos/>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-semibold">
                                {currentListing.locationType} hosted by{" "}
                                {currentListing.listingCreatedBy.firstName}{" "}
                                {currentListing.listingCreatedBy.lastName}
                            </h3>

                            <ul className="flex gap-5">
                                {Object.keys(currentListing.placeSpace).map((type: string) => (
                                    <li key={type}
                                        className="border border-gray-300 p-3 rounded-lg
                                                    flex flex-col justify-start items-start w-32">
                                        <span className="text-2xl font-semibold">
                                            {currentListing.placeSpace[type as keyof PlaceSpace]}
                                        </span>

                                        <span className="capitalize">{type}</span>
                                    </li>
                                ))}
                            </ul>

                            <p>{currentListing.description}</p>

                            <ListingAmenities/>
                            <ListingMap/>
                        </div>
                    </div>
                </div>

                <div>
                    <TripScheduler/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ListingDetails

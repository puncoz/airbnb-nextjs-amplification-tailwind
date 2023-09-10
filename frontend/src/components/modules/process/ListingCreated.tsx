"use client"
import { createListingApi } from "@/services/listing"
import { useStore } from "@/store"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import Confetti from "react-confetti"

const ListingCreated = () => {
    const router = useRouter()
    const { processData, userInfo } = useStore()

    useEffect(() => {
        createListingApi({
            ...processData(),
            listingCreatedBy: {
                id: userInfo?.id || "",
            },
        }).then()
    }, [processData, userInfo?.id])

    return (
        <div className="flex flex-col gap-5 items-center justify-center h-full">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h2 className="font-semibold text-4xl">
                    Congratulations!
                </h2>
                <p>
                    You have successfully created your listing!
                </p>

                <div className="flex gap-5">
                    <button className="bg-[#222222] py-3 mt-5 px-5 text-white text-base font-medium
                                    rounded-md cursor-pointer"
                            onClick={() => router.push("/")}>
                        Visit homepage
                    </button>

                    <button className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium
                                    rounded-md cursor-pointer"
                            onClick={() => router.push("/my-listings")}>
                        View your listings
                    </button>
                </div>

                <Confetti width={window.innerWidth} height={window.innerHeight}/>
            </div>
        </div>
    )
}

export default ListingCreated

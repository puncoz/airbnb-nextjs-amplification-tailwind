"use client"
import { Footer } from "@/components/layout"
import { getUserTripsApi, TripData } from "@/services/listing"
import { useStore } from "@/store"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import React, { FunctionComponent, useEffect, useState } from "react"

const Navbar = dynamic(() => import("@/components/layout/navbar"))

const Page: FunctionComponent = () => {
    const router = useRouter()
    const { userInfo } = useStore()
    const [tripData, setTripData] = useState<TripData[]>([])

    useEffect(() => {
        const getData = async () => {
            if (!userInfo) {
                return
            }

            const data = await getUserTripsApi(userInfo.id)
            setTripData(data)
        }

        if (userInfo) {
            getData().then()
        }
    }, [userInfo])

    const checkDateStatus = (inputDate: string) => {
        const currentDate = new Date()
        const providedDate = new Date(inputDate)

        if (providedDate < currentDate) {
            return "Completed"
        }

        return "Upcoming"
    }

    return (
        <div>
            <Navbar/>

            <div className="h-[82.5vh] flex justify-start items-start">
                <div className="relative overflow-x-auto shadow-lg sm:rounded-lg w-full m-20">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Listing Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Check In Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Check Out Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Trip Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tripData.map((trip, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-gray-100">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer"
                                        onClick={() => router.push(`/listings/${trip.listing.id}`)}>
                                        {trip.listing.title}
                                    </th>

                                    <th className="px-6 py-4">{trip.tripinfo.startDate}</th>
                                    <th className="px-6 py-4">{trip.tripinfo.endDate}</th>
                                    <th className="px-6 py-4">{trip.tripinfo.price}</th>
                                    <th className="px-6 py-4">
                                        <span className={`
                                            text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded
                                            ${checkDateStatus(trip.tripinfo.startDate) === "Completed"
                                            ? "bg-green-500" : "bg-airbnb-theme-color"}
                                        `}>
                                            {checkDateStatus(trip.tripinfo.startDate)}
                                        </span>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Page

"use client"
import { Footer } from "@/components/layout"
import { ListingCard } from "@/components/modules/listings"
import { getUserListings } from "@/services/listing"
import { useStore } from "@/store"
import dynamic from "next/dynamic"
import React, { useEffect } from "react"

const Navbar = dynamic(() => import("@/components/layout/navbar"), { ssr: false })

const MyListingsPage = () => {
    const { userInfo, userListings, setUserListings } = useStore()

    useEffect(() => {
        const getData = async () => {
            if (!userInfo) {
                return
            }

            const data = await getUserListings(userInfo.id)

            setUserListings(data)
        }

        if (userInfo) {
            getData().then()
        }
    }, [userInfo])

    return (
        <div>
            <Navbar/>

            <div className="flex justify-start items-start">
                <div className="grid grid-cols-4 px-10 gap-3 py-10 w-full items-start">
                    {userListings.map((listing) => (
                        <ListingCard key={listing.id} data={listing} isMyListing/>
                    ))}
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default MyListingsPage

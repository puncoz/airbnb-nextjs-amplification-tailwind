"use client"
import { Footer } from "@/components/layout"
import { ListingCard } from "@/components/modules/listings"
import { getUserWishListsApi } from "@/services/listing"
import { useStore } from "@/store"
import dynamic from "next/dynamic"
import React, { useEffect } from "react"

const Navbar = dynamic(() => import("@/components/layout/navbar"), { ssr: false })

const WishLists = () => {
    const { userInfo, wishLists, setWishLists } = useStore()

    useEffect(() => {
        const getData = async () => {
            if (!userInfo) {
                return
            }

            const data = await getUserWishListsApi(userInfo.id)

            setWishLists(data)
        }

        if (userInfo) {
            getData().then()
        }
    }, [setWishLists, userInfo])

    return (
        <div>
            <Navbar/>

            <div className="flex justify-start items-start">
                <div className="grid grid-cols-4 px-10 gap-3 py-10 w-full items-start">
                    {wishLists.map((wishList) => (
                        <ListingCard key={wishList.id} data={wishList.listing} isWishList/>
                    ))}
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default WishLists

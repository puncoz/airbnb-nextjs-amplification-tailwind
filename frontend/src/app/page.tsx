"use client"
import { Footer } from "@/components/layout"
import { AuthModal } from "@/components/modules/auth"
import { ListView, MapView, ViewSwitchBadge } from "@/components/modules/listings"
import { listingTypes } from "@/data"
import { getAllListingApi } from "@/services/listing"
import { useStore } from "@/store"
import dynamic from "next/dynamic"
import React, { useEffect } from "react"

const Navbar = dynamic(() => import("@/components/layout/navbar"), { ssr: false })

const Page = () => {
    const { isAuthModalOpen, isMapview, setListings } = useStore()

    useEffect(() => {
        const getData = async () => {
            const data = await getAllListingApi()

            setListings(data)
        }

        getData().then()
    }, [setListings])

    return (
        <div className="">
            <Navbar/>

            <div className="flex items-center justify-center">
                <div className="w-[90vw] overflow-auto no-scrollbar mt-3 px-5">
                    <ul className="flex gap-5 h-full">
                        {listingTypes.map((listingType) => (
                            <li key={listingType.name}
                                className="flex w-max flex-col items-center justify-between h-16 cursor-pointer">
                                <span className="h-10 w-10 flex items-center justify-center">
                                    {listingType.svgPath}
                                </span>

                                <div className="text-xs font-semibold break-keep" style={{
                                    width: "inherit",
                                }}>
                                    {listingType.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <ViewSwitchBadge/>

            <div className="h-[calc(100vh_-_14rem)]">
                {isMapview ? <MapView/> : <ListView/>}
            </div>

            <Footer/>

            {isAuthModalOpen && <AuthModal/>}
        </div>
    )
}

export default Page

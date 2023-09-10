"use client"
import { Footer, Navbar } from "@/components/layout"
import { AuthModal } from "@/components/modules/auth"
import { ListView } from "@/components/modules/listings"
import { getAllListingApi } from "@/services/listing"
import { useStore } from "@/store"
import React, { useEffect } from "react"

const Page = () => {
    const { isAuthModalOpen, setListings } = useStore()

    useEffect(() => {
        const getData = async () => {
            const data = await getAllListingApi()

            setListings(data)
        }

        getData().then()
    }, [setListings])

    return (
        <div className="h-screen max-h-screen">
            <Navbar/>
            <ListView/>
            <Footer/>

            {isAuthModalOpen && <AuthModal/>}
        </div>
    )
}

export default Page

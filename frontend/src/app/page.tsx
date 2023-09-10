"use client"
import { Footer, Navbar } from "@/components/layout"
import { AuthModal } from "@/components/modules/auth"
import { getAllListingApi } from "@/services/listing"
import { useStore } from "@/store"
import React, { useEffect } from "react"

const Page = () => {
    const { isAuthModalOpen } = useStore()

    useEffect(() => {
        const getData = async () => {
            const data = await  getAllListingApi()
        }
    }, [])

    return (
        <div>
            <Navbar/>
            <Footer/>

            {isAuthModalOpen && <AuthModal/>}
        </div>
    )
}

export default Page

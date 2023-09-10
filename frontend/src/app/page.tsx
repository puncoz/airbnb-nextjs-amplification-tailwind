"use client"
import { Footer, Navbar } from "@/components/layout"
import { AuthModal } from "@/components/modules/auth"
import { useStore } from "@/store"
import React from "react"

const Page = () => {
    const { isAuthModalOpen } = useStore()

    return (
        <div>
            <Navbar/>

            <Footer/>

            {isAuthModalOpen && <AuthModal/>}
        </div>
    )
}

export default Page

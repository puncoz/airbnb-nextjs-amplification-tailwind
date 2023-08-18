import { Footer, Navbar } from "@/components/layout"
import { AuthModal } from "@/components/modules/auth"
import React from "react"

const Page = () => {
    return (
        <div>
            <Navbar/>

            <Footer/>

            <AuthModal/>
        </div>
    )
}

export default Page

import "@/assets/css/globals.css"
import { NavigationEvents } from "@/components/common"
import { Inter } from "next/font/google"
import React, { FC, ReactNode, Suspense } from "react"

const inter = Inter({
    subsets: ["latin"],
    variable: "--inter-font",
})

export const metadata = {
    title: "Airbnb Clone",
}

type Props = {
    children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
    <html lang="en" className={inter.variable}>
    <body className="font-sans text-base antialiased font-normal text-left leading-normal">
    {children}

    <Suspense fallback={null}>
        <NavigationEvents/>
    </Suspense>
    </body>
    </html>
)

export default RootLayout

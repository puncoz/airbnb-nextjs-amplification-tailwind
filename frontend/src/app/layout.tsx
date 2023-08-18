import "@/assets/css/globals.css"
import { Inter } from "next/font/google"
import React, { FC, ReactNode } from "react"

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
    </body>
    </html>
)

export default RootLayout

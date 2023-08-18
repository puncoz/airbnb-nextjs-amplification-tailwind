import React, { FC, ReactNode } from "react"
import "@/assets/css/globals.css"

type Props = {
    children: ReactNode
}


const RootLayout: FC<Props> = ({ children }) => (
    <html lang="en">
    <body>
    {children}
    </body>
    </html>
)

export default RootLayout

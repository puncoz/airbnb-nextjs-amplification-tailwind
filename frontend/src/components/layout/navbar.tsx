"use client"
import userDefaultImage from "@/assets/img/user-placeholder.png"
import { ContextMenu } from "@/components/common"
import { ContextMenuOption } from "@/components/common/context-menu"
import { AirBnbLogo } from "@/components/svg"
import { useUtils } from "@/hooks/useUtils"
import { clearToken } from "@/services/token"
import { useStore } from "@/store"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { FC, useState } from "react"
import { FiGlobe } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar: FC = () => {
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false)

    const { toggleAuthModal, userInfo, isLoggedIn, setUserInfo, setIsLoggedIn } = useStore()
    const { getInitials } = useUtils()

    const router = useRouter()

    const contextMenuOptions: ContextMenuOption[] = [
        {
            name: "Login",
            callback: () => {
                toggleAuthModal()
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Signup",
            callback: () => {
                toggleAuthModal()
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Airbnb your home",
            callback: () => {
                toggleAuthModal()
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Help",
            callback: () => {
                toggleAuthModal()
                setIsContextMenuVisible(false)
            },
        },
    ]

    const authenticatedContextMenuOptions: ContextMenuOption[] = [
        {
            name: "Messages",
            callback: () => {
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Notifications",
            callback: () => {
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Trips",
            callback: () => {
                router.push("/trips")
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Wishlists",
            callback: () => {
                router.push("/wishlists")
                setIsContextMenuVisible(false)
            },
        }, {
            name: "Manage Listings",
            callback: () => {
                router.push("/my-listings")
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Help",
            callback: () => {
                setIsContextMenuVisible(false)
            },
        },
        {
            name: "Logout",
            callback: () => {
                setUserInfo(null)
                setIsLoggedIn(false)
                clearToken()
                localStorage.clear()
                setIsContextMenuVisible(false)
            },
        },
    ]

    return (
        <header className="w-full h-20 flex flex-col justify-center transition-all duration-300
                            border-b border-b-gray-200">
            <div className="flex items-center justify-between px-20">
                <div className="flex-grow basis-0">
                    <div className="w-max cursor-pointer" onClick={() => router.push("/")}>
                        <AirBnbLogo/>
                    </div>
                </div>

                <div className="flex-grow basis-0">
                    <ul className="flex items-center justify-end gap-6 font-medium">
                        {isLoggedIn && (
                            <li className="cursor-pointer"
                                onClick={() => router.push("/new-listing")}>
                                <span>Airbnb your home</span>
                            </li>
                        )}

                        <li className="cursor-pointer">
                            <FiGlobe/>
                        </li>

                        <li className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3
                                        rounded-full hover:shadow-xl transition-all duration-500"
                            onClick={() => setIsContextMenuVisible(true)}>
                            <RxHamburgerMenu/>
                            {userInfo ? (
                                <span className="flex justify-center items-center bg-black text-white
                                                h-7 w-7 text-sm rounded-full">
                                    {getInitials(userInfo.firstName, userInfo.lastName)}
                                </span>
                            ) : (
                                <Image src={userDefaultImage} alt="profile" height={30} width={30}/>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            {isContextMenuVisible && (
                <ContextMenu options={isLoggedIn ? authenticatedContextMenuOptions : contextMenuOptions}
                             coordinates={{ x: window.innerWidth - 250, y: 70 }}
                             contextMenu={isContextMenuVisible}
                             setContextMenu={setIsContextMenuVisible}/>
            )}
        </header>
    )
}

export default Navbar

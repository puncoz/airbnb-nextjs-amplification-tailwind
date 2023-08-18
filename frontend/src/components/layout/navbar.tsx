"use client"
import userDefaultImage from "@/assets/img/user-placeholder.png"
import { ContextMenu } from "@/components/common"
import { ContextMenuOption } from "@/components/common/context-menu"
import { AirBnbLogo } from "@/components/svg"
import Image from "next/image"
import React, { FC, useState } from "react"
import { FiGlobe } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar: FC = () => {
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false)

    const contextMenuOptions: ContextMenuOption[] = [
        {
            name: "Login",
            callback: () => setIsContextMenuVisible(false),
        },
        {
            name: "Signup",
            callback: () => setIsContextMenuVisible(false),
        },
        {
            name: "Airbnb your home",
            callback: () => setIsContextMenuVisible(false),
        },
        {
            name: "Help",
            callback: () => setIsContextMenuVisible(false),
        },
    ]

    return (
        <header className="w-full h-20 flex flex-col justify-center transition-all duration-300
                            border-b border-b-gray-200">
            <div className="flex items-center justify-between px-20">
                <div className="flex-grow basis-0">
                    <div className="w-max cursor-pointer">
                        <AirBnbLogo/>
                    </div>
                </div>

                <div className="flex-grow basis-0">
                    <ul className="flex items-center justify-end gap-6 font-medium">
                        <li className="cursor-pointer">
                            <span>Airbnb your home</span>
                        </li>

                        <li className="cursor-pointer">
                            <FiGlobe/>
                        </li>

                        <li className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3
                                        rounded-full hover:shadow-xl transition-all duration-500"
                            onClick={() => setIsContextMenuVisible(true)}>
                            <RxHamburgerMenu/>
                            <span>
                                <Image src={userDefaultImage} alt="profile" height={30} width={30}/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {isContextMenuVisible && <ContextMenu options={contextMenuOptions}
                                                  coordinates={{ x: window.innerWidth - 250, y: 70 }}
                                                  contextMenu={isContextMenuVisible}
                                                  setContextMenu={setIsContextMenuVisible}/>}
        </header>
    )
}

export default Navbar

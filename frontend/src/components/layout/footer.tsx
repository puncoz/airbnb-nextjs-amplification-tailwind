import Link from "next/link"
import React, { FC } from "react"
import { FiGlobe } from "react-icons/fi"
import { PiCaretUpBold } from "react-icons/pi"

const Footer: FC = () => {
    const links = [
        "privacy", "terms", "sitemap", "company details", "destinations",
    ]

    return (
        <footer className="px-20 border-t border-t-gray-200 w-full h-16 text-sm z-50 bg-white
                        flex justify-between items-center">
            <ul className="flex gap-3 font-normal">
                <li>&copy; {new Date().getFullYear()} AirBnb Clone, Inc.</li>
                {links.map(link => (
                    <li key={link}>
                        <Link href="#" className="capitalize">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <ul className="flex gap-4 font-medium">
                <li className="flex items-center gap-2 cursor-pointer">
                    <FiGlobe/> English (IN)
                </li>

                <li className="cursor-pointer">
                    $ USD
                </li>

                <li className="flex items-center gap-2 cursor-pointer">
                    Support & resources <PiCaretUpBold/>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

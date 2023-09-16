import { useStore } from "@/store"
import Image from "next/image"
import React, { FunctionComponent, useState } from "react"

const ListingPhotos: FunctionComponent = () => {
    const { currentListing } = useStore()

    const [currentPhoto, setCurrentPhoto] = useState(0)

    if (!currentListing) {
        return null
    }

    return (
        <div className="flex gap-5 flex-col">
            <div className="relative w-full h-[60vh]">
                <Image src={currentListing.photos[currentPhoto]} alt="listing photo" fill/>
            </div>

            {currentListing.photos.length > 1 && (
                <ul className="flex gap-5 flex-wrap">
                    {currentListing.photos.map((photo, index) => (
                        <li key={photo} className="relative w-48 h-32 cursor-pointer"
                            onClick={() => setCurrentPhoto(index)}>
                            <Image src={photo}
                                   alt="listing photo"
                                   fill
                                   className={`
                                        ${index === currentPhoto ? "border-2 border-airbnb-theme-color" : ""}
                                   `}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ListingPhotos

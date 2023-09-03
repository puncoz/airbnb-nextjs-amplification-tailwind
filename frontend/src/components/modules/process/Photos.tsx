import { useStore } from "@/store"
import { CldUploadButton } from "next-cloudinary"
import Image from "next/image"
import React from "react"

const Photos = () => {
    const { photos, setPhotos } = useStore()

    const handleUpload = (data) => {
        setPhotos([...photos, data.info.secure_url])
    }

    return (
        <div className="flex gap-5 items-center justify-center flex-col h-full">
            <h2 className="font-semibold text-4xl">
                Add some photos of your house
            </h2>
            <p>
                You&apos;ll need 5 photos to get started. You can add more or make changes later.
            </p>

            <CldUploadButton options={{
                                multiple: true,
                                folder: "__practice/airbnb-clone",
                            }}
                             uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
                             onUpload={handleUpload}>
                <span className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md
                                cursor-pointer">
                    Upload
                </span>
            </CldUploadButton>

            <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto pb-10 no-scrollbar">
                {
                    photos.map((photo) => (
                        <div key={photo} className="relative h-36 w-[200px]">
                            <Image src={photo} alt="Upload" fill/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Photos

import { addToWishListsApi, deleteListingApi, removeFromWishListsApi } from "@/services/listing"
import { useStore } from "@/store"
import { Listing } from "@/store/slices"
import Image from "next/image"
import React, { FC, useCallback } from "react"
import { IoMdHeart } from "react-icons/io"

type Props = {
    data: Listing
    isPublicListing?: boolean
    isMyListing?: boolean
    isWishList?: boolean
    className?: string
}
const ListingCard: FC<Props> = (props) => {
    const {
        data,
        className,
        isPublicListing = false,
        isMyListing = false,
        isWishList = false,
    } = props

    const {
        removeUserListing,
        userInfo,
        isLoggedIn,
        wishLists,
        addToWishList,
        setWishLists,
    } = useStore()

    const deleteListing = async () => {
        const response = await deleteListingApi(data.id)

        if (response) {
            removeUserListing(data.id)
        }
    }

    const addWishList = async () => {
        if (!userInfo) {
            return
        }

        const wishList = await addToWishListsApi(data.id, userInfo.id)
        addToWishList(wishList)
    }

    const deleteWishList = async () => {
        if (!userInfo) {
            return
        }

        const wishList = wishLists.find((item) => item.listing.id === data.id)
        if (!wishList) {
            return
        }
        await removeFromWishListsApi(wishList.id)

        const updatedList = [...wishLists].filter((item) => item.id !== wishList.id)
        setWishLists(updatedList)
    }

    const isInWishList = useCallback(() => {
        return wishLists.map(wishList => wishList.listing.id).includes(data.id)
    }, [data.id, wishLists])

    return (
        <div className={`flex items-center justify-center flex-col gap-2 cursor-pointer w-full
                        ${className || ""}`}>
            <div className="relative min-w-full w-full aspect-square">
                <Image src={data.photos[0]}
                       fill
                       alt="listing"
                       className="rounded-lg object-cover"/>

                {isPublicListing && isLoggedIn && (
                    <div className="absolute z-20 right-2 top-2">
                        <IoMdHeart style={{ stroke: "white", strokeWidth: "40" }}
                                   className={`
                                        text-3xl
                                        ${isInWishList() ? "text-airbnb-theme-color" : "text-black"}
                                   `}
                                   onClick={(e) => {
                                       e.stopPropagation()
                                       isInWishList() ? deleteWishList() : addWishList()
                                   }}/>
                    </div>
                )}
            </div>

            <div className="w-full">
                <h3>{data.title}</h3>
                <span>${data.price}</span>
            </div>

            {isMyListing && (
                <button className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md
                                    cursor-pointer w-full"
                        onClick={deleteListing}>
                    Delete
                </button>
            )}

            {isWishList && (
                <button className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md
                                    cursor-pointer w-full"
                        onClick={deleteWishList}>
                    Remove from wish list
                </button>
            )}
        </div>
    )
}

export default ListingCard

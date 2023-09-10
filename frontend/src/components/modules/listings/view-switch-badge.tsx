import { useStore } from "@/store"
import React, { FC } from "react"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { BsFillMapFill } from "react-icons/bs"

const ViewSwitchBadge: FC = () => {
    const { isMapview, toggleMapView } = useStore()

    return (
        <div className="fixed flex justify-center items-center bottom-20 left-0 right-0 cursor-pointer z-50"
             onClick={() => toggleMapView()}>
            <div className="bg-black p-4 text-white rounded-full">
                <span className="flex items-center gap-2 text-sm">
                    {isMapview ? (
                        <>
                            Show List
                            <AiOutlineUnorderedList/>
                        </>
                    ) : (
                        <>
                            Show Map
                            <BsFillMapFill/>
                        </>
                    )}

                </span>
            </div>
        </div>
    )
}

export default ViewSwitchBadge

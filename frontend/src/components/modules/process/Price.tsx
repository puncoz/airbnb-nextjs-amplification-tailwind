import { useStore } from "@/store"
import React, { ChangeEvent } from "react"

const Price = () => {
    const { price, setPrice } = useStore()

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const updatedPrice = parseInt(e.target.value || "0")

        setPrice(updatedPrice)
    }

    return (
        <div className="flex items-center justify-center h-full text-airbnb-light-black">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-4xl">
                        Now, set your price!
                    </h2>
                    <p>
                        You can change it anytime.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                <textarea className="border border-gray-400 h-40 w-[550px] rounded-lg
                                    active:border-gray-950 p-6 no-scrollbar text-4xl"
                          value={price}
                          onChange={handleOnChange}/>
                </div>
            </div>
        </div>
    )
}

export default Price

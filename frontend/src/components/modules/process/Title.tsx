import { useStore } from "@/store"
import React, { ChangeEvent } from "react"

const Title = () => {
    const { title, setTitle } = useStore()

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 32) {
            setTitle(e.target.value)
        }
    }

    return (
        <div className="flex flex-col gap-5 items-center justify-center h-full text-airbnb-light-black">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-4xl">
                    Now, let&apos;s give your house a title.
                </h2>
                <p>
                    Short titles work best. Have fun with it - you can always change it later.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <textarea className="border border-gray-400 h-40 w-[550px] rounded-lg
                                    active:border-gray-950 p-6 no-scrollbar text-4xl"
                          value={title}
                          onChange={handleOnChange}/>
                <span>{title?.length || 0}/32 characters</span>
            </div>
        </div>
    )
}

export default Title

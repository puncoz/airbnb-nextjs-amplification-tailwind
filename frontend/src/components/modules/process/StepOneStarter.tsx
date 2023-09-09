import React from "react"

const StepOneStarter = () => {
    return (
        <div className="flex items-center h-full mx-20">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 text-airbnb-light-black">
                    <div className="text-2xl">
                        Step 1
                    </div>

                    <h1 className="text-4xl">
                        <strong>Tell us about your place</strong>
                    </h1>

                    <p className="text-xl">
                        In this step, we&apos;ll ask you which type of property you have and if
                        guests will book the entire place or just a room. Then let us know
                        the location and how many guests can stay.
                    </p>
                </div>

                <div>
                    <video src="/videos/home1.mp4" autoPlay loop controls={false}/>
                </div>
            </div>
        </div>
    )
}

export default StepOneStarter

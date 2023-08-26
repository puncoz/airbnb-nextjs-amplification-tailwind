import React from "react"

const StepTwoStarter = () => {
    return (
        <div className="flex items-center h-full mx-20">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 text-airbnb-light-black">
                    <div className="text-2xl">Step 2</div>
                    <h1 className="text-4xl">
                        <strong>Make your place stand out</strong>
                    </h1>
                    <p className="text-xl">
                        In this step, you&apos;ll add some of the amenities your place offers,
                        plus 5 or more photos. Then you&apos;ll create a title and description.
                    </p>
                </div>
                <div className="">
                    <video src="/videos/home2.mp4" autoPlay loop controls={false}></video>
                </div>
            </div>
        </div>
    )
}

export default StepTwoStarter

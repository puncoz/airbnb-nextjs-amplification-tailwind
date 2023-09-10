import React from "react"

const StepThreeStarter = () => {
    return (
        <div className="flex items-center h-full mx-20">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-4 text-airbnb-light-black">
                    <div className="text-2xl">
                        Step 3
                    </div>

                    <h1 className="text-4xl">
                        <strong>Finish up and publish</strong>
                    </h1>

                    <p className="text-xl">
                        Finally, you&apos;ll choose if you&apos;d like to start with an experienced
                        guest, then you&apos;ll set your nightly price. Answer a few quick
                        questions and publish when you&apos;re ready.
                    </p>
                </div>

                <div>
                    <video src="/videos/home3.mp4" autoPlay loop controls={false}/>
                </div>
            </div>
        </div>
    )
}

export default StepThreeStarter

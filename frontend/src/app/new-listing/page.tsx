"use client"
import {
    FloorPlan,
    ListingPlaceType,
    ListingTypeSelector,
    Overview,
    PlaceDetails,
    PlaceLocation,
    ProcessAmenities,
    StepOneStarter,
    StepTwoStarter,
} from "@/components/modules/process"
import { AirBnbLogoShort } from "@/components/svg"
import React, { FC, useState } from "react"

type Props = {}
const NewListingPage: FC<Props> = () => {
    const [step, setStep] = useState(0)

    const getComponent = () => {
        switch (step) {
            case 0:
                return <Overview/>
            case 1:
                return <StepOneStarter/>
            case 2:
                return <ListingTypeSelector/>
            case 3:
                return <ListingPlaceType/>
            case 4:
                return <PlaceLocation/>
            case 5:
                return <PlaceDetails/>
            case 6:
                return <FloorPlan/>
            case 7:
                return <StepTwoStarter/>
            case 8:
                return <ProcessAmenities/>
            default:
                return <Overview/>
        }
    }

    const handlePrevious = () => {
        setStep(step - 1)
    }

    const handleNext = () => {
        setStep(step + 1)
    }

    return (
        <div className="grid grid-rows-new-listing h-screen">
            <header className="flex items-center px-20 justify-between">
                <div className="cursor-pointer">
                    <AirBnbLogoShort/>
                </div>

                {step <= 13 && (
                    <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold
                                        hover:border-gray-700 cursor-pointer">
                        Save & Exit
                    </button>
                )}
            </header>

            {getComponent()}

            <footer className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 
                                ${step > 0 ? "justify-between" : "justify-end"}`}>
                {step >= 1 && (
                    <button className="py-3 mt-5 px-10 text-airbnb-light-black underline hover:bg-gray-200
                                    text-base font-medium rounded-md cursor-pointer"
                            onClick={handlePrevious}>
                        Back
                    </button>
                )}

                {step !== 0 && (
                    <button className="bg-[#222222] py-3 mt-5 px-5 text-white text-base font-medium
                                    rounded-md cursor-pointer"
                            onClick={handleNext}>
                        Next
                    </button>
                )}

                {step === 0 && (
                    <button className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium
                                    rounded-md cursor-pointer"
                            onClick={handleNext}>
                        Get Started
                    </button>
                )}
            </footer>
        </div>
    )
}

export default NewListingPage

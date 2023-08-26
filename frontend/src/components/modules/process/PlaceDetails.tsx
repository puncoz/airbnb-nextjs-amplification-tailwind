import { FormInput, SetValueForListing } from "@/components/common"
import { useStore } from "@/store"
import { LocationData } from "@/store/slices"
import React from "react"

const PlaceDetails = () => {
    const { locationData, setLocationData } = useStore()

    const handleChange = (name: keyof LocationData, value?: string) => {
        setLocationData({ ...locationData, [name]: value } as LocationData)
    }

    console.log(locationData)

    return (
        <div className="flex justify-center items-center h-full flex-col gap-2 w-full">
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-4xl">
                    Confirm your address
                </h2>
                <p>
                    Your address is only shared with guests after they&apos;ve made a reservation.
                </p>
            </div>

            <div className="flex flex-col w-full items-center gap-3 h-full overflow-auto no-scrollbar pb-20 pt-5">
                <div className="flex flex-col gap-2 w-[30%]">
                    <FormInput name="neighborhood"
                               value={locationData?.neighborhood || ""}
                               setValue={handleChange as SetValueForListing}
                               placeholder="House, flat, building, etc."
                               isListing/>
                </div>

                <div className="flex flex-col gap-2 w-[30%]">
                    <FormInput name="place"
                               value={locationData?.place || ""}
                               setValue={handleChange as SetValueForListing}
                               placeholder="Area/village (if applicable)"
                               isListing/>
                    <FormInput name="locality"
                               value={locationData?.locality || ""}
                               setValue={handleChange as SetValueForListing}
                               placeholder="Street Address"
                               isListing/>
                </div>

                <div className="flex flex-col gap-2 w-[30%]">
                    <FormInput name="landmark"
                               value={locationData?.landmark || ""}
                               setValue={handleChange as SetValueForListing}
                               placeholder="Nearby landmark (if applicable)"
                               isListing/>
                    <FormInput name="district"
                               value={locationData?.district || ""}
                               setValue={handleChange as SetValueForListing}
                               placeholder="City / town"
                               isListing/>
                </div>

                <div className="flex flex-col gap-2 w-[30%]">
                    <FormInput name="postcode"
                               value={locationData?.postcode || ""}
                               setValue={handleChange as SetValueForListing}
                               placeholder="Postal Code"
                               isListing/>
                    <FormInput name="country"
                               value={locationData?.country || ""}
                               setValue={handleChange as SetValueForListing}
                               placeholder="Country / province"
                               isListing/>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails

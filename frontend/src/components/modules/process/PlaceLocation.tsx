import { GeocoderControl } from "@/components/common"
import { OnResultEvent } from "@/components/common/mapbox/geocoder-control"
import { useStore } from "@/store"
import { LocationData } from "@/store/slices"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "mapbox-gl/dist/mapbox-gl.css"
import React from "react"
import { Map } from "react-map-gl"

const PlaceLocation = () => {
    const { setMapData, setLocationData } = useStore()

    const extractFromContext = (context: Array<any>, locationData: LocationData) => {
        if (!context) {
            return locationData
        }

        return Object.keys(locationData).reduce((updated, key) => {
            context.forEach(item => {
                if (item?.id?.startsWith(`${key}.`)) {
                    updated[key as keyof typeof locationData] = item?.text
                }
            })

            return updated
        }, locationData)
    }

    const handleOnResult = ({ result }: OnResultEvent) => {
        const [longitude, latitude] = result?.geometry?.coordinates

        const data: LocationData = {
            landmark: result?.text,
            neighborhood: "",
            postcode: "",
            locality: "",
            place: "",
            district: "",
            region: "",
            country: "",
        }

        setMapData({ latitude, longitude })
        setLocationData(extractFromContext(result?.context, data))
    }

    return (
        <div className="flex flex-col items-center h-full gap-5">
            <h2 className="font-semibold text-4xl">
                Which of these best describes your place?
            </h2>

            <p>
                Your address is only shared with guests after they&apos;ve made a reservation.
            </p>

            <div className="h-[400px] w-[700px]">
                <Map initialViewState={{
                    longitude: 85.3240,
                    latitude: 27.7172,
                    zoom: 13,
                }}
                     mapStyle="mapbox://styles/mapbox/streets-v11"
                     mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}>
                    <GeocoderControl mapboxAccessToken={String(process.env.NEXT_PUBLIC_MAPBOX_TOKEN)}
                                     position="top-left"
                                     marker={true}
                                     onResult={handleOnResult}/>
                </Map>
            </div>
        </div>
    )
}

export default PlaceLocation

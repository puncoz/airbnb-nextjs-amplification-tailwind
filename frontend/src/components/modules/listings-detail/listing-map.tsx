import { Pin } from "@/components/common"
import { useStore } from "@/store"
import "mapbox-gl/dist/mapbox-gl.css"
import React, { FunctionComponent, useMemo } from "react"
import { Map, Marker } from "react-map-gl"

const ListingMap: FunctionComponent = () => {
    const { currentListing } = useStore()

    const pins = useMemo(() => {
        if (!currentListing) {
            return null
        }

        return (
            <Marker longitude={currentListing.mapData.longitude}
                    latitude={currentListing.mapData.latitude}>
                <Pin/>
            </Marker>
        )
    }, [currentListing])

    if (!currentListing) {
        return null
    }

    return (
        <div className="h-96 w-full">
            <Map scrollZoom={false}
                 dragPan={false}
                 dragRotate={false}
                 doubleClickZoom={false}
                 initialViewState={{
                     longitude: currentListing.mapData.longitude,
                     latitude: currentListing.mapData.latitude,
                     zoom: 15,
                 }}
                 mapStyle="mapbox://styles/mapbox/streets-v11"
                 mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}>
                {pins}
            </Map>
        </div>
    )
}

export default ListingMap

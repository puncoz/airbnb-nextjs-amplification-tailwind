"use client"
import { Pin } from "@/components/common"
import { ListingCard } from "@/components/modules/listings"
import { useStore } from "@/store"
import { Listing } from "@/store/slices"
import "mapbox-gl/dist/mapbox-gl.css"
import React, { FC, useMemo, useState } from "react"
import { Map, Marker, Popup } from "react-map-gl"

const MapView: FC = () => {
    const { listings } = useStore()

    const [popupInfo, setPopupInfo] = useState<Listing | null>(null)

    const pins = useMemo(() => {
        return listings.map((item, index) => (
            <Marker key={`marker-${item.id}`}
                    longitude={item.mapData.longitude}
                    latitude={item.mapData.latitude}
                    anchor="top"
                    onClick={(e) => {
                        e.originalEvent.stopPropagation()
                        setPopupInfo(item)
                    }}>
                <Pin/>
            </Marker>
        ))
    }, [listings])

    return (
        <div className="h-full max-w-screen pt-2">
            <Map initialViewState={{
                longitude: 85.3240,
                latitude: 27.7172,
                zoom: 7,
            }}
                 mapStyle="mapbox://styles/mapbox/streets-v11"
                 mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}>
                {pins}

                {popupInfo && (
                    <Popup longitude={popupInfo.mapData.longitude}
                           latitude={popupInfo.mapData.latitude}
                           anchor="top"
                           onClose={() => setPopupInfo(null)}>
                        <div className="flex">
                            <ListingCard data={popupInfo} className="!w-64" isPublicListing/>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    )
}

export default MapView

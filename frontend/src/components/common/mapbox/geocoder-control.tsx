import MapboxGeoCoder, { Result, Results } from "@mapbox/mapbox-gl-geocoder"
import React, { ComponentProps, FC, ReactElement, useState } from "react"
import { ControlPosition, Marker, useControl } from "react-map-gl"

export interface OnLoadingEvent {
    query: string[]
}

export interface OnResultsEvent {
    results: Results
}

export interface OnResultEvent {
    result: Result
}

export interface OnErrorEvent {
    error: Error
}

type Props = {
    marker: boolean | ComponentProps<typeof Marker>
    mapboxAccessToken: string
    position: ControlPosition

    onLoading?: (event: OnLoadingEvent) => void
    onResults?: (event: OnResultsEvent) => void
    onResult?: (event: OnResultEvent) => void
    onError?: (event: OnErrorEvent) => void
    onClear?: () => void
}
const GeocoderControl: FC<Props> = (props) => {
    const [marker, setMarker] = useState<ReactElement | null>(null)

    const geocoder = useControl<MapboxGeoCoder>(() => {
        const ctrl = new MapboxGeoCoder({
            ...props,
            marker: false,
            accessToken: props.mapboxAccessToken,
        })

        const emptyHandler = () => {
        }

        ctrl.on("loading", props.onLoading || emptyHandler)
        ctrl.on("results", props.onResults || emptyHandler)
        ctrl.on("result", (event: OnResultEvent) => {
            if (props.onResult) {
                props.onResult(event)
            }

            const { result } = event
            const location = result && (result.center || (result.geometry?.type === "Point" && result.geometry.coordinates))

            if (location && props.marker) {
                setMarker(
                    <Marker {...props.marker} longitude={location[0]} latitude={location[1]}/>,
                )
            } else {
                setMarker(null)
            }
        })

        ctrl.on("error", props.onError || emptyHandler)
        ctrl.on("clear", props.onClear || emptyHandler)

        return ctrl
    }, {
        position: props.position,
    })

    return marker
}

export default GeocoderControl

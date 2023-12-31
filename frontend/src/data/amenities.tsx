import {
    Ac,
    Bbq,
    Beach,
    CarbonMonoxideAlarm,
    FireExt,
    FirePit,
    FirstAid,
    Gym,
    HotTub,
    IndoorFirplace,
    Kitchen,
    Lake,
    OutdoorDining,
    OutdoorShower,
    PaidParking,
    Parking,
    Patio,
    Piano,
    Pool,
    Ski,
    SmokeAlarm,
    Tv,
    WashingMachine,
    Wifi,
    Workplace,
} from "@/components/svg/ameneties"
import { PlaceAmenitiesType } from "@/store/slices"
import React from "react"

export const AmenitiesType: PlaceAmenitiesType[] = [
    {
        type: "basic",
        data: [
            { name: "Wifi", svgPath: <Wifi/> },
            { name: "TV", svgPath: <Tv/> },
            { name: "Kitchen", svgPath: <Kitchen/> },
            { name: "Washing Machine", svgPath: <WashingMachine/> },
            { name: "Free parking on premises", svgPath: <Parking/> },
            { name: "Paid parking on premises", svgPath: <PaidParking/> },
            { name: "Air conditioning", svgPath: <Ac/> },
            { name: "Dedicated workplace", svgPath: <Workplace/> },
        ],
    },
    {
        type: "advanced",
        data: [
            { name: "Pool", svgPath: <Pool/> },
            { name: "Hot tub", svgPath: <HotTub/> },
            { name: "Patio", svgPath: <Patio/> },
            { name: "BBQ grill", svgPath: <Bbq/> },
            { name: "Outdoor dining area", svgPath: <OutdoorDining/> },
            { name: "Fire pit", svgPath: <FirePit/> },
            { name: "Indoor fireplace", svgPath: <IndoorFirplace/> },
            { name: "Piano", svgPath: <Piano/> },
            { name: "Exercise equipment", svgPath: <Gym/> },
            { name: "Lake access", svgPath: <Lake/> },
            { name: "Beach access", svgPath: <Beach/> },
            { name: "Ski-in/Ski-out", svgPath: <Ski/> },
            { name: "Outdoor shower", svgPath: <OutdoorShower/> },
        ],
    },
    {
        type: "safety",
        data: [
            { name: "Smoke alarm", svgPath: <SmokeAlarm/> },
            { name: "First aid kit", svgPath: <FirstAid/> },
            { name: "Fire extinguisher", svgPath: <FireExt/> },
            { name: "Carbon monoxide alarm", svgPath: <CarbonMonoxideAlarm/> },
        ],
    },
]

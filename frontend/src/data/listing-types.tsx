import {
    Barn,
    BedBreakfast,
    Boat,
    Cabin,
    CamperVan,
    CasaParticular,
    Castle,
    Cave,
    Container,
    CycladicHome,
    Dammuso,
    Dome,
    EarthHome,
    Farm,
    Flat,
    GuestHouse,
    Hotel,
    House,
    Houseboat,
    Kezhan,
    Minsu,
    Riad,
    Ryokan,
    ShepherdHut,
    Tent,
    TinyHome,
    Tower,
    TreeHouse,
    Trullo,
    Windmill,
    Yurt,
} from "@/components/svg/listingTypes"
import { ListingType } from "@/store/slices"
import React from "react"

export const listingTypes: ListingType[] = [
    { name: "House", svgPath: <House/> },
    { name: "Flat/apartment", svgPath: <Flat/> },
    { name: "Barn", svgPath: <Barn/> },
    { name: "Bed & breakfast", svgPath: <BedBreakfast/> },
    { name: "Boat", svgPath: <Boat/> },
    { name: "Cabin", svgPath: <Cabin/> },
    { name: "Campervan/motorhouse", svgPath: <CamperVan/> },
    { name: "Casa particular", svgPath: <CasaParticular/> },
    { name: "Castle", svgPath: <Castle/> },
    { name: "Cave", svgPath: <Cave/> },
    { name: "Container", svgPath: <Container/> },
    { name: "Cycladic home", svgPath: <CycladicHome/> },
    { name: "Dammuso", svgPath: <Dammuso/> },
    { name: "Dome", svgPath: <Dome/> },
    { name: "Earth home", svgPath: <EarthHome/> },
    { name: "Farm", svgPath: <Farm/> },
    { name: "Guest house", svgPath: <GuestHouse/> },
    { name: "Hotel", svgPath: <Hotel/> },
    { name: "Houseboat", svgPath: <Houseboat/> },
    { name: "Kezhan", svgPath: <Kezhan/> },
    { name: "Minsu", svgPath: <Minsu/> },
    { name: "Riad", svgPath: <Riad/> },
    { name: "Ryokan", svgPath: <Ryokan/> },
    { name: "Shepherd's hut", svgPath: <ShepherdHut/> },
    { name: "Tent", svgPath: <Tent/> },
    { name: "Tiny home", svgPath: <TinyHome/> },
    { name: "Tower", svgPath: <Tower/> },
    { name: "Tree house", svgPath: <TreeHouse/> },
    { name: "Trullo", svgPath: <Trullo/> },
    { name: "Windmill", svgPath: <Windmill/> },
    { name: "Yurt", svgPath: <Yurt/> },
]

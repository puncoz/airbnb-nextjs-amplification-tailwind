import Overview1 from "@/assets/img/overview/overview1.webp"
import Overview2 from "@/assets/img/overview/overview2.webp"
import Overview3 from "@/assets/img/overview/overview3.webp"
import Image from "next/image"
import React from "react"

const Overview = () => {
    const mainTitle = "It's easy to get started on Airbnb"
    const data = [
        {
            title: "Tell us about your place",
            description: "Share some basic info, such as where it is and how many guests can stay.",
            image: Overview1,
        },
        {
            title: "Make it stand out",
            description: "Add 5 or more photos plus a title and description - we'll help you out.",
            image: Overview2,
        },
        {
            title: "Finish up and publish",
            description: "Choose if you'd like to start with an experienced guest, set a starting price and publish your listing.",
            image: Overview3,
        },
    ]

    return (
        <div className="flex h-full justify-between items-center px-32 gap-20">
            <div>
                <h1 className="text-5xl leading-normal text-airbnb-light-black">
                    {mainTitle}
                </h1>
            </div>

            <ul className="flex flex-col gap-16">
                {data.map(({ title, description, image }, index) => (
                    <li key={title}
                        className="flex items-center justify-start gap-6">
                        <h3 className="text-2xl text-airbnb-light-black pt-5">{index + 1}</h3>

                        <div className="pt-5">
                            <h3 className="text-2xl text-airbnb-light-black">
                                {title}
                            </h3>

                            <p className="text-airbnb-light-gray">
                                {description}
                            </p>
                        </div>

                        <div className="relative w-48 h-32 object-cover">
                            <Image src={image} alt="Overview" fill/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Overview

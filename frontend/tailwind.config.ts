import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "airbnb-gradient": "linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%)",
            },

            colors: {
                "airbnb-theme-color": "#FF385C",
                "airbnb-light-black": "#222222",
                "airbnb-light-gray": "#717171",
            },

            gridTemplateRows: {
                "new-listing": "10vh 80vh 10vh",
            },
        },
    },
    plugins: [],
}
export default config

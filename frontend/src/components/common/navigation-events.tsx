"use client"
import { me } from "@/services/auth"
import { useStore } from "@/store"
import { useEffect } from "react"

const NavigationEvents = () => {
    const { userInfo, setUserInfo, setIsLoggedIn } = useStore()

    useEffect(() => {
        if (!userInfo) {
            const getData = async () => {
                const data = await me()

                setUserInfo(data)
                if (data) {
                    setIsLoggedIn(true)
                }
            }

            getData().then()
        }
    }, [setIsLoggedIn, setUserInfo, userInfo])

    return null
}

export default NavigationEvents

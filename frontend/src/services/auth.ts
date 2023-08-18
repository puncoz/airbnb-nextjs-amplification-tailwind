import { CheckUserResponse, LoginResponse, MyProfile, SignUpRequest, SignUpResponse } from "@/model/Auth"
import { createUrl, get, post } from "@/services/http"
import { isTokenStored, storeToken } from "@/services/token"

export const me = async (): Promise<MyProfile | null> => {
    if (!isTokenStored()) {
        return null
    }

    const url = createUrl("/api/me")

    try {
        const { data } = await get(url)

        return data
    } catch (e) {
        return null
    }
}

export const login = async (username: string, password: string): Promise<MyProfile | null> => {
    const url = createUrl("/api/login")

    try {
        const res: { data: LoginResponse } = await post(url, { username, password })

        storeToken(res.data.accessToken)

        return me()
    } catch (e) {
        return null
    }
}

export const signup = async (signupData: SignUpRequest): Promise<MyProfile | null> => {
    const url = createUrl("/api/signup")

    try {
        const res: { data: SignUpResponse } = await post(url, signupData)

        storeToken(res.data.accessToken)

        return me()
    } catch (e) {
        return null
    }
}

export const checkUser = async (email: string): Promise<Boolean> => {
    const url = createUrl("/api/check-user")

    try {
        const res: { data: CheckUserResponse } = await post(url, { email })

        return !!res.data
    } catch (e) {
        return false
    }
}

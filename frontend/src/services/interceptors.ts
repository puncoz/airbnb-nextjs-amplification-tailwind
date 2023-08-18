import { getToken } from "@/services/token"
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const logOnDev = (message: string, data: object = {}, error = false) => {
    if (process.env.NODE_ENV === "production") {
        return
    }

    if (error) {
        console.error(message, data)
        return
    }

    console.info(message, data)
}

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { method, url } = config

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request:`, config)

    const { origin } = new URL(url as string)
    const allowedOrigins = [apiUrl]
    const accessToken = getToken()

    if (allowedOrigins.includes(origin)) {
        config.headers.setAuthorization(`Bearer ${accessToken}`)
    }

    return config
}

const onError = (error: AxiosError): Promise<AxiosError> => {
    const { message } = error
    const { method, url } = error.config as AxiosRequestConfig

    logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`, {}, true)

    return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    const { method, url } = response.config
    const { status } = response

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`)

    return response
}

export const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onError)
    axiosInstance.interceptors.response.use(onResponse, onError)

    return axiosInstance
}

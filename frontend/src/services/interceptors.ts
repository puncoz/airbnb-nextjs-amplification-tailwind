import { getToken } from "@/services/token"
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"

const apiUrl = "http://localhost:3000"

const logOnDev = (message: string, error = false) => {
    if (process.env.NODE_ENV === "production") {
        return
    }

    if (error) {
        console.error(message)
        return
    }

    console.info(message)
}

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { method, url } = config

    logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request: [${JSON.stringify(config)}]`)

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

    logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`)

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

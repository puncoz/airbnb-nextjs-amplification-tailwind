import { setupInterceptors } from "@/services/interceptors"
import axios from "axios"

const apiUrl = "http://localhost:3000"

const http = setupInterceptors(axios.create())

export const createUrl = (endpoint: string) => new URL(endpoint, apiUrl).href

export const get = http.get
export const post = http.post
export const patch = http.patch

const jwtKey = "accessToken"

export const isTokenStored = () => Boolean(localStorage.getItem(jwtKey))

export const storeToken = (accessToken: string) => localStorage.setItem(jwtKey, accessToken)

export const getToken = (): string | null => localStorage.getItem(jwtKey)

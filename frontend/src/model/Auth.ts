export interface MyProfile {
    id: number
    username: string
    firstName: string
    lastName: string
    roles: string[]
    createdAt: string
    updatedAt: string
}

export type CheckUserResponse = Partial<MyProfile>

export interface SignUpResponse {
    id: string
    username: string
    accessToken: string
    roles: string[]
}

export interface LoginResponse extends SignUpResponse {

}

export interface SignUpRequest {
    username: string
    password: string
    firstName: string
    lastName: string
}

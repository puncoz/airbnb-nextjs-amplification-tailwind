"use client"
import { FormInput } from "@/components/common"
import { useStore } from "@/store"
import React, { FC, useCallback, useState } from "react"
import { IoMdClose } from "react-icons/io"

const AuthModal: FC = () => {
    const { toggleAuthModal } = useStore()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [userFound, setUserFound] = useState(null)

    const verifyEmail = async () => {

    }
    const handleLogin = async () => {

    }
    const handleSignUp = async () => {

    }

    const handleContinue = useCallback(async () => {
        if (userFound === null) {
            await verifyEmail()

            return
        }

        if (userFound) {
            await handleLogin()

            return
        }

        await handleSignUp()
    }, [userFound])

    return (
        <div className="relative z-50">
            <div className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity"/>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left
                                    shadow-xl transition-all
                                    sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white pb-4 pt-5">
                            <div className="border-b border-b-gray-200 flex items-center justify-center relative pb-5">
                                <span className="absolute left-5 cursor-pointer text-lg"
                                      onClick={() => toggleAuthModal()}>
                                    <IoMdClose/>
                                </span>

                                <span>Login or signup</span>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl pb-5">
                                    Welcome to Airbnb Clone
                                </h3>

                                {userFound === null && (
                                    <FormInput name="email"
                                               value={email}
                                               setValue={setEmail}
                                               placeholder="Email"/>
                                )}

                                {userFound === true && (
                                    <FormInput type="password"
                                               name="password"
                                               value={password}
                                               setValue={setPassword}
                                               placeholder="Password"/>
                                )}

                                {userFound === false && (
                                    <div className="flex gap-3 flex-col">
                                        <FormInput name="firstName"
                                                   value={firstName}
                                                   setValue={setFirstName}
                                                   placeholder="First Name"/>

                                        <FormInput name="lastName"
                                                   value={lastName}
                                                   setValue={setLastName}
                                                   placeholder="Last Name"/>

                                        <FormInput type="password"
                                                   name="password"
                                                   value={password}
                                                   setValue={setPassword}
                                                   placeholder="Password"/>
                                    </div>
                                )}

                                <button
                                    className="bg-airbnb-theme-color py-3 mt-5 w-full text-white text-lg
                                                font-medium rounded-md"
                                    onClick={handleContinue}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal

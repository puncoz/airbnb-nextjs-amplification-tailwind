import React, { ChangeEvent, FC, useCallback } from "react"

type InputType = "text" | "password"

export type SetValueForListing = (name: string, value?: string) => void
export type SetValue = (value: string) => void

type Props = {
    name: string
    type?: InputType
    value: string
    setValue: SetValue | SetValueForListing
    placeholder: string
    isListing?: boolean
}
const FormInput: FC<Props> = (props) => {
    const { type = "text", setValue, isListing = false, ...inputProps } = props

    const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const changedValue = e.target.value
        if (isListing) {
            setValue(props.name, changedValue)
            return
        }

        setValue(changedValue)
    }, [isListing, props.name, setValue])

    return (
        <input type={type}
               onChange={handleOnChange}
               className="border border-gray-300 px-2 py-4 rounded-md w-full"
               {...inputProps}/>
    )
}

export default FormInput

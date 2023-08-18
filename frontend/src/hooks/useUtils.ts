export const useUtils = () => {
    const getInitials = (firstName: string, lastName?: string): string => {
        const initial = (word?: string) => word?.split("").shift()?.toUpperCase()

        const first = initial(firstName)
        const last = initial(lastName)

        return `${first}${last}`
    }

    return { getInitials }
}

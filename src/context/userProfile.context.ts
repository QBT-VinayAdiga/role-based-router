import React, { useContext } from 'react'
import { UserProfileContextValue } from './common'



export const UserProfileContext =
    React.createContext<UserProfileContextValue | null>(null)

export const useUserProfileContext = (): UserProfileContextValue => {
    const context = useContext(UserProfileContext)
    if (!context) {
        throw new Error(
            'useUserProfileContext must be used within a UserProfileProvider'
        )
    }
    return context
}

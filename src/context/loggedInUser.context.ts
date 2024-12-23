import React, { useContext } from 'react'
import { UserProfileContextValue } from './common'

export const LoggedInUserProfileContext =
	React.createContext<UserProfileContextValue | null>(null)

export const useLoggedInUserProfileContext = (): UserProfileContextValue => {
	const context = useContext(LoggedInUserProfileContext)
	if (!context) {
		throw new Error(
			'useLoggedInUserProfileContext must be used within a UserProfileProvider'
		)
	}
	return context
}

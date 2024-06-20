import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext(null)
export const useAuthContext = () => {
	return useContext(AuthContext)
}
export const AuthContextProvider = ({ children }) => {
	let localUser = localStorage.getItem('chat-user')
	const [authUser, setAuthUser] = useState(
		localUser ? JSON.parse(localUser) : null
	)
	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	)
}

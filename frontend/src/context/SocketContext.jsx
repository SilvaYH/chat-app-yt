import { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from './AuthContext.jsx'
import { io } from 'socket.io-client'
export const SocketContext = createContext(null)
export const useSocketContext = () => {
	return useContext(SocketContext)
}
export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null)
	const [onlineUsers, setOnlineUsers] = useState([])
	const { authUser } = useAuthContext()
	useEffect(() => {
		console.log(authUser, 'authUser')
		if (authUser) {
			let url = 'https://chat-app-yt-xr8z.onrender.com'
			// let url = 'http://localhost:8000'
			const socket = io(url, {
				query: { userId: authUser._id }
			})
			setSocket(socket)
			socket.on('getOnlineUsers', (users) => {
				setOnlineUsers(users)
			})
		} else {
			if (socket) {
				socket.close()
				setSocket(null)
			}
		}
	}, [authUser])
	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	)
}

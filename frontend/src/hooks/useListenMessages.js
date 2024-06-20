import { useAuthContext } from '@/context/AuthContext.jsx'
import { useSocketContext } from '@/context/SocketContext.jsx'

import { useEffect } from 'react'
import useConversation from '@/zustand/useConversation.js'
import notificationSound from '@/assets/sounds/notification.mp3'
const useListenMessages = () => {
	const { socket } = useSocketContext()
	// const { authUser } = useAuthContext()
	const { messages, setMessages } = useConversation()

	useEffect(() => {
		socket.on('newMessage', (message) => {
			message['needShake'] = true
			let audio = new Audio(notificationSound)
			audio.play()
			console.log(message, 'newMessage')
			setMessages([...messages, message])
		})
		return () => {
			socket?.off('newMessage')
		}
	}, [socket, setMessages, messages])

	return {}
}
export default useListenMessages

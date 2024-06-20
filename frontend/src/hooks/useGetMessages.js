import { useEffect } from 'react'
import useRequest from './useRequest.js'
import useConversation from '@/zustand/useConversation.js'
const useGetMessages = () => {
	const { loading, request } = useRequest()

	const { messages, setMessages, selectedConversation } = useConversation()
	const getMessages = async () => {
		const data = await request({
			url: `/api/message/${selectedConversation?._id}`,
			method: 'GET'
		})
		console.log(data)
		setMessages(data ?? [])
		return data
	}

	useEffect(() => {
		if (selectedConversation?._id) {
			getMessages()
		}
	}, [selectedConversation?._id])
	return {
		messages,
		loading
	}
}

export default useGetMessages

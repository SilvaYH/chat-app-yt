import useRequest from './useRequest.js'
import useConversation from '@/zustand/useConversation.js'
const useSendMessage = () => {
	const { loading, request } = useRequest()
	const { messages, setMessages, selectedConversation } = useConversation()
	const sendMessage = async (message) => {
		const data = await request({
			url: `/api/message/send/${selectedConversation?._id}`,
			method: 'POST',
			body: { message }
		})
		setMessages([...messages, data])
	}

	return {
		sendMessage,
		loading
	}
}

export default useSendMessage

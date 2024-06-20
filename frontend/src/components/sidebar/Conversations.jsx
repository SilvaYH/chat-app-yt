import { useSocketContext } from '@/context/SocketContext.jsx'
import Conversation from './Conversation.jsx'
import useGetConversations from '@/hooks/useGetConversations.js'
import { getRandomEmoji } from '@/utils/emojis.js'
const Conversations = () => {
	const { conversations, loading } = useGetConversations()
	const { onlineUsers } = useSocketContext()
	let sortConversations = conversations
		.map((i) => {
			return {
				...i,
				online: onlineUsers.includes(i._id) ? 1 : 0
			}
		})
		.sort((a, b) => b.online - a.online)
	return (
		<div className="py-2 flex flex-col overflow-auto">
			{loading ? (
				<span></span>
			) : (
				sortConversations.map((conversation, idx) => (
					<Conversation
						key={conversation._id}
						conversation={conversation}
						emoji={getRandomEmoji()}
						lastIdx={idx === conversations.length - 1}
					></Conversation>
				))
			)}
		</div>
	)
}
export default Conversations

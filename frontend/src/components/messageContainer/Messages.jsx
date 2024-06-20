import { useEffect, useRef } from 'react'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx'
import Message from './Message.jsx'
import useGetMessages from '@/hooks/useGetMessages.js'
import useListenMessages from '@/hooks/useListenMessages.js'
import useConversation from '@/zustand/useConversation.js'

const Messages = () => {
	const { loading } = useGetMessages()
	const lastMessageRef = useRef(null)
	const { messages } = useConversation()
	useListenMessages()
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
		}, 10)
	}, [messages])
	return (
		<div className="px-4 flex-1 overflow-auto ">
			{loading && [...Array(2)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && !messages.length && (
				<div className="flex justify-center items-center">
					<span>lets chat now!</span>
				</div>
			)}
			{!loading &&
				!!messages?.length &&
				messages?.map((m) => (
					<div key={m._id} ref={lastMessageRef}>
						<Message message={m} />
					</div>
				))}
		</div>
	)
}
export default Messages

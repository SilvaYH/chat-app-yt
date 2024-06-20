import { useAuthContext } from '@/context/AuthContext.jsx'
import { avatarPath } from '@/utils/avatarPath.js'
import { extractTime } from '@/utils/extractTime.js'
import useConversation from '@/zustand/useConversation.js'

const Message = ({ message }) => {
	const { authUser } = useAuthContext()
	const { selectedConversation } = useConversation()
	const isSender = message.senderId === authUser._id
	let user = isSender ? authUser : selectedConversation

	const chatClass = isSender ? 'chat-end' : 'chat-start'
	const bubbleBgColor = isSender ? 'bg-blue-500 text-black' : 'bg-gray-700'
	const avatar = `${avatarPath(user)}`
	const formatTime = extractTime(message.createdAt)
	const shakeClass = message.needShake ? 'shake' : ''
	return (
		<>
			<div className={`chat ${chatClass} `}>
				<div className="chat-image avatar">
					<div className="w-10 rounded-full">
						<img src={avatar} />
					</div>
				</div>
				<div className="chat-header opacity-50 text-xs flex gap-1 items-center">
					{user.fullname}
				</div>
				<div
					className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}
				>
					{message.message}
				</div>
				<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
					{formatTime}
				</div>
			</div>
		</>
	)
}
export default Message

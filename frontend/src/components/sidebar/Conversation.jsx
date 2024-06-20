import { useSocketContext } from '@/context/SocketContext.jsx'
import { avatarPath } from '@/utils/avatarPath.js'
import useConversation from '@/zustand/useConversation.js'

const Conversation = ({ conversation, emoji, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation()
	const isSelected = selectedConversation?._id === conversation._id
	const selectedClass = isSelected ? 'bg-sky-500' : ''
	const defaultAvatar =
		'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
	const avatar = `${avatarPath(conversation)}`
	const { onlineUsers } = useSocketContext()
	const isOline = onlineUsers.find((id) => id === conversation._id)

	return (
		<>
			<div
				onClick={() => setSelectedConversation(conversation)}
				className={`flex gap-4 items-center hover:bg-sky-500 rounded p-1 py-2 cursor-pointer ${selectedClass}`}
			>
				<div className={`avatar ${isOline ? 'online' : ''}`}>
					<div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src={avatar ?? defaultAvatar} />
					</div>
				</div>
				<div className="flex flex-col flex-1">
					<div className="flex gap-3 justify-between">
						<h1 className="font-bold text-lg text-white">
							{conversation?.fullname ?? 'Jone'}
						</h1>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
		</>
	)
}
export default Conversation

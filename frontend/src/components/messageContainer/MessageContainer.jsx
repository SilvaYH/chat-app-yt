import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
const MessageContainer = () => {
	let noChatSelected = true
	return (
		<div className="md:min-w-[450px] flex flex-col">
			{noChatSelected ? (
				<NoChatSelected></NoChatSelected>
			) : (
				<>
					{' '}
					<div className="bg-slate-500  w-full px-4 py-2 mb-2">
						<span className="label-text">To: </span>
						<span className="text-gray-900 font-bold">John doe</span>
					</div>
					<Messages></Messages>
					<MessageInput></MessageInput>
				</>
			)}
		</div>
	)
}
const NoChatSelected = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-seimibold flex flex-col items-center gap-2">
				<p>Welcome ，John Doe ❉ (*´▽｀)ノノ</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-3xl md:text-6xl text-center"></TiMessages>
			</div>
		</div>
	)
}
export default MessageContainer

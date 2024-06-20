import Sidebar from '@/components/sidebar/Sidebar.jsx'
import MessageContainer from '@/components/messageContainer/MessageContainer.jsx'

export const Home = () => {
	return (
		<div className="flex  sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
			<Sidebar></Sidebar>
			<MessageContainer></MessageContainer>
		</div>
	)
}
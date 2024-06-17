import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
const Sidebar = () => {
	return (
		<div className="border-r border-slate-500 p-4 flex flex-col">
			{/* search part */}
			<SearchInput></SearchInput>
			<div className="devider px-3"></div>
			{/* users part */}
			<Conversations></Conversations>
			<LogoutButton></LogoutButton>
		</div>
	)
}
export default Sidebar

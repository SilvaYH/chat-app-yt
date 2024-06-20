import useGetConversations from '@/hooks/useGetConversations.js'
import useConversation from '@/zustand/useConversation.js'
import { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
const SearchInput = () => {
	const [search, setSearch] = useState('')
	const { setSelectedConversation } = useConversation()
	const { conversations } = useGetConversations()
	const onSubmit = (e) => {
		e.preventDefault()
		console.log(search)
		if (!search) return
		const conversation = conversations.find((c) => {
			return c.fullname.toLowerCase().includes(search.toLowerCase())
		})
		if (conversation) {
			setSelectedConversation(conversation)
		}
	}
	return (
		<form className="flex items-center gap-2" onSubmit={onSubmit}>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search"
				className="input input-bordered rounded-full"
			/>
			<button className="btn btn-circle bg-sky-500 text-white">
				<IoSearchSharp className="w-6 h-6 outline-none"></IoSearchSharp>
			</button>
		</form>
	)
}
export default SearchInput

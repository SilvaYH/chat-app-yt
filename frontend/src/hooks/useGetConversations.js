import { useEffect, useState } from 'react'
import useRequest from './useRequest.js'

const useGetConversations = () => {
	const { loading, request } = useRequest()
	const [conversations, setConversations] = useState([])

	const getConversations = async () => {
		let data = await request({
			url: '/api/users',
			method: 'GET'
		})

		setConversations(data || [])

		return data
	}
	useEffect(() => {
		getConversations()
		return () => {
			setConversations([])
		}
	}, [])
	return {
		conversations,
		setConversations,
		loading
	}
}

export default useGetConversations

// @ts-nocheck
import { useAuthContext } from '@/context/AuthContext.jsx'

import useRequest from './useRequest.js'

const useLogin = () => {
	const { loading, request } = useRequest()
	const { setAuthUser } = useAuthContext()
	const login = async ({ username, password }) => {
		const data = await request({
			url: '/api/auth/login',
			method: 'POST',
			body: {
				username,
				password
			},
			handleInputErrors
		})
		if (data) {
			localStorage.setItem('chat-user', JSON.stringify(data))
			setAuthUser(data)
		}
		return data
	}

	return {
		login,
		loading
	}
}
const handleInputErrors = ({ username, password }) => {
	if (!username || !password) {
		return {
			success: false,
			error: 'All fields are required'
		}
	}

	return {
		success: true,
		error: ''
	}
}
export default useLogin

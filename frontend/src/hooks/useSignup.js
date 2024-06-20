import { useAuthContext } from '@/context/AuthContext.jsx'

import useRequest from './useRequest.js'

const useSignup = () => {
	const { loading, request } = useRequest()
	const { setAuthUser } = useAuthContext()
	const signup = async ({
		fullname,
		username,
		password,
		confirmPassword,
		gender
	}) => {
		const data = await request({
			url: '/api/auth/signup',
			method: 'POST',
			body: {
				fullname,
				username,
				password,
				confirmPassword,
				gender
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
		signup,
		loading
	}
}
const handleInputErrors = ({
	fullname,
	username,
	password,
	confirmPassword,
	gender
}) => {
	if (!fullname || !username || !password || !confirmPassword || !gender) {
		return {
			success: false,
			error: 'All fields are required'
		}
	}
	if (fullname.length < 2) {
		return {
			success: false,
			error: 'Fullname must be at least 2 characters long'
		}
	}
	if (username.length < 3) {
		return {
			success: false,
			error: 'username must be at least 3 characters long'
		}
	}
	if (password.length < 6) {
		return {
			success: false,
			error: 'password must be at least 6 characters long'
		}
	}
	if (password !== confirmPassword) {
		return {
			success: false,
			error: 'password do not matched'
		}
	}
	return {
		success: true,
		error: ''
	}
}
export default useSignup

// @ts-nocheck
import { useAuthContext } from '@/context/AuthContext.jsx'

import useRequest from './useRequest.js'

const useLogout = () => {
	const { loading, request } = useRequest()
	const { setAuthUser } = useAuthContext()
	const logout = async () => {
		await request({
			url: '/api/auth/logout',
			method: 'POST'
		})
		localStorage.removeItem('chat-user')
		setAuthUser(null)
	}

	return {
		logout,
		loading
	}
}

export default useLogout

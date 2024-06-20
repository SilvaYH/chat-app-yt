import { useState } from 'react'
import { toast } from 'react-hot-toast'
const useRequest = () => {
	const [loading, setLoading] = useState(false)
	const request = async ({
		url,
		method = 'POST',
		ContentType = 'application/json',
		body = null,
		handleInputErrors = null
	}) => {
		try {
			if (handleInputErrors && typeof handleInputErrors === 'function') {
				const { success, error } = handleInputErrors(body)
				if (!success) {
					toast.error(error, {})
					return
				}
			}

			setLoading(true)

			let options = {
				method,
				headers: {
					'Content-Type': ContentType
				}
			}
			if (method === 'POST' && body) {
				options['body'] = JSON.stringify(body)
			}
			const res = await fetch(url, options)

			const data = await res.json()
			if (data.error) {
				throw new Error(data.error)
			}
			return data
		} catch (error) {
			toast.error(error.message ?? 'net error')
		} finally {
			setLoading(false)
		}
	}
	return {
		request,
		loading
	}
}
export default useRequest

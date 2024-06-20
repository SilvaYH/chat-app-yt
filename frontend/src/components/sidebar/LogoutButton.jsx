import useLogout from '@/hooks/useLogout.js'
import { BiLogOut } from 'react-icons/bi'
const LogoutButton = () => {
	const { loading, logout } = useLogout()
	return (
		<div className="mt-auto pt-2">
			{loading ? (
				<span className="loading loading-spinner"></span>
			) : (
				<BiLogOut
					className="w-5 h-6 text-white cursor-pointer"
					onClick={logout}
				></BiLogOut>
			)}
		</div>
	)
}
export default LogoutButton

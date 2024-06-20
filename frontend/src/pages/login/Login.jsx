import useLogin from '@/hooks/useLogin.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
	const [inputs, setInputs] = useState({
		username: '',
		password: ''
	})
	const { loading, login } = useLogin()
	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(inputs)
		console.log('Login')
	}
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
				<h1 className="text-3xl font-semibold text-center text-gray-200">
					Login <span className="text-blue-500">ChatUp</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Username
							</span>
						</label>
						<input
							type="text"
							value={inputs.username}
							onChange={(e) =>
								setInputs({ ...inputs, username: e.target.value })
							}
							placeholder="Enter username"
							className="input w-full"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Password
							</span>
						</label>
						<input
							type="text"
							value={inputs.password}
							onChange={(e) =>
								setInputs({ ...inputs, password: e.target.value })
							}
							placeholder="Enter Password"
							className="input w-full"
						/>
					</div>
					<Link
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
						to="/signup"
					>
						Dont`t have a account?
					</Link>
					<button className="btn btn-primary w-full mt-4" disabled={loading}>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

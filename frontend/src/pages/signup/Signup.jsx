import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'
import { GenderCheckbox } from './genderCheckbox.jsx'
export const Signup = () => {
	const [inputs, setInputs] = useState({
		fullname: 'Jone Doe',
		username: 'Jone',
		password: '123456',
		confirmPassword: '123456',
		gender: 'male'
	})
	const { signup, loading } = useSignup()

	const hanldeSubmit = async (e) => {
		e.preventDefault()
		await signup(inputs)
	}
	const onFormChange = (e) => {
		console.log(e.target.name, e.target.value)
		setInputs({ ...inputs, [e.target.name]: e.target.value })
	}
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
				<h1 className="text-3xl font-semibold text-center text-gray-200">
					Sign Up <span className="text-blue-500">ChatUp</span>
				</h1>
				<form onSubmit={hanldeSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Fullname
							</span>
						</label>
						<input
							type="text"
							name="fullname"
							value={inputs.fullname}
							onChange={onFormChange}
							placeholder="Jone Doe"
							className="input w-full input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Username
							</span>
						</label>
						<input
							type="text"
							name="username"
							onChange={onFormChange}
							value={inputs.username}
							placeholder="Jone"
							className="input w-full input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Password
							</span>
						</label>
						<input
							type="password"
							name="password"
							onChange={onFormChange}
							value={inputs.password}
							placeholder="Password"
							className="input w-full input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Confirm Password
							</span>
						</label>
						<input
							type="password"
							name="confirmPassword"
							onChange={onFormChange}
							value={inputs.confirmPassword}
							placeholder="Confirm Password"
							className="input w-full input-bordered h-10"
						/>
					</div>
					<GenderCheckbox
						value={inputs.gender}
						onChange={(gender) => setInputs({ ...inputs, gender })}
					></GenderCheckbox>

					<Link
						className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
						to="/login"
					>
						Already have a account?
					</Link>
					<button disabled={loading} className="btn btn-primary w-full mt-4">
						{loading ? (
							<span className="loading loading-spinner"></span>
						) : (
							'Sign Up'
						)}
					</button>
				</form>
			</div>
		</div>
	)
}

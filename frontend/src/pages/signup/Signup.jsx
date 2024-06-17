import { useState } from 'react'
import { GenderCheckbox } from './genderCheckbox'
export const Signup = () => {
	const [fullname, setFullname] = useState('Jone Doe')
	const [username, setUsername] = useState('Jone')

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
				<h1 className="text-3xl font-semibold text-center text-gray-200">
					Sign Up <span className="text-blue-500">ChatUp</span>
				</h1>
				<form>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Fullname
							</span>
						</label>
						<input
							type="text"
							value={fullname}
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
							value={username}
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
							type="text"
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
							type="text"
							placeholder="Confirm Password"
							className="input w-full input-bordered h-10"
						/>
					</div>
					<GenderCheckbox></GenderCheckbox>

					<a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
						Already have a account?
					</a>
					<button className="btn btn-primary w-full mt-4">Sign Up</button>
				</form>
			</div>
		</div>
	)
}

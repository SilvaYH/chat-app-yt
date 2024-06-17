export const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
				<h1 className="text-3xl font-semibold text-center text-gray-200">
					Login <span className="text-blue-500">ChatUp</span>
				</h1>
				<form>
					<div>
						<label className="label p-2">
							<span className="text-base label-text text-gray-200">
								Username
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="input w-full"
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

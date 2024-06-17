export const GenderCheckbox = () => {
	return (
		<div className="flex">
			<div className="form-control">
				<label className="label cursor-pointer">
					<span className="label-text">Male </span>
					<input
						type="radio"
						name="gender"
						className="radio checked:bg-blue-500"
						checked
					/>
				</label>
			</div>
			<div className="form-control">
				<label className="label cursor-pointer">
					<span className="label-text">Female </span>
					<input
						type="radio"
						name="gender"
						className="radio checked:bg-red-500"
					/>
				</label>
			</div>
		</div>
	)
}

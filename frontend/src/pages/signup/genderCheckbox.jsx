export const GenderCheckbox = ({ value, onChange }) => {
	const selectedClass = (gender) => {
		return value === gender ? 'selected font-bold' : ''
	}
	return (
		<div className="flex">
			<div className="form-control">
				<label
					className={`label cursor-pointer gap-2 ${selectedClass('male')}`}
				>
					<span className="label-text">Male </span>
					<input
						type="radio"
						name="gender"
						checked={value === 'male'}
						onChange={() => onChange('male')}
						className="radio checked:bg-blue-500"
					/>
				</label>
			</div>
			<div className="form-control">
				<label
					className={`label cursor-pointer gap-2 ${selectedClass('female')}`}
				>
					<span className="label-text">Female </span>
					<input
						type="radio"
						name="gender"
						onChange={() => onChange('female')}
						checked={value === 'female'}
						className="radio checked:bg-red-500"
					/>
				</label>
			</div>
		</div>
	)
}

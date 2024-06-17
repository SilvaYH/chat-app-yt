import User from '../models/user.model.js'
export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id
		const filterUsers = await User.find({
			_id: { $ne: loggedInUserId }
		}).select('-password -confirmPassword')

		return res.status(200).json(filterUsers ?? [])
	} catch (error) {
		console.log('Error getUsersForSidebar', error.message)
		return res.status(500).json({ error: 'Ineternal server error' })
	}
}

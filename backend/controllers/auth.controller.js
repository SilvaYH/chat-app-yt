import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import generateTokenAndSetToken from '../utils/generateToken.js'
export const login = async (req, res) => {
	try {
		const { fullname, username, password } = req.body
		console.log(username, password)
		const user = await User.findOne({ username })
		const isPasswordCorrect = await bcrypt.compare(
			password,
			user?.password ?? ''
		)
		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: 'Invalid username or password' })
		}
		await generateTokenAndSetToken(user.id, res)
		return res.status(200).json({
			_id: user._id,
			fullname: user.fullname,
			username: user.username,
			gender: user.gender,
			profilePic: user.profilePic
		})
	} catch (error) {
		return res.status(500).json({ error: 'server error' + error })
	}
}
export const logout = (req, res) => {
	try {
		res.clearCookie('jwt')
		return res.status(200).json({ message: 'logout successfully' })
	} catch (error) {
		return res.status(500).json({ error: 'server error' + error })
	}
}
// https://avatar-placeholder.iran.liara.run/
// https://avatar.iran.liara.run/public/girl
export const signup = async (req, res) => {
	try {
		const { fullname, username, password, confirmPassword, gender } = req.body
		console.log('signup', fullname, username, password, gender, confirmPassword)

		if (password !== confirmPassword) {
			return res.status(400).json({ error: 'Password dont`t match' })
		}

		const user = await User.findOne({ username })
		if (user) {
			return res.status(400).json({ error: 'User already exists' })
		}
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)
		const genderName = gender === 'male' ? 'boy' : 'girl'
		// const profilePicPre = `https://api.dicebear.com/9.x/pixel-art/svg?seed=`
		const profilePicPre = `https://avatar.iran.liara.run/public/`
		const profilePic = `${profilePicPre}${genderName}`

		const newUesr = new User({
			fullname,
			username,
			password: hashedPassword,
			confirmPassword,
			gender,
			profilePic: profilePic
		})

		if (newUesr) {
			let data = {
				_id: newUesr.id,
				fullname: newUesr.fullname,
				username: newUesr.username,
				profilePic: newUesr.profilePic,
				gender: newUesr.gender
			}
			await generateTokenAndSetToken(newUesr.id, res)
			await newUesr.save()
			res.status(200).json(data)
		} else {
			res.status(400).json({ error: 'Invalid user data' })
		}
	} catch (error) {
		return res.status(500).json({ error: 'server error ' + error })
	}
}

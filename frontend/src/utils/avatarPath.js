export const avatarPath = (user) => {
	// let pre = 'https://i.pravatar.cc/150?u='
	// let pre = `${user.profilePic}`
	let genderName = user.gender == 'male' ? 'boy' : 'girl'
	let pre = `https://avatar.iran.liara.run/public/${genderName}?username=${user._id}`
	// let pre = `https://ui-avatars.com/api/?name=${user.username}`
	return pre
}

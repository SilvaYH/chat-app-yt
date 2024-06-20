import Message from '../models/message.model.js'
import Conversation from '../models/conversation.model.js'
import { getReciverCocketId, io } from '../socket/socket.js'
export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body
		const { id: receiverId } = req.params
		const user = req.user
		const senderId = req.user._id
		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] }
		})
		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId]
			})
		}
		const newMessage = await Message.create({
			senderId,
			receiverId,
			message
		})
		if (newMessage) {
			conversation.messages.push(newMessage._id)
		}
		// Socket io functionality will go here
		let receiverSocktedId = getReciverCocketId(receiverId)
		if (receiverSocktedId) {
			io.to(receiverSocktedId).emit('newMessage', newMessage)
		}

		await conversation.save()
		return res.status(200).json(newMessage)
	} catch (error) {
		console.log('Error sendMessage', error.message)
		return res.status(500).json({ error: 'Ineternal server error' })
	}
}
export const getMessage = async (req, res) => {
	try {
		const { id: userToChatId } = req.params
		const senderId = req.user._id
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] }
		}).populate('messages')
		if (!conversation) {
			return res.status(200).json([])
		}

		return res.status(200).json(conversation.messages)
	} catch (error) {
		console.log('Error GetMessage', error.message)
		return res.status(500).json({ error: 'Ineternal server error' })
	}
}

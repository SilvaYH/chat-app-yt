import mongoose from 'mongoose'

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI)
		console.log('Connected to MongoDB2')
	} catch (error) {
		console.log('Error connect:' + error)
	}
}

export default connectToMongoDB

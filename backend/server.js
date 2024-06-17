import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
const app = express()
dotenv.config()

const port = process.env.PORT || 5500

app.listen(port, () => {
	connectToMongoDB()
	console.log(`Example app listening on port ${port}`)
})
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
// routes
app.get('/', (req, res) => {
	res.send('Hello World!')
})
app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

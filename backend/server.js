import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js'
dotenv.config()

const port = process.env.PORT || 5500
const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)
// router end
app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})
server.listen(port, () => {
	connectToMongoDB()
	console.log(`Example app listening on port ${port}`)
})

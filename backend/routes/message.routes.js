import express from 'express'
import protectRoute from '../middleware/protectRoute.js'
const router = express.Router()

import { sendMessage, getMessage } from '../controllers/message.controller.js'
router.post('/send/:id', protectRoute, sendMessage)
router.get('/:id', protectRoute, getMessage)

export default router

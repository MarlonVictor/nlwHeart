import { Router } from 'express'

import { ensureAuthenticated } from './middleware/ensureAuthenticated'

import AuthenticateUserController from './controllers/AuthenticateUserController'
import CreateMessageController from './controllers/CreateMessageController'
import GetLatestMessagesController from './controllers/GetLatestMessagesController'
import ProfileUserController from './controllers/ProfileUserController'


const router = Router()

router.post('/authenticate', AuthenticateUserController.handle)
router.post('/messages', ensureAuthenticated, CreateMessageController.handle)

router.get('/messages/latest', GetLatestMessagesController.handle)
router.get('/profile', ensureAuthenticated, ProfileUserController.handle)

export default router
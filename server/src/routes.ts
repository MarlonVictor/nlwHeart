import { Router } from 'express'

import AuthenticateUserController from './controllers/AuthenticateUserController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import CreateMessageController from './controllers/CreateMessageController'


const router = Router()

router.post('/authenticate', AuthenticateUserController.handle)
router.post('/messages', ensureAuthenticated, CreateMessageController.handle)

export default router
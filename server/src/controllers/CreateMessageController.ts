import { Request, Response } from 'express'
import CreateMessageService from '../services/CreateMessageService'


export default {
    async handle(req: Request, res: Response) {
       const { message } = req.body
       const { user_id } = req

       const result = await CreateMessageService.execute(message, user_id)

       return res.json(result)
    }
}
import { Request, Response } from 'express'

import GetLatestMessagesService from '../services/GetLatestMessagesService'


export default {
    async handle(req: Request, res: Response) {
        const result = await GetLatestMessagesService.execute()

        return res.json(result)
    }
}
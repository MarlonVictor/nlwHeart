import { Request, Response } from 'express'

import ProfileUserService from '../services/ProfileUserService'


export default {
    async handle(req: Request, res: Response) {
        const { user_id } = req

        const result = await ProfileUserService.execute(user_id)

        return res.json(result)
    }
}
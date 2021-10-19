import { Request, Response } from 'express'

import AuthenticateUserService from '../services/AuthenticateUserService'


export default {
    async handle(req: Request, res: Response) {
        const { code } = req.body

        try {
            const result = await AuthenticateUserService.execute(code)
            return res.json(result)

        } catch (err) {
            return res.json(err.message)
        }
    }
}
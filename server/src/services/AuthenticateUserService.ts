import axios from 'axios'
import { sign } from 'jsonwebtoken'

import prismaClient from '../prisma'


interface AccessTokenResponse {
    access_token: string
}

interface UserResponse {
    id: number
    name: string
    login: string
    avatar_url: string
}

export default {
    async execute(code: string) {
        const url = 'https://github.com/login/oauth/access_token'

        const { data: AuthorizationResponse } = await axios.post<AccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                'Accept': 'application/json'
            }
        })

        const response = await axios.get<UserResponse>('https://api.github.com/user', {
            headers: {
                authorization: `Bearer ${AuthorizationResponse.access_token}`
            }
        })

        const { id, name, login, avatar_url } = response.data

        // Procurando se o usuário já foi cadastrado no bd
        let user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }
        })

        if (!user) {
            user = await prismaClient.user.create({
                data: {
                    github_id: id,
                    name,
                    login,
                    avatar_url
                }
            })
        }

        const token = sign(
            {
                user: {
                    id: user.id,
                    name: user.name
                }
            }, process.env.JWT_SECRET, 
            {
                subject: user.id,
                expiresIn: '5d'
            }
        )

        return { token, user }
    }
}
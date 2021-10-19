import axios from 'axios'


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

        return response.data
    }
}
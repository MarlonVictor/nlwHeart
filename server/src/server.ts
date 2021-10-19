import http from 'http'
import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'

import 'dotenv/config'

import router from './routes'


const app = express()
const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
    cors: {
        origin: '*'
    }
})

io.on('connection', socket => console.log(`[${socket.id}] Usuário conectado no socket`))

app.use(cors())
app.use(express.json())
app.use(router)

app.get('/github', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req, res) => {
    const { code } = req.query

    return res.json(code)
})

serverHttp.listen(3333, () => console.log('[3333] Server is running'))

export { io }
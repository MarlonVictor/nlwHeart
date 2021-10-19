import prismaClient from '../prisma'


export default {
    async execute(text: string, user_id: string) {
        const message = await prismaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {
                user: true
            }
        })

        return message
    }
}
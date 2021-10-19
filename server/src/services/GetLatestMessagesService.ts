import prismaClient from '../prisma'


export default {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 9,
            orderBy: {
                create_at: 'desc'
            },
            include: {
                user: true
            }
        })

        return messages
    }
}
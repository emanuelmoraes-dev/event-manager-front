import {MessageModel} from '../data/message'

const BASE_URL = 'http://localhost:8080/message'

export class MessageService {
    async findListAll(): Promise<MessageModel[]> {
        const response = await fetch(BASE_URL + '/all')
        if (response.status >= 400) {
            const text = await response.text()
            throw new Error(`(${response.status}) [GET /message]: ${text}`)
        }
        return response.json()
    }

    async send(message: string): Promise<void> {
        const response = await fetch(BASE_URL + '/send', {method: 'POST', body: message})
        if (response.status >= 400) {
            const text = await response.text()
            throw new Error(`(${response.status}) [POST /send]: ${text}`)
        }
    }
}

export const messageService = new MessageService()

import './Options.less'
import {useDispatch} from 'react-redux'
import {messageUpdate} from '../../../store/message-store'
import {messageService} from '../../../services/message-service'
import {KeyboardEvent, useState} from 'react'

export const Options = () => {
    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState('')

    const search = (): void => {
        messageService.findListAll()
            .then(messages => messages.map(m => m.content))
            .then(messages => dispatch(messageUpdate(messages)))
            .catch(err => console.error(err))
    }

    const send = (): void => {
        messageService.send(newMessage)
            .then(() => search())
            .catch(err => console.error(err))
        setNewMessage('')
    }

    const onKeyDownNewMessage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            send()
        }
    }

    return (
        <div className="options-container">
            <input type="text" value={newMessage}
                onChange={e => setNewMessage(e.target.value.trim())}
                onKeyDown={onKeyDownNewMessage}></input>
            <button className="btn-send" type="button" onClick={send} disabled={!newMessage.trim()}>enviar</button>
            <button className="btn-clear" type="button" onClick={() => dispatch(messageUpdate([]))}>limpar</button>
            <button className="btn-search" type="button" onClick={search}>buscar</button>
        </div>
    )
}

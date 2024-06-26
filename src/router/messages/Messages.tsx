import {useSelector} from 'react-redux'
import {selectMessage} from '../../store/store'
import './Messages.less'
import {Options} from './options/Options'

export const Messages = () => {
    const messages = useSelector(selectMessage).data

    return (
        <div className="messages-container">
            <Options></Options>
            <div className="messages-list">
                <div className="messages-wrapper">
                    {messages.map((message, index) => (
                        <div className="message-content" key={index}>
                            <span className="message-value">{message}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

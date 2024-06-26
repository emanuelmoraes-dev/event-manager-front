import {createBrowserRouter} from 'react-router-dom'
import {Messages} from './messages/Messages'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Messages
    }
])

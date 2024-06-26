import './App.less'
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from '../store/store'
import {router} from '../router/router'

export const App = () => <>
    <Provider store={store}>
        <div className="app-container">
            <div className="app-content">
                <RouterProvider router={router}></RouterProvider>
            </div>
        </div>
    </Provider>
</>

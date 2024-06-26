import {configureStore} from '@reduxjs/toolkit'
import {MessageState, messageStore} from './message-store'

export type StoreState = {message: MessageState}

export const store = configureStore<StoreState>({
    reducer: {
        message: messageStore.reducer
    }
})

export const selectMessage = (state: StoreState) => state.message

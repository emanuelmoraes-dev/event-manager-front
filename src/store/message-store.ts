import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type MessageState = {data: string[]}

export const messageStore = createSlice({
    name: 'message',
    initialState: {data: []} as MessageState,
    reducers: {
        messageUpdate(_state, action: PayloadAction<string[]>): MessageState {
            return {data: action.payload}
        }
    }
})

export const {messageUpdate} = messageStore.actions

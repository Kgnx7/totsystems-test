import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chats: {
            work: [],
            fun: [],
        },
    },
    reducers: {
        send: (state, { payload }) => {
            state.chats[payload.chat] = [
                ...state[payload.title],
                payload.messages,
            ]
        },
        remove: (state, { payload }) => {
            state.chats[payload.chat] = state[payload.chat].filter(
                (message) => message.id !== payload.id
            )
        },
        edit: (state, { payload }) => {
            state.chats[payload.chat] = state[payload.chat].map((message) =>
                message.id === payload.message ? payload.message : message
            )
        },
        update: (state, { payload }) => {
            Object.keys(payload).forEach((chat) => {
                const chatMessages = payload[chat]

                chatMessages.forEach((newMessage) => {
                    if (
                        state.chats[chat].find(
                            (message) => message.id === newMessage.id
                        ) === undefined
                    ) {
                        state.chats[chat] = [...state.chats[chat], newMessage]
                    }
                })
            })
        },
    },
})

export const { send, remove, edit, update } = chatSlice.actions

export const sendMessage = (newMessage) => (dispatch) => {
    dispatch(send(newMessage))
}

export const removeMessage = (messageId) => (dispatch) => {
    dispatch(remove(messageId))
}

export const editMessage = (editedMessage) => (dispatch) => {
    dispatch(edit(editedMessage))
}

export const fetchMessages = () => async (dispatch) => {
    try {
        const response = await axios.get(
            process.env.PUBLIC_URL + '/initialMessages.json'
        )

        dispatch(update(response.data))
    } catch (err) {
        console.log('Не удалось загрузить сообщения')
    }
}

export default chatSlice.reducer

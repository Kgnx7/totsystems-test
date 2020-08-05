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
                ...state.chats[payload.chat],
                payload.message,
            ]
        },
        remove: (state, { payload }) => {
            state.chats[payload.chat] = state.chats[payload.chat].filter(
                (message) => message.id !== payload.id
            )
        },
        edit: (state, { payload }) => {
            state.chats[payload.chat] = state.chats[
                payload.chat
            ].map((message) =>
                message.id === payload.message.id ? payload.message : message
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

export const sendMessage = ({ chat, message }) => (dispatch) => {
    dispatch(send({ chat, message }))
}

export const removeMessage = ({ chat, id }) => (dispatch) => {
    dispatch(remove({ chat, id }))
}

export const editMessage = ({ chat, message }) => (dispatch) => {
    dispatch(edit({ chat, message }))
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

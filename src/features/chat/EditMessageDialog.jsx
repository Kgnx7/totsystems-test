import React, { useState } from 'react'

import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { useDispatch } from 'react-redux'

import { editMessage, removeMessage } from './chatSlice'

export default function EditMessageDialog({ open, onClose, message, chat }) {
    const [messageText, setMessageText] = useState(message.text)
    const dispatch = useDispatch()

    const handleMessageChange = (event) => setMessageText(event.target.value)

    const handleDelete = () => {
        onClose()

        dispatch(removeMessage({ chat, id: message.id }))
    }

    const handleSubmit = () => {
        onClose()

        dispatch(
            editMessage({
                chat,
                message: {
                    ...message,
                    text: messageText,
                },
            })
        )
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle id="form-dialog-title">
                Редактирование сообщения
            </DialogTitle>
            <DialogContent>
                <TextField
                    value={messageText}
                    onChange={handleMessageChange}
                    autoFocus
                    margin="dense"
                    label="Редактирование сообщения"
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDelete} color="primary">
                    Удалить
                </Button>
                <Button onClick={onClose}>Отмена</Button>
                <Button onClick={handleSubmit} color="primary">
                    Изменить
                </Button>
            </DialogActions>
        </Dialog>
    )
}

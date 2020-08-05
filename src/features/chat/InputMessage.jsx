import React, { useState } from 'react'

import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'

export default function InputMessage({ chatTitle, onSubmit, ...rest }) {
    const [message, setMessage] = useState('')
    const currentUser = useSelector((state) => state.auth.user)

    const handleMessageSend = () => {
        if (!message.length) return
        setMessage('')
        onSubmit({
            chat: chatTitle,
            message: {
                id: uuidv4(),
                text: message,
                sender: currentUser.login,
                data: Date.now(),
            },
        })
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <FormControl>
            <InputLabel htmlFor="standard-adornment-password">
                Сообщение...
            </InputLabel>
            <Input
                id="standard-adornment-password"
                type="text"
                value={message}
                onChange={handleMessageChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            disapled={!message.length}
                            onClick={handleMessageSend}
                        >
                            <SendIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

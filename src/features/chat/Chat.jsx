import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import { fetchMessages } from '../../features/chat/chatSlice'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Message from './Message'

const useStyles = makeStyles((theme) => ({
    root: {
        // border: '1px solid coral',
    },
    paper: {
        height: '70vh',
        padding: theme.spacing(1),
        overflowY: 'scroll',
    },
}))

export default function Chat() {
    const { title } = useParams()
    const classes = useStyles()
    const dispatch = useDispatch()
    const messages = useSelector((state) => state.chat.chats[title])

    useEffect(() => {
        dispatch(fetchMessages())
    }, [])

    return (
        <>
            <Header />
            <Main>
                <Container maxWidth="md" className={classes.root}>
                    <Paper className={classes.paper}>
                        {messages &&
                            messages.map((message) => (
                                <Message message={message} />
                            ))}
                    </Paper>
                </Container>
            </Main>
        </>
    )
}

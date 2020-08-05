import React from 'react'
import { useSelector } from 'react-redux'
import lime from '@material-ui/core/colors/lime'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'

const useStyles = makeStyles((theme) => ({
    message: {
        color: theme.palette.text.primary,
        backgroundColor: lime['100'],
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginLeft: (props) => (props.currentUser ? 'auto' : 0),
        maxWidth: '50%',
        overflowWrap: 'break-word',
        borderRadius: theme.shape.borderRadius,
    },
    meta: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
}))

export default function Message({ message }) {
    const currentUser = useSelector((state) => state.auth.user)
    const classes = useStyles({
        currentUser: currentUser.login === message.sender,
    })
    return (
        <div className={classes.message}>
            <Typography variant="h6" component="span" color="textPrimary">
                {message.text}
            </Typography>
            <div className={classes.meta}>
                <Typography
                    variant="body2"
                    component="span"
                    color="textSecondary"
                >
                    {message.sender}
                </Typography>
                <Typography
                    variant="body2"
                    component="span"
                    color="textSecondary"
                >
                    {dayjs(message.date).format('DD/MM/YYYY HH:mm')}
                </Typography>
            </div>
        </div>
    )
}

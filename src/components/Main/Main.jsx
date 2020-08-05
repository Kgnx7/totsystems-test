import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { DRAWER_WIDTH, BAR_HEIGHT } from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        marginTop: BAR_HEIGHT,
        paddingTop: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            marginLeft: DRAWER_WIDTH,
        },
    },
}))

export default function Main({ children }) {
    const classes = useStyles()
    return <main className={classes.main}>{children}</main>
}

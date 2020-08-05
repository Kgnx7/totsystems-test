import React from 'react'
import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import Main from '../Main'
import Header from '../Header'

export default function Profile() {
    const currentUser = useSelector((state) => state.auth.user)

    return (
        <>
            <Header />
            <Main>
                <Typography
                    variant="h4"
                    align="center"
                    style={{ display: 'block' }}
                    gutterBottom
                >
                    Твой профиль 👦🏻👧🏽😺
                </Typography>
                <Typography variant="body2">Логин: </Typography>
                <Typography variant="body1">
                    <strong>{currentUser.login}</strong>
                </Typography>
            </Main>
        </>
    )
}

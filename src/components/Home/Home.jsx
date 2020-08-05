import React from 'react'
import Header from '../Header'
import Main from '../Main'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Typography>
                        Главная страница корпоративной сети Planktonics
                    </Typography>
                </Container>
            </Main>
        </>
    )
}

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home'
import PrivateRoute from './PrivateRoute'
import Login from '../../features/login'
import Profile from '../Profile'
import Chat from '../../features/chat'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
                <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/chat/:title">
                <Chat />
            </PrivateRoute>
        </Switch>
    )
}

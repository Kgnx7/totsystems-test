import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import App from './components/App'
import * as serviceWorker from './serviceWorker'
import store from './app/store'
import theme from './utils/customTheme'

import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Router basename="/">
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

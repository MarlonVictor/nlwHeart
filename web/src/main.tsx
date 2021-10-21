import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from 'react-hot-toast';

import { AuthContextProvider } from './contexts/AuthContext'

import App from './App'

import './styles/global.css'


ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />

            <Toaster 
                toastOptions={{
                    style: {
                        background: '#1B873F', 
                        color: '#FFF'
                    },
                }}
            />
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

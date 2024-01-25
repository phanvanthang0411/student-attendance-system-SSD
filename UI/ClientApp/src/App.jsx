import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import React from 'react'
import Router from './base/router'
function App() {
    return (
        <React.Fragment>
            <Router />
        </React.Fragment>
    )
}

export default App

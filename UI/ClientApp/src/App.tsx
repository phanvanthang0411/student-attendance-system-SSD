import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import route from './routes/root'
import React from 'react'
function App() {
    return (
        <React.Fragment>
            <RouterProvider router={route} />
        </React.Fragment>
    )
}

export default App

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import * as React from 'react'
import '../scss/login.scss'
import MainForm from './mainForm'
import BackgroundLogin from './backGroundLogin'

const defaultTheme = createTheme()

export function BaseForm({ className }) {
    return (
        <div className={className + '-container '}>
            <ThemeProvider theme={defaultTheme}>
                <Paper elevation={6}>
                    <BackgroundLogin path='./src/assets/images/background_login_2.jpg' />
                    <Container component='main' maxWidth='md'>
                        <CssBaseline />
                        <MainForm />
                    </Container>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

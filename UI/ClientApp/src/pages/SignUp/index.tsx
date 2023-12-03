import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import * as React from 'react'
import Copyright from '~/Components/commonLogin/FooterLogin'
import FormSignUp from '~/Components/commonLogin/FormSignUp'
import BackgroundLogin from '~/Components/commonLogin/BackgroundLogin'
import './SignUp.scss'

const defaultTheme = createTheme()

export default function SignUp() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    }

    return (
        <div className='-signup-container-page'>
            <ThemeProvider theme={defaultTheme}>
                <Paper elevation={6}>
                    <BackgroundLogin />
                    <Container component='main' maxWidth='md'>
                        <CssBaseline />
                        <FormSignUp handleSubmit={handleSubmit}></FormSignUp>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

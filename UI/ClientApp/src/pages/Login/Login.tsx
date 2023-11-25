import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import * as React from 'react'
import Copyright from '~/Components/commonLogin/FooterLogin'
import FormLogin from '~/Components/commonLogin/FormLogin'
import './Login.scss'

const defaultTheme = createTheme()

export default function LoginPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    }

    return (
        <div className='-login-container-page'>
            <ThemeProvider theme={defaultTheme}>
                <Paper elevation={6}>
                    <Card>
                        <CardMedia
                            component='img'
                            alt='HUST'
                            height='140'
                            image={'./src/assets/images/background_login_2.jpg'}
                        />
                    </Card>
                    <Container component='main' maxWidth='md'>
                        <CssBaseline />
                        <FormLogin handleSubmit={handleSubmit}></FormLogin>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

import * as React from 'react'
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Container,
    Card,
    Paper,
    Grid,
    Button,
    Radio,
    FormControlLabel,
    RadioGroup,
    FormControl,
    FormLabel,
    TextField,
    Box,
    Typography,
    CardMedia
} from '@mui/material'
import { routerPath } from '../../base/routerPaths'
import { connect } from 'react-redux'
import { LoginAction } from '../../redux/action'
import './index.scss'
import Utils from '../../util'

const mapStateToProps = ({ login }) => {
    return {
        role: login.role,
        email: login.email
    }
}

const mapDispatchToProps = {
    changRole: LoginAction.changRole,
    changeEmail: LoginAction.changeEmail
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { password: '', isFocusEmail: false, isForcusPassword: false }
        localStorage.clear()
    }

    handleRoleChange = (e) => {
        this.props.changRole(e.target.value)
        localStorage.setItem('role', e.target.value)
    }

    handleChangeEmail = (e) => {
        this.props.changeEmail(e.target.value)
        localStorage.setItem('email', e.target.value)
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    checkEmailValidate = (email) => {
        return email != '' && Utils.emailPattern.test(email)
    }

    defaultTheme = createTheme()

    handleSubmit = () => {
        localStorage.setItem('username', 'Kevin Phan')
    }

    render() {
        return (
            <div className={'login-container'}>
                <ThemeProvider theme={this.defaultTheme}>
                    <Paper elevation={6}>
                        <Card>
                            <CardMedia component='img' alt='HUST' image='./src/assets/images/background_login_2.jpg' />
                        </Card>
                        <Container component='main' maxWidth='md'>
                            <CssBaseline />
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography component='h1' variant='h5'>
                                        Đăng nhập
                                    </Typography>
                                    <Box component='form' noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            error={
                                                this.state.isFocusEmail && !this.checkEmailValidate(this.props.email)
                                            }
                                            margin='normal'
                                            required
                                            fullWidth
                                            id='email'
                                            label='Email'
                                            name='email'
                                            autoComplete='email'
                                            size='small'
                                            value={this.props.email}
                                            onChange={this.handleChangeEmail}
                                            onFocus={() => this.setState({ isFocusEmail: true })}
                                        />
                                        <TextField
                                            error={this.state.isForcusPassword && this.state.password == ''}
                                            margin='normal'
                                            required
                                            fullWidth
                                            name='password'
                                            label='Mật khẩu'
                                            type='password'
                                            id='password'
                                            autoComplete='current-password'
                                            size='small'
                                            onChange={this.handleChangePassword}
                                            onFocus={() => this.setState({ isForcusPassword: true })}
                                        />
                                        <FormControl component='fieldset' sx={{ mt: 3, mb: 2 }}>
                                            <FormLabel component='legend'>
                                                {'Vui lòng chọn vai trò đăng nhập:'}
                                            </FormLabel>
                                            <RadioGroup
                                                row
                                                aria-label='role'
                                                name='role'
                                                value={this.props.role}
                                                onChange={this.handleRoleChange}
                                            >
                                                <FormControlLabel
                                                    value='candidate'
                                                    control={<Radio />}
                                                    label='Thí sinh'
                                                />
                                                <FormControlLabel
                                                    value='supervisor'
                                                    control={<Radio />}
                                                    label='Giám thị'
                                                />
                                                <FormControlLabel value='admin' control={<Radio />} label='Quản lý' />
                                            </RadioGroup>
                                        </FormControl>
                                        <Button
                                            disabled={
                                                !this.checkEmailValidate(this.props.email) ||
                                                this.state.password == '' ||
                                                this.props.role == ''
                                            }
                                            type='submit'
                                            fullWidth
                                            variant='contained'
                                            sx={{ mt: 1, mb: 1, height: '40px', backgroundColor: '#0c5776' }}
                                            onClick={this.handleSubmit}
                                            href={routerPath.Home}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Container>
                    </Paper>
                </ThemeProvider>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

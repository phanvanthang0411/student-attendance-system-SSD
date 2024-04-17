import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    createTheme
} from '@mui/material'
import * as React from 'react'
import { connect } from 'react-redux'
import { routerPath } from '../../base/routerPaths'
import { LoginAction } from '../../redux/action'
import Utils from '../../util'
import './index.scss'

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

const TextButton = {
    Login: 'Đăng nhập',
    SignUp: 'Đăng ký'
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
            <div className={'home-container'}>
                <div className='home-container-header'>
                    <div id='btn-login' className='home-container-header-button login'>
                        {TextButton.Login}
                    </div>
                    <div id='btn-signup' className='home-container-header-button sign'>
                        {TextButton.SignUp}
                    </div>
                </div>
                <div className='home-container-content'>
                    <Box component='form' noValidate>
                        <TextField
                            error={this.state.isFocusEmail && !this.checkEmailValidate(this.props.email)}
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email'
                            name='email'
                            autoComplete='email'
                            size='small'
                            variant='standard'
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
                            variant='standard'
                            autoComplete='current-password'
                            size='small'
                            onChange={this.handleChangePassword}
                            onFocus={() => this.setState({ isForcusPassword: true })}
                        />
                        <FormControl component='fieldset' sx={{ mt: 3, mb: 2 }}>
                            <FormLabel component='legend' color='success'>{'Vui lòng chọn vai trò đăng nhập:'}</FormLabel>
                            <RadioGroup
                                row
                                aria-label='role'
                                name='role'
                                value={this.props.role}
                                onChange={this.handleRoleChange}
                            >
                                <FormControlLabel value='candidate' control={<Radio />} label='Thí sinh' />
                                <FormControlLabel value='supervisor' control={<Radio />} label='Giám thị' />
                                <FormControlLabel value='admin' control={<Radio />} label='Quản lý' />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 1, height: '50px', backgroundColor: '#0c5776' }}
                            onClick={this.handleSubmit}
                            href={routerPath.Home}
                        >
                            {TextButton.Login}
                        </Button>
                    </Box>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

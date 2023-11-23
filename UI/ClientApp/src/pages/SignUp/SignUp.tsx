import React from 'react'
import HeaderLogin from '~/Components/commonLogin/HeaderLogin'
import FormLogin from '~/Components/commonLogin/FormLogin'
import './SignUp.scss'
const SignUpPage = () => {
    return (
        <React.Fragment>
            <HeaderLogin
                heading='Đăng ký để tạo tài khoản'
                paragraph='Bạn đã có tài khoản?'
                linkName='Đăng nhập'
                linkUrl='/login'
            />
            <FormLogin />
        </React.Fragment>
    )
}
export default SignUpPage

import HeaderLogin from '~/Components/commonLogin/HeaderLogin'
import FormLogin from '~/Components/commonLogin/FormLogin'
import './Login.scss'
const LoginPage = () => {
    return (
        <div className='login-container'>
            <HeaderLogin
                heading='Đăng nhập vào tài khoản của bạn'
                paragraph='Bạn chưa có tài khoản?'
                linkName='Đăng ký'
                linkUrl='/signup'
            />
            <FormLogin />
        </div>
    )
}
export default LoginPage

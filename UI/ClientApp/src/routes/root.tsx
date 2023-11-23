import { createBrowserRouter } from 'react-router-dom'
import { RoutePath } from './utils'
import HomePage from '~/pages/Home/Home'
import SignUpPage from '~/pages/SignUp/SignUp'
import LoginPage from '~/pages/Login/Login'
const route = createBrowserRouter([
    {
        path: RoutePath.LoginPage,
        element: <LoginPage />
    },
    {
        path: RoutePath.HomePage,
        element: <HomePage />
    },
    {
        path: RoutePath.SignupPage,
        element: <SignUpPage />
    }
])
export default route

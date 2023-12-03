import { createBrowserRouter } from 'react-router-dom'
import { RoutePath } from './utils'
import HomePage from '~/pages/Home'
import SignUpPage from '~/pages/SignUp'
import LoginPage from '~/pages/Login'
import SchedulePage from '~/pages/Schedule'
import DashboardPage from '~/pages/Dashboard'
import SettingPage from '~/pages/Setting'
import { Suspense } from 'react'

const route = createBrowserRouter([
    {
        path: RoutePath.LoginPage,
        element: (
            <Suspense>
                <LoginPage />,
            </Suspense>
        )
    },
    {
        path: RoutePath.HomePage,
        element: <HomePage />
    },
    {
        path: RoutePath.SignupPage,
        element: <SignUpPage />
    },
    {
        path: RoutePath.SchedulePage,
        element: <SchedulePage />,
        children: [
            {
                path: RoutePath.ScheduleTestPage,
                element: <HomePage />
            }
        ]
    },
    {
        path: RoutePath.Dashboard,
        element: <DashboardPage />
    },
    {
        path: RoutePath.Setting,
        element: <SettingPage />
    }
])
export default route

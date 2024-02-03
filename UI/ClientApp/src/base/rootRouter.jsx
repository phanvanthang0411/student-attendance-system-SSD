import { Home, CalendarMonthSharp, BorderColorSharp, ManageAccounts } from '@mui/icons-material'
import Layout from './layout'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { routerPath } from './routerPaths'
import LoginPage from '../structure/login'

const getAdminNavs = () => [
    {
        id: 'leftnav-home',
        text: 'Trang chủ',
        icon: <Home />,
        url: routerPath.Home,
        exact: true
    },
    {
        id: 'leftnav-calendar',
        text: 'Lịch thi',
        icon: <CalendarMonthSharp />,
        url: routerPath.Calendar,
        exact: true
    },
    {
        id: 'leftnav-usermanagement',
        text: 'Quản lý tài khoản',
        icon: <ManageAccounts />,
        url: routerPath.UserManagement,
        exact: true
    }
]

const getCandidateNavs = () => [
    {
        id: 'leftnav-home',
        text: 'Trang chủ',
        icon: <Home />,
        url: routerPath.Home,
        exact: true
    },
    {
        id: 'leftnav-calendar',
        text: 'Lịch thi',
        icon: <CalendarMonthSharp />,
        url: routerPath.Calendar,
        exact: true
    }
]

const getSupervisorNavs = () => [
    {
        id: 'leftnav-home',
        text: 'Trang chủ',
        icon: <Home />,
        url: routerPath.Home,
        exact: true
    },
    {
        id: 'leftnav-calendar',
        text: 'Lịch thi',
        icon: <CalendarMonthSharp />,
        url: routerPath.Calendar,
        exact: true
    },
    {
        id: 'leftnav-attendance',
        text: 'Điểm danh',
        icon: <BorderColorSharp />,
        url: routerPath.Attendance
    }
]

const getDefaultNavs = () => []

export default function RootRouter({ routers }) {
    let navigations = []
    switch (localStorage.getItem('role')) {
        case 'admin':
            navigations = getAdminNavs()
            break
        case 'candidate':
            navigations = getCandidateNavs()
            break
        case 'supervisor':
            navigations = getSupervisorNavs()
            break
        default:
            navigations = getDefaultNavs()
            break
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routerPath.Login} element={<LoginPage />} />
                <Route element={<Layout navigations={navigations} />}>
                    {routers.map((item, index) => (
                        <Route key={index} path={item.path} element={item.component} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

import RootRouter from './rootRouter'
import { routerPath } from './routerPaths'
import HomeRouter from '../pages/homeContent/router'
import AttendanceRouter from '../pages/attendance/router'
import CalendarRouter from '../pages/calendar/router'
import UserManagement from '../pages/usermanagement/router'
import LoginPage from '../structure/login'
import DetailAttendance from '../pages/attendance/detail'

export const adminRouters = [
    {
        path: routerPath.Home,
        component: <HomeRouter />
    },
    {
        path: routerPath.Calendar,
        component: <CalendarRouter />
    },
    {
        path: routerPath.UserManagement,
        component: <UserManagement />
    }
]

export const candidateRouters = [
    {
        path: routerPath.Home,
        component: <HomeRouter />
    },
    {
        path: routerPath.Calendar,
        component: <CalendarRouter />
    }
]

export const supervisorRouters = [
    {
        path: routerPath.Home,
        component: <HomeRouter />
    },
    {
        path: routerPath.Calendar,
        component: <CalendarRouter />
    },
    {
        path: routerPath.Attendance,
        component: <AttendanceRouter />
    },
    {
        path: routerPath.DetailAttendance,
        component: <DetailAttendance />
    }
]

export const defaultRouters = [
    {
        path: routerPath.Login,
        component: <LoginPage />
    }
]

export default function Router() {
    let routers = ''
    switch (localStorage.getItem('role')) {
        case 'admin':
            routers = adminRouters
            break
        case 'candidate':
            routers = candidateRouters
            break
        case 'supervisor':
            routers = supervisorRouters
            break
        default:
            routers = defaultRouters
            break
    }
    return <RootRouter routers={routers} />
}

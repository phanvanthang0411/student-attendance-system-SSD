import RootRouter from './rootRouter'
import { routerPath } from './routerPaths'
import HomeRouter from '../pages/homeContent/router'
import DashBoardRouter from '../pages/dashboard/router'
import AttendanceRouter from '../pages/attendance/router'
import CalendarRouter from '../pages/calendar/router'
import SettingRouter from '../pages/setting/router'

export const routers = [
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
        path: routerPath.Dashboard,
        component: <DashBoardRouter />
    },

    {
        path: routerPath.Setting,
        component: <SettingRouter />
    }
]

export default function Router() {
    return <RootRouter routers={routers} />
}

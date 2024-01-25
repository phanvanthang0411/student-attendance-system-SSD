import RootRouter from './rootRouter'
import HomePage from '~/pages/Home'
import { routerPath } from './routerPaths'

export const routers = [
    {
        path: routerPath.Home,
        component: <HomePage />
    },
    {
        path: routerPath.Calendar
    },
    {
        path: routerPath.Attendance
    },
    {
        path: routerPath.Dashboard
    },

    {
        path: routerPath.Setting
    }
]

export default function Router() {
    return <RootRouter routers={routers} />
}

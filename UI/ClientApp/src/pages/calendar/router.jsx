import { routerPath } from './routerPath'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import ModulRouter from '../../commonComponent/component/modulRouter'
import Calendar from './home'

const routers = [
    {
        path: routerPath.Calendar,
        component: <Calendar />
    }
]

export default function Router() {
    const onChangePathName = (router) => {
        let breadcrumb = [{ text: 'Lịch thi', icon: <CalendarMonthSharpIcon /> }]
        if (router.breadcrumb && router.breadcrumb.length > 0) {
            breadcrumb = [{ text: 'Lịch thi', icon: <CalendarMonthSharpIcon /> }, ...router.breadcrumb]
        }
    }
    return <ModulRouter routers={routers} onChangePathName={onChangePathName} />
}

import { routerPath } from './routerPath'
import LineAxisSharpIcon from '@mui/icons-material/LineAxisSharp'
import ModulRouter from '../../commonComponent/component/modulRouter'
import Dashboard from './home'
const routers = [
    {
        path: routerPath.Dashboard,
        component: <Dashboard />
    }
]

export default function Router() {
    const onChangePathName = (router) => {
        let breadcrumb = [{ text: 'Thống kê', icon: <LineAxisSharpIcon /> }]
        if (router.breadcrumb && router.breadcrumb.length > 0) {
            breadcrumb = [{ text: 'Thống kê', icon: <LineAxisSharpIcon /> }, ...router.breadcrumb]
        }
    }
    return <ModulRouter routers={routers} onChangePathName={onChangePathName} />
}

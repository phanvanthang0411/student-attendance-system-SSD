import ModulRouter from '../../commonComponent/component/modulRouter'
import { routerPath } from './routerPath.'
import Attandance from './home'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp'

const routers = [
    {
        path: routerPath.Attendance,
        component: <Attandance />
    }
]

export default function Router() {
    const onChangePathName = (router) => {
        let breadcrumb = [{ text: 'Điểm danh', icon: <BorderColorSharpIcon /> }]
        if (router.breadcrumb && router.breadcrumb.length > 0) {
            breadcrumb = [{ text: 'Điểm danh', icon: <BorderColorSharpIcon /> }, ...router.breadcrumb]
        }
    }
    return <ModulRouter routers={routers} onChangePathName={onChangePathName} />
}

import { routerPath } from './routerPath'
import Setting from './home'
import ModulRouter from '../../commonComponent/component/modulRouter'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp'


const routers = [
    {
        path: routerPath.Setting,
        component: <Setting />
    }
]

export default function Router() {
    const onChangePathName = (router) => {
        let breadcrumb = [{ text: 'Cài đặt', icon: <SettingsSharpIcon /> }]
        if (router.breadcrumb && router.breadcrumb.length > 0) {
            breadcrumb = [{ text: 'Cài đặt', icon: <SettingsSharpIcon /> }, ...router.breadcrumb]
        }
    }
    return <ModulRouter routers={routers} onChangePathName={onChangePathName} />
}

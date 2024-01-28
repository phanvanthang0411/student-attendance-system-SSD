import { routerPath } from './routerPath'
import HomeContent from '.'
import HouseRoundedIcon from '@mui/icons-material/HouseRounded'
import ModulRouter from '../../commonComponent/component/modulRouter'

const routers = [
    {
        path: routerPath.Home,
        component: <HomeContent />
    }
]

export default function Router() {
    const onChangePathName = (router) => {
        let breadcrumb = [{ text: 'Trang chủ', icon: <HouseRoundedIcon /> }]
        if (router.breadcrumb && router.breadcrumb.length > 0) {
            breadcrumb = [{ text: 'Trang chủ', icon: <HouseRoundedIcon /> }, ...router.breadcrumb]
        }
    }
    return <ModulRouter routers={routers} onChangePathName={onChangePathName} />
}

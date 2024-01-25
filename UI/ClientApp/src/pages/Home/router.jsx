import { routerPaths } from "./rootRouter";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded'
import HomePage from ".";


const routers = [
	{
		path: routerPaths.home,
		component:  <HomePage/>
	}
]

const navigations = [
	{
		id: 'leftnav-home',
        content: 'Trang chủ',
        icon: <HouseRoundedIcon/>,
        url: routerPaths.home,
        exact: true,
	}
]

export default function Router() {
	
}
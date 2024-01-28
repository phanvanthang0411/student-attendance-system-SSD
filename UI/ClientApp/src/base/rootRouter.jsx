import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import HouseRoundedIcon from '@mui/icons-material/HouseRounded'
import LineAxisSharpIcon from '@mui/icons-material/LineAxisSharp'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp'
import Layout from './layout'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { routerPath } from './routerPaths'
import LoginPage from '../loginCommon/login'

const getNavs = () => [
    {
        id: 'leftnav-home',
        text: 'Trang chủ',
        icon: <HouseRoundedIcon />,
        url: routerPath.Home,
        exact: true
    },
    {
        id: 'leftnav-calendar',
        text: 'Lịch thi',
        icon: <CalendarMonthSharpIcon />,
        url: routerPath.Calendar,
        exact: true
    },
    {
        id: 'leftnav-attendance',
        text: 'Điểm danh',
        icon: <BorderColorSharpIcon />,
        url: routerPath.Attendance,
        exact: true
    },
    {
        id: 'leftnav-dashboard',
        text: 'Thống kê',
        icon: <LineAxisSharpIcon />,
        url: routerPath.Dashboard,
        exact: true
    },
    {
        id: 'leftnav-setting',
        text: 'Cài đặt',
        icon: <SettingsSharpIcon />,
        url: routerPath.Setting,
        exact: true
    }
]

export default function RootRouter({ routers }) {
    const navigations = getNavs();
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

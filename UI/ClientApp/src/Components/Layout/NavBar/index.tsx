import { useState } from 'react'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import HouseRoundedIcon from '@mui/icons-material/HouseRounded'
import LineAxisSharpIcon from '@mui/icons-material/LineAxisSharp'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import './NavBar.scss'


const mappingIcon: Record<string, React.ReactNode> = {
    'Trang chủ': <HouseRoundedIcon />,
    'Lịch': <CalendarMonthSharpIcon />,
    'Thi Online': <BorderColorSharpIcon />,
    'Dashboard': <LineAxisSharpIcon />,
    'Cài đặt': <SettingsSharpIcon />
}
const listItem = ['Trang chủ', 'Lịch', 'Thi Online', 'Dashboard', 'Cài đặt']
interface Props {
	onNavItemSelect : (text: string) => void
}
export default function NavBar({onNavItemSelect}: Props) {
    const [selectedItem, setSelectedItem] = useState<string | null>(null)
    const handleListItemClick = (text: string) => {
        setSelectedItem(text)
		onNavItemSelect(text)
    }
    const drawer = (
        <div style={{ backgroundColor: '#31334b', height: '100%' }}>
            <Toolbar sx={{ backgroundColor: '#212231', backgroundImage: 'none' }} />
            <Divider />
            <List>
                {listItem.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            selected={selectedItem === text}
                            onClick={() => handleListItemClick(text)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#101419a3',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#101419a3',
                                    borderRadius: '8px',
                                    '& .MuiSvgIcon-root, & .MuiListItemText-root': {
                                        color: '#68c8c5'
                                    },
									'& .MuiSvgIcon-root': {
                                        fill: '#68c8c5',
                                    },
                                }
                            }}
                        >
                            <ListItemIcon>{mappingIcon[text]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    )

    return (
		<div className='main-page-left'>
			{drawer}
		</div>
        // <Drawer
        //     variant='permanent'
        //     sx={{
        //         '& .MuiDrawer-paper': { width: drawerWidth }
        //     }}
        //     open
        // >
        //     {drawer}
        // </Drawer>
    )
}

import * as React from 'react'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp'
import HelpSharpIcon from '@mui/icons-material/HelpSharp'
import HouseRoundedIcon from '@mui/icons-material/HouseRounded'
import LineAxisSharpIcon from '@mui/icons-material/LineAxisSharp'
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import Popper, { PopperPlacementType } from '@mui/material/Popper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
// import Typography from '@mui/material/Typography'
import ImageProfile from '~/Components/Avatar'
import PopperInfor from '~/Components/Popper'

import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Popper, { PopperPlacementType } from '@mui/material/Popper'
import Typography from '@mui/material/Typography'

import './Header.scss'

interface Props {
    titleHeader: string
}
const mappingIcon: Record<string, React.ReactNode> = {
    'Trang chủ': <HouseRoundedIcon />,
    Lịch: <CalendarMonthSharpIcon />,
    'Thi Online': <BorderColorSharpIcon />,
    Dashboard: <LineAxisSharpIcon />,
    'Cài đặt': <SettingsSharpIcon />
}

const Header = ({ titleHeader }: Props) => {
    const [placement, setPlacement] = React.useState<PopperPlacementType>()
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
    const [openPopper, setOpenPopper] = React.useState(false)

    const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
        setOpenPopper((prev) => placement !== newPlacement || !prev)
        setPlacement(newPlacement)
    }
    // const [titleHeader, setTitleHeader] = useState('Trang chủ')
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <div className='header-icon-left'>
                    {mappingIcon[titleHeader]}
                    <Typography variant='caption'>{titleHeader}</Typography>
                </div>
                <div className='header-icon-right'>
                    <Tooltip title='Notification center' placement='bottom-end'>
                        <NotificationsSharpIcon sx={{ cursor: 'pointer', margin: '0 16px', fontSize: '30px' }} />
                    </Tooltip>
                    <Tooltip title='Help' placement='bottom-end'>
                        <HelpSharpIcon sx={{ cursor: 'pointer', margin: '0 16px', fontSize: '30px' }} />
                    </Tooltip>
                    <div
                        className='header-profile'
                        onClick={()=> handleClick('bottom-end')}
                    >
                        <Tooltip title='abc' placement='bottom-end'>
                            <ImageProfile />
                        </Tooltip>
                        <div className='header-profile-information'>
                            <div className='profile-name'>Kevin Phan</div>
                            <div className='profile-class-name'>sdsdfsdfsdfsfsdfdfdfsdf</div>
                        </div>
                        <KeyboardArrowDownIcon sx={{ fontSize: '16px', margin: '8px 4px 0 0' }} />
                        <Popper open={openPopper} anchorEl={anchorEl} placement={placement} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header

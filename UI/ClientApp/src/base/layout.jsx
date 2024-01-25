import React from 'react'
import { MainLayout } from './mainLayout'
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp'
import Tooltip from '@mui/material/Tooltip'
import HelpSharpIcon from '@mui/icons-material/HelpSharp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ImageProfile from '../commonComponent/component/avatar'

function Layout({ navigations, children, history }) {
    return (
        <>
            <MainLayout
                history={history}
                navs={navigations}
                children={children}
                renderButtons={
                    <div className='header-login'>
                        <Tooltip title='Notification center' placement='bottom-end'>
                            <NotificationsSharpIcon sx={{ cursor: 'pointer', margin: '0 16px', fontSize: '30px' }} />
                        </Tooltip>
                        <Tooltip title='Help' placement='bottom-end'>
                            <HelpSharpIcon sx={{ cursor: 'pointer', margin: '0 16px', fontSize: '30px' }} />
                        </Tooltip>
                        <div className='header-profile' onClick={() => handleClick('bottom-end')}>
                            <Tooltip title='abc' placement='bottom-end'>
                                <ImageProfile path='./src/assets/images/logo_login.png' />
                            </Tooltip>
                            <div className='header-profile-information'>
                                <div className='profile-name'>Kevin Phan</div>
                                <div className='profile-class-name'>Điện tử 03-k64</div>
                            </div>
                            <KeyboardArrowDownIcon sx={{ fontSize: '16px', margin: '8px 4px 0 0' }} />
                        </div>
                    </div>
                }
            >
                {children}
            </MainLayout>
        </>
    )
}

export default Layout

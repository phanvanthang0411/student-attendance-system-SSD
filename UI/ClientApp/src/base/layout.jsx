import React from 'react'
import { MainLayout } from './mainLayout'
import ImageProfile from '../commonComponent/component/avatar'
import { connect } from 'react-redux'
import { Menu, Tooltip, ListItemIcon, Avatar, MenuItem, Divider } from '@mui/material'
import { HelpSharp, KeyboardArrowDown, Logout, NotificationsSharp, KeyboardArrowUp } from '@mui/icons-material'
import { routerPath } from './routerPaths'

const mapStateToProps = ({ login }) => {
    return {
        email: login.email
    }
}

const mapDispatchToProps = {}

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null
        }
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    render() {
        return (
            <>
                <MainLayout
                    history={history}
                    navs={this.props.navigations}
                    renderButtons={
                        <div className='header-login'>
                            <Tooltip title='Notification center' placement='bottom-end'>
                                <NotificationsSharp sx={{ cursor: 'pointer', margin: '0 16px', fontSize: '30px' }} />
                            </Tooltip>
                            <Tooltip title='Help' placement='bottom-end'>
                                <HelpSharp sx={{ cursor: 'pointer', margin: '0 16px', fontSize: '30px' }} />
                            </Tooltip>
                            <div
                                className='header-profile'
                                aria-controls={this.state.anchorEl ? 'account-menu' : undefined}
                                aria-haspopup='true'
                                aria-expanded={this.state.anchorEl ? 'true' : undefined}
                                onClick={this.handleClick}
                            >
                                <ImageProfile path='./src/assets/images/logo_login.png' />
                                <div className='header-profile-information'>
                                    <div className='profile-name'>{localStorage.getItem('username')}</div>
                                </div>
                                {this.state.anchorEl ? (
                                    <KeyboardArrowUp
                                        aria-controls='account-menu'
                                        sx={{ fontSize: '16px', margin: '8px 4px 0 0' }}
                                    />
                                ) : (
                                    <KeyboardArrowDown
                                        aria-controls='account-menu'
                                        sx={{ fontSize: '16px', margin: '8px 4px 0 0' }}
                                    />
                                )}
                            </div>
                            <Menu
                                anchorEl={this.state.anchorEl}
                                id='account-menu'
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                                // onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0
                                        }
                                    }
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <Avatar />
                                    <div className='profile-info'>
                                        <div className='profile-info-username'>{localStorage.getItem('username')}</div>
                                        <div>{localStorage.getItem('email')}</div>
                                    </div>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={() => (window.location.href = routerPath.Login)}>
                                    <ListItemIcon>
                                        <Logout fontSize='small' />
                                    </ListItemIcon>
                                    <div className='logout'>Logout</div>
                                </MenuItem>
                            </Menu>
                        </div>
                    }
                >
                    {this.props.children}
                </MainLayout>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

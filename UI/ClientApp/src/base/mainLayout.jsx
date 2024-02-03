import { React, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import './scss/layout.scss'
import { NavLink } from 'react-router-dom'
import hustLogo from '../assets/images/hustlogo.png'
import { routerPath } from './routerPaths'

export const Link = ({ children, ...props }) => {
    const attrs = []
    return (
        <NavLink {...attrs} {...props}>
            {children}
        </NavLink>
    )
}
export function MainLayout({ navs, children, history, renderButtons }) {
    const [breadcrumbs, setBreadcrumbs] = useState([])
    return (
        <div className='app-layout'>
            <div className='layout-navs'>
                <Link className='leftNavs-logo' to={routerPath.Home}>
                    <img alt='hustlogo' src={hustLogo} width={70} />
                </Link>
                {navs &&
                    navs.map((item, index) => (
                        <div className='leftNavsItem' id={item.id} key={'leftNav-item' + index}>
                            <Link
                                id={item.id}
                                to={item.url}
                                className={({ isActive }) => (isActive ? 'active' : '') + ' link-item'}
                            >
                                <div className='nav-item-icon'>{item.icon}</div>
                                <div className='nav-item-title'>{item.text}</div>
                            </Link>
                        </div>
                    ))}
            </div>
            <div className='layout-right'>
                <div className='layout-header'>
                    <div className='header-breadcrumbs'>
                        <Breadcrumbs separator='›' aria-label='breadcrumb'>
                            <Link>MUI</Link>
                        </Breadcrumbs>
                    </div>
                    {renderButtons}
                </div>
                <div className='layout-content'>{children}</div>
            </div>
        </div>
    )
}

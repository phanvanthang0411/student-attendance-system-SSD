import React from 'react'
import './scss/layout.scss'
import { NavLink } from 'react-router-dom'

export const Link = ({ children, ...props }) => {
	console.log(props);
    const attrs = []
    return <NavLink {...attrs} {...props}>{children}</NavLink>
}
export function MainLayout({ navs, children, history, renderButtons }) {
    return (
        <div className='app-layout'>
            <div className='layout-navs'>
                <div className='leftNavs-logo'></div>
                {navs &&
                    navs.map((item, index) => (
                        <div className='leftNavsItem' id={item.id} key={'leftNav-item' + index}>
                            <Link id={item.id}
							to={item.url}
							className={(isActive) => (isActive ? 'active' : '') + " link-item"}
							// isActive={isActive}
							>
                                <div className='nav-item-icon'>{item.icon}</div>
                                <div className='nav-item-title'>{item.text}</div>
                            </Link>
                        </div>
                    ))}
            </div>
            <div className='layout-right'>
                <div className='layout-header'>
                    <div className='header-breadcrumbs'></div>
                    {renderButtons}
                </div>
                <div className='layout-content'>{children}</div>
            </div>
        </div>
    )
}

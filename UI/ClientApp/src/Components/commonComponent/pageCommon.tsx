import * as React from 'react'
import NavBar from '../Layout/NavBar'
import Header from '../Layout/Header'
import BodyPage from '../Layout/BodyPage'
import './pageCommon.scss'

const CommonPage = () => {
	const [title, setTitle] = React.useState<string>('Trang chủ')
    const handleNavItemClick = (text: string) => {
        setTitle(text)
    }
    return (
        <React.Fragment>
            <NavBar onNavItemSelect={handleNavItemClick} />
            <div className='main-page-right'>
                <Header titleHeader={title} />
                <BodyPage />
            </div>
        </React.Fragment>
    )
}
export default CommonPage

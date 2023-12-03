import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import BodyPage from '~/Components/Layout/BodyPage'
import Header from '~/Components/Layout/Header'
import NavBar from '~/Components/Layout/NavBar'
import './Schedule.scss'

const SchedulePage = () => {
    const [title, setTitle] = useState<string>('Trang chủ')
    const handleNavItemClick = (text: string) => {
        setTitle(text)
    }
    return (
        <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            <CssBaseline />
            <NavBar onNavItemSelect={handleNavItemClick} />
            <div className='main-page-right'>
                <Header titleHeader={title} />
                <BodyPage />
            </div>
        </Box>
    )
}
export default SchedulePage

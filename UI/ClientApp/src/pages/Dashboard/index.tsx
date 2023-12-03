import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import CommonPage from '~/Components/commonComponent/pageCommon'


const DashboardPage = () => {
    return (
        <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            <CssBaseline />
            <CommonPage />
        </Box>
    )
}
export default DashboardPage

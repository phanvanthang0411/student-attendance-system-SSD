import * as React from 'react'
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import DataTable from '../../../../Components/TableData'
import DataTableExam from '../../../../Components/TableDataExam'

export default function NavTabs() {
    const [value, setValue] = React.useState('1')

    const handleOnClick = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleOnClick} aria-label='lab API tabs example'>
                        <Tab label='Lịch dạy học' value='1' />
                        <Tab label='Lịch coi thi' value='2' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <DataTable />
                </TabPanel>
                <TabPanel value='2'>
                    <DataTableExam />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

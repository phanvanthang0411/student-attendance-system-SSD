import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import './index.scss'

export default function CommonCalendar(props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar className='a-commoncalendar' defaultValue={dayjs()} onChange={props.onChange} />
        </LocalizationProvider>
    )
}

import dayjs from 'dayjs'
import React from 'react'
import './index.scss'
import CommonTable from '../../../commonComponent/commontable'
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'
import { Link } from '@mui/material'

class Attendance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: dayjs()
        }
    }
    onDateChange = (date) => {
        this.setState({ selectedDate: date })
    }

    columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        {
            field: 'examClassName',
            headerName: 'Tên lớp thi',
            width: 130,
            renderCell: (params) => {
                return (
                    <Link sx={{ fontWeight: '600' }} href={'attendance/' + params.row.id}>
                        {params.row.examClassName}
                    </Link>
                )
            }
        },
        {
            field: 'room',
            headerName: 'Phòng thi',
            width: 160
        },
        {
            field: 'date',
            headerName: 'Ngày thi',
            width: 160
        },
        {
            field: 'startTime',
            headerName: 'Thời gian bắt đầu',
            width: 160
        },
        {
            field: 'endTime',
            headerName: 'Thời gian kết thúc',
            width: 160
        },
        {
            field: 'duration',
            headerName: 'Thời lượng',
            width: 160
        },
        {
            field: 'attendanceStatus',
            headerName: 'Trạng thái điểm danh',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        {params.row.attendanceStatus == 'Đã điểm danh' ? (
                            <CheckCircle color='success' sx={{ marginRight: '4px', fontSize: '18px' }} />
                        ) : (
                            <RadioButtonUnchecked color='disabled' sx={{ marginRight: '4px', fontSize: '18px' }} />
                        )}
                        {params.row.attendanceStatus}
                    </>
                )
            }
        }
    ]

    rows = [
        {
            id: 1,
            examClassName: 'Vật lý I',
            room: 'D3-401',
            date: '13-02-2024',
            startTime: '09:30',
            endTime: '11:00',
            duration: '90 phút',
            attendanceStatus: 'Đã điểm danh'
        },
        {
            id: 2,
            examClassName: 'Giải tích I',
            room: 'D3-301',
            date: '13-02-2024',
            startTime: '12:30',
            endTime: '14:00',
            duration: '90 phút',
            attendanceStatus: 'Chưa điểm danh'
        }
    ]

    render() {
        return (
            <div className='a-attendance'>
                <CommonTable columns={this.columns} rows={this.rows} isCheckbox={false} />
            </div>
        )
    }
}

export default Attendance

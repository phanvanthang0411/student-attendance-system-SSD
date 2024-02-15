import dayjs from 'dayjs'
import CommonCalendar from '../../../commonComponent/commoncalendar'
import React from 'react'
import './index.scss'
import DefaultDetailExam from '../../../commonComponent/defaultdetailexam'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: dayjs(),
            examList: [
                {
                    examClassName: 'Vật lý I',
                    room: 'D3-401',
                    startTime: '09:30',
                    endTime: '14:00',
                    duration: '90 phút',
                    supervisors: ['Trương Hồng Ánh', 'Vũ Trọng Phụng']
                },
                {
                    examClassName: 'Giải tích I',
                    room: 'D3-301',
                    startTime: '12:30',
                    endTime: '14:00',
                    duration: '90 phút',
                    supervisors: ['Trương Hồng Ánh']
                }
            ]
        }
    }
    onDateChange = (date) => {
        this.setState({ selectedDate: date })
    }

    render() {
        return (
            <div className='a-calendar'>
                <div className='a-calendar-detail'>
                    <div className='a-calendar-detail-date'>{this.state.selectedDate.format('DD/MM/YYYY')}</div>

                    {this.state.examList.map((item) => (
                        <DefaultDetailExam {...item} />
                    ))}
                </div>
                <CommonCalendar onChange={this.onDateChange} />
            </div>
        )
    }
}

export default Calendar

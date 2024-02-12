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
                    examClassName: 'Toán 12',
                    room: 'D3-101',
                    startTime: '12:30',
                    endTime: '14:00',
                    duration: '90 phút',
                    supervisors: ['Liêm', 'Khiết']
                },
                {
                    examClassName: 'Văn 12',
                    room: 'D3-102',
                    startTime: '14:00',
                    endTime: '15:30',
                    duration: '90 phút',
                    supervisors: ['Liêm', 'Khiết']
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

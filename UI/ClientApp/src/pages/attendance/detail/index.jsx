// import Attendance from './home'
import React from 'react'
import { connect } from 'react-redux'
import { LayoutAction } from '../../../redux/action'
import './index.scss'
import CommonImageUpload from '../../../commonComponent/commonimageupload'
import CommonTable from '../../../commonComponent/commontable'
import { RadioButtonUnchecked, CheckCircle, Cancel } from '@mui/icons-material'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    changeBreadcrumb: LayoutAction.changeBreadcrumb
}

class DetailAttendance extends React.Component {
    constructor(props) {
        super(props)
        this.props.changeBreadcrumb('Điểm danh')
    }

    examClass = {
        examName: 'Giải tích I',
        examClassId: '2',
        room: 'D3-301',
        date: '13-02-2024',
        startTime: '12:30',
        endTime: '14:00',
        duration: '90 phút',
        attendanceStatus: 'Đã điểm danh',
        supervisors: ['Trương Hồng Ánh', 'Vũ Trọng Phụng']
    }

    columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        {
            field: 'candidateName',
            headerName: 'Tên thí sinh',
            width: 140
        },
        {
            field: 'attendanceStatus',
            headerName: 'Trạng thái điểm danh',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        {params.row.attendanceStatus == 'Có mặt' ? (
                            <CheckCircle color='success' sx={{ marginRight: '4px', fontSize: '18px' }} />
                        ) : params.row.attendanceStatus == 'Vắng mặt' ? (
                            <Cancel color='error' sx={{ marginRight: '4px', fontSize: '18px' }} />
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
            candidateName: 'Trần Xuân Khải',
            attendanceStatus: 'Vắng mặt'
        },
        {
            id: 2,
            candidateName: 'Phan Văn Thắng',
            attendanceStatus: 'Vắng mặt'
        },
        {
            id: 3,
            candidateName: 'Trịnh Việt Hoàng',
            attendanceStatus: 'Có mặt'
        },
        {
            id: 4,
            candidateName: 'Nguyễn Tùng Lâm',
            attendanceStatus: 'Vắng mặt'
        },
        {
            id: 5,
            candidateName: 'Tô Đức Dũng',
            attendanceStatus: 'Có mặt'
        },
        {
            id: 6,
            candidateName: 'Nguyễn Xuân Phúc',
            attendanceStatus: 'Có mặt'
        },
        {
            id: 7,
            candidateName: 'Hán Văn Tùng',
            attendanceStatus: 'Có mặt'
        },
        {
            id: 8,
            candidateName: 'Phan Văn Thắng',
            attendanceStatus: 'Chưa điểm danh'
        },
        {
            id: 9,
            candidateName: 'Phan Văn Thắng',
            attendanceStatus: 'Chưa điểm danh'
        },
        {
            id: 10,
            candidateName: 'Phan Văn Thắng',
            attendanceStatus: 'Chưa điểm danh'
        },
        {
            id: 11,
            candidateName: 'Phan Văn Thắng',
            attendanceStatus: 'Chưa điểm danh'
        },
        {
            id: 12,
            candidateName: 'Phan Văn Thắng',
            attendanceStatus: 'Chưa điểm danh'
        },
        {
            id: 13,
            candidateName: 'Phan Văn Thắng',
            attendanceStatus: 'Chưa điểm danh'
        }
    ]

    render() {
        return (
            <div className='a-detailattendance'>
                <div className='a-detailattendance-detail'>
                    <ExamClassInfo title={'Tên lớp'} info={this.examClass.examName} />
                    <ExamClassInfo title={'Id'} info={this.examClass.examClassId} />
                    <ExamClassInfo title={'Phòng thi'} info={this.examClass.room} />
                    <ExamClassInfo title={'Ngày thi'} info={this.examClass.date} />
                    <ExamClassInfo title={'Thời gian bắt đầu'} info={this.examClass.startTime} />
                    <ExamClassInfo title={'Thời gian kết thúc'} info={this.examClass.endTime} />
                    <ExamClassInfo title={'Thời lượng'} info={this.examClass.duration} />
                    <ExamClassInfo title={'Trạng thái điểm danh'} info={this.examClass.attendanceStatus} />
                    <ExamClassInfo title={'Giám thị'} info={this.examClass.supervisors.join(', ')} />
                    <CommonImageUpload />
                </div>
                <div className='a-detailattendance-candidatelist'>
                    <div className='a-detailattendance-candidatelist-title'>{'Danh sách thí sinh'}</div>
                    <CommonTable columns={this.columns} rows={this.rows} hideFooter />
                </div>
            </div>
        )
    }
}

export function ExamClassInfo({ title, info }) {
    return (
        <div className='a-examclass'>
            <div className='a-examclass-title'>{title}</div>
            <div className='a-examclass-info'>{info}</div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailAttendance)

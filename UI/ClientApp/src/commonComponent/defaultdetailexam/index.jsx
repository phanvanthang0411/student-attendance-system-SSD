import { Room, Timer, PeopleAlt } from '@mui/icons-material'
import './index.scss'

export default function DefaultDetailExam(props) {
    return (
        <div className='a-defaultdetailexam'>
            <div className='a-defaultdetailexam-time'>
                <div>{props.startTime}</div>
                <div>{props.endTime}</div>
            </div>
            <div className='a-defaultdetailexam-detail'>
                <div className='a-defaultdetailexam-detail-name'>{props.examClassName}</div>
                <div className='a-defaultdetailexam-detail-other'>
                    <div>
                        <Room />
                        {props.room}
                    </div>
                    <div>
                        <Timer />
                        {props.duration}
                    </div>
                    <div>
                        <PeopleAlt />
                        {props.supervisors.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    )
}

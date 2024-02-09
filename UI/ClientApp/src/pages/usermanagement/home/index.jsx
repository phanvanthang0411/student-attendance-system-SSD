import CommonTabs from '../../../commonComponent/commontabs'
import React from 'react'
import './index.scss'
import CandidateManagement from '../candidate'

class UserManagement extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {tabValue: }
    }

    tabs = [{ label: 'Thí sinh', value: <CandidateManagement /> }, { label: 'Giám thị' }]

    render() {
        return (
            <div className='a-usermanagerment'>
                <CommonTabs tabs={this.tabs} />
            </div>
        )
    }
}

export default UserManagement

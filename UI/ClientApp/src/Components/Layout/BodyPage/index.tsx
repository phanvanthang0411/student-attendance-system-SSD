import * as React from 'react'
import DataTable from '~/Components/TableData'
import NavTabs from '~/pages/Schedule/component/NavTabs'
import './BodyPage.scss'

const BodyPage = () => {
    return (
        <div className='body-page-right'>
            <NavTabs />
            {/* <div className='body-page-table'>
                <DataTable />
            </div> */}
        </div>
    )
}

export default BodyPage

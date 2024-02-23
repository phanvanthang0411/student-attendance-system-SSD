import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './index.scss'

export default function CommonTable(props) {
    return (
        <div className='a-commontable' style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                // initialState={{
                //     pagination: {
                //         paginationModel: { page: 0, pageSize: 5 }
                //     }
                // }}
                // pageSizeOptions={[5, 10]}
                checkboxSelection={props.isCheckbox}
                onRowSelectionModelChange={props.onSelected}
                hideFooter={props.hideFooter}
                getRowId={props.getRowId}
            />
        </div>
    )
}

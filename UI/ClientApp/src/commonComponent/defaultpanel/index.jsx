import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import CloseIcon from '@mui/icons-material/Close'
import DefaultButton from '../defaultbutton'
import './index.scss'
import { IconButton } from '@mui/material'

export default function DefaultPanel(props) {
    return (
        <Drawer className='a-defaultpanel' anchor={'right'} open={props.isOpen} onClose={() => {}}>
            <Box sx={{ width: 360 }} role='presentation'>
                <div className='a-defaultpanel-header'>
                    <div>{props.title}</div>
                    <IconButton aria-label='close' size='small' onClick={props.onCancelButtonClick}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Divider />
                <div className='a-defaultpanel-footer'>
                    <DefaultButton buttonName={'Hủy'} variant='outlined' onClick={props.onCancelButtonClick} />
                    <DefaultButton buttonName={'Lưu'} variant='contained' onClick={props.onPrimaryButtonClick} />
                </div>
            </Box>
        </Drawer>
    )
}

import * as React from 'react'
import './index.scss'
import { OutlinedInput } from '@mui/material'

export default function DefaultTextField(props) {
    return (
        <div className='a-defaulttextfield'>
            <div className='a-defaulttextfield-label'>
                {props.label} {props.required && <div className='a-defaulttextfield-label-required'>*</div>}
            </div>
            <OutlinedInput size='small' name={props.name} onChange={props.onChange} />
        </div>
    )
}

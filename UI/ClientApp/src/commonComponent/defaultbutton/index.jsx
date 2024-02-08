import * as React from 'react'
import Button from '@mui/material/Button'
import './index.scss'

export default function DefaultButton(props) {
    return (
        <Button {...props} className='a-default-button' size='small'>
            {props.buttonName}
        </Button>
    )
}

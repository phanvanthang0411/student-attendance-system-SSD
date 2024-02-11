import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import './index.scss'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
}

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    }
}

export default function DefaultSelect(props) {
    const theme = useTheme()
    const [personName, setPersonName] = React.useState([])

    const handleChange = (event) => {
        const {
            target: { value }
        } = event
        setPersonName(value)
        props.onChange(value)
    }

    return (
        <div className='a-defaultselect'>
            <div className='a-defaultselect-label'>
                {props.label} {props.required && <div className='a-defaultselect-label-required'>*</div>}
            </div>
            <Select
                size='small'
                displayEmpty
                value={personName}
                onChange={handleChange}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <div className='a-defaultselect-placeholder'>Select</div>
                    }

                    return selected
                }}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                {props.items.map((item, index) => (
                    <MenuItem key={index} value={item.text} style={getStyles(item, personName, theme)}>
                        {item.text}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

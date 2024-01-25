import { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'

const RoleLogin = ({textRole}) => {
    const [role, setRole] = useState('student')

    const handleRoleChange = (event) => {
        setRole(event.target.value)
    }
    return (
        <FormControl component='fieldset' sx={{ mt: 3, mb: 2 }}>
            <FormLabel component='legend'>{textRole}</FormLabel>
            <RadioGroup row aria-label='role' name='role' value={role} onChange={handleRoleChange}>
                <FormControlLabel value='student' control={<Radio />} label='Thí sinh' />
                <FormControlLabel value='teacher' control={<Radio />} label='Giám thị' />
                <FormControlLabel value='admin' control={<Radio />} label='Quản lý' />
            </RadioGroup>
        </FormControl>
    )
}

export default RoleLogin

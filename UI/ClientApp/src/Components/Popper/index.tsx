import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Popper, { PopperPlacementType } from '@mui/material/Popper'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function PopperInfor() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
    const [open, setOpen] = React.useState(false)
    const [placement, setPlacement] = React.useState<PopperPlacementType>()

    const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
        setOpen((prev) => placement !== newPlacement || !prev)
        setPlacement(newPlacement)
    }

    return (
        <Box sx={{ width: 500 }}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Box>
    )
}

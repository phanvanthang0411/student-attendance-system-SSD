import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import RoleLogin from './roleLogin'
import { routerPath } from '../../base/routerPaths'

export default function MainForm() {
    const handelSubmit = () => {}
    return (
        <Grid item xs={12} sm={6}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1 }} />
                <Typography component='h1' variant='h5'>
                    Đăng nhập
                </Typography>
                <Box component='form' onSubmit={handelSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Mật khẩu'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <RoleLogin textRole='Vui lòng chọn vai trò đăng nhập:' />
                    <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 1, mb: 1, height: '50px', backgroundColor: "#0c5776" }}
                        href={routerPath.Home}
                    >
                        Đăng nhập
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Quên mật khẩu?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}

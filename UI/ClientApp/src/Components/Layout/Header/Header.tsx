import Stack  from '@mui/material/Stack'
import './Header.scss'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
const MenuNavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size ='large' edge='start' aria-label='logo'>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          ONLINE EXAM
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button>Trang Chủ</Button>
          <Button>Giới thiệu</Button>
          <Button>Điểm khác biệt</Button>
          <Button>Tính năng</Button>
          <Button>Phản hồi</Button>
          <Button>Liên hệ</Button>
          <Button>Đăng ký</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
export default MenuNavBar
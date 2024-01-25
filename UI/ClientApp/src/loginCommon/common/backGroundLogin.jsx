import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const BackgroundLogin = ({path}) => {
    return (
        <Card>
            <CardMedia component='img' alt='HUST' image={path} />
        </Card>
    )
}
export default BackgroundLogin

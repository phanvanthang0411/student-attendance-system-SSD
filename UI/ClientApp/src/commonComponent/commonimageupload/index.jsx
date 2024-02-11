import * as React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import DefaultButton from '../defaultbutton'
import './index.scss'

export default function CommonImageUpload(props) {
    const [images, setImages] = React.useState([])

    const handleFileChange = (event) => {
        const file = event.target.files
        let newImages = images
        newImages.push(...file)
        setImages([...newImages])
        props.onChange(newImages)
    }

    const handleDeleteImage = (image) => {
        const filtered = images.filter((item) => item !== image)
        setImages([...filtered])
        props.onChange(filtered)
    }

    return (
        <div className='a-commonimageupload'>
            <div className='a-commonimageupload-label'>
                {props.label} {props.required && <div className='a-commonimageupload-label-required'>*</div>}
            </div>
            <input
                accept='image/*'
                id='image-upload'
                type='file'
                onChange={handleFileChange}
                style={{ display: 'none' }}
                multiple
            />
            <label htmlFor='image-upload'>
                <DefaultButton
                    component='span'
                    variant='contained'
                    startIcon={<CloudUploadIcon />}
                    buttonName={'Upload'}
                />
            </label>
            {images &&
                images.map((image, index) => (
                    <div className='a-commonimageupload-image'>
                        <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
                        <IconButton aria-label='close' size='small' onClick={() => handleDeleteImage(image)}>
                            <Close />
                        </IconButton>
                    </div>
                ))}
        </div>
    )
}

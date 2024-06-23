import React from 'react'
import DefaultImage from '../../../assets/public/logo.png';
import { styled } from '@mui/styles'; 
interface ImageProps{
    url?: string;
    alt?: string;
    size?: number
}
const ImageBase = styled('img')(() => ({ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    objectFit: "contain"
}))

const Image: React.FC<ImageProps> = ({
    url,
    size,
    alt,
}) => {
    return (
        <ImageBase 
            src={url || DefaultImage}
            alt={alt || "Default image"}
            width={size || "100%" }
            height={size || "100%" }
        />
    )
}

export default Image
// src/components/StyledImageButton.tsx
import { ButtonBase } from '@mui/material'
import { styled } from '@mui/system' 

// Define the styles using the styled utility and TypeScript types
const ImageButton = styled(ButtonBase)(() => ({
    position: 'relative',
    height: 200, 
    width: '33%',  
    opacity: 0.7,
    color:'black',
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}))

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginTop: "3px",
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: "8px"
})

const ImageBase = styled('span')(() => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white", 
}))

const ImageBackdrop = styled('span')(() => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0, 
    opacity: 0.8,
}))

const ImageMarked = styled('span')(() => ({
    height: 3,
    width: 18,
    opacity: 0.1,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
}))

export { ImageButton, ImageSrc, ImageBase, ImageBackdrop, ImageMarked }

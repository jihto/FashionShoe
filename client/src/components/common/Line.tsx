import { Grid } from '@mui/material'
import React from 'react'

interface LineProps{
    size?: number;
    bgColor?: string;
}

const Line:React.FC<LineProps> = ({
    size = 2,
    bgColor = "gray"
}) => {
    return (
        <Grid 
            sx={{
                width: "100%",
                height: size,
                backgroundColor: bgColor,
                marginY: 1
            }}
        >

        </Grid>
    )
}

export default Line
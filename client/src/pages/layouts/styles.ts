import { SxProps, Theme } from '@mui/material/styles';

export const menuItemStyle: SxProps<Theme> = {
    transition: 'background-color 0.1s',
    padding: '10px 10px',
    '&:hover': {
        backgroundColor: '#69afbf',
        color: "white"
    },
};
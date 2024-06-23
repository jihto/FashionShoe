import { Container, Grid, Link, Menu, MenuItem, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEvent, useRef, useState } from 'react';
import { menuItemStyle } from './styles';


const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const handleHover = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }; 
    const handleClose = () => {
    setAnchorEl(null);
    };
    return (
        <Grid bgcolor={"#3b98ad"}>
            <Container maxWidth={"lg"}>
                <Grid container justifyContent="flex-start">
                    <Grid 
                        ref={gridRef}
                        item  
                        padding={1}  
                        display="flex" 
                        alignItems="center" 
                        borderRight={1} 
                        color="white" 
                        gap={1}
                        bgcolor="#69afbf"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleClose}
                    >
                        <MenuIcon /> 
                        <Typography variant="h6">Danh mục sản phẩm</Typography> 
                        <KeyboardArrowDownIcon />
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)} 
                            MenuListProps={{ onMouseLeave: handleClose }}
                            PaperProps={{
                                style: {
                                    width: gridRef.current?.offsetWidth, 
                                },
                            }}
                        >
                            <MenuItem sx={menuItemStyle} onClick={handleClose}>Sản phẩm 1</MenuItem>
                            <MenuItem sx={menuItemStyle} onClick={handleClose}>Sản phẩm 2</MenuItem>
                            <MenuItem sx={menuItemStyle} onClick={handleClose}>Sản phẩm 3</MenuItem>
                        </Menu>
                    </Grid>
                    <Grid paddingX={3} item display="flex" alignItems="center" color="white" borderRight={1}>
                        <Link variant="h6" href="about" underline="none" color="inherit" >Giới thiệu và liên hệ </Link>
                    </Grid>
                    <Grid paddingX={3} item display="flex" alignItems="center" color="white" borderRight={1}>
                        <Link variant="h6" href="about" underline="none" color="inherit" >Chính sách bán hàng</Link>
                    </Grid>
                    <Grid paddingX={3} item display="flex" alignItems="center" color="white">
                        <Link variant="h6" href="contact" underline="none" color="inherit" >Cộng tác viên tin tức</Link>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Navbar
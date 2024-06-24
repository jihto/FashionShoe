import { Box, Button, Card, CardActions, CardContent, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';
import Banner1 from '../../src/assets/public/banner1.jpg'; 
import Banner2 from '../../src/assets/public/banner2.jpg';
import Banner3 from '../../src/assets/public/banner3.jpg';

import useStyles from '../styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; 
import Each from '../utils/Each';
import Branch from '../components/Branch';
import Product from '../components/Product/Product';
import Image from '../components/common/Image/Image';
import { ImageBackdrop, ImageBase, ImageButton, ImageMarked, ImageSrc } from '../components/common/Image/ImageOutline';

const Home: React.FC = () => {  
    const classes = useStyles();
    const [banner, setBanner] = useState<number>(0);
    const handleIncrease: VoidFunction = () => {
        setBanner(prev => prev < 2 ? prev + 1 : 0);
    }
    const handleDecrease: VoidFunction = () => {
        setBanner(prev => prev > 0 ? prev - 1 : 2);
    }
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (scrollOffset: number) => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollOffset;
        }
    };
    return (
        <>
            {/* Banner */}
            <Paper elevation={3} className={classes.banner}>  
                {
                    [Banner1, Banner2, Banner3].map((item:string, index: number) => 
                        banner === index
                        ? <img 
                            key={index} 
                            className={classes.bannerImage} 
                            src={item} 
                            loading='lazy'
                        />
                        : null
                    )
                } 
                <Button className={classes.bannerBtn} onClick={handleDecrease}><KeyboardArrowLeftIcon/></Button>
                <Button style={{ position: "absolute", top: "50%", right:0 }} onClick={handleIncrease}><KeyboardArrowRightIcon/></Button>
            </Paper> 
            {/* Sub Banner */}
            <Box>
                <Grid container display={"flex"} gap={"5px"}> 
                    <Each 
                        of={[1,2,3]}
                        render={() => (  
                            <ImageButton
                                focusRipple
                                key="image" 
                            >
                            <ImageSrc style={{ backgroundImage: `url(${Banner1})` }} />
                            <ImageBackdrop className="MuiImageBackdrop-root" />
                                <ImageBase>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className="MuiTypography-root"
                                    >
                                        Your Text Here
                                        <ImageMarked className="MuiImageMarked-root" />
                                    </Typography>
                                </ImageBase>
                            </ImageButton>
                        )}
                    /> 
                </Grid>
            </Box>
            {/* Branch */}
            <Grid container marginTop={1}>    
                <Each
                    of={[1,2,3,4,5,6,6,7,9,8,88,10]}
                    render={() =><Grid item md={2}> <Branch/></Grid>}
                /> 
            </Grid>   
            {/* Products */}
            <Typography textAlign={"center"} marginY={5} variant='h5' fontWeight={700}>Sản phẩm mới</Typography>
            <Grid position={"relative"}>
                <Grid item className={classes.btnPrev}>
                    <IconButton onClick={() => scroll(-300)}>
                        <KeyboardArrowLeftIcon/>
                    </IconButton>
                </Grid>
                <Grid item className={classes.btnNext}>
                    <IconButton className={classes.bannerBtn} onClick={() => scroll(300)}>
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                </Grid>
                <Grid item gap={2} className={classes.scrollContainer} ref={scrollContainerRef}>
                    <Each
                        of={[1,2,3,4,5]}
                        render={() => <Product/>}
                    />
                </Grid>
            </Grid>
            <Grid item justifyContent="center" alignContent="center" display={"flex"} marginY={2}>
                <Button variant='outlined'>Xem thêm</Button>
            </Grid> 
            <Box className={classes.box}>
                <Grid container>
                    <Grid item display="grid" md={2} justifyContent="center" alignContent="center"> 
                        <Image size={100}/>
                    </Grid>
                    <Grid item md={10}>
                        <Typography textAlign={"center"} marginY={5} variant='h5' fontWeight={700}>Về chúng tôi – Giaydino.com™ (Giày Sneakers)</Typography>
                        <Typography>Shop Giày Sneakers Dino chuyên cung cấp các loại Giày Sneakers từ Rep 1:1 đến Siêu Cấp rẻ nhất thị trường. Bao gồm các thương hiệu lớn như: Nike, Adidas, MLB,…</Typography>
                        <Typography marginTop={1}>Bạn đang tìm một đôi Giày Sneaker vừa đẹp, bền, hot trends mà lại vừa túi tiền? Hãy đến với chúng tôi – Giày Dino, bạn chỉ cần bỏ ra 1/3 giá tiền một đôi giày chính hãng mà đã có thể sở hữu một đôi giày chất lượng ngang ngửa. Thế thì còn gì bằng đúng không nè.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home
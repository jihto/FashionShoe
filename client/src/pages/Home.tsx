import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
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
import {
  ImageBackdrop,
  ImageBase,
  ImageButton,
  ImageMarked,
  ImageSrc,
} from '../components/common/Image/ImageOutline';
import Line from '../components/common/Line';
import { products } from '../constant/data';

import AdidasLogo from '../assets/public/logo-adidas.jpg';
import ConverseLogo from '../assets/public/logo-converse.jpg';
import DiorLogo from '../assets/public/logo-dior.jpg';
import GucciLogo from '../assets/public/logo-gucci.jpg';
import LVLogo from '../assets/public/logo-lv.jpg';
import McQueenLogo from '../assets/public/logo-mcqueen.jpg';
import MLBLogo from '../assets/public/logo-mlb.jpg';
import BalenciagaLogo from '../assets/public/logo-balenciaga.jpg';
import NBLogo from '../assets/public/logo-nb.jpg';
import NikeLogo from '../assets/public/logo-nike.jpg';
import PumaLogo from '../assets/public/logo-puma.jpg';
import VansLogo from '../assets/public/logo-vans.jpg';

const Home: React.FC = () => {
  const classes = useStyles();
  const [banner, setBanner] = useState<number>(0);
  const handleIncrease: VoidFunction = () => {
    setBanner((prev) => (prev < 2 ? prev + 1 : 0));
  };
  const handleDecrease: VoidFunction = () => {
    setBanner((prev) => (prev > 0 ? prev - 1 : 2));
  };
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [tabs, setTabs] = useState<number>(0);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  const images = [
    'https://ae01.alicdn.com/kf/S4cdf6becae2d4c78923e432efe7ff2f2a/Men-Casual-Shoes-Sport-Sneakers-Durable-Outsole-New-Fashion-Running-Shoes-Men-s-Sneakers-Mesh-Breathable.jpg',
    'https://img.ltwebstatic.com/images3_spmp/2023/10/22/d8/1697948674af823dc489b4267ee9a01f34ab809ca9.webp',
    'https://image.made-in-china.com/2f0j00yvpisBodygzj/New-Fashion-Shoes-Men-Breathable-Trend-Men-Style-Brand-Wholesale-Couple-Running-Sports-Fashion-Trending-Sneaker.webp',
  ];

  const logos = [
    { imageUrl: AdidasLogo, label: 'Adidas' },
    { imageUrl: BalenciagaLogo, label: 'Balenciaga' },
    { imageUrl: ConverseLogo, label: 'Converse' },
    { imageUrl: DiorLogo, label: 'Dior' },
    { imageUrl: GucciLogo, label: 'Gucci' },
    { imageUrl: LVLogo, label: 'LV' },
    { imageUrl: McQueenLogo, label: 'McQueen' },
    { imageUrl: MLBLogo, label: 'MLB' },
    { imageUrl: NBLogo, label: 'NB' },
    { imageUrl: NikeLogo, label: 'Nike' },
    { imageUrl: PumaLogo, label: 'Puma' },
    { imageUrl: VansLogo, label: 'Vans' },
  ];
  return (
    <>
      <Paper
        elevation={3}
        className={classes.banner}
      >
        {[Banner1, Banner2, Banner3].map((item: string, index: number) =>
          banner === index ? (
            <img
              key={index}
              className={classes.bannerImage}
              src={item}
              loading='lazy'
            />
          ) : null
        )}
        <Button
          className={classes.bannerBtn}
          onClick={handleDecrease}
        >
          <KeyboardArrowLeftIcon />
        </Button>
        <Button
          style={{ position: 'absolute', top: '50%', right: 0 }}
          onClick={handleIncrease}
        >
          <KeyboardArrowRightIcon />
        </Button>
      </Paper>
      {/* Sub Banner */}
      <Box>
        <Grid
          container
          display={'flex'}
          gap={'5px'}
        >
          <Each
            of={[1, 2, 3]}
            render={(index) => (
              <ImageButton
                focusRipple
                key={index}
              >
                <ImageSrc
                  style={{ backgroundImage: `url(${images[index - 1]})` }}
                />
                <ImageBackdrop className='MuiImageBackdrop-root' />
                <ImageBase>
                  <Typography
                    component='span'
                    variant='subtitle1'
                    color='inherit'
                    className='MuiTypography-root'
                  >
                    Shop Now
                    <ImageMarked className='MuiImageMarked-root' />
                  </Typography>
                </ImageBase>
              </ImageButton>
            )}
          />
        </Grid>
      </Box>
      {/* Branch */}
      <Grid
        container
        marginTop={1}
      >
        <Each
          of={logos}
          render={(logo) => (
            <Grid
              item
              md={2}
            >
              {' '}
              <Branch
                imageUrl={logo.imageUrl}
                label={logo.label}
              />
            </Grid>
          )}
        />
      </Grid>
      {/* Products */}
      <Typography
        textAlign={'center'}
        marginY={5}
        variant='h5'
        fontWeight={700}
      >
        Sản phẩm mới
      </Typography>
      <Grid position={'relative'}>
        <Grid
          item
          className={classes.btnPrev}
        >
          <IconButton onClick={() => scroll(-300)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          className={classes.btnNext}
        >
          <IconButton
            className={classes.bannerBtn}
            onClick={() => scroll(300)}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          gap={2}
          className={classes.scrollContainer}
          ref={scrollContainerRef}
        >
          <Each
            of={products}
            render={(product) => <Product {...product} />}
          />
        </Grid>
      </Grid>
      <Grid
        item
        justifyContent='center'
        alignContent='center'
        display={'flex'}
        marginY={2}
      >
        <Button variant='outlined'>Xem thêm</Button>
      </Grid>
      <Line />
      <Typography
        textAlign={'center'}
        marginY={5}
        variant='h5'
        fontWeight={700}
      >
        Sản phẩm mới
      </Typography>
      <Box
        sx={{ width: '100%' }}
        justifyContent={'center'}
        display={'flex'}
        marginBottom={'10px'}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabs}
            onChange={() => setTabs((prev) => (prev > 2 ? 0 : prev + 1))}
            aria-label='basic tabs example'
          >
            <Tab label='Adidas' />
            <Tab label='Nike' />
            <Tab label='Puma' />
          </Tabs>
        </Box>
        {/* <TabPanel
          value={tabs}
          index={0}
        >
          Item One
        </TabPanel>
        <TabPanel
          value={tabs}
          index={1}
        >
          Item Two
        </TabPanel>
        <TabPanel
          value={tabs}
          index={2}
        >
          Item Three
        </TabPanel> */}
      </Box>
      <Grid position={'relative'}>
        <Grid
          item
          className={classes.btnPrev}
        >
          <IconButton onClick={() => scroll(-300)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          className={classes.btnNext}
        >
          <IconButton
            className={classes.bannerBtn}
            onClick={() => scroll(300)}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          gap={2}
          className={classes.scrollContainer}
          ref={scrollContainerRef}
        >
          <Each
            of={products}
            render={(product) => <Product {...product} />}
          />
        </Grid>
      </Grid>
      <Grid
        item
        justifyContent='center'
        alignContent='center'
        display={'flex'}
        marginY={2}
      >
        <Button variant='outlined'>Xem thêm</Button>
      </Grid>
      <Line />
      <Typography
        textAlign={'center'}
        marginY={5}
        variant='h5'
        fontWeight={700}
      >
        Sản phẩm mới
      </Typography>
      <Grid position={'relative'}>
        <Grid
          item
          className={classes.btnPrev}
        >
          <IconButton onClick={() => scroll(-300)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          className={classes.btnNext}
        >
          <IconButton
            className={classes.bannerBtn}
            onClick={() => scroll(300)}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          gap={2}
          className={classes.scrollContainer}
          ref={scrollContainerRef}
        >
          <Each
            of={products}
            render={(product) => <Product {...product} />}
          />
        </Grid>
      </Grid>
      <Grid
        item
        justifyContent='center'
        alignContent='center'
        display={'flex'}
        marginY={2}
      >
        <Button variant='outlined'>Xem thêm</Button>
      </Grid>
      <Box className={classes.box}>
        <Grid container>
          <Grid
            item
            display='grid'
            md={2}
            justifyContent='center'
            alignContent='center'
          >
            <Image size={100} />
          </Grid>
          <Grid
            item
            md={10}
          >
            <Typography
              textAlign={'center'}
              marginY={5}
              variant='h5'
              fontWeight={700}
            >
              Về chúng tôi – Giaydino.com™ (Giày Sneakers)
            </Typography>
            <Typography>
              Shop Giày Sneakers Dino chuyên cung cấp các loại Giày Sneakers từ
              Rep 1:1 đến Siêu Cấp rẻ nhất thị trường. Bao gồm các thương hiệu
              lớn như: Nike, Adidas, MLB,…
            </Typography>
            <Typography marginTop={1}>
              Bạn đang tìm một đôi Giày Sneaker vừa đẹp, bền, hot trends mà lại
              vừa túi tiền? Hãy đến với chúng tôi – Giày Dino, bạn chỉ cần bỏ ra
              1/3 giá tiền một đôi giày chính hãng mà đã có thể sở hữu một đôi
              giày chất lượng ngang ngửa. Thế thì còn gì bằng đúng không nè.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;

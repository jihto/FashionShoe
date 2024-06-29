import {
  Breadcrumbs,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Search } from '@mui/icons-material';
import PaymentsIcon from '@mui/icons-material/Payments';
import Navbar from './Navbar';
import React from 'react';
import Footer from './Footer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from '../../components/common/Image/Image';
import LoginModal from '../../components/LoginModal';
const Layout: React.FC = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Container maxWidth='xl'>
        <Grid
          container
          alignItems={'center'}
          spacing={3}
          color='#69afbf'
          marginBottom={1}
        >
          <Grid
            item
            md
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Image size={50} />
            <Link
              variant='h6'
              underline='none'
              color='inherit'
              href='/'
            >
              Dino.com
            </Link>
          </Grid>
          <Grid
            item
            md
          >
            <FormControl>
              <InputLabel htmlFor='standard-adornment-password'>
                Search
              </InputLabel>
              <Input
                id='standard-adornment-password'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={() => {}}>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid
            item
            md
            container
            gap={1}
          >
            <Typography
              variant='h4'
              border={1}
              width={44}
              textAlign='center'
              borderRadius={15}
            >
              <HeadsetMicIcon />
            </Typography>
            <Grid>
              <Typography fontWeight={700}>Sẵn HN-HCM </Typography>
              <Typography>Kiểm tra thanh toán</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            md
            container
            gap={1}
          >
            <Typography
              variant='h4'
              border={1}
              width={44}
              textAlign='center'
              borderRadius={15}
            >
              <PaymentsIcon />
            </Typography>
            <Grid>
              <Typography fontWeight={700}>24/7 </Typography>
              <Typography>Hỗ trợ thanh toán</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            md
            container
            gap={1}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Typography>Giỏ hàng/450 000 VND</Typography>
            <Link
              underline='none'
              href='/cart'
              variant='h4'
              border={1}
              width={44}
              textAlign='center'
              borderRadius={15}
            >
              <ShoppingCartIcon />
            </Link>
          </Grid>

          <Grid item>
            <LoginModal />
          </Grid>
        </Grid>
      </Container>
      <Navbar />
      <Grid
        bgcolor={'whitesmoke'}
        paddingY={1}
      >
        <Container maxWidth='lg'>
          <Grid
            container
            justifyContent={'space-between'}
            alignItems={'center'}
            spacing={2}
          >
            <Grid
              item
              md={4}
            >
              <Breadcrumbs aria-label='breadcrumb'>
                <Link
                  variant='h6'
                  underline='hover'
                  color='inherit'
                  href='/'
                >
                  MUI
                </Link>
                <Link
                  variant='h6'
                  underline='hover'
                  color='inherit'
                  href='/material-ui/getting-started/installation/'
                >
                  Core
                </Link>
                <Typography
                  variant='h6'
                  color='text.primary'
                >
                  Breadcrumbs
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid
              display={'-webkit-flex'}
              md={4}
              justifyContent={'center'}
              alignItems={'center'}
              item
            >
              <Grid
                item
                md={8}
              >
                <Typography>Hiển thị 1-20 của 27 kết quả</Typography>
              </Grid>
              <Grid
                item
                xs={8}
                md={4}
              >
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  size='small'
                >
                  <InputLabel id='demo-select-small-label'>Age</InputLabel>
                  <Select
                    labelId='demo-select-small-label'
                    id='demo-select-small'
                    value={age}
                    label='Age'
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

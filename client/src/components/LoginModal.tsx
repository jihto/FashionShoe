import React, { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Tab,
  Tabs,
} from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { SyntheticEvent } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const LoginModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState('login');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: SyntheticEvent, newValue: string) =>
    setTabValue(newValue);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='contained'
        sx={{
          color: '#3B98AD',
          bgcolor: 'transparent',
          boxShadow: 'none',
          fontSize: '17px',
          fontWeight: '600',
          '&:hover': {
            bgcolor: '#3B98AD',
            color: '#fff',
          },
        }}
      >
        Đăng nhập
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography
            variant='h6'
            component='h2'
            display={'flex'}
            justifyContent={'center'}
            fontSize={'30px'}
            fontWeight={'900'}
          >
            Welcome to Dino
          </Typography>
          <TabContext value={tabValue}>
            <Tabs
              value={tabValue}
              onChange={handleChange}
              centered
            >
              <Tab
                label='Login'
                value='login'
              />
              <Tab
                label='Register'
                value='register'
              />
            </Tabs>
            <TabPanel value='login'>
              <TextField
                margin='normal'
                required
                fullWidth
                id='login-username'
                label='User Name'
                name='username'
                autoComplete='username'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='login-password'
                autoComplete='current-password'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 2, bgcolor: '#3B98AD' }}
              >
                Login
              </Button>
            </TabPanel>
            <TabPanel value='register'>
              <TextField
                margin='normal'
                required
                fullWidth
                id='register-username'
                label='User Name'
                name='username'
                autoComplete='username'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='register-password'
                autoComplete='new-password'
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='confirm-password'
                label='Confirm Password'
                type='password'
                id='register-confirm-password'
                autoComplete='new-password'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 2, bgcolor: '#3B98AD' }}
              >
                Register
              </Button>
            </TabPanel>
          </TabContext>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;

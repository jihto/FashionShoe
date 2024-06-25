import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';

const Branch: React.FC = () => {
  return (
    <Paper sx={{ margin: '3px' }}>
      <Grid
        display={'grid'}
        justifyContent='center'
        alignItems='center'
        paddingY={3}
      >
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          border={1}
          borderRadius={10}
          paddingY={2}
          paddingX={2}
        >
          <AdbIcon />
        </Grid>
        <Typography>Branch</Typography>
      </Grid>
    </Paper>
  );
};

export default Branch;

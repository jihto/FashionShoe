import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

interface BranchProps {
  imageUrl: string;
  label: string;
}

const Branch: React.FC<BranchProps> = ({ imageUrl, label }) => {
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
          <img
            src={imageUrl}
            alt='logo'
            style={{ width: '50px', height: '50px' }}
          />
        </Grid>
        <Typography justifySelf='center'>{label}</Typography>
      </Grid>
    </Paper>
  );
};

export default Branch;

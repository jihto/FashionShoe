import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Rating,
  Typography,
} from '@mui/material';
import React from 'react';
import ImageDefault from '../../assets/public/product.jpg';

interface ProductProps {
  imageUrl: string;
  label: string;
}

const Product: React.FC<ProductProps> = ({ imageUrl, label }) => {
  console.log({ imageUrl, label });

  return (
    <Card sx={{ minWidth: 280, maxWidth: 280, flexShrink: 0, borderRadius: 2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={imageUrl || ImageDefault}
        title='green iguana'
      />
      <CardContent style={{ paddingBottom: 0 }}>
        <Link
          href='product/Nike Air Max'
          gutterBottom
          variant='body2'
        >
          {label}
        </Link>
        <Typography
          marginY={1}
          variant='body1'
          color='red'
          fontWeight={700}
        >
          100.000VND
        </Typography>
        <Grid
          container
          marginBottom={2}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Rating
            name='read-only'
            value={2}
            readOnly
          />
          <Typography> 201 Đánh giá </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant='contained'
          size='small'
        >
          Xem nhanh
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

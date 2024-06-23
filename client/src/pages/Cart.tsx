import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, Typography, Box, IconButton, Button, TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { dataCartItems } from '../constant/data'; 
import { useNavigate } from 'react-router-dom';
import Line from '../components/common/Line';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
        field: 'product',
        headerName: 'Sản phẩm',
        width: 250,
        renderCell: (params) => {
            const product = params.value;
            return (
                <Box display="flex" alignItems="center">
                    <img src={product.image} alt={product.name} style={{ width: 50, height: 50, marginBottom: 8 }} />
                    <Grid>
                        <Typography variant="body2" fontWeight="bold">{product.name}</Typography>
                        <Typography variant="body2">{product.description}</Typography> 
                    </Grid>
                </Box>
            );
        }
    },
    { field: 'size', headerName: 'Kích thước', width: 100 },
    { field: 'count', headerName: 'Số lượng', type: 'number', width: 100 ,
        renderCell: (params) => {
            const count = params.value;
            return (
                <Grid display="flex" justifyContent="center" alignItems="center">
                    <IconButton>-</IconButton> 
                    <Typography>{count}</Typography>
                    <IconButton>+</IconButton>
                </Grid>
            );
        }
    },
    { field: 'price', headerName: "Giá", type: 'number', width: 80 },
    {
        field: 'totalPrice',
        headerName: 'Tạm tính',
        type: 'number',
        width: 100,
    },
];

const Cart = () => {
    const navigate = useNavigate();
    return (
        <Grid container marginY={1} spacing={2}>
            <Grid item md={8}>
                <Typography variant='body1' fontWeight={700} margin={2}>Tổng sản phẩm</Typography>
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={dataCartItems}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
                <Grid display="flex" justifyContent="space-between" alignContent="center" alignItems="center">
                    <Button variant='contained' onClick={() => navigate("/")}><ArrowBackIcon/>Quay lại</Button>
                    <Typography marginY={3} textAlign="end" variant='h5'>Tổng giá: 100</Typography>
                </Grid>
            </Grid>
            <Grid item md={4} container justifyContent="center">
                <Grid item md={8} >
                    <Typography variant='body1' fontWeight={700} margin={2}>Thanh toán</Typography>
                    <Line/>
                    <Grid gap={2} spacing={4} display="grid">
                        <Grid item container justifyContent={"space-between"}>
                            <Typography>Tổng số lượng: </Typography>
                            <Typography>1 </Typography>
                        </Grid>
                        <Grid item container justifyContent={"space-between"}>
                            <Typography>Tổng: </Typography>
                            <Typography>300.000 VND </Typography>
                        </Grid>
                        <Grid item container justifyContent={"space-between"}>
                            <Typography>Địa chỉ: </Typography>
                            <Typography>Hồ CHí Minh </Typography>
                        </Grid>
                        <TextField id="outlined-basic" label="Phiếu ưu đãi" variant="outlined" size='small'/>
                    <Button variant='contained' onClick={() => navigate('/payment')}>Thanh toán</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Cart;

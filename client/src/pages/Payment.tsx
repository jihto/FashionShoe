import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Container, Grid, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Line from '../components/common/Line';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const Payment = () => {
    const navigate = useNavigate();
    return (
        <Grid container marginY={1} spacing={2}>
            <Grid item md={8}>
                <Typography variant='body1' fontWeight={700} margin={2}>Tổng sản phẩm</Typography>
                <div style={{ height: 500, width: '100%' }}> 
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Thông tin cơ bản
                        </AccordionSummary>
                        <AccordionDetails>
                            <Container >
                                <Grid gap={2} display="flex">
                                    <TextField required fullWidth label="Họ và tên" variant="standard"/>
                                    <TextField required fullWidth label="Số điện thoại" variant="standard"/>
                                </Grid>
                                <TextField required sx={{ margin: '12px 0' }} fullWidth label="Địa chỉ email" variant="standard"/>
                                <Grid gap={2} display="flex">
                                    <TextField required fullWidth label="Tỉnh/thành phố" variant="standard"/>
                                    <TextField required fullWidth label="Quận/Huyện" variant="standard"/>
                                </Grid>
                                <TextField required sx={{ margin: '12px 0' }} fullWidth label="Địa chỉ" variant="standard"/>
                                <TextField required sx={{ margin: '12px 0' }} fullWidth label="Thông tin bổ sung" variant="standard"/>
                            </Container>
                            <AccordionActions> 
                                <Button variant='contained'>Confirm</Button>
                            </AccordionActions>
                        </AccordionDetails>
                    </Accordion> 
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
                    <Button variant='contained' >Thanh toán</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Payment
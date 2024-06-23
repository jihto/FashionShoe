import React from 'react'
import Line from '../../components/common/Line'
import { Container, Grid, IconButton, Typography } from '@mui/material'
import { listFooterAbout, listFooterContact, listFooterIcon, listFooterSupport } from '../../constant/data'
import Each from '../../utils/Each'

const Footer: React.FC = () => {
    return (
        <>
            <Line bgColor='#69afbf' size={3}/>  
            <Container>
                <Grid container display="flex">
                    <Grid item md={4}>
                        <Typography variant='body1' fontWeight={700} >HỖ TRỢ KHÁCH HÀNG</Typography>
                        <Each 
                            of={listFooterSupport}
                            render={(item:string, index: number) => <Typography key={index} variant='body2' marginY={1} color={'gray'}>{item}</Typography>}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant='body1' fontWeight={700} >VỀ GIAYDINO.COM</Typography>
                        <Each 
                            of={listFooterAbout}
                            render={(item:string, index: number) => <Typography key={index} variant='body2' marginY={1} color={'gray'}>{item}</Typography>}
                        />
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant='body1' fontWeight={700} >HỢP TÁC & LIÊN KẾT</Typography>
                        <Each 
                            of={listFooterContact}
                            render={(item:string, index: number) => <Typography key={index} variant='body2' marginY={1} color={'gray'}>{item}</Typography>}
                        />
                    </Grid>
                </Grid>
                <Line bgColor='gray'/>
                <Grid container display="flex">
                    <Grid item md={4}>
                        <Typography variant='body1' fontWeight={700} >THÔNG TIN SHOP</Typography>
                        <Typography variant='body2'  marginY={1} color={'gray'}> Hà Nội - Hồ Chí Minh (Hỗ trợ ship hàng nhanh khu vực Hà Nội)</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant='body1' fontWeight={700} >HOTLINE</Typography>
                        <Typography variant='body2' marginY={1} color={'gray'}>0921.833.003   0386.765.129</Typography> 
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant='body1' fontWeight={700} >HỢP TÁC & LIÊN KẾT</Typography>
                        <Each 
                            of={listFooterIcon}
                            render={(item:any, index: number) =>{
                                const IconComponent = item.icon;
                                return (
                                    <IconButton
                                        key={item.name}
                                        aria-label={item.name}
                                        onClick={() => window.open(item.link, '_blank')}
                                    >
                                        <IconComponent />
                                    </IconButton>
                                );
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>      
        </>
    )
}

export default Footer
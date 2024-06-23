import { Grid, Typography } from '@mui/material';
import Image from '../components/common/Image/Image';

const About = () => {
    return (
        <Grid marginY={5}>
            <Typography variant='h5'>Giới thiệu về Giaydino.com</Typography>
            <Typography marginY={2}>Chào mừng Quý Khách đã ghé thăm website của Giaydino.com</Typography>
            <Typography marginY={2}>Nhằm đáp ứng nhu cầu giày thời trang. Giày Dino cung cấp ra thị trường rất nhiều sản phẩm Sneakers chất lượng, mẫu mã đa dạng, style mới nhất… mang đến cho Quý Khách Hàng cảm giác mạnh mẽ, tự tin, cá tính và thanh lịch.</Typography>
            <Typography marginY={2}>Giaydino.com luôn mong muốn mang lại cho bạn cảm giác tự tin với những đôi giày Sneakers thời thượng phong cách trẻ trung.</Typography>
            <Typography marginY={2}>Giaydino.com xây dựng dịch vụ bán hàng Online theo tiêu chí phục vụ tốt nhất, chuyển hàng nhanh nhất, uy tín nhất với mức giá tốt nhất và bảo hành cho tất cả sản phẩm.</Typography>
            <Typography marginY={2}>Hãy đến Giaydino.com để cảm nhận sự khác biệt.</Typography>
            <Typography variant='h5'>Liên hệ</Typography>
            <Grid container>
                <Grid item md={2} display={"grid"} justifyItems={"center"} alignContent={"center"}>
                    <Image size={100}/>
                </Grid>
                <Grid item md={10}>  
                    <Typography marginY={2}>Số điện thoại: 0921.833.003</Typography>
                    <Typography marginY={2}>Mail: Sales@giaydino.com</Typography>
                    <Typography marginY={2}>Địa Chỉ: Hà Nội, Thành Phố Hồ Chí Minh</Typography>
                    <Typography marginY={2}>Fanpage: https://www.facebook.com/dino.sneakersshop</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About
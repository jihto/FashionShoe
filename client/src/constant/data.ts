
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SvgIconProps } from '@mui/material';
import { ProductType } from '../types/product.interface';
import DefaultImage from '../../src/assets/public/logo.png'


type IconComponent = React.ComponentType<SvgIconProps>; 
type FooterIconItem = {
    icon: IconComponent;
    name: string;
    link: string;
};

export const listFooterSupport: string[] = [
    'Hotline: 0921.833.003',
    'Các câu hỏi thường gặp',
    'Gửi yêu cầu hỗ trợ',
    'Chính sách giao hàng',
    ' Chính sách đổi trả',
    'Chính sách bảo hành',
];
export const listFooterAbout: string[] = [
    'Phiếu mua hàng',
    'Giới thiệu Giaydino.com',
    'Tuyển Dụng',
    'Chính sách bán hàng',
    'Chính sách đổi trả',
    'Liên hệ',
]

export const listFooterContact: string[] = [
    'www.haludo.com',
    'www.giaydino.com',
    'www.phukiendino.com',
];

export const listFooterIcon: FooterIconItem[] = [
    { icon: FacebookIcon, name: 'Facebook', link: 'https://facebook.com' },
    { icon: TwitterIcon , name: 'Twitter', link: 'https://twitter.com' },
    { icon: InstagramIcon, name: 'Instagram', link: 'https://instagram.com' },
    { icon: LinkedInIcon, name: 'LinkedIn', link: 'https://linkedin.com' },
];

interface CartItem {
    id: number;
    product: ProductType;
    count: number;
    price: number;
    totalPrice: number;
    size: string[]
}

// export const listsBranch = [
//     {
//         id: 1
//         name: 'Nike' 
//     }
// ] 

const dataProducts: ProductType[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: DefaultImage,
        description: 'Description for product 1',
        count: 10,
        size: ['S', 'M', 'L']
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: DefaultImage,
        description: 'Description for product 2',
        count: 20,
        size: ['M', 'L', 'XL']
    },
    // Add more products as needed
];

export const dataCartItems: CartItem[] = dataProducts.map((product: ProductType) => ({
    id: product.id,
    product: product,
    count: 1,  
    price: product.price,
    totalPrice: product.price * 1 ,
    size: product.size,
}));
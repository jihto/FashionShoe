import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { slug } = useParams(); 
    return (
        <div>ProductDetails{slug}</div>
    )
}

export default ProductDetails
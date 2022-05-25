import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../Hooks/UseProductDetail';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product] = useProductDetail(productId);

    return (
        <div>
            <h2> Product name: {product.name}</h2>
            <h2>ProductDetail: {productId}</h2>
            
            <Link to={`/checkout/${productId}`}>
            <button>Purchase Now</button>
            </Link>
        </div>
    );
};

export default ProductDetail;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url =`http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data=> setProduct(data));
    }, [])
    return (
        <div>
            <h2> Product name: {product.name}</h2>
            <h2>ProductDetail: {productId}</h2>
            
            <Link to={`/checkout`}>
            <button>Purchase Now</button>
            </Link>
        </div>
    );
};

export default ProductDetail;
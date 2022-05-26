import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../Hooks/UseProductDetail';

const CheckOut = () => {
    const {productId} = useParams();
    const [product] = useProductDetail(productId);
    return (
        <div>
            <h2>CheckOut</h2>
            <input value={product.name} type="text" name='product' disabled />
        </div>
    );
};

export default CheckOut;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ homeProduct }) => {
    const { _id, name, img, dec, price, minOrder, available } = homeProduct;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }

    return (
        <div className='product'>
            <div className='product-dev'>
                <img width='230px' height='200px' src={img} alt='' />
                <h2 className='font-bold text-2xl text-purple-900 mt-2'>{name}</h2>
                <h2 className='font-bold text-blue-900'>Min. Order: {minOrder} /Pieces</h2>
                <h2 className='font-bold text-blue-900'>Avalilable: {available}/Pieces</h2>
                <h2 className='font-bold text-blue-900'>Price: ${price} /Piece</h2>
                <h2><span className='font-bold text-blue-900'>Description:</span> {dec}</h2>

                <button onClick={() => navigateToProductDetail(_id)} className='font-bold'>Purchase</button>
            </div>
        </div>
    );
};

export default Product;
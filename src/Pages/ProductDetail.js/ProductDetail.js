import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProductDetail from '../../Hooks/UseProductDetail';
import './ProductDetail.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const [user] = useAuthState(auth);


    /*     const handleSubmit = event =>{
            console.log(event.target.value);
            const {minOrder, ...rest} =product;
            const newMinOrder =event.target.value;
            const newUser ={minOrder: newMinOrder, ...rest}
            console.log(newUser);
            (newUser);
        }  */

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            name: user.name,
            email: user.email,
            product: product.name,
            productId: productId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://agile-reaches-45369.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success('Your order is placed !!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='productDetail'>
            <div className='porductDetail-dev'>
                <form onSubmit={handlePlaceOrder}>
                    <input type="text" name='uName' class="input input-bordered input-md w-full max-w-xs mb-3" value={user?.displayName} readOnly disabled />
                    <br />
                    <input type="email" name='email' class="input input-bordered input-md w-full max-w-xs mb-3" value={user?.email} readOnly disabled />
                    <br />
                    <input type="text" name='name' class="input input-bordered input-md w-full max-w-xs mb-3" value={product.name} readOnly disabled />
                    <br />
                    <input type="text" name='minOrder' class="input input-bordered input-md w-full max-w-xs mb-3" value={product.minOrder} />
                    <br />
                    <input type="text" name='address' placeholder="Address" class="input input-bordered input-md w-full max-w-xs mb-3" required />
                    <br />
                    <input type="text" name='phone' placeholder="Phone" class="input input-bordered input-md w-full max-w-xs mb-3" required />
                    <br />
                    <input type="submit" value='Add Product' class="input input-bordered input-md w-full max-w-xs font-bold cursor-pointer bg-purple-200 hover:bg-purple-400 " />
                </form>
            </div>
        </div>
    );
};

export default ProductDetail;
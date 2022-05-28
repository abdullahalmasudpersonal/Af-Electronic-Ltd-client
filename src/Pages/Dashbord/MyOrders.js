import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://agile-reaches-45369.herokuapp.com/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user]);

    const deleteMyOrder = id => {
        const porceed = window.confirm('Are you sure?');
        if(porceed){
            const url = `https://agile-reaches-45369.herokuapp.com/order/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }


    return (
        <div className='ml-6'>
            <h2 className='mb-5'>My Orders</h2>
            <div>
                <h1 className='mb-5'>Your Orders: {orders.length}</h1>
                <div class="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Product Name</th>
                                <th>Manage</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order => <tbody key={order._id}>
                                <th>{user.displayName}</th>
                                <th>{order.product}</th>
                                
                                <th><button onClick={() => deleteMyOrder(order._id)} className='btn btn-xs  btn-outline btn-error'>Delete</button></th>

                                <th><button className='btn btn-xs  btn-outline btn-primary'>Pay</button></th>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
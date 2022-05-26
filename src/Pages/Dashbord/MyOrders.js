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
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders();

    }, [user])
    return (
        <div className='ml-6'>
            <h2>My Orders</h2>
            <div>
                <h1>Your Orders: {orders.length}</h1>
                {
                    orders.map(order => <div
                        key={order._id}>
                        {/* <p>{order.email} : {order.name}</p> */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;
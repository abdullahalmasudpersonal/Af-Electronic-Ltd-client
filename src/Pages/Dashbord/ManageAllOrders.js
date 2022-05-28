import React from 'react';
import useManageOrder from '../../Hooks/useManageOrder';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useManageOrder();

/*     const handleDelete = id => {
        const porceed = window.confirm('Are you sure?');
        if (porceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    } */

    return (
        <div className='ml-6'>
            <h2>Manage All Orders</h2>
            <div className='mt-4'>
                <h2 className='mt-3 mb-2 font-bold'>Manage Porduct: {orders.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Manage</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <tbody key={order._id}>
                            <th>{order.email}</th>
                            <th>{order.product}</th>
                            <th><button /* onClick={() => handleDelete(product._id)}  */className='btn btn-xs  btn-outline btn-error'>Delete</button></th>
                            <th><button /* onClick={() => handleDelete(product._id)}  */className='btn btn-xs  btn-outline btn-success'>Shift</button></th>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;
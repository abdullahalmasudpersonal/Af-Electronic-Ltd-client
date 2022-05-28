import React from 'react';
import usePorudcts from '../../Hooks/useProduct';

const ManagePorduct = () => {
    const [products, setProducts] = usePorudcts();

    const handleDelete = id => {
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
    }

    return (
        <div className='ml-6'>
            <h2>Manage Porduct</h2>
            <div className='mt-4'>
                <h2 className='mt-3 mb-2 font-bold'>Manage Porduct: {products.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <thead key={product._id}>
                            <th>{product.name}</th>
                            <th><button onClick={() => handleDelete(product._id)} className='btn btn-xs  btn-outline btn-error'>Delete</button></th>
                        </thead>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManagePorduct;
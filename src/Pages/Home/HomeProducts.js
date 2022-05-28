import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import '../Products/Products.css';

const HomeProducts = () => {
    const [homeProducts, setHomeProducts] = useState([]);

    useEffect(() => {
        fetch('https://agile-reaches-45369.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setHomeProducts(data));
    }, []);

    return (
        <div className='products'>
            <h1 className=' text-4xl font-bold text-center text-purple-600'> Electronic Tools</h1>
            <div className='products-dev'>
                {
                    homeProducts.slice(0, 6).map(homeProduct => <Product
                        key={homeProduct._id}
                        homeProduct={homeProduct}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;
import React from 'react';
import tools from '../../img/Busniness Summary/tools.png';
import './HomeReview.css';

const HomeReview = ({ homeReview }) => {
    const { name, ratting, dec, img } = homeReview;
    return (
        <div className='homereview'>
            <div className='review-item'>
                 <img className='' src={img} width='80px' alt='' /> 
                <h4 className='text-2xl text-center font-bold text-blue-900'>{name}</h4>
                <p className='text-center text-1xl font-bold text-pink-900'>Ratting {ratting}*</p>
                <p className='text-center text-1xl font-bold text-purple-900'>Description: <span className='text-sm'>{dec}</span></p>
            </div>
        </div>
    );
};

export default HomeReview;
import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import BestSelling from './BestSelling';
import BusinessSummary from './BusinessSummary';
import LearnMore from './LearnMore';

const Home = () => {

    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummary />
            <Reviews/>
            <LearnMore />
            <BestSelling />
        </div>
    );
};

export default Home;
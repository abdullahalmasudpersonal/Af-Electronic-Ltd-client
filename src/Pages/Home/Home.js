import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import BestSelling from './BestSelling';
import BusinessSummary from './BusinessSummary';
import HomeProducts from './HomeProducts';
import LearnMore from './LearnMore';

const Home = () => {

    return (
        <div>
            <Banner />
            <HomeProducts />
            <BusinessSummary />
            <Reviews/>
            <LearnMore />
            <BestSelling />
        </div>
    );
};

export default Home;
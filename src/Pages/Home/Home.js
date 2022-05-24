import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import BestSelling from './BestSelling';
import BusinessSummary from './BusinessSummary';
import HomeReviews from './HomeReviews';
import LearnMore from './LearnMore';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Products/>
           <BusinessSummary/>
            <HomeReviews/>
           <LearnMore/>
           <BestSelling/>
        </div>
    );
};

export default Home;
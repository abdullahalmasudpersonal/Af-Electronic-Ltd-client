import React from 'react';
import Banner from './Banner';
import BestSelling from './BestSelling';
import BusinessSummary from './BusinessSummary';
import LearnMore from './LearnMore';

const Home = () => {
    return (
        <div>
           <Banner/>
           <BusinessSummary/>
           <LearnMore/>
           <BestSelling/>
        </div>
    );
};

export default Home;
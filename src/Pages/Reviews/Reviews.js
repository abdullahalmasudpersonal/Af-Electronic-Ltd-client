import React, { useEffect, useState } from 'react';
import HomeReview from '../Home/HomeReview';
import './Reviews.css';

const Reviews = () => {
    const [homeReviews, setHomeReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setHomeReviews(data));
    }, []);
    return (
        <div className='reviews'>
            <h2 className='text-3xl text-center  '>Coustomer Reviews</h2>
            <div className='reviews-map'>
                {
                    homeReviews.map(homeReview => <HomeReview
                        key={homeReview._id}
                        homeReview={homeReview}
                    ></HomeReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;
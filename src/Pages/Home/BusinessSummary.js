import React from 'react';
import countries from '../../img/Busniness Summary/icons8-countries-64.png';
import feedback from '../../img/Busniness Summary/feedback.png';
import review from '../../img/Busniness Summary/review.png';
import tools from '../../img/Busniness Summary/tools.png';
import './BusinessSummary.css';

const BusinessSummary = () => {
    return (
        <div className='summary-bg'>
          <h3 className='text-4xl text-center font-bold  mb-10'>Business Summary</h3 >

            <div className='container-card'>

                <div className='business-item'>
                    <div>
                        <img src={countries} width='60px' alt='' />
                        <h4 className='text-2xl text-center font-bold'>99</h4>
                        <p className='text-center text-1xl font-bold'>Countries</p>
                    </div>
                </div>
                <div className='business-item'>
                    <div>
                        <img src={tools} width='60px' alt='' />
                        <h4 className='text-2xl text-center font-bold'>200+</h4>
                        <p className='text-center text-1xl font-bold'>Tools</p>
                    </div>
                </div>
                <div className='business-item'>
                    <div>
                        <img src={feedback} width='60px' alt='' />
                        <h4 className='text-2xl text-center font-bold'>10K+</h4>
                        <p className='text-center text-1xl font-bold'>Feedback</p>
                    </div>
                </div>
                <div className='business-item'>
                    <div>
                        <img src={review} width='60px' alt='' />
                        <h4 className='text-2xl text-center font-bold'>20K+</h4>
                        <p className='text-center text-1xl font-bold'>Review</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
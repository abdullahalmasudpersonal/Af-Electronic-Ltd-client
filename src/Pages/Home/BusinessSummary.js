import React from 'react';
import countries from '../../img/Busniness Summary/globe-solid.svg';

const BusinessSummary = () => {
    return (
        <div>
            <h3 className='text-3xl text-center m-5 font-bold'>Business Summary</h3 >
          <div>
              <img src={countries} width='40px' alt='' />
              <h4 className='text-2xl'>99</h4>
              <p className=''>Countries</p>
          </div>
        </div>
    );
};

export default BusinessSummary;
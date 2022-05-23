import React from 'react';
import electronicTools from '../../img/LearnMore/electronicTools.jpg';

const LearnMore = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-purple-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img style={{borderRadius:'5px'}} src={electronicTools} height='600px' width='600px' alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Learn more electronic</h1>
                        <p class="py-6 font-bold">This step-by-step guide will teach you the development process for a new electronic product. It’s written for entrepreneurs, startups, and small companies building their first hardware product.</p>
                        <p className='font-bold'>You won’t need any prior knowledge of electronics design to understand this article. Although, it will be easier to comprehend if you already have a technical background in computers, engineering or another field of science.</p><br/>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
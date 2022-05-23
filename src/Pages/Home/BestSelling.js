import React from 'react';
import bestSelling from '../../img/BestSelling/bestSelling.png';

const BestSelling = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-purple-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={bestSelling} height='600px' width='600' alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Best selling product!</h1>
                        <p class="py-6 font-bold">
                            While the year 2020 got worn down by the COVID-19 pandemic a ..The year 2020 has been surely a roller-coaster ride till now ..
                            Both in physical store and online, the Electronic products They are items that constantly appear on the lists of next purchases among Mexicans.
                            <br/><br/>
                            Information revealed by the Mexican Association for Online Sales (AMVO) indicates that 7 out of 10 Internet users bought an item from the electronics category in the last 24 months, that is, 72%.

                            Whether it is Good End, Black Friday or Cyber ​​Monday, as well as the Christmas season, this category is one of the most popular among buyers in the country throughout the year.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSelling;
import React from 'react';
import './MyPortfolio.css';

const MyPortfolio = () => {
    return (
        <div className='myportfolio'>
            <div>
                <h2 className='text-4xl text-center font-bold text-purple-900 pb-2 '>ABDULLAH AL MASUD</h2>
                <h2 className='text-center text-2xl text-blue-900 pb-5 '>abdullahalmasud772@gmail.com</h2>
                <div>
                    <h2 className='text-2xl text-center mb-3 text-pink-900 font-bold'>EDUCATONAL BACKGROUND</h2>
                    <div className="overflow-x-auto portfolio-table">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Group</th>
                                    <th>Board</th>
                                    <th>Pass.Year</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>PSC</th>
                                    <td className='text-center' >-</td>
                                    <td>MADRASAH</td>
                                    <td>2011</td>
                                    <td>GPA - 4.44</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>JDC</th>
                                    <td className='text-center'>-</td>
                                    <td>MADRASAH</td>
                                    <td>2014</td>
                                    <td>GPA - 4.75</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>DAKHIL</th>
                                    <td>Science</td>
                                    <td>MADRASAH</td>
                                    <td>2017</td>
                                    <td>GPA - 4.67</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>ALIM</th>
                                    <td>Science</td>
                                    <td>MADRASAH</td>
                                    <td>2020</td>
                                    <td>GPA - 4.81</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='text-center'>
                    <h2 className='text-2xl mt-5 text-purple-800 font-bold'>My skills as a web developer</h2>
                    <h2 className='mt-2 text-purple-900 font-bold'>List of technologies</h2>
                    <ul className='font-bold text-pink-900'>
                        <li>* HTML</li>
                        <li>* CSS</li>
                        <li>* BOOTSTRAP</li>
                        <li>* TAILWINDCSS</li>
                        <li>* DAISYUI</li>
                        <li>* JAVASCRIPT</li>
                        <li>* REACT TOASTIFY</li>
                        <li>* REACT HOOK FROM</li>
                        <li>* REACT</li>
                        <li>* NODE.JS</li>
                        <li>* EXPRESS</li>
                        <li>* AXIOS</li>
                        <li>* JWT</li>
                        <li>* MONGODB</li>
                        <li>* REACT QUERY</li>
                        <li>* REACT QUERY</li>
                    </ul>
                </div>

                <div className='mt-8 text-center font-bold text-purple-700'>

                    <a className=' mt-5 btn btn-outline btn-primary ' href="https://fstoppers.web.app/" target="_blank" >Fstoppers</a><br/>

                    <a className=' mt-5 btn btn-outline btn-primary ' href="https://abdullahalmasud-laptop-reviews.netlify.app/" target="_blank" >Laptop Review</a><br/>

                    <a className='mt-5 btn btn-outline btn-primary' href="https://computer-warehouse-5a411.web.app/" target="_blank" >Computer Warehouse</a><br/>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;
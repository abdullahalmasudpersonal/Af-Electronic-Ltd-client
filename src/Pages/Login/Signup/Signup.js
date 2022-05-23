import React from 'react';
import './SignUp.css';
import google from '../../../img/SocialLogin/google-logo3.png';
import github from '../../../img/SocialLogin/github-icon.png';
import facebook from '../../../img/SocialLogin/facebook.png';
import loginImg from '../../../img/loginImg/istockphoto-108622864-612x612_1_-removebg-preview.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup'>
            <div className='signup-dev'>
                <div>
                    <img width='350px' height='180px' src={loginImg} alt='' />
                </div>
                <h2 className='signup-hd'>SignUp</h2>

                <form className='signup-form'>
                    <input className='signup-input' type='text' placeholder=' Name'  required></input>
                    <input className='signup-input' type='email' placeholder=' Email' autoComplete='off' required></input>
                    <input className='signup-input' type='password' placeholder=' Password' autoComplete='off' required></input>
                    <input type='submit' className='signup-input input-submit' value='SingUp' />
                </form>

                <div className='signup-or mb-2 bt-2'>
                    <hr /> <p className='ml-1 mr-1' style={{color:'blue'}}>OR</p> <hr />
                </div>

                <div>
                <div>
                    <div className='socialLogin'>
                        <img height='40px' width='40px' src={github} alt='' />

                        <img height='40px' width='40px' src={google} alt='' />

                        <img height='40px' width='40px' src={facebook} alt='' />
                    </div>
                </div>
                </div>

                <div className='new-user mt-4'>
                    <p style={{ textAlign: 'center' }}>Alrady have an account? <Link to='/login' style={{ textDecoration: 'none' }}><span>Login</span></Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Signup;
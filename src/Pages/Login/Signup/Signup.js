import React from 'react';
import './SignUp.css';
import loginImg from '../../../img/loginImg/istockphoto-108622864-612x612_1_-removebg-preview.png';
import SocialLogin from '../SocialLogin/SocialLogin';
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
                    <input className='signup-input' type='text' placeholder=' Name' required></input>
                    <input className='signup-input' type='email' placeholder=' Email' required></input>
                    <input className='signup-input' type='password' placeholder=' Password' required></input>
                    <input type='submit' className='signup-input input-submit' value='SingUp' />
                </form>

                <div className='signup-or'>
                    <hr /> <p>OR</p> <hr />
                </div>

                <div>
                    <SocialLogin />
                </div>

                <div className='new-user'>
                    <p style={{ textAlign: 'center' }}>Alrady have an account? <Link to='/login' style={{ textDecoration: 'none' }}><span>Login</span></Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Signup;
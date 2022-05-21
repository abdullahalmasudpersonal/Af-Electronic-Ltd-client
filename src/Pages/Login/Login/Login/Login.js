import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import loginImg from '../../../../img/loginImg/istockphoto-108622864-612x612_1_-removebg-preview.png';


const Login = () => {
    return (
        <div className='login'>
            <div className='login-dev'>
                <div>
                    <img width='350px' height='180px' src={loginImg} alt='' />
                </div>

                <h2 className='login-hd'>Login</h2>

                <form className='login-form'>
                    <input className='input' type='email' placeholder=' Email' required></input>
                    <input className='input' type='password' placeholder=' Password' required></input>
                    <input type='submit' className='input input-submit' value='Login' />

                </form>

                <p className='forgot-btn'>Forgot Password</p>

                <div className='login-or'>
                    <hr /> <p>OR</p> <hr />
                </div>

                <div>
                    <SocialLogin />
                </div>

                <div className='new-user'>
                    <p style={{ textAlign: 'center' }}>New to Computer Warehouse? <span>Register</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
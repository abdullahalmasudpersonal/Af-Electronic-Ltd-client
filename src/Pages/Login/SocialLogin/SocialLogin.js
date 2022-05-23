import React from 'react';
import google from '../../../img/SocialLogin/google-logo3.png';
import github from '../../../img/SocialLogin/github-icon.png';
import facebook from '../../../img/SocialLogin/facebook.png';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div className='socialLogin'>
            <img height='40px' width='40px' src={github} alt='' />

            <img height='40px' width='40px' src={google} alt='' />
            
            <img height='40px' width='40px' src={facebook} alt='' />
        </div>
    );
};

export default SocialLogin;
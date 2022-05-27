import React from 'react';
import './SignUp.css';
import google from '../../../img/SocialLogin/google-logo3.png';
import github from '../../../img/SocialLogin/github-icon.png';
import facebook from '../../../img/SocialLogin/facebook.png';
import loginImg from '../../../img/loginImg/istockphoto-108622864-612x612_1_-removebg-preview.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../Hooks/useToken';

const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updatError] = useUpdateProfile(auth);

    const [token] = useToken((gUser || user));


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (error || gError || updating) {
        signInError = <p className='text-red-500 mb-1 mt-0'><small>{error?.message || gError?.message || updatError?.message}</small></p>
    }

/*     if (gUser || user) {
        // navigate(from, {replace: true});
    } */
    if (token) {
         navigate(from, {replace: true});
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    return (
        <div className='signup'>
            <div className='signup-dev'>
                <div>
                    <img width='350px' height='180px' src={loginImg} alt='' />
                </div>
                <h2 className='signup-hd'>SignUp</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='signup-form'>

                    {/*  <input className='signup-input' type='text' placeholder=' Name' required></input> */}

                    <div>
                        <input className='signup-input' type='text'
                            placeholder=' Name' autoComplete="off"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className='label ml-12'>
                            {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                        </label>
                    </div>

                    <div>
                        <input className='signup-input' type='email'
                            placeholder=' Email' autoComplete="off"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className='label ml-12'>
                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                        </label>
                    </div>


                    <div>
                        <input className='signup-input' type='password'
                            placeholder=' Password' autoComplete="off"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className='label ml-12'>
                            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                        </label>
                    </div>

                    {signInError}
                    <input type='submit' className='signup-input input-submit' value='SingUp' />

                </form>

                <div className='signup-or mb-2 mt-2'>
                    <hr /> <p className='ml-1 mr-1' style={{ color: 'blue' }}>OR</p> <hr />
                </div>

                <div>
                    <div>
                        <div className='socialLogin'>
                            <img height='40px' width='40px' src={github} alt='' />

                            <img height='40px' width='40px'
                                onClick={() => signInWithGoogle()}
                                src={google} alt='' />

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
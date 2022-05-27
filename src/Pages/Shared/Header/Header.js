import React from 'react';
import './Header.css';
import logo from '../../../img/Logo/logo.png';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div className='header'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home' >Home</Link></li>
                            {
                                user && <li><Link to='/dashbord' >Dashbord</Link></li>
                            }
                            <li><Link to='/products' >Products</Link></li>
                            <li><Link to='/reviews' >Reviews</Link></li>
                            <li><Link to='/blogs' >Blogs</Link></li>
                            <li><Link to='/myportfolio' >My Portfolio</Link></li>
                            <li>{
                                user ? <button className='font-bold' onClick={logout}>sign Out</button> : <Link to='/login'>Login</Link>
                            }</li>
                        </ul>
                    </div>
                    <Link to='/' ><img src={logo} alt='logo' /></Link>
                </div>

                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home' >Home</Link></li>
                        {
                            user && <li><Link to='/dashbord' >Dashbord</Link></li>
                        }
                        <li><Link to='/products' >Products</Link></li>
                        <li><Link to='/reviews' >Reviews</Link></li>
                        <li><Link to='/blogs' >Blogs</Link></li>
                        <li><Link to='/myportfolio' >My Portfolio</Link></li>
                    </ul>
                </div>

                <div class="navbar-end ">
                    <div class="hidden lg:flex">
                        {user ? <button className='font-bold' onClick={logout}>sign Out</button> : <Link to='/login'>Login</Link>}
                    </div>

                    <label tabindex="1" for="dashbord-sideber" class="btn btn-ghost lg:hidden ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;
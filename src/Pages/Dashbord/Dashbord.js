import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashbord-sideber" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl font-bold text-purple-900 ml-6 mt-4'>Dashbord</h2>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashbord-sideber" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content font-bold">
                        <li><Link to='/dashbord'>My Profile</Link></li>
                        <li><Link to='/dashbord/myorders'>My Orders</Link></li>
                        <li><Link to='/dashbord/addreview'>Add Review</Link></li>
                        <li><Link to='/dashbord/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashbord/manageproduct'>Manage Product</Link></li>
                        <li><Link to='/dashbord/makeadmin'>Make Admin</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;
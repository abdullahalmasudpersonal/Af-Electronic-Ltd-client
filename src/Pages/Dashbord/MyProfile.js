import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className='ml-6'>
            <h2>My Profile</h2>
            <div>
            <div className='flex justify-center items-center'>
            <img className='rounded' src={user.photoURL} alt='' />
            </div>
                <h2 className='text-center mt-3'>{user.displayName}</h2>
                <h2 className='text-center mt-1'>{user.email}</h2>
                
    
            </div>
        </div>
    );
};

export default MyProfile;
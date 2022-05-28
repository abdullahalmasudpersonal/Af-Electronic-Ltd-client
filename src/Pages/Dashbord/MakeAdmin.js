import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://agile-reaches-45369.herokuapp.com/user', {
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='ml-6'>
            <h2>Make Admin: {users.length}</h2>
            <table className="table ">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>EMAIL</th>
                        <th>USER</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => <AdminRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;
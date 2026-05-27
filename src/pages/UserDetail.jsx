import React from 'react';
import { useLoaderData} from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
 
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600">{user.login}</h1>
            <div><img src={user.avatar_url} alt={user.login} /></div>
        </div>
    );
}

export default UserDetail;

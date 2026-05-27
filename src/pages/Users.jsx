import React, { useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    const [queryParams, setQueryParams] = useSearchParams();
    const [searchText, setSearchText] = useState(queryParams.get('q') || '');    

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setQueryParams({ q: e.target.value });
    };

    const filterUsers = (user) => {
        return searchText.trim() === '' ? true : user.login.toLowerCase().includes(searchText.toLowerCase());
    };


    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-600'>Users</h1>
            
            <input 
                type="text" 
                value={searchText} 
                onChange={handleSearch} 
                className='border' 
            />
            
            {users.filter(filterUsers).map(user => (
                <div key={user.id}>
                    <Link to={`/users/${user.login}`} className='text-blue-600 hover:text-blue-900'>
                        {user.login}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Users;

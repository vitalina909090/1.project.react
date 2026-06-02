import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPostsWithAuthor } from '../features/posts/PostsSlice';
import { fetchUsers } from '../features/users/UsersSlice';
import { useGetTodosQuery } from '../api/todoApi';

const Posts = () => {
    const {data, loading: todoLoading, error: todoError } = useGetTodosQuery();
    console.log(data);

    const posts = useSelector(selectPostsWithAuthor);
    const { loading, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchUsers());
    }, []);

    if(loading) return <h1>Loading...</h1>;
    if(error) return <h1>{error}</h1>;

    return (
        <div>
            <h1 className='text-3xl'>Posts</h1>
            {posts.map(post => (
                <div key={post.id} className='p-3 border'>
                    <div className='text-2xl'>{post.title}</div>
                    <div className='text-italic'>{post.author}</div>
                    <div>{post.body}</div>
                </div>
            ))}
        </div>
    );
}

export default Posts;

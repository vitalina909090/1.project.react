import React, { useEffect, useRef } from 'react';
import Counters from '../components/learn/counters/Counters';
import { useDispatch, useSelector } from 'react-redux';
import { increment, setCount } from '../features/counter/counterSlice';

const About = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
        // console.log(inputRef);
    }, [])

    return (
        <div>
            <div>{count}</div>
            <button className='border p-4' onClick={() => dispatch(increment())}>+</button>
            <button className='border p-4' onClick={() => dispatch(setCount(10))}>set 10</button>


            <h1 className='text-3xl font-bold text-blue-600'>About Us</h1>
            <input ref={inputRef} type="text" className='border'  />
        
            <Counters />
        </div>
    );
}

export default About;

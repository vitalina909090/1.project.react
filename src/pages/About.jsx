import React, { useEffect, useRef } from 'react';

const About = () => {
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef);
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-600'>About Us</h1>
            <input ref={inputRef} type="text" className='border'  />
        </div>
    );
}

export default About;

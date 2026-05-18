import "./First.css";
import React, { useState } from 'react';

const First = () => {
    // 1 ЗАДАНИЕ
    // const show = true;
    // const flag = true;

    // if(flag)
    // return (
    //     <>
    //         <div className="intro">
    //             {show && <h1>Welcome to my website!</h1>}
    //         </div>
    //         <p className="summary">
    //             You can find my thoughts here.
    //             <br />
    //             <b>And <i>pictures</i></b> of scientists!
    //         </p>
    //     </>
    // );

    // return <div>Flag False</div>


    // 2 ЗАДАНИЕ
    // const hello = (e, message) => {
    //     console.log(e);   
    // }

    const [i, setI] = useState(1);
    const [visibleSpoiler, setVisibleSpoiler] = useState(false);
    
    const toggleSpoiler = () => { setVisibleSpoiler(!visibleSpoiler); }

    const increment = () => {
        setI(prev => prev + 1); 
        setI(prev => prev + 1); 
        setI(prev => prev + 1); 

    }
    const decrement = () => { setI(i - 1); }

    
    return (
        <div>
            <h1>First</h1>
            {/* <button onClick={ (e) => hello(e, 'Welcome') }>Show</button> */}
            <button onClick={toggleSpoiler}>Show Spoiler</button>
            {visibleSpoiler && <div>Spoiler</div>}

            <hr />

            <button onClick={decrement}>-</button>
            <b>{i}</b>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default First;

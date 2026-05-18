import React, { useState } from 'react';

const Second = () => {
    const [text, setText] = useState('welcome');

    const [user, setUser] = useState({
        name: 'Vitalina',
        age: 20,
    });

    const handleChangeName = () => {
        setUser({...user, name: text});
        console.log(user);
        
    }

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleChangeName}>Change Name</button>
            <div>
                {user.name}, {user.age}
            </div>
        </div>
    );
}

export default Second;

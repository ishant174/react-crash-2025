import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const playSound = (sound) => {
        const audio = new Audio('/'+sound+'.mp3');
        audio.play();
    };

    const increment = () => {
        setCount(count + 1);
        playSound('ram');
    };
    const decrement = () => {

        setCount(count - 1)
     playSound('om');
    };
    const reset = () => setCount(0);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
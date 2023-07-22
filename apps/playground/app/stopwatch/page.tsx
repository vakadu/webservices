"use client";

import { useEffect, useState } from 'react';

const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const timerId = setInterval(updateTimer, 1000);

        return () => clearInterval(timerId);
    }, [isRunning]);

    const updateTimer = () => {
        if(isRunning) {
            setTimer((prev) => prev+1);
        }
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTimer(0);
        setIsRunning(false);
    };

    return(
        <div>
            { timer }
            <div className='grid grid-cols-3 gap-14 mt-54'>
                <button
                    onClick={handleStart}
                >
                    start
                </button>
                <button onClick={handlePause}>
                    pause
                </button>
                <button onClick={handleReset}>
                    reset
                </button>
            </div>
        </div>
    )
};

export default Stopwatch;

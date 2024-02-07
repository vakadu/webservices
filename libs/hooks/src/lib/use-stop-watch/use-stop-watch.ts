"use client"

import { useState, useEffect } from 'react';

export function useStopWatch() {
    const [time, setTimer] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if(isRunning) {
            intervalId = setInterval(() => {
                setTimer((prev) => prev + 1)
            }, 10)
        }

        return () => {
            if(intervalId) {
                clearInterval(intervalId);
            }
        }
    }, [isRunning]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 36000)/6000);
    const seconds =  Math.floor((time % 6000) / 100);

    const start = () => {
  		setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setTimer(0);
        setIsRunning(false);
    };

    return {
        hours,
        minutes,
        seconds,
        start,
        stop,
        reset,
    };
}

export default useStopWatch;

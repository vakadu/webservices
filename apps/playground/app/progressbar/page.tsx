"use client";

import { useEffect, useState } from 'react';

import { Button } from '@webservices/ui';

const Progressbar = () => {
    const [running, setRunning] = useState(false);
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(0);

    // useEffect(() => {

    //     if(running) {
    //         const timerId = setInterval(() => {
    //             setBar((prev) => prev >= 100 ? prev : prev + 1);
    //         }, 20);
    
    //         return () => {
    //             clearInterval(timerId);
    //         };
    //     }

    // }, [running]);

    // useEffect(() => {

    //     console.log(count > 0, "coun");
        

    //     if(count > 0) {
    //         console.log(count, "0");
            
    //         for(let i=1; i<=count; i++) {
    //             setBar(0);
    //             if(bar < 0) {
    //                 setCount((prev) => prev - 1);
    //             }
    //         }
    //     }

    // }, [count]);

    

    const handleStart = () => {
        setCount((prev) => prev + 1);
        if(!running) {
            tick();
            setRunning(true);
        }
    };

    const tick = () => {    
        console.log(width, '=====');
            
        if(width >= 100) {
            setCount((prev) => prev - 1);
            setWidth(0);
        } else {
            setWidth((prevWidth) => Math.min(prevWidth + 1, 100));
        }

        setTimeout(tick, 30);
    };

    console.log(width);
    

    return(
        <div className='m-24 flex justify-start items-center flex-col'>
            Progressbar

            <div className='h-24 w-[200px] bg-slate-400 relative'>
                <div style={{ width: `${width}%` }} className={`absolute h-full bg-green-800`}>

                </div>
            </div>

            <Button 
                onClick={handleStart}
                className='mt-24'
            >
                start{ count > 0 ? `(${count})` : ''}
            </Button>
        </div>
    )
};

export default Progressbar;

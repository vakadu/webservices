'use client'

import { useEffect, useRef, useState } from "react";

const Page = () => {
    const [value, setValue] = useState(0);
    const [runCount, setRunCount] = useState(0);
    const timer = useRef<any>(null);

    useEffect(() => {

        if (runCount > 0 && !timer.current) {
            timer.current = setInterval(() => {
                setValue((prev) => prev + 10);
            }, 300)
        }

        if (value >= 100) {
            setValue(0);
            setRunCount(runCount - 1)
        }

        if (runCount === 0 && timer.current) {
            clearInterval(timer.current);
            timer.current = null;
        }

        return () => {
            clearInterval(timer.current)
            timer.current = null;
        }
    }, [value, runCount]);

    const handleRun = () => {
        setRunCount(runCount + 1)
    };

    return (
        <section className="px-24 max-w-lg mx-auto mt-[100px] flex flex-col gap-[32px]">
            <progress value={value} max={100} />
            <button onClick={handleRun}>
                {runCount > 1 && runCount} Run
            </button>
        </section>
    )
};

export default Page

'use client'

import useTimer from "./use-timer";

const Page = () => {
    const { isRunning, start, stop, seconds } = useTimer();
    console.log(seconds);

    return (
        <section className="px-24 max-w-lg mx-auto mt-[100px] ">
            <span className="text-[32px] font-bold">{isRunning ? seconds : 'No timer Running'}</span>
            <section className="flex gap-[32px] items-center justify-center mt-[54px]">
                <button onClick={start}>
                    start
                </button>
                <button onClick={stop}>
                    stop
                </button>
            </section>

        </section>
    )
};

export default Page

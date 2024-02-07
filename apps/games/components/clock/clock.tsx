"use client"

import { useDigitalClock } from "@webservices/hooks";

const DigitalClock = () => {
    const { hours, minutes, seconds, peroid } = useDigitalClock();
    
    return (
        <section className="text-center mb-32 flex justify-center items-center">
            <span className="text-32 font-bold w-[42px] h-[42px]">{hours.toString().padStart(2, "0")}</span>
            <span className="text-32 font-bold relative px-4">:</span>
            <span className="text-32 font-bold w-[42px] h-[42px]">{minutes.toString().padStart(2, "0")}</span>
            <span className="text-32 font-bold relative px-4">:</span>
            <span className="text-32 font-bold w-[42px] h-[42px]">{seconds.toString().padStart(2, "0")}</span>
            <span className="text-32 font-bold w-[42px] h-[42px] px-12">
                { peroid }
            </span>
        </section>
    )
};

export default DigitalClock;

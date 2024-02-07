"use client"

import { useStopWatch } from "@webservices/hooks";
import { Button } from "@webservices/ui";

export default function Stopwatch() {
    const { hours, minutes, seconds, start, stop, reset } = useStopWatch();

	return (
        <>
            <section className="text-center mb-32 flex justify-center items-center">
                <span className="text-32 font-bold">{hours.toString().padStart(2, "0")}</span>
                <span className="text-32 font-bold relative -top-3 px-4">:</span>
                <span className="text-32 font-bold">{minutes.toString().padStart(2, "0")}</span>
                <span className="text-32 font-bold relative -top-3 px-4">:</span>
                <span className="text-32 font-bold">{seconds.toString().padStart(2, "0")}</span>
            </section>
            <section className="grid grid-cols-3 gap-24 max-w-[350px] mx-auto">
                <Button
                    onClick={start}
                >
                    Start
                </Button>
                <Button
                    color="danger"
                    onClick={stop}
                >
                    Stop
                </Button>
                <Button
                    variant="ghost"
                    onClick={reset}
                >
                    Reset
                </Button>
            </section>
        </>
	);
}

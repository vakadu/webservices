'use client'

import { useState } from "react";

import usePrevious from "./use-prev";

const Page = () => {

    const [count, setCount] = useState(0);

    // Get the previous value (was passed into hook on last render)
    const prevCount = usePrevious(count);

    // const onInc = () => {
    //     setCount((prev) => {
    //         const temp = prev;
    //         setPrev(temp)
    //         return prev + 1;
    //     })
    // };

    // Implementation of usePrevious should be such that
    // count should always be ahead of prevCount
    // 0 0
    // 1 0
    // 2 1
    // 3 2
    // ...
    return (
        <section className="px-24 max-w-lg mx-auto mt-[100px] ">
            <h1>
                Now: {count}, before: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </section>
    );
};

export default Page

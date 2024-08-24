'use client'

import { useEffect, useRef, useState } from "react";

const images = [
    "https://ik.imagekit.io/devtoolstech/devtools-tech-banner_QuoILF3fK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643016588956",
    "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
];

const Page = () => {
    const [active, setActive] = useState(0);
    let timer = useRef();

    useEffect(() => {
        if (active < images.length - 1) {
            timer.current = setTimeout(() => {
                setActive(active + 1);
            }, 3000);
        }

        return () => clearTimeout(timer.current);

    }, [active]);

    const handlePrev = () => {
        setActive(active - 1)
    };

    const handleNext = () => {
        setActive(active + 1)
    };

    return (
        <section className="px-24 max-w-lg mx-auto mt-[100px] flex flex-col gap-[32px]">
            {
                images?.map((image, i) => {
                    return (
                        <figure className={`${active === i ? 'block' : 'hidden'}`} key={i}>
                            <img
                                src={image}
                            />
                        </figure>
                    )
                })
            }
            <section>
                <button disabled={active <= 0} onClick={handlePrev}>
                    Prev
                </button>
                <button disabled={active >= images.length - 1} onClick={handleNext}>
                    Next
                </button>
            </section>
        </section>
    )
};

export default Page

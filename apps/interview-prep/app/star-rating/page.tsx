'use client';

import { useEffect, useState } from 'react';

const Page = () => {
    const [stars, setStars] = useState(new Array(5).fill(false));
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [star, setStar] = useState();

    const handleStar = (e: any) => {
        const elem = e.target;
        const id = Number(elem.getAttribute('data-id'));
        const newStars = stars.map((_, i) => i <= id);
        setStars(newStars);
        setStar(id + 1);
    };


    const onMouseEnter = (id: number) => {
        setHoverIndex(id)
    };

    const onMouseLeave = (id: number) => {
        setHoverIndex(-1)
    };

    return (
        <section className="px-24 max-w-lg mx-auto mt-[100px] ">
            <section className='flex gap-3' onClick={handleStar}>
                {stars.map((star, i) => {
                    return (
                        <i
                            onMouseEnter={() => onMouseEnter(i)}
                            onMouseLeave={() => onMouseLeave(i)}
                            data-id={i}
                            key={i}
                            className={`fa ${star || hoverIndex >= i ? 'fa-star' : 'fa-star-o'} !text-[32px]`}
                        ></i>
                    );
                })}
            </section>
            <span>
                {star}
            </span>
        </section>
    );
};

export default Page;

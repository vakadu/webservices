'use client';

import { useState } from 'react';

const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Mango',
    'Orange',
    'Peach',
    'Pineapple',
    'Strawberry',
    'Grapes',
    'Blueberry',
];

const Page = () => {
    const [value, setValue] = useState('');
    const [filteredFruits, setFilteredFruits] = useState(fruits);

    const handleChange = (e: any) => {
        setValue(e.target.value.toLowerCase());
        debouncedFilter(e.target.value.toLowerCase());
    };

    const filter = (val: string) => {
        setFilteredFruits(
            fruits.filter((fruit) => fruit.toLowerCase().includes(val.toLowerCase()))
        );
    };

    const debouce = (func: any, delay: number) => {
        let timer: any;
        return (...args: any) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const debouncedFilter = debouce(filter, 3000);

    return (
        <section className="px-24 max-w-lg mx-auto mt-[100px] ">
            <input
                className="border border-black-bg w-[250px] h-[42px] rounded-[8px] px-[12px]"
                value={value}
                onChange={handleChange}
            />
            {filteredFruits.map((fruit) => {
                return <li onClick={() => setValue(fruit)} key={fruit}>{fruit}</li>;
            })}
        </section>
    );
};

export default Page;

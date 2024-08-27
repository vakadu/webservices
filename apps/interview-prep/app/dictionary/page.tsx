'use client';

import { useCallback, useState } from 'react';

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const Page = () => {
    const [value, setValue] = useState('');

    const fetchApi = async (val: string) => {
        const response = await fetch(URL + val);
        const data = response.json();
        console.log(data);

    };

    const handleChange = (e: any) => {
        setValue(e.target.value);
        debouncedInput(e.target.value);
    };

    const debounce = (func: any, delay: number) => {
        let timer: any;
        return function (...args: any) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const debouncedInput = useCallback(debounce(fetchApi, 300), []);

    return (
        <section className="px-24 max-w-lg mx-auto mt-[100px] ">
            <input
                className="border border-black-bg w-[250px] h-[42px] rounded-[8px] px-[12px]"
                value={value}
                onChange={handleChange}
            />
        </section>
    );
};

export default Page;

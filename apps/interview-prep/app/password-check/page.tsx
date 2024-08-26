'use client'

import { useState } from "react";

const Page = () => {
    const [value, setValue] = useState('');
    const [progress, setProgress] = useState(0);
    const [strength, setStrength] = useState(0);

    const handleChange = (e: any) => {
        setValue(e.target.value);
        checkStr(e.target.value)
    };

    const checkStr = (val: string) => {
        let strength = 0
        if (/[A-Z]/.test(val)) {
            strength++
        }
        if (/[a-z]/.test(val)) {
            strength++
        }
        if (/\d/.test(val)) {
            strength++
        }
        if (/[^A-Za-z0-9]/.test(val)) {
            strength++
        }

        setStrength(strength)
    };

    const strrengthCOlors = () => {
        if (strength > 8) {
            return 'bg-green-700';
        } else if (strength <= 6) {
            return 'bg-red-900'
        } else if (strength > 6 && strength <= 8) {
            return 'bg-yello-900'
        } else {
            return ''
        }
    };

    return (
        <section className="px-24 max-w-xl mx-auto mt-[100px]">
            <input
                className="border border-black-bg h-[42px] rounded-[8px] px-[12px] w-full"
                value={value}
                onChange={handleChange}
                minLength={6}
                maxLength={32}
            />
            <div className="h-[10px] rounded-full w-full bg-slate-300 mt-[24px]">
                <div style={{ width: `${strength * 10}%` }}
                    className={`${strrengthCOlors()} h-full rounded-full`}>

                </div>
            </div>
        </section>
    )
};

export default Page

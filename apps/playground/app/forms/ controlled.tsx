"use client"

import { useState } from 'react';
import { Button } from "@webservices/ui";

const ControlledForms = () => {
    const [value, setValue] = useState<any>({});

    const onPress = (e: any) => {
        e.preventDefault();
    };

    const handleChange = (e: any) => {

        setValue((prev: any) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))        
    };      

    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <div className='mb-24'>
                { JSON.stringify(value) }
            </div>
            <form className='flex flex-col' onSubmit={onPress}>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    value={value?.name ? value?.name : ''}
                    onChange={handleChange}
                    className='mb-24'
                />
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    value={value?.email ? value?.email : ''}
                    onChange={handleChange}
                    className='mb-24'
                />
                <Button
                    type="submit"  
                    className='mb-24'                  
                >
                    submit
                </Button>
            </form>
        </div>
    )
};

export default ControlledForms;


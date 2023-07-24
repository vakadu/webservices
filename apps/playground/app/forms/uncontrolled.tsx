"use client"

import { useRef } from 'react';
import { Button } from "@webservices/ui";

const Uncontrolled = () => {
    const nameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);

    console.log(nameRef.current?.value);
    

    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <div className='mb-24'>
                { nameRef.current?.value }
                { emailRef.current?.value }
            </div>
            <form className='flex flex-col'>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    className='mb-24'
                    ref={nameRef}
                />
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    className='mb-24'
                    ref={emailRef}
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

export default Uncontrolled;

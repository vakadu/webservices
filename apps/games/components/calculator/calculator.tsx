"use client"
import { Textfit } from 'react-textfit';

import { useCalculator } from "@webservices/hooks";
import { Button } from "@webservices/ui";

const Calculator = () => {
    const { handleType, calculateTotal, reset, data, classes, state } = useCalculator();

    return ( 
        <section className="w-[412px] p-32 shadow-2 bg-white">
            <section className="mb-24 h-54 bg-white border-2 border-grey-1 px-12 py-6 rounded-4 flex justify-end">
                <Textfit className='w-full flex justify-end items-center font-bold' mode="single" max={34}>
                    { state.num ? state.num: state.res }
                </Textfit>
            </section>
            <section className="grid grid-cols-4 gap-12 mb-24">
                {
                    data.flat().map((current) => {                        
                        return (
                            <Button
                                className={classes(current)}
                                onClick={(e) => handleType(e, current)}
                                key={current}
                            >
                                { current }
                            </Button>
                        )
                    })
                }
            </section>
        </section>
    )
};

export default Calculator;

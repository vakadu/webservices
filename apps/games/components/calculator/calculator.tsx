"use client"

import { useCalculator } from "@webservices/hooks";
import { CloseIcon, DivideIcon, EqualIcon, MinusIcon, PlusIcon } from "@webservices/icons";
import { Button } from "@webservices/ui";

const Calculator = () => {
    const { count } = useCalculator();

    return ( 
        <section className=" max-w-[480px] p-32 shadow-2 bg-white">
            <section className="border-2 border-grey-1 h-54 mb-24 rounded-4">

            </section>
            <section className="grid grid-cols-4 gap-12 mb-24">
                <Button
                    color="gray"
                    variant="ghost"
                    className="w-78 !px-12"
                >
                    <PlusIcon className="w-18 h-18"/>
                </Button>
                <Button
                    color="gray"
                    variant="ghost"
                    className="w-78 !px-12"
                >
                    <MinusIcon className="w-18 h-18"/>
                </Button>
                <Button
                    color="gray"
                    variant="ghost"
                    className="w-78 !px-12"
                >
                    <CloseIcon className="w-12 h-12"/>
                </Button>
                <Button
                    color="gray"
                    variant="ghost"
                    className="w-78 !px-12"
                >
                    <DivideIcon className="w-18 h-18"/>
                </Button>
            </section>
            <section className="grid grid-cols-4 gap-12">
                <section className="grid grid-cols-3 gap-12 col-span-3">
                    {
                        Array.from({ length: 9 }).map((_, i) => {                            
                            return (
                                <Button
                                    color="gray"
                                    variant="ghost"
                                    className="w-78 !px-12"
                                    key={i}
                                >
                                    { i + 1 }
                                </Button>
                            )
                        })
                    }
                    <Button
                        color="gray"
                        variant="ghost"
                        className="w-78 !px-12"
                    >
                        0
                    </Button>
                    <Button
                        color="gray"
                        variant="ghost"
                        className="w-78 !px-12"
                    >
                        <span className="w-4 h-4 rounded-full bg-black"/>
                    </Button>
                    <Button
                        color="gray"
                        variant="ghost"
                        className="w-78 !px-12"
                    >
                        C
                    </Button>
                </section>
                <section className="col-span-1">
                    <Button className="h-full w-78 !px-12">
                        <EqualIcon className="w-16 h-16"/>
                    </Button>
                </section>
            </section>
        </section>
    )
};

export default Calculator;

'use client'

import React, { useState } from "react";

import { AccordianContext, AccordianItemContext, useAccordian, useAccordianItem } from './context';

const Accordian = ({ children }: { children: any }) => {
    const [activePanel, setActivePanel] = useState(null);

    const value = {
        activePanel,
        handleActivePanel: setActivePanel
    } as any;

    return (
        <AccordianContext.Provider value={value}>
            <section>
                {children}
                {/* {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        activePanel,
                        handleActivePanel: setActivePanel
                    })
                })
            } */}
            </section>
        </AccordianContext.Provider>

    )
};

export const AccordionItem = ({ id, children, activePanel, handleActivePanel }: any) => {
    const value = {
        id,
    } as any;

    return (
        <AccordianItemContext.Provider value={value}>
            <section>
                {children}
                {/* {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {
                            activePanel,
                            handleActivePanel,
                            id
                        })
                    })
                } */}
            </section>
        </AccordianItemContext.Provider>

    )
};

export const AccordionToggle
    = ({ children }: any) => {
        const { id } = useAccordianItem();
        const { handleActivePanel } = useAccordian();

        return (
            <button className="h-[42px] bg-slate-500 w-full mb-[12px]" onClick={() => handleActivePanel(id)}>
                {children}
            </button>
        )
    };

export const AccordionPanel
    = ({ children }: any) => {
        const { id } = useAccordianItem();
        const { activePanel } = useAccordian();
        if (id === activePanel) {
            return (
                <section>
                    {children}
                </section>
            )
        }

    };


export default Accordian;

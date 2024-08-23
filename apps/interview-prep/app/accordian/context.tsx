import React, { useContext, createContext } from 'react';

export const AccordianContext = createContext(null);
export const AccordianItemContext = createContext(null);

export function useAccordian() {
    const context = useContext(AccordianContext);
    if (context === undefined) {
        throw new Error('Error');
    }

    return context;
}

export function useAccordianItem() {
    const context = useContext(AccordianItemContext);
    if (context === undefined) {
        throw new Error('Error');
    }

    return context;
}

import { useContext, createContext } from 'react';

export const ModalContext = createContext(null);

export const useModal = () => {
    const modalState = useContext(ModalContext);
    if (modalState === undefined) {
        throw new Error('No modal')
    }
    return modalState
};

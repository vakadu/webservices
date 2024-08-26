import { Children, cloneElement, useState } from 'react';
import { ModalContext, useModal } from './context';

const Modal = ({ children }: any) => {
    const { open } = useModal();
    if (open) {
        return (
            <section
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            >
                <section className="blur-lg w-full h-full"></section>
                <section className="bg-white w-[300px] border rounded-md z-[100]">
                    {children}
                    {/* {Children.map(children, (child) => {
                            return cloneElement(child, {
                                open,
                                handleOpen,
                            });
                        })} */}
                </section>
            </section>

        );
    }
    return null;
};

export const ModalHeader = ({ children }: any) => {
    const { handleOpen } = useModal();
    return (
        <header className="flex justify-between items-center py-4 px-2">
            {children}
            <span className="cursor-pointer" onClick={() => handleOpen(false)}>
                close
            </span>
        </header>
    );
};

export const ModalBody = ({ children }: any) => {
    return <section>{children}</section>;
};

export default Modal;

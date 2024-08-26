'use client';

import { useState } from 'react';
import Modal, { ModalBody, ModalHeader } from './modal';
import { ModalContext, useModal } from './context';

const lightColors = [
    '#FFB6C1', // Light Pink
    '#FFD700', // Gold
    '#87CEFA', // Light Sky Blue
    '#98FB98', // Pale Green
    '#FFE4B5', // Moccasin
    '#FFDEAD', // Navajo White
    '#E6E6FA', // Lavender
    '#FFFACD', // Lemon Chiffon
    '#F0E68C', // Khaki
    '#F5DEB3'  // Wheat
];

const Page = () => {
    const [data, setData] = useState<any>([]);
    const [value, setValue] = useState('');

    const [open, setOpen] = useState(false);
    const values = {
        open,
        handleOpen: () => setOpen(!open),
    } as any

    const trimStr = (s: string) => {
        return s.slice(0, 1).toUpperCase()
    };

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    const formSubmit = () => {
        setData((prev: any) => {
            const prevData = prev;
            return [...prevData, { name: value, id: Math.floor(Math.random() * 100) }];
        });
        setValue('');
        setOpen(false);
    };

    const deleteItem = (id: number) => {
        const filterData = data?.filter((item) => {
            return item.id !== id
        });

        setData(filterData)
    };

    return (
        <ModalContext.Provider value={values}>
            <section className="px-24 mx-auto relative gap-[24px] h-screen flex items-center justify-center">
                <Modal>
                    <ModalHeader>New Avatar</ModalHeader>
                    <ModalBody>
                        <form onSubmit={formSubmit} className="px-4 flex flex-col py-2">
                            <input
                                onChange={handleChange}
                                className="border border-black-bg w-full h-[42px] rounded-[8px] px-[12px]"
                            />
                            <button
                                type="submit"
                                className="mt-4 bg-purple-500 text-white py-4 rounded-md"
                            >
                                Confirm
                            </button>
                        </form>
                    </ModalBody>
                </Modal>
                {data?.map((ite: any) => {
                    const backgroundColor = Math.floor(Math.random() * lightColors.length)
                    return (
                        <button
                            className="w-[52px] relative font-bold text-[18px] h-[52px] border border-gray-400 rounded-full"
                            key={ite.id}
                            style={{ backgroundColor: lightColors[backgroundColor] }}
                        >
                            {trimStr(ite.name)}
                            <span onClick={() => deleteItem(ite.id)} className='absolute -top-[20px] text-12 font-light'>x</span>
                        </button>
                    );
                })}
                <button
                    onClick={() => setOpen(true)}
                    className="w-[52px] h-[52px] border border-gray-400 rounded-full"
                >
                    +
                </button>
            </section>
        </ModalContext.Provider>
    );
};

export default Page;

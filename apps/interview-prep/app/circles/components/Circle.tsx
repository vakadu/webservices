import React from 'react';



const Circle = ({ circle: { x, y, bgColor, id } }: { circle: { x: number; y: number; bgColor: string; id: number } }) => {

    return (
        <section id={id.toString()} style={{ top: y - 24, left: x - 24, backgroundColor: bgColor }} className={`w-[24px] h-[24px] rounded-full absolute`}>

        </section>
    );
};

export default Circle;

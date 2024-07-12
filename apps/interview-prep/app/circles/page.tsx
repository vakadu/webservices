"use client"

import { useState } from "react";
import Circle from "./components/Circle";

// https://devtools.tech/questions/s/how-to-build-circles-game-in-react-js-frontend-coding-challenge---qid---Y8acly7B5CmIVAaT5knP

//1.build a borad
//2.assign a circle where user clicks with random color
//3.undo --> remove the last added circle
//4.redo --> add back last removed circle
//5.reset --> clear the board

export const COLORS = [
    '#2c3e50',
    '#34495e',
    '#c0392b',
    '#e74c3c',
    '#27ae60',
    '#3498db',
    '#f39c12',
    '#f1c40f',
];

const getRandomColor = () => {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
};

type Circle = { x: number; y: number; bgColor: string; id: number };

export default function Index() {
    const [circles, setCircles] = useState<{ x: number; y: number; bgColor: string; id: number }[]>([]);
    const [history, setHistory] = useState<{ x: number; y: number; bgColor: string; id: number }[]>([]);

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setCircles((prev) => {
            return [...prev, { x: e.clientX, y: e.clientY, bgColor: getRandomColor(), id: +new Date() }];
        });
    };

    const handleUndo = () => {
        const copy = [...circles], last = copy.pop();
        setHistory((prev: any) => {
            return [...prev, last];
        })
        setCircles(copy);
    };

    const handleRedo = () => {
        const copy = [...history], last = copy.pop();
        setHistory(copy);
        setCircles((prev: any) => {
            return [...prev, last];
        })
    };

    const handleReset = () => {
        setCircles([]);
        setHistory([])
    };

    return (
        <section onClick={mouseMove} className="w-screen relative border-[10px] border-red-500 h-screen mx-auto">
            <section onClick={(e) => e.stopPropagation()} className="flex gap-12 m-[12px]">
                <button disabled={circles.length <= 0} onClick={handleUndo} className=" bg-slate-900 text-white p-[12px]">Undo</button>
                <button disabled={history.length <= 0} onClick={handleRedo} className=" bg-orange-400 text-white p-[12px]">Redo</button>
                <button onClick={handleReset} className=" bg-red-500 text-white p-[12px]">Reset</button>
            </section>
            {
                circles.map((circle, i) => {
                    return <Circle key={i} circle={circle} />
                })
            }
        </section>
    );
}

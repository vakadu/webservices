'use client';

import { useState } from 'react';
import { createGrid, getRandomColors, getRandomIndex } from './utils';

const DEFAULT_GRID = 3;
export default function PixelArtGrid() {
    const [grid, setGrid] = useState(DEFAULT_GRID);
    const [score, setScore] = useState(0);
    const [colors, setColors] = useState(getRandomColors());
    const [oddCell, setOddCell] = useState(getRandomIndex(grid * grid));

    const handleClick = (i) => {
        if (i === oddCell) {
            setScore(score + 1);
            setGrid(grid + 1);
        } else {
            setScore(0);
            setGrid(DEFAULT_GRID);
        }
        setColors(getRandomColors());
        setOddCell(getRandomIndex(grid * grid))

    };

    return (
        <section>
            <p>{score}</p>
            <section
                style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
                className="grid w-[400px] h-[400px] mx-auto"
            >
                {[...Array(grid * grid)].map((_, i) => {
                    return (
                        <button
                            onClick={() => handleClick(i)}
                            className="w-full h-full border"
                            key={i}
                            style={{ backgroundColor: i === oddCell ? colors.oddColor : colors.color }}
                        ></button>
                    );
                })}
            </section>
        </section>
    );
}

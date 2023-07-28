// https://www.devtools.tech/questions/s/create-a-color-spotter-game-or-frontend-coding-challenge-or-devkode-dom-challenge-or-javascript-or-html-or-css-or-reactjs---qid---XvClVE1kLeMD86qMPGtD?listId=6mVGooqtFwIY9rhHKSug
"use client";

import { useState } from 'react';

const getRandomColors = () => {
    const ratio = 0.618033988749895;
    
    const hue = (Math.random() + ratio) % 1;
    const saturation = Math.round(Math.random() * 100) % 85;
    const lightness = Math.round(Math.random() * 100) % 85;

    const color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    const oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

    return {
        color,
        oddColor
    }
}

const ColorPicker = () => {
    const [defaultgrid, setDefaultGrid] = useState(4);
    const { color, oddColor } = getRandomColors();
    const random = Math.floor(Math.random() * (defaultgrid * defaultgrid)) + 1;

    const handleBox = (i) => {
        if(random === i) {
            if(defaultgrid > 4) {
                setDefaultGrid((prev) => (prev - 1))
            }
        } else {
            setDefaultGrid((prev) => (prev + 1))
        }
    };

    return(
        <div className='max-w-3xl mx-auto mt-[52px]'>
            <div 
                style={{ gridTemplateColumns: `repeat(${defaultgrid}, 100px)` }} 
                className={`grid`}
            >
                {
                    Array.from({ length: defaultgrid * defaultgrid }).map((_, i) => {                        
                        return(
                            <div 
                                className='flex h-[100px] border' 
                                key={i}
                                style={{ backgroundColor: `${random === i ? oddColor : color}` }}
                                onClick={() => handleBox(i)}
                            >
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default ColorPicker;

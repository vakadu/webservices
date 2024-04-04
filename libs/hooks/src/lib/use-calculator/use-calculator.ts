"use client"

import { useState, MouseEvent } from 'react';

import { math } from "@webservices/utils";

const data = [
	["AC", "+/-", "%", "/"],
	[7, 8, 9, 'X'],
	[4, 5, 6, '-'],
	[1, 2, 3, '+'],
	[0, '.', '=']
];

const removePlaceholder = (num: number) => {
	return num.toString().replace(/\s/g, "")
};

export function useCalculator() {
	const [state, setState] = useState<{
		sign: string;
		num: any;
		res: number;
	}>({
		sign: "",
		num: 0,
		res: 0,
	});
	console.log(state);
	

	const handleType = (e: MouseEvent<HTMLButtonElement>, type: string | number) => {
		const target = e.target as HTMLElement;
		const value = target.innerHTML;

		switch(value) {
			case '+':
				signClickHandler(value);
				break;
			case '-':
				signClickHandler(value);
				break;
			case 'AC':
				reset();
				break;
			case '=':
				equalsHandler();
				break;
			default:
				numberClickHandler(type);
				break;
		}
	};

	const numberClickHandler = (value: string | number) => {						
		setState({
			...state,
			num: removePlaceholder(state.num + value),
			res: !state.sign ? 0 : state.num
		});
	};

	const signClickHandler = (value: string) => {
		setState({
			...state,
			sign: value,
			res: !state.res && state.num ? state.num : state.res,
			num: 0,
		});
	};

	const equalsHandler = () => {		
		if(state.sign && state.num) {
			setState({
				...state,
				res: math(Number(state.res), Number(state.num), state.sign),
				sign: "",
				num: 0,
			});
		}
	};

	const reset = () => {
		setState({
			sign: "",
			num: 0,
			res: 0
		})
	};

	const calculateTotal = () => {
		console.log("total");
		
	};

	const classes = (type: string | number) => {
		const numberClasses = typeof type === 'number' ? 'bg-grey-1' : '';
		const defaultClasses = `w-78 !px-12 ${numberClasses}`;

		switch(type) {
			case 'AC' :
				return `${defaultClasses} bg-dark-1`;
			case '+/-' :
				return `${defaultClasses} bg-dark-1`;
			case '%' :
				return `${defaultClasses} bg-dark-1`;
			case '/' :
				return `${defaultClasses} bg-dark-1`;
			case '.' :
				return `${defaultClasses} bg-grey-1`;
			case '=' :
				return `${defaultClasses} col-span-2 w-auto`;
			default:
				return defaultClasses;
		}
	};

	return {
		handleType,
		calculateTotal,
		reset,
		data,
		classes,
		state
	}
}

export default useCalculator;

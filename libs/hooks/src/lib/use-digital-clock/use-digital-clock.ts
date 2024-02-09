"use client"

import { useState, useEffect } from 'react';

export function useDigitalClock() {
	const [date, setDate] = useState(new Date());
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const convertHours = hours <= 12 ? hours : (hours - 12);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(new Date())
		}, 1000);

		return () => {
			if(intervalId) {
				clearInterval(intervalId);
			}
		}
	}, []);
	
	return {
		hours: convertHours,
		minutes,
		seconds,
		peroid: hours >= 12 ? 'PM' : 'AM'
	}
}

export default useDigitalClock;

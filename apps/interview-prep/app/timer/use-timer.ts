'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_TIME = 5;

const useTimer = () => {
	const [isRunning, setRunning] = useState(false);
	const [seconds, setSeconds] = useState(TOTAL_TIME);
	const timer = useRef<any>(null);

	useEffect(() => {
		if (seconds <= 0) {
			setSeconds(TOTAL_TIME);
			setRunning(false);
			clearInterval(timer.current);
		}
	}, [seconds]);

	const start = () => {
		if (!isRunning) {
			setRunning(true);
			timer.current = setInterval(() => {
				setSeconds((prev) => prev - 1);
			}, 1000);
		}
	};

	const stop = () => {
		setSeconds(TOTAL_TIME);
		setRunning(false);
		clearInterval(timer.current);
	};

	useEffect(() => {
		return () => clearInterval(timer.current);
	}, []);

	return {
		isRunning,
		start,
		stop,
		seconds,
	};
};

export default useTimer;

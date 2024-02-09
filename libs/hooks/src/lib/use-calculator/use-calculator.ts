"use client"

import { useState, useCallback } from 'react';

export function useCalculator() {
	const [count, setCount] = useState(0);
	const increment = useCallback(() => setCount((x) => x + 1), []);
	return { count, increment };
}

export default useCalculator;

import { useEffect, useRef, useState } from 'react';

export default function usePrevious(value) {
	// const [prev, setPrev] = useState(value);
	const prev = useRef(value);

	useEffect(() => {
		prev.current = value;
	}, [prev, value]);

	return prev.current;
}

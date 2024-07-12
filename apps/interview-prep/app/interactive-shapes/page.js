'use client';

import { useMemo, useState, useEffect } from 'react';

// https://devtools.tech/questions/s/how-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi

const BOX_DATA = [
	[1, 1, 1],
	[1, 0, 0],
	[1, 1, 1],
];

export default function Index() {
	const [stack, setStack] = useState(new Set());
	const [loading, setLoading] = useState(false);
	const boxes = useMemo(() => {
		return BOX_DATA.flat();
	}, []);
	let keepBoxTrack = useMemo(() => {
		return boxes.reduce((acc, curr) => {
			if (curr) {
				acc += 1;
			}
			return acc;
		}, 0);
	}, [boxes]);

	useEffect(() => {
		if (stack.size >= keepBoxTrack) {
			unload();
		}
	}, [keepBoxTrack, stack, stack.size, unload]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function unload() {
		let keys = Array.from(stack);
		setLoading(true);

		const removeKeys = () => {
			let removedKey = keys.shift();
			setStack((prev) => {
				const newSet = new Set(prev);
				newSet.delete(removedKey);
				return newSet;
			});

			if (keys.length > 0) {
				setTimeout(removeKeys, 500);
			} else {
				setLoading(false);
			}
		};

		setTimeout(removeKeys, 100);
	}

	const handleClick = (e) => {
		e.stopPropagation();
		const { target } = e;
		const index = target.getAttribute('data-index');
		const status = target.getAttribute('data-status');

		if (!status || loading) {
			return;
		}
		keepBoxTrack += keepBoxTrack + 1;
		setStack((prev) => {
			return new Set(prev.add(index));
			// const newSet = new Set(prev);

			// if (newSet.has(index)) {
			// 	newSet.delete();
			// } else {
			// 	newSet.add(index);
			// }

			// return newSet;
		});
	};

	return (
		<section onClick={handleClick} className="grid grid-cols-3 mt-12 gap-24 max-w-lg mx-auto">
			{boxes.map((b, i) => {
				const bg = stack.has(i.toString());

				return (
					<button
						key={i}
						className={`border border-blue-400 w-24 h-24 relative ${
							b ? 'visible' : 'invisible'
						} ${bg ? ' bg-[#0bcc59]' : 'bg-white'}`}
						data-index={i}
						data-status={b}
						disabled={!b}
					></button>
				);
			})}
		</section>
	);
}

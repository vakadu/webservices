export const createGrid = (r, c) => {
	const gird = new Array(r).fill(0).map(() => new Array(c).fill(0));

	for (let i = 0; i < gird.length; i++) {
		for (let j = 0; j < gird[i].length; j++) {
			gird[i][j] = { row: i, col: j };
		}
	}

	return gird;
};

export const getRandomIndex = (size) => {
	return Math.ceil(Math.random() * size);
};

export const getRandomColors = () => {
	const ratio = 0.618033988749895;

	const hue = (Math.random() + ratio) % 1;
	const saturation = Math.round(Math.random() * 100) % 85;
	const lightness = Math.round(Math.random() * 100) % 85;

	const color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
	const oddColor =
		'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

	return {
		color,
		oddColor,
	};
};

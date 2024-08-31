export const createGrid = (r, c) => {
	const gird = new Array(r).fill(0).map(() => new Array(c).fill(0));

	for (let i = 0; i < gird.length; i++) {
		for (let j = 0; j < gird[i].length; j++) {
			gird[i][j] = { row: i, col: j, selected: false };
		}
	}

	return gird;
};

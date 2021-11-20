let grid;
let rez = 24;
let radius_limit = rez / 2;

function t_array(cols, rows) {
	let array = new Array(cols);
	for (let i = 0; i < cols; i++) {
		array[i] = new Array(rows);
	}

	return array;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	let cols = round(width / rez) + 1;
	let rows = round(height / rez) + 1;
	grid = t_array(cols, rows);
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			let position_dependant_radius = map(i * rez + j * rez, 0, cols * rez + rows * rez, 1, rez / 2);
			grid[i][j] = new Cell(i * rez, j * rez, rez, position_dependant_radius);
		}
	}
}

function draw() {
	// background(20);
	background(0, 80, 115);
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			grid[i][j].draw();
			grid[i][j].breathe();
		}
	}
}

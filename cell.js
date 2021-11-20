class Cell {
	constructor(x, y, rez, radius) {
		this.x = x;
		this.y = y;
		this.rez = rez;
		this.radius = radius;
		this.breathe_rate = 0.2;
		this.count = this.radius;
	}

	draw() {
		stroke(20);
		fill(16, 125, 172);
		rect(this.x, this.y, this.rez, this.rez, this.radius);
	}

	breathe() {
		let breathe_radius = map(sin(this.count), -1, 1, 0.1, this.rez / 2);
		this.radius = breathe_radius;
		this.count += 0.1;
	}
}

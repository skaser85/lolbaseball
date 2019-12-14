class PitchingMound {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.circle = new Dirt(this.x, this.y, this.d, false, {}, true, {color: dirt});
    this.rubber = new Quad(this.x, this.y, "rubber", 15, 5, 0, false, {}, true, {color: white});
  }

  draw() {
    this.circle.draw();
    this.rubber.draw();
  }
}
class FoulLine {
  constructor(p1, p2, color, weight) {
    this.p1 = p1;
    this.p2 = p2;
    this.color = color;
    this.weight = weight;
  }

  draw() {
    push();
    stroke(this.color);
    strokeWeight(this.weight);
    line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    pop();
  }
}
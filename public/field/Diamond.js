class Diamond {
  constructor(x, y, step, color) {
    this.x = x;
    this.y = y;
    this.step = step;
    this.color = color;
  }

  draw() {
    push();
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.x, this.y); 
    vertex(this.x + this.step, this.y - this.step);
    vertex(this.x + this.step, this.y - this.step * 2);
    vertex(this.x - this.step, this.y - this.step * 2);
    vertex(this.x - this.step, this.y - this.step);
    endShape(CLOSE);
    pop();
  }
}
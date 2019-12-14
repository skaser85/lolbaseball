class Batter {
  constructor(side, name) {
    this.side = side;
    this.name = this.getName(name);
    this.imgSize = 35;
    this.x;
    this.y;
  }

  getName(n) {
    return n.split(" ")[0].slice(0, 1) + ". " + n.split(" ")[1];
  }

  update(bs, n) {
    this.side = bs;
    this.name = this.getName(n);
  }

  draw() {
    push();
    textFont("Anton");
    textSize(20);
    fill("#6e00ff");
    stroke(255, 255, 255, 100);
    strokeWeight(1);
    if(this.side === "R") {
      this.x = 185;
      this.y = 435;
    } else {
      this.x = 300;
      this.y = 435;
    }
    image(bat, this.x, this.y - this.imgSize + 10, this.imgSize, this.imgSize);
    text(this.name, this.x + this.imgSize, this.y);
    pop();
  }
}
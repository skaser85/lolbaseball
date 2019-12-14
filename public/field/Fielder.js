class Fielder {
  constructor(pos, name, x, y) {
    this.pos = pos;
    this.name = this.getName(name);
    this.x = x;
    this.y = y;
    this.imgSize = 20;
  }

  getName(n) {
    return n.split(" ")[0].slice(0, 1) + ". " + n.split(" ")[1];
  }

  mouseIsOver(x, xw, y, yh) {
    return (mouseX > x && mouseX < xw) && (mouseY > y && mouseY < yh);
  }

  update(n) {
    this.name = this.getName(n);
  }

  draw() {
    push();
    textFont("Roboto Mono");
    textSize(14);
    textAlign(null, CENTER);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(2);
    text(this.pos, this.x, this.y);
    imageMode(CENTER);
    let gloveX = this.x + textWidth(this.pos) + 14;
    let gloveY = this.y - 2;
    let gloveSize = this.imgSize
    image(glove, gloveX, gloveY, gloveSize, gloveSize);
    text(this.name, this.x + textWidth(this.pos) + 26, this.y);
    let l = this.x - 5;
    let r = l + textWidth(this.pos) + 3 + this.imgSize + textWidth(this.name) + 15;
    let w = r - l;
    let t = this.y - this.imgSize / 2 - 2;
    let b = t + this.imgSize + 4;
    let h = b - t;
    if(this.mouseIsOver(l, r, t, b)) {
      noFill();
      stroke(255, 0, 0);
      strokeWeight(1);
      rect(l, t, w, h);
      if(ballMoving) {
        gloveSize = this.imgSize + 50;
        // if(ball.instersects(gloveX, gloveY, gloveSize)) {
        //   stroke(255, 0, 255);
        //   rect(gloveX - 5, gloveY - 5, gloveSize + 10, gloveSize + 10);
        // }
      }
      image(glove, gloveX, gloveY, gloveSize, gloveSize);
    }
    // fill(255, 0, 0);
    // noStroke();
    // circle(l, t, 5);
    // circle(r, t, 5);
    // circle(l, b, 5);
    // circle(r, b, 5);
    pop();
  }
}
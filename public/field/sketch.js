let white = "#fff";
let green = "#1aa008";
let dirt = "#876515";
let firstBase;
let secondBase;
let thirdBase;
let baseballDiamond;
let home;
let infieldGrass;
let infieldDirt;
let hittingDirt;
let hittingOutline;
let pitchMound;
let Ltriangle;
let Rtriangle;
let LFL;
let RFL;
let LbattersBox;
let RbattersBox;
let UmpBox;
let coachBox1;
let coachBox3;
let onDeck1;
let onDeck3;
let histCount;
let baseball;
let baseball50;
let glove;
let bat;
let firstBasePlayer;
let secondBasePlayer;
let thirdBasePlayer;
let ssPlayer;
let cPlayer;
let pPlayer;
let rfPlayer;
let cfPlayer;
let lfPlayer;
let batter;
let ballMoving = false;

function preload() {
  baseball = loadImage("images/baseball.png");
  baseball50 = loadImage("images/baseball50.png");
  bat = loadImage("images/bat2.png");
  glove = loadImage("images/glove.png");
}

function setup() {
  let cnv = createCanvas(600, 500);
  cnv.parent("#in-play-canvas");
  angleMode(DEGREES);
  firstBase = new Quad(420, 320, "first", 20, 20, 45, false, {}, true, {color: white});
  secondBase = new Quad(300, 200, "second", 20, 20, 45, false, {}, true, {color: white});
  thirdBase = new Quad(180, 320, "third", 20, 20, 45, false, {}, true, {color: white});
  home = new Diamond(300, 440, 10, white);
  infieldGrass = new Quad(300, 321, "infieldGrass", 150, 150, 45, false, {}, true, {color: green})
  infieldDirt = new Dirt(300, 325, 350, false, {}, true, {color: dirt});
  hittingDirt = new Dirt(300, 430, 75, false, {}, true, {color: dirt});
  hittingOutline = new Dirt(300, 430, 80, false, {}, true, {color: white});
  pitchMound = new PitchingMound(300, 325, 40); 
  Ltriangle = new Triangle({x: 0, y: height}, {x: 0, y: 150}, {x: 330, y: height}, green);
  Rtriangle = new Triangle({x: 270, y: height}, {x: width, y: 150}, {x: width, y: height}, green);
  LFL = new FoulLine({x: 265, y: 410}, {x: 0, y: 135}, white, 3);
  RFL = new FoulLine({x: 335, y: 410}, {x: width, y: 135}, white, 3);
  LbattersBox = new Quad(320, 430, "LbattersBox", 15, 30, 0, true, {color: white, weight: 1}, false, {});
  RbattersBox = new Quad(280, 430, "LbattersBox", 15, 30, 0, true, {color: white, weight: 1}, false, {});
  UmpBox = new Quad(300, 455, "UmpBox", 15, 18, 0, true, {color: white, weight: 1}, false, {});
  coachBox1 = new Quad(460, 350, "firstBaseCoachBox", 20, 40, 45, true, {color: white, weight: 1}, false, {});
  coachBox3 = new Quad(140, 350, "firstBaseCoachBox", 20, 40, 135, true, {color: white, weight: 1}, false, {});
  onDeck1 = new Dirt(425, 450, 30, true, {color: white, weight: 1}, false, {});
  onDeck3 = new Dirt(175, 450, 30, true, {color: white, weight: 1}, false, {});
  histCount = game.gsHistory.length;
  gs = game.gs;
  firstBasePlayer = new Fielder("1B", gs.B1.name, 440, 325);
  secondBasePlayer = new Fielder("2B", gs.B2.name, 320, 202);
  thirdBasePlayer = new Fielder("3B", gs.B3.name, 190, 310);
  ssPlayer = new Fielder("SS", gs.SS.name, 210, 235);
  pPlayer = new Fielder("P", gs.P.name, 275, 330);
  cPlayer = new Fielder("C", gs.C.name, 275, 460);
  rfPlayer = new Fielder("RF", gs.RF.name, 50, 110);
  lfPlayer = new Fielder("LF", gs.LF.name, 450, 110);
  cfPlayer = new Fielder("CF", gs.CF.name, 275, 50);
  batter = new Batter(gs.batter.battingSide, gs.batter.name);
  ball = new Baseball(300, 400, 20);
}

function draw() {
  if(histCount < game.gsHistory.length) {
    histCount++;
    gs = game.gs;
    firstBasePlayer.update(gs.B1.name);
    secondBasePlayer.update(gs.B2.name);
    thirdBasePlayer.update(gs.B3.name);
    ssPlayer.update(gs.SS.name);
    pPlayer.update(gs.P.name);
    cPlayer.update(gs.C.name);
    rfPlayer.update(gs.RF.name);
    lfPlayer.update(gs.LF.name);
    cfPlayer.update(gs.CF.name);
    batter.update(gs.batter.battingSide, gs.batter.name);
  }
  background(green);
  infieldDirt.draw();
  Ltriangle.draw();
  Rtriangle.draw();
  hittingOutline.draw();
  infieldGrass.draw();
  pitchMound.draw();
  hittingDirt.draw();
  firstBase.draw();
  secondBase.draw();
  thirdBase.draw();
  home.draw();
  LFL.draw();
  RFL.draw();
  LbattersBox.draw();
  RbattersBox.draw();
  UmpBox.draw();
  coachBox1.draw();
  coachBox3.draw();
  onDeck1.draw();
  onDeck3.draw();
  firstBasePlayer.draw();
  secondBasePlayer.draw();
  thirdBasePlayer.draw();
  ssPlayer.draw();
  pPlayer.draw();
  cPlayer.draw();
  rfPlayer.draw();
  lfPlayer.draw();
  cfPlayer.draw();
  batter.draw();
  ball.draw();
  // image(glove, 400, 300, 20, 20);
  // stroke(white);
  // line(width/2, 0, width/2, height);
  // line(0, height/2, width, height/2);
}

function mouseDragged() {
  if(ball.mouseIsOver()) {
    ballMoving = true;
    ball.update(mouseX, mouseY);
  }
}

function mouseReleased() {
  if(ballMoving) {
    game.logEvent("ball-move", {history: ball.history})
    ball.history = [];
  }
  ballMoving = false;
}
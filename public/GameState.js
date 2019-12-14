class GameState {
  constructor(id) {
    this.id = id;
    this.P;
    this.C;
    this.B1;
    this.B2;
    this.B3
    this.SS;
    this.LF;
    this.CF;
    this.RF;
    this.batter;
    this.inningHalf;
    this.inning;
    this.outs;
    this.balls;
    this.strikes;
    this.bases = {
      first: {
        isPlayerOnBase: false,
        playerOnBase: ""
      },
      second: {
        isPlayerOnBase: false,
        playerOnBase: ""
      },
      third: {
        isPlayerOnBase: false,
        playerOnBase: ""
      }
    };
  }

  init(fieldingTeam, batter) {
    this.batter = batter;
    this.setFielders(fieldingTeam);
    this.inningHalf = "top";
    this.inning = 1;
    this.outs = 0;
    this.strikes = 0;
    this.balls = 0;
  }

  setFielders(ft) {
    this.P = ft.getPosition("P");
    this.C = ft.getPosition("C");
    this.B1 = ft.getPosition("1B");
    this.B2 = ft.getPosition("2B");
    this.B3 = ft.getPosition("3B");
    this.SS = ft.getPosition("SS");
    this.LF = ft.getPosition("LF");
    this.CF = ft.getPosition("CF");
    this.RF = ft.getPosition("RF");
  }

  copyFrom(gs) {
    this.P = gs.P;
    this.C = gs.C;
    this.B1 = gs.B1;
    this.B2 = gs.B2;
    this.B3 = gs.B3;
    this.SS = gs.SS;
    this.LF = gs.LF;
    this.CF = gs.CF;
    this.RF = gs.RF;
    this.batter = gs.batter;
    this.inningHalf = gs.inningHalf;
    this.inning = gs.inning;
    this.outs = gs.outs;
    this.balls = gs.balls;
    this.strikes = gs.strikes;
    this.bases = {
      first: {
        isPlayerOnBase: gs.bases.first.isPlayerOnBase,
        playerOnBase: gs.bases.first.playerOnBase
      },
      second: {
        isPlayerOnBase: gs.bases.second.isPlayerOnBase,
        playerOnBase: gs.bases.second.playerOnBase
      },
      third: {
        isPlayerOnBase: gs.bases.third.isPlayerOnBase,
        playerOnBase: gs.bases.third.playerOnBase
      }
    };
  }

  toggleBase(base, player) {
    if(player === "") {
      player = this.batter;
    }
    if(base === "home") {
      this.bases["third"].isPlayerOnBase = false;
      this.bases["third"].playerOnBase = "";
    } else {
      this.bases[base].isPlayerOnBase = true;
      this.bases[base].playerOnBase = player;
    }
  }

  resetBases() {
    this.bases = {
      first: {
        isPlayerOnBase: false,
        playerOnBase: ""
      },
      second: {
        isPlayerOnBase: false,
        playerOnBase: ""
      },
      third: {
        isPlayerOnBase: false,
        playerOnBase: ""
      }
    };
  }

  addStrike() {
    this.strikes++;
  }

  addBall() {
    this.balls++;
  }

  recordOut() {
    this.outs++;
    this.strikes = 0;
    this.balls = 0;
  }

  completeInningHalf(fieldingTeam, batter) {
    if(this.inningHalf === "bot") {
      this.inning++;
      this.inningHalf = "top";
    } else {
      this.inningHalf = "bot";
    }
    this.outs = 0;
    this.resetBases();
    this.batter = batter;
    this.setFielders(fieldingTeam);
  }

  changeBatter(batter) {
    this.batter = batter;
    this.balls = 0;
    this.strikes = 0;
  }

  logPitch() {
    this.P.pitches++;
  }

  event(e, opts) {
    this.id = opts.id;
    switch(e) {
      case "pitch":
        this.logPitch();
        break;
      case "on-base":
        this.toggleBase(opts.base, opts.player);
        break;
      case "strike":
        this.addStrike();
        break;
      case "ball":
        this.addBall();
        break;
      case "record-out":
        this.recordOut();
        break;
      case "complete-inning-half":
        this.completeInningHalf(opts.fieldingTeam, opts.batter);
        break;
      case "plate-appearance":
        this.changeBatter(opts.batter);
      break;
      default:
        console.error(`That's a new one: Event '${e}'`);
        console.log("options: ", opts);
    }
  }
}
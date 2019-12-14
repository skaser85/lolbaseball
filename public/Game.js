class Game {
  constructor(homeTeam, awayTeam, gsID) {
    this.homeTeam = this.fieldingTeam = homeTeam;
    this.awayTeam = this.battingTeam = awayTeam;
    this.gs = new GameState(gsID);
    this.gsHistory = [this.gs];
    this.events = [];
  }

  init() {
    this.gs.init(this.fieldingTeam, this.battingTeam.getBatter());
  }

  logEvent(e, opts) {
    this.events.push({e, opts});
    this.gs = this.getNewGS(opts.id);

    switch(e) {
      case "pitch":
        this.gs.event(e, opts);
        break;
      case "ball":
        this.gs.event(e, opts);
        if(this.gs.balls === 4) {
          this.takeFirst(opts.id);
        }
        break;
        case "strike":
          this.gs.event(e, opts);
          if(this.gs.strikes === 3) {
            this.logEvent("record-out", {id: opts.id});
          }
          break;
        case "record-out":
          this.gs.event(e, opts);
          if(this.gs.outs === 3) {
            this.switchFieldingAndBattingTeams();
            this.logEvent("complete-inning-half", {
              fieldingTeam: this.fieldingTeam, 
              batter: this.battingTeam.getNextBatter(),
              id: opts.id
            });
          } else {
            this.logEvent("plate-appearance", {batter: this.battingTeam.getNextBatter(), id: opts.id});
          }
          break;
        case "foul":
          if(this.gs.strikes < 2) {
            this.logEvent("strike", {id: opts.id});
          }
          break;
        case "single":
          this.takeFirst(opts.id);
          break;
        case "fly-out":
          this.logEvent("record-out", {id: opts.id});
          break;
        case "hbp":
          this.takeFirst(opts.id);
          break;
        case "complete-inning-half":
          this.gs.event(e, opts);
          break;
          case "on-base":
          this.gs.event(e, opts);
          break;
        case "plate-appearance":
          this.gs.event(e, opts);
          break;
        case "score-run":
          this.battingTeam.score++;
          break;
    }
  }

  getNewGS(gsID) {
    let newGS = new GameState(gsID);
    newGS.copyFrom(this.gs);
    this.gsHistory.push(newGS);
    return newGS;
  }

  takeFirst(id) {
    let bases = this.gs.bases;
    this.gs.resetBases();
    if(bases["first"].isPlayerOnBase) {
      this.logEvent("on-base", {base: "second", player: bases["first"].playerOnBase, id: id});
      if(bases["second"].isPlayerOnBase) {
        this.logEvent("on-base", {base: "third", player: bases["second"].playerOnBase, id: id});
        if(bases["third"].isPlayerOnBase) {
          this.logEvent("score-run", {team: this.battingTeam, id: id});
        }
      }
    }
    this.logEvent("on-base", {base: "first", player:"", id: id});
    this.logEvent("plate-appearance", {batter: this.battingTeam.getNextBatter(), id: id});
  }

  double() {
    let bases = this.gs.bases;
    this.gs.resetBases();

  }

  switchFieldingAndBattingTeams() {
    let temp = this.fieldingTeam;
    this.fieldingTeam = this.battingTeam;
    this.battingTeam = temp;
  }
}
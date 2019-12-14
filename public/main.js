let awayTeam = new Team("Cincinnati", "CIN", "Reds", awayTeamLineUp);
let homeTeam = new Team("Chicago", "CHC", "Cubs", homeTeamLineUp);
let game = new Game(homeTeam, awayTeam, uid());
let scoreBug = new ScoreBug(elts, game);

game.init();

scoreBug.update(game.gs);

document.addEventListener("click", (e) => {
  let id = uid();
  if(e.target.parentNode === document) {
    return null;
  }

  if(e.target.matches(".base")) {
    if(e.target.matches(".first-base")) {
      // this doesn't for any of the bases...btw
      gs.event("on-base", {base: "first", player: ""});
    }

    if(e.target.matches(".second-base")) {
      gs.event("on-base", {base: "second", player: ""});
    }

    if(e.target.matches(".third-base")) {
      gs.event("on-base", {base: "third", player: ""});
    }

    gs = getNewGS(gs, gsHistory);
  }

  if(e.target.matches(".log-pitch") || e.target.parentNode.matches(".log-pitch")) {
    document.querySelector(".log").classList.toggle("hide");
  }  
  
  if(e.target.matches(".show-in-play") || e.target.parentNode.matches(".show-in-play")) {
    document.querySelector("#in-play-canvas").classList.toggle("hide");
  }

  if(e.target.matches(".row-option.strike")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("strike", {id: id});
  }

  if(e.target.matches(".row-option.ball")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("ball", {id: id});
  }

  if(e.target.matches(".row-option.foul")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("foul", {id: id});
  }

  if(e.target.matches(".row-option.hbp")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("hbp", {id: id});
  }

  if(e.target.matches(".row-option.balk")) {
    console.log("balk, lol.  is it though, mother fucker?");
  }

  if(e.target.matches(".row-option.single")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("single", {id: id});
  }

  if(e.target.matches(".row-option.double")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("double", {id: id});
  }

  if(e.target.matches(".row-option.triple")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("triple", {id: id});
  }

  if(e.target.matches(".row-option.hr")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("hr", {id: id});
  }

  if(e.target.matches(".row-option.fly-out")) {
    game.logEvent("pitch", {id: id});
    game.logEvent("fly-out", {id: id});
  }

  scoreBug.update(game.gs);
  scoreBug.render();
});

function uid() {
  return Math.random().toString(36).substr(2, 9);
}

window.scoreBug = scoreBug;
window.game = game;

scoreBug.render();

console.log(scoreBug);

// async function postScoreBug(data) {
//   let response = await fetch("/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });
//   let serverScoreBug = await response.json();
//   console.log(serverScoreBug);
// }

// postScoreBug(scoreBug).catch(err => console.log(err));
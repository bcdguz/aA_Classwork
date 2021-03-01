const View = require('./ttt-view');
const Game = require('../solution/game');

  $(() => {
    // Your code here
    let game = new Game();
    let view = new View(game, $(".ttt"));
    view.bindEvents();
  });

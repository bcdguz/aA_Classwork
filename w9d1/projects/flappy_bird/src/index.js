import FlappyBird from './game';
import Game from './game';

const canvas = document.getElementById('bird-game');
new FlappyBird(canvas);

const newGame = new Game(canvas);
// newGame.restart();
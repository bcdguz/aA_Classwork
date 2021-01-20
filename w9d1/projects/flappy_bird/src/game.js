import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate(this.ctx);
    this.running = false;


  } 

  animate(ctx) {
    this.level.animate(ctx);
    this.bird.animate(ctx);
    if (this.running) {
      requestAnimationFrame(this.animate(ctx));
    }
    
  } 

  play() {
    this.running = true;
    this.animate(this.ctx);
  }
}
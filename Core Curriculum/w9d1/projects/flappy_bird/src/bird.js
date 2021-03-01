const CONSTANTS = {
    GRAVITY: 0.8,
    FLAP_SPEED: -8,
    TERMINAL_VEL: 12,
    BIRD_WIDTH: 40,
    BIRD_HEIGHT: 30
};

export default class Bird {

    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 0;
        // this.position = ctx.fillRect(this.dimensions.width/3, this.dimensions.height/2, this.dimensions.width, this.dimensions.height)
        this.x = this.dimensions.width / 3;
        this.y = this.dimensions.height / 2;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 40, 30);
    }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.y += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
    }

    flap() {
        this.velocity = -8;
    }
}
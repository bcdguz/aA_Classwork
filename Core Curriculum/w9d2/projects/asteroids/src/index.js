const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;
window.addEventListener("DOMContentLoaded", () => {
    let ctx = document.getElementById("game-canvas");
    let ctx2d = ctx.getContext("2d");
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });
    mo.draw(ctx2d)
})
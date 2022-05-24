import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new paddle(document.getElementById("player-Paddle"))
const computerPaddle = new paddle(document.getElementById("computer-Paddle"))

let lastTime

function update(time) {
    if (lastTime!=null) {
        const delta = time - lastTime;
        // ball.update(delta);
    }

    lastTime = time;
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = e.y / window.innerHeight * 100
})

window.requestAnimationFrame(update)
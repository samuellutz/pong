import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreEl = document.getElementById("player-score")
const computerScoreEl = document.getElementById("computer-score")

let lastTime

function update(time) {
    if (lastTime!=null) {
        const delta = time - lastTime;
        // ball.update(delta)
        computerPaddle.update(delta, ball.y)

        if (isLose()) handleLose() 
           
    }

    lastTime = time;
    window.requestAnimationFrame(update)
}

function isLose() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0 
}

function handleLose() {
    const rect = ball.rect()
        if (rect.right >= window.innerWidth) {
            playerScoreEl.textContent = parseInt(playerScoreEl.textContent) + 1
        } else {
            computerScoreEl.textContent = parseInt(computerScoreEl.textContent) + 1
        }
    ball.reset()
    computerPaddle.reset()
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)
const SPEED = .02


export default class Paddle {
    constructor(paddleEl){
        this.paddleEl = paddleEl
        this.reset()
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleEl).getPropertyValue("--position"))
    }

    set position(value){
        this.paddleEl.style.setProperty("--position",value)

    }

    reset() {
        this.position = 50
    }

    update(delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position)
    }
}
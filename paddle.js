export default class Paddle {
    constructor(paddleEl){
        this.paddleEl = paddleEl
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleEl).getPropertyValue("--position"))
    }

    set position(value){
        this.paddleEl.style.setProperty("--position",value)

    }
}
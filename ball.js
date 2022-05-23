const INITIAL_VELOCITY = 0.025


export default class Ball{
    constructor(ballEl) {
        this.ballEl = ballEl;
        this.reset()
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballEl).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballEl.style.setProperty("--x",value)
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballEl).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballEl.style.setProperty("--y",value)
    }

    reset() {
        this.x = 50
        this.y = 50
        this.direction = {x: 0}
        while(Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9){
            const heading = randomNumberBetween(0 , 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading)}
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta) {
        this.x += this.direction
        this.y += this.direction
    }
}

function randomNumberBetween(min, max) {
    return Math.random()* (max-min) + min
}
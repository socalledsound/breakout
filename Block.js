class Block {
    constructor(x, y, col){
        this.x = x
        this.y = y
        this.w = blockWidth
        this.h = blockHeight
        this.col = col
        this.strokeCol = 'blue'
        this.gone = false
    }

    checkBall(ball){
        if(!this.gone){
            if(checkCircleRectCollision(ball.pos.x, ball.pos.y, ball.r, this.x, this.y, this.w, this.h)){
                this.gone = true
                ball.vel.y *= -1
                game.score ++
            }
        }

    }

    render(){
        if(!this.gone){
            stroke(this.strokeCol)
            fill(this.col)
            rect(this.x, this.y, this.w, this.h)
        }
    }
}
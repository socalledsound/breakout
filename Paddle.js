class Paddle{
    constructor(){
        this.x = width/2
        this.y = height - 60
        this.h = 20
        this.w = 180
        this.fillCol = [90,220,120]
        this.strokeCol = [40,120,210] 
    }

    checkBall(ball){
        if(checkCircleRectCollision(ball.pos.x, ball.pos.y, ball.r, this.x, this.y, this.w, this.h)){
            ball.vel.y *= -1
        }
    }

    move(dir){
        this.x += 10 * dir
    }

    render(){
        stroke(this.strokeCol)
        fill(this.fillCol)
        rect(this.x, this.y, this.w, this.h)
    }
}
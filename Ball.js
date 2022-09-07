class Ball {
    constructor(x,y,r){
        this.pos = createVector(300, 300)
        this.vel = createVector(3, 9)
        this.r = 15
        this.col = [90,180,130]
    }

    checkEdges(){
        if(this.pos.x  < this.r){
            this.pos.x = this.r 
            this.vel.x *= -1
        } else if(this.pos.x + this.r > width){
            this.pos.x = width - this.r
            this.vel.x *= -1
        } else if(this.pos.y < this.r ){
            this.y = this.r
            this.vel.y *= -1
        } else if(this.pos.y + this.r > height){
            // this.pos.y = height - this.r
            // this.vel.y *= -1
            gameOver = true
        }
    }

    move(){
        this.pos.add(this.vel)
    }

    render(){
        fill(this.col)
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }

    update(){
        this.move()
        this.checkEdges()
    }
}
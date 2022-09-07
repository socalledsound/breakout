class Ball {
    constructor(x,y,r){
        this.pos = createVector(x, y)
        this.vel = createVector(3, 10)
        this.r = r
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
            this.pos.y = height - this.r
            this.vel.y *= -1
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
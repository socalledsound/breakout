class Game {
    constructor(){
        this.over
        this.score
        this.ball = null
        this.paddle = null
        this.blocks = Array.from({length: numRows}, () => {
            return Array.from({length: numCols})
        })
        

    }

    drawScore(){
        textSize(30)
        stroke(0)
        text('score: ' + this.score, 20, 40)
    }

    init(){
        this.score = 0
        this.ball = new Ball()
        this.paddle = new Paddle()
    
        for(let y = 0; y < numRows; y++){
            for(let x = 0; x < numCols; x ++){
                this.blocks[y][x] = new Block(x * blockWidth + paddingLeft + blockPadding * x, 
                                            y * blockHeight + paddingTop + blockPadding * y,
                                            rowColors[y])
            }
        }
     
    }

    gameOverScreen(){
        background(200,10,20)
        textSize(60)
        text('GAME', width/2 - 100, 200)
        text('OVER', width/2 - 100, 400)
    }

    render(){
        this.ball.render()
        this.paddle.render()
        this.blocks.forEach(row => {
            row.forEach(block => {
                block.render()
            })
        })
    }

    update(count){
        this.ball.update(count)
        this.paddle.checkBall(this.ball)    
        this.blocks.forEach(row => {
            row.forEach(block => {
                block.checkBall(this.ball)
            })
        })
    }
}
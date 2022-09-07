let game
let count = 0

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    game = new Game()
    game.init()
    
}

function draw(){
    count ++
    
    if(!game.over){
        background(200)
        game.drawScore()
        game.update(count)
        game.render()

        if(keyIsPressed){
            if(keyCode === LEFT_ARROW){
                    if(game.paddle.x > 0){
                        game.paddle.move(-1)
                    }
                } else if(keyCode === RIGHT_ARROW){
                    if(game.paddle.x + game.paddle.w < width){
                        game.paddle.move(1)
                    }
                    
                }
        }
    }else{
        game.gameOverScreen()
    }

}

function mousePressed(){
    if(game.over){
        game.over = false
        game.init()
    }
}

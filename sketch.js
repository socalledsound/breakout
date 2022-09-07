let ball, paddle
let gameOver = false


function setup(){
    createCanvas(800, 800)
    ball = new Ball()
    paddle = new Paddle()
}

function draw(){
    if(!gameOver){
        background(200)
        ball.update()
        ball.render()
    
        paddle.render()
        paddle.checkBall(ball)
    
        if(keyIsPressed){
            if(keyCode === LEFT_ARROW){
                    if(paddle.x > 0){
                        paddle.move(-1)
                    }
                } else if(keyCode === RIGHT_ARROW){
                    if(paddle.x + paddle.w < width){
                        paddle.move(1)
                    }
                    
                }
        }
    }else{
        background(200,10,20)
        textSize(60)
        text('GAME', width/2 - 100, 200)
        text('OVER', width/2 - 100, 400)
    }

}

// function keyPressed(){
//     if(keyCode === LEFT_ARROW){
//         paddle.move(-1)
//     } else if(keyCode === RIGHT_ARROW){
//         paddle.move(1)
//     }
// }
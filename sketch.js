const canvasWidth = 800
const canvasHeight = 800
const paddingLeft = 25
const paddingTop = 100
const blockPadding = 10
const blockWidth = 40
const blockHeight = 20
const numCols = 15
const numRows = 6
const rowColors = [
    'brown',
    'pink',
    'green',
    'orange',
    'yellow',
    'purple',
]

let ball, paddle
let gameOver = false
let score = 0
let blocks = []


for(let i = 0; i < numRows; i++){
    blocks[i] = new Array(numCols)
}

console.log(blocks)


function setup(){
    createCanvas(canvasWidth, canvasHeight)
    initGame()
    
}

function draw(){

    
    if(!gameOver){
        background(200)
        textSize(30)
        stroke(0)
        text('score: ' + score, 20, 40)
        ball.update()
        ball.render()
    
        paddle.render()
        paddle.checkBall(ball)
    
        blocks.forEach(row => {
            row.forEach(block => {
                //console.log(block)
                block.checkBall(ball)
                block.render()
            })
        })



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

function initGame(){
    score = 0
    ball = new Ball()
    paddle = new Paddle()

    for(let y = 0; y < numRows; y++){
        for(let x = 0; x < numCols; x ++){
            blocks[y][x] = new Block(x * blockWidth + paddingLeft + blockPadding * x, 
                                        y * blockHeight + paddingTop + blockPadding * y,
                                        rowColors[y])
        }
    }
    console.log(blocks)
}


function mousePressed(){
    if(gameOver){
        gameOver = false
        initGame()
    }
}



// function keyPressed(){
//     if(keyCode === LEFT_ARROW){
//         paddle.move(-1)
//     } else if(keyCode === RIGHT_ARROW){
//         paddle.move(1)
//     }
// }
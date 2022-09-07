let ball, paddle

function setup(){
    createCanvas(800, 800)
    ball = new Ball(300, 300, 30)

}

function draw(){
    background(200)
    ball.update()
    ball.render()

}
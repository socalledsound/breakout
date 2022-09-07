// function checkEdges(entity){
//     if(entity.pos.x  < entity.r){
//         entity.pos.x = entity.r
//         entity.vel.x *= -1
//     } else if(entity.pos.x + entity.r > width){
//         entity.pos.x = width - entity.r
//         entity.vel.x *= -1
//     } else if(entity.pos.y < entity.r ){
//         entity.y = entity.r
//         entity.vel.y *= -1
//     } else if(entity.pos.y + entity.r > height){
//         entity.pos.y = height - entity.r
//         entity.vel.y *= -1
//     }
// }

function checkCircleRectCollision(cX, cY, cR, rX, rY, rW, rH){
        // temporarY variables to set edges for testing
        let testX = cX;
        let testY = cY;
      
        // which edge is closest?
        if (cX < rX)         testX = rX;      // test left edge
        else if (cX > rX+rW) testX = rX+rW;   // right edge
        if (cY < rY)         testY = rY;      // top edge
        else if (cY > rY+rH) testY = rY+rH;   // bottom edge
      
        // get distance from closest edges
        let distX = cX-testX;
        // console.log(distX)
        let distY = cY-testY;
        // console.log(distY)
        let distance = sqrt( (distX*distX) + (distY*distY) );
        //   console.log(distance)
        // if the distance is less than the radius, collision!
        if (distance <= cR) {
          return true;
        }
        return false;
}



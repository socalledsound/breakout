function checkEdges(entity){
    if(entity.pos.x  < entity.r){
        entity.pos.x = entity.r
        entity.vel.x *= -1
    } else if(entity.pos.x + entity.r > width){
        entity.pos.x = width - entity.r
        entity.vel.x *= -1
    } else if(entity.pos.y < entity.r ){
        entity.y = entity.r
        entity.vel.y *= -1
    } else if(entity.pos.y + entity.r > height){
        entity.pos.y = height - entity.r
        entity.vel.y *= -1
    }
}


let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');


let snakeX = 200;
let snakeY = 200;


let direction = null;

// Draw the background
function DrawBackground(){
context.fillStyle = "black";
context.fillRect(0, 0, 400, 400);
}

// Draw the snake
function DrawSnake(){
context.fillStyle = 'white';
context.fillRect(snakeX, snakeY, 20, 20);
}


function update(){
    if(direction == 'right'){
snakeX += 20;
    } else if(direction == 'left') {
        snakeX -= 20;
    }
        if(direction == 'up'){
    snakeY -= 20;
    } else if(direction == 'down') {
        snakeY += 20;
    }
DrawBackground();
DrawSnake();
}





function changeDirection(event) {

    if( event.code == 'ArrowUp') {

        direction = 'up';

    } else if ( event.code == 'ArrowRight') {

        direction = 'right';

    } else if ( event.code == 'ArrowLeft') {

        direction = 'left';

    } else if ( event.code == 'ArrowDown') {

        direction = 'down';

    }
}
DrawBackground();
DrawSnake();
setInterval(update,500);
addEventListener('keydown',changeDirection);


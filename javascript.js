let square = document.querySelector('.square');
let squareContainer = document.querySelector('.squareContainer');
let countX = 1;
let countY = 1;
let iterations = 0;
let prevMousePosX;
let prevMousePosY;

squareContainer.addEventListener('mousemove', event => {
    if (event.buttons == 1){
        //square.style.transform = `rotateY(0deg) rotateX(0deg)`;
        let mousePosX = ((event.clientX) - 364);
        let mousePosY = ((event.clientY) - 202);
        if (iterations > 0){
            if(mousePosX > prevMousePosX) countX -= 1.38;
            else if (mousePosX < prevMousePosX) countX += 1.38;
            if(mousePosY > prevMousePosY) countY -= 1.38;
            else if (mousePosY < prevMousePosY) countY += 1.38;
        }
        if (countX > 360 || countX < -360) countX = 0;
        if (countY > 360 || countY < -360) countY = 0;
        square.style.transform = `rotateY(${countX}deg) rotateX(${countY}deg)`;
        iterations += 1;
        prevMousePosX = mousePosX;
        prevMousePosY = mousePosY;
    }   
});

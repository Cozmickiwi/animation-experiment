let square = document.querySelector('.square');
let squareContainer = document.querySelector('.squareContainer');
let countX = 1;
let countY = 1;
let iterations = 0;
let prevMousePosX;
let prevMousePosY;
squareContainer.addEventListener('mousemove', event => {
    //square.style.transform = `rotateY(0deg) rotateX(0deg)`;
    let mousePosX = ((event.clientX) - 364);
    let mousePosY = ((event.clientY) - 202);
    if (iterations > 0){
        if(mousePosX > prevMousePosX) countX += 1.5;
        else if (mousePosX < prevMousePosX) countX -= 1.5;
        if(mousePosY > prevMousePosY) countY += 1.5;
        else if (mousePosY < prevMousePosY) countY -= 1.5;
    }
    //square.style.transform = `rotateX(${mousePosY}deg) rotateY(${mousePosX}deg)`;
    square.style.transform = `rotateY(${countX}deg) rotateX(${countY}deg)`;
    iterations += 1;
    prevMousePosX = mousePosX;
    prevMousePosY = mousePosY;
});

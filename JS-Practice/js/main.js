var snake = document.querySelector('.snake');
var main = document.querySelector('.main');
var dots = document.querySelectorAll('.dot');

let left = 0;
let up = 0;


console.log(main.offsetWidth)

window.addEventListener('keydown',function(e){

    if(isShiftPressing){
        speed = 10;
    }
    else{
        speed = 3;
    }

    if(e.keyCode == 39){
        left+=speed;
        snake.style.left = left + 'px';
        if(left>main.offsetWidth){
            left = -50;
            snake.style.left = left + 'px';
        }
    }
    else if(e.keyCode == 37){
        left -= speed;
        snake.style.left = left + 'px';
        if(left<-50){
            left = main.offsetWidth;
            snake.style.left = left + 'px';
        }
    }
    else if(e.keyCode == 38){
        up -= speed;
        snake.style.top = up + 'px';
        if(up<-50){
            up = main.offsetHeight;
            snake.style.top = up + 'px';
        }
    }
    else if(e.keyCode == 40){
        up+=speed;
        snake.style.top = up + 'px';
        if(up>main.offsetHeight){
            up = -50;
            snake.style.top = up + 'px'
        }
    }

    for(i=0;i<dots.length;i++){
        console.log(dots[i]);
        if(((snake.offsetTop+snake.offsetHeight)>(dots[i].offsetTop+dots[i].offsetHeight) && snake.offsetTop<dots[i].offsetTop) 
        && ((snake.offsetWidth+snake.offsetLeft)>(dots[i].offsetWidth+dots[i].offsetLeft) && snake.offsetLeft<dots[i].offsetLeft)){
            console.log('salamm');
            main.removeChild(dot);
            snake.style.width = snake.offsetWidth + 2 + 'px';
            snake.style.heigth = snake.offsetHeight + 2 + 'px';
    }
    }
})



let isShiftPressing=false;
window.addEventListener('keydown',function(e){
    if(e.keyCode == 16){
        isShiftPressing=true
    }
})



window.addEventListener('keyup',function(e){
    if(e.keyCode == 16){
        isShiftPressing=false
    }
})




for(i=0;i<30;i++){
    let dotEl = document.createElement('div');
    dotEl.className = 'dot';

    let leftPos;
    do{
        leftPos = Math.ceil(Math.random()*1000);
    }
    while(leftPos>main.offsetWidth-5);

    let topPos;
    do{
        topPos = Math.ceil(Math.random()*1000);
    }
    while(topPos>main.offsetHeight-5)

    dotEl.style.top = topPos + 'px';
    dotEl.style.left = leftPos + 'px';

    main.append(dotEl);
}



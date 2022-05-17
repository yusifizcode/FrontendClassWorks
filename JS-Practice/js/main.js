var snake = document.querySelector('.snake');
var main = document.querySelector('.main');
var dot = document.querySelector('.dot');

let left = 0;
let up = 0;


console.log(main.offsetWidth)

window.addEventListener('keydown',function(e){
    if(e.keyCode == 39){
        left+=10;
        snake.style.left = left + 'px';
        if(left>main.offsetWidth){
            left = -50;
            snake.style.left = left + 'px';
        }
    }
    else if(e.keyCode == 37){
        left -= 10;
        snake.style.left = left + 'px';
        if(left<-50){
            left = main.offsetWidth;
            snake.style.left = left + 'px';
        }
    }
    else if(e.keyCode == 38){
        up -= 10;
        snake.style.top = up + 'px';
        if(up<-50){
            up = main.offsetHeight;
            snake.style.top = up + 'px';
        }
    }
    else if(e.keyCode == 40){
        up+=10;
        snake.style.top = up + 'px';
        if(up>main.offsetHeight){
            up = -50;
            snake.style.top = up + 'px'
        }
    }

    
    if(((snake.offsetTop+snake.offsetHeight)>(dot.offsetTop+dot.offsetHeight) && (snake.offsetTop)<(dot.offsetTop)) && ((snake.offsetWidth+snake.offsetLeft)>(dot.offsetWidth+dot.offsetLeft) && (snake.offsetLeft)<(dot.offsetLeft))){
        main.removeChild(dot);
        snake.style.width = snake.offsetWidth + 2 + 'px';
        snake.style.heigth = snake.offsetHeight + 2 + 'px';
    }
})


for(i=0;i<30;i++){
    while((main.offsetLeft)<(Math.random()*1000)<(main.offsetWidth+main.offsetLeft)){
        let dotEl = document.createElement('div');
        dotEl.className = 'dot';
        main.appendChild(dotEl);
    }
}

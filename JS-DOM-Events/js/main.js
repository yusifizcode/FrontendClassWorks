let snake = document.querySelector('.snake')

var left = 0;
var up = 0;
window.addEventListener('keydown',function(e){
    if(e.keyCode == 39){
        left+=10;
        snake.style.left = left + 'px';
        if(left>window.screen.width){
            left = -50;
            snake.style.left = left + 'px'
        }
    }
    else if(e.keyCode==37){
        left -= 10;
        snake.style.left = left + 'px';
        if(left<-50){
            left = window.screen.width;
            snake.style.left = left + 'px'
        }
    }
    else if(e.keyCode==38){
        up-=10;
        snake.style.top = up + 'px';
        if(up<-50){
            up = window.screen.height;
            snake.style.top = up + 'px'
        }
    }
    else if(e.keyCode==40){
        up+=10;
        snake.style.top = up + 'px';
        if(up>window.screen.height){
            up = -50;
            snake.style.top = up + 'px'
        }
    }
    else if(e.keyCode==13){
        let dot = document.createElement('div');
        dot.style.width = 10 + 'px';
        dot.style.height = 10 + 'px';
        dot.style.borderRadius =50 + '%';
        // dot.style.position = 'absolute';
        // dot.style.left = snake.style.offset
        dot.style.backgroundColor = 'yellow';
        snake.appendChild(dot);
    }

})
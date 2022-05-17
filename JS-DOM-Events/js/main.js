let snake = document.querySelector('.snake')
var main = document.querySelector('.main')
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
        
        var l =snake.style.left.slice(0,snake.style.left.length-2)
        let t = snake.style.top.slice(0,snake.style.top.length-2)

        dot.className = 'dot';
        dot.style.left=Number(l) + 25 + "px";
        dot.style.top=Number(t) + 25 +"px";
        snake.style.width=snake.style.width.slice(0,snake.style.width.length-2)-10 + "px";
        snake.style.height=snake.style.height.slice(0,snake.style.height.length-2)-10 + "px";

        dot.style.backgroundColor = 'yellow';
        main.appendChild(dot);
    }

})
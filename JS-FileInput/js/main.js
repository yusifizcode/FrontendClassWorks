let fileInput = document.getElementById('fileInput');
let imgBox = document.querySelector('.imgBox');


fileInput.addEventListener('change',function(){
    [...this.files].forEach(file=>{
        let reader = new FileReader();

        reader.onload = function(){
            let images = document.createElement('div');
            let img = document.createElement('img');
            img.style.width = 200 + 'px';
            img.style.height = 100 + 'px';
            images.style.position = 'relative';
            images.style.width = 200 + 'px';
            images.style.height = 100 + 'px';
            images.style.display = 'inline-block';
            images.style.marginRight = 10 + 'px';
            let span = document.createElement('span');
            span.innerText = 'X';
            span.style.position = 'absolute';
            span.style.right = -4 + 'px';
            span.style.top = -12 + 'px';
            span.style.color = 'black';
            span.style.fontWeight = 'bolder';
            span.style.cursor = 'pointer';
            img.setAttribute('src',reader.result);
            document.body.appendChild(images);
            images.appendChild(img);
            images.appendChild(span);
            span.addEventListener('click',function(){
                images.remove();
            })
        }

        reader.readAsDataURL(file);
    })
})


imgBox.addEventListener('click',function(){
    fileInput.click();
})
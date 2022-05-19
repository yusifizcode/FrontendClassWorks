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
            let span = document.createElement('span');
            span.innerText = 'X';
            span.style.position = 'absolute';
            span.style.right = 4 + 'px';
            span.style.color = 'white';
            img.setAttribute('src',reader.result);
            document.body.appendChild(images);
            images.appendChild(img);
            images.appendChild(span);
        }

        reader.readAsDataURL(file);
    })
})


imgBox.addEventListener('click',function(){
    fileInput.click();
})
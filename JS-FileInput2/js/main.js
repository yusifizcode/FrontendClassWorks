let uploadInput = document.querySelector('#uploadInput');
let uploadImg = document.querySelector('#uploadImg');
let removeAll = document.querySelector('#removeAll');

uploadInput.addEventListener('change',function(){
    [...this.files].forEach(file=>{
        let reader = new FileReader();
        reader.onload = function(){
            //tr created
            let tr = document.createElement('tr');
            document.querySelector('table tbody').appendChild(tr);

            //td created for img
            let tdImg = document.createElement('td');
            tr.appendChild(tdImg);
            tdImg.style.width = 25 + '%';
            let img = document.createElement('img');
            img.classList.add('tdImg');
            tdImg.appendChild(img);
            img.setAttribute('src',reader.result);

            //td created for file name
            let tdName = document.createElement('td');
            tdName.style.width = 25 + '%';
            tr.appendChild(tdName);
            let span = document.createElement('span');
            span.innerText = file.name;
            tdName.appendChild(span);

            //td created for file size
            let tdSize = document.createElement('td');
            tdSize.style.width = 25 + '%';
            tr.appendChild(tdSize);
            let spanSize = document.createElement('span');
            spanSize.innerText = file.size;
            tdSize.appendChild(spanSize);

            //td created for delete
            let deleteIcon = document.createElement('td');
            deleteIcon.style.width = 25 + '%';
            tr.appendChild(deleteIcon);
            let deleteSpan = document.createElement('span');
            deleteSpan.innerText = 'X';
            deleteSpan.style.color = 'red';
            deleteSpan.style.fontSize = 20 + 'px';
            deleteIcon.style.textAlign = 'center';
            deleteSpan.style.cursor = 'pointer';
            deleteIcon.appendChild(deleteSpan);
            
            //tr delete
            deleteSpan.addEventListener('click',function(){
                tr.remove();
                uploadInput.value = "";
            })
        }
        reader.readAsDataURL(file);
    })
})


uploadImg.addEventListener('click',function(){
    removeAll.classList.remove('d-none');
    document.querySelector('table').classList.remove('d-none');
    uploadInput.click();
})


removeAll.addEventListener('click',function(){
    document.querySelector('table tbody').remove();
    uploadInput.value = "";
})
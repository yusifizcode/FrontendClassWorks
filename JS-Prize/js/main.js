var openBtn = document.querySelectorAll('.openbtn');


let count = 0;
openBtn.forEach(btn=>{
    btn.addEventListener('click',function(){
        let active = this.getAttribute('data-id');
        let selected = document.querySelector('#'+active);
        this.style.visibility = "hidden";
        if(count<2){
            selected.style.filter = 'blur(0)';
        }
        openBtn.forEach(b=>{
            if(count>0){
                b.style.visibility = "hidden";
            }
        })
        count++;
        console.log(count)
        })
        
    })
var headings = document.querySelectorAll('.heading');

headings.forEach(h=>{
    h.addEventListener('click',function(){
        let hId = h.getAttribute('data-id');
        let content = document.querySelector('#'+hId);
        let active = document.querySelector('.active');
        active.classList.remove('active');
        this.nextElementSibling.classList.toggle('active');
    })
})
var city = document.getElementsByClassName('city');

for(i=0;i<city.length;i++){
   var clickedElem = city[i].addEventListener('click',function(){
        this.className = 'active';
        // this.previousElementSibling.style.backgroundColor = 'antiquewhite';
        // this.nextElementSibling.style.backgroundColor = 'antiquewhite';
    });
    
}



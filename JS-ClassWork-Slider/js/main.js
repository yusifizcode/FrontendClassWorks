var rightIcon = document.querySelector('#right-icon')
var leftIcon = document.querySelector('#left-icon')


rightIcon.addEventListener('click',function(){
    let currentActive = document.querySelector('.active');
    console.log(currentActive)
    currentActive.classList.remove('.active');
    currentActive.nextElementSibling.classList.add('active');
})


leftIcon.addEventListener('click',function(){
    let currentActive = document.querySelector('.active');
    console.log(currentActive)
    currentActive.classList.remove('.active');
    currentActive.previousElementSibling.classList.add('active');
})
var topla = document.querySelector('.topla')
var cix = document.querySelector('.cix')
var vur = document.querySelector('.vur')
var bol = document.querySelector('.bol')
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')

topla.addEventListener('click',function(){
    if(!isNaN(num1.value) && (num1.value != "") && !isNaN(num2.value) && (num2.value != "")){
        alert(Number(num1.value) + Number(num2.value))
    }
    else{
        alert("Duzgun deyer daxil edin!")
    }
})

cix.addEventListener('click',function(){
    if(!isNaN(num1.value) && (num1.value != "") && !isNaN(num2.value) && (num2.value != "")){
        alert(Number(num1.value) - Number(num2.value))
    }
    else{
        alert("Duzgun deyer daxil edin!")
    }
})


vur.addEventListener('click',function(){
    if(!isNaN(num1.value) && (num1.value != "") && !isNaN(num2.value) && (num2.value != "")){
        alert(Number(num1.value) * Number(num2.value))
    }
    else{
        alert("Duzgun deyer daxil edin!")
    }
})


bol.addEventListener('click',function(){
    if(!isNaN(num1.value) && (num1.value != "") && !isNaN(num2.value) && (num2.value != "")){
        alert(Number(num1.value) / Number(num2.value))
    }
    else{
        alert("Duzgun deyer daxil edin!")
    }
})
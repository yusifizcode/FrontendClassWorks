var ans1 = prompt("Eded1: ")
var ans2 = prompt("Eded2: ")

while(isNaN(ans1) || isNaN(ans2)){
    console.log("eded daxil edin: ")
    ans1 = prompt("Eded1: ")
    ans2 = prompt("Eded2: ")
}

console.log(Number(ans1)+Number(ans2))  
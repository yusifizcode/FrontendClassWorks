class Car{
    constructor(brand,model,price,year){
        this.Brand = brand,
        this.Model = model,
        this.Price = price,
        this.Year = year
    }
}


class CarStore{
    constructor(){
        this.Cars = []
        this.AddCar = function(car){
            this.Cars[this.Cars.length] = car;
        }
    };
    
}

var carBrand = prompt("Mashin brandini daxil edin: ")
var carModel = prompt("Mashin modelini daxil edin: ")

do{
    var carPrice = prompt("Mashin qiymetini daxil edin: ")
}
while(isNaN(carPrice))


do{
    var carYear = prompt("Mashin ilini daxil edin: ")
}
while(isNaN(carYear))

var car1 = new Car(
    Brand = carBrand,
    Model = carModel,
    Price = carPrice,
    Year = carYear
    )


var carStore = new CarStore();

carStore.AddCar(car1);

for(i=0;i<carStore.Cars.length;i++){
    console.log(carStore.Cars[i].Model)
}
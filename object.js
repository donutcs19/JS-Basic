//object Literal

const carObj = {
    make : "Mclaren",
    model : "Senna",
    year : 2020,
    //method
    displayInfo: function(){
        console.log(`ยี่ห้อ : ${this.make}, รุ่น : ${this.model}, ปี : ${this.year}`);
    }
};

console.log(carObj.make);
carObj.displayInfo();

const date = new Date();
console.log(date);

//Object Constructor
function Car(make, model, year){
    this.make = make; //proporties
    this.model = model;
    this.year = year;
    this.displayInfo = function(){
        console.log(`ยี่ห้อ : ${this.make}, รุ่น : ${this.model}, ปี : ${this.year}`);
    }
}

//New Keyword

const car1 = new Car("Ferrari", "SF90", 2024);
const car2 = new Car("Lamborghini", "Revuelto", 2024)

console.log(car2);

car1.displayInfo();
car2.displayInfo();
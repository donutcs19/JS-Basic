//for
let brands = ["Mclaren", "Tesla", "Ferrari", "Lamborghini", "Porsche"];

for (let i = 0; i < brands.length; i++){
    console.log(brands[i]);
}

for (let i = 1; i <= 8; i++){
    console.log(`[Number] -> ${i}`)
}

//for in loop
let person = {
    name : "Shikikie",
    age : 27,
    city : "CNX-SPK",
    status : "Love"
}

for (let key in person){
    console.log(key + ": " + person[key]);
}

//for of loop
let cars = ["Mclaren", "Tesla", "Ferrari", "Lamborghini", "Porsche"];

for (let car of cars){
    console.log(car);
}

//while loop
let i = 0;
while (i < 5){
    console.log(`[while] -> ${i}`);
    i++
}

//do loop
let j = 5;
do {
    console.log(`[do] -> ${j}`);
    j++  
}while (j > 5);
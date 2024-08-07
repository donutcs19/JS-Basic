//forEach
console.log("forEach()");
const num = [1,2,3,4,5,6,7,8];
num.forEach(function(number){
    console.log(number)
});

//map
console.log("map()");
const num2 = [1,2,3,4,5,6,7,8];
const double = num2.map(function(number){
    return number * 2;
});
console.log(double);

//filter
console.log("filter()");
const num3 = [1,2,3,4,5,6,7,8];
const even  = num3.filter(function(number){
    return number % 2 === 0;
});
console.log(even);

//reduce
console.log("reduce()");
const num4 = [1,2,3,4,5,6,7,8];
const sum = num4.reduce(function(total, number){
    console.log(total, number);
    return total + number;

}, 0);

console.log(`Total : ${sum}`);

//some (True/False)
console.log("some()");
const num5 = [1,2,3,4,5,6,7,8];
const hasEven = num5.some(function(number){
    return number % 2;

}, 0);

console.log(`Ans : ${hasEven}`);

//every เช็คค่าทุกตัวตามเงื่อนไข (True/False)
console.log("every()");
const num6 = [1,2,3,4,5,6,7,8];
const allPositive = num6.every(function(number){
    return number > -1;

}, 0);

console.log(`Ans : ${allPositive}`);

//find จะแสดงตัวแรกที่ตรงตามเงื่อนไข
console.log("find()");
const num7 = [1,2,3,4,5,6,7,8];
const firstEven = num7.find(function(number){
    return number % 2 === 0;

}, 0);

console.log(`Ans : ${firstEven}`);

//findIndex จะแสดงตัวแรกที่ตรงตามเงื่อนไข
console.log("findIndex()");
const num8 = [1,2,3,4,5,6,7,8];
const firstIndex = num8.findIndex(function(number){
    return number % 3 === 0;

}, 0);

console.log(`Ans : ${firstIndex}`);
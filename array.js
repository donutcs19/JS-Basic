const arr1 = ["Kikie", "Donut", "Cookie", "Pookie"]; //array literal
// console.log(arr1.length);

//. push(); เพิ่ม data ด้านท้าย array
console.log(arr1.push("Shikikie"));

//. pop(); ลบ data ด้านท้าย array
console.log(arr1.pop());

//. shift(); ลบ data array แรก
console.log(arr1.shift());

//. unshift(); เพิ่ม data array แรก
console.log(arr1.shift("Shikikie"));

console.log(arr1);
// console.log(arr1[3] = 267);

const cars = new Array("Mclaren", "Tesla", "Ferrari", "Lamborghini", "Porsche");
console.log(cars);

const concatArray = arr1.concat(cars);
console.log(concatArray);

console.log(concatArray[6]);
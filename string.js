let text = "This is a string";
let fname = "Shikikie";
let lname = "BACS2267";
// let show = fname + " " + lname;
//Template String / Template Literal
let show = `Hello : ${fname} , MJU : ${lname}`;

console.log(show);
console.log(show.length);
console.log(typeof show);

let price = 100;
let vat = 0.07;
let total = `Total : ${(price * (1 + vat)).toFixed(2)}`;   // .toFixed(x) = จำนวนตำแหน่งทศนิยมที่ต้องการ

console.log(total);
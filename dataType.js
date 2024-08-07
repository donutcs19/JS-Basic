
//Numbers
let length = 2000;
let Weight = 20.2;

//String
let car = "Mclaren";
let name = "Shikikie";

//Booleans
let isTrue = true;
let isFalse = false;

//Object
const person = {
    name : "Shikikie",
    live : "NNT,CNX-BKK",
};

//Array
const airline = ["Thai Airasia","Thai Airways","Thai Lion Air","Bangkok Airways"];

//Undefined ไม่มีการกำหนดค่า
let x;
console.log(typeof x);

//BigInt ไม่สามารถใช้ทศนิยม และ Math. ได้
let bigInt = BigInt(5555555555555555555555555555555555555555555555555555555555555555555555555555555553436436545646546546546546546445656);

//Symbol ใช้กับ key ของ Object
const sym1 = Symbol("KK");
const sym2 = Symbol("KK");
console.log(sym1 === sym2);  // == false

//Null
const age = null;
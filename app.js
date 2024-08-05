function showMSGExternal($msg){
    alert($msg);
}

function myContent(){
    const ContentCH = document.getElementById('demo');
    ContentCH.innerHTML = "Shikikie Love You 2024"; 

    document.write("Shikie 367");
    alert("Welcome Kikie");
    console.log("Console Kikie");
}
// // var/let can reassign เปลี่ยนค่าใหม่ได้
// let name = "shikikie";
// name = "BACS";     //const cannot reassign เปลี่ยนค่าใหม่ไม่ได้,error
// console.log(name);

// var a = 67;
// var b = 22;
// var c = a + b;
// console.log(c);

// let x = 67;
// let y = 22;
// let z = x + y;
// console.log(z);

// const k = 67;
// const n = 22;
// const kn = k + n;
// console.log(kn)

// // let,const = block scope
// {
// //block scope
//     let x = 5;
// }
// //global scope
// console.log(x)

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

function myFunction(num1,num2){
    let name = "Shikikie"; //local Variable
    return num1 * num2;
}

let sum = myFunction(200,3);
console.log(sum);
// var/let can reassign เปลี่ยนค่าใหม่ได้
let name = "shikikie";
name = "BACS";     //const cannot reassign เปลี่ยนค่าใหม่ไม่ได้,error
console.log(name);

var a = 67;
var b = 22;
var c = a + b;
console.log(c);

let x = 67;
let y = 22;
let z = x + y;
console.log(z);

const k = 67;
const n = 22;
const kn = k + n;
console.log(kn)

// let,const = block scope
{
//block scope
    let x = 5;
}
//global scope
console.log(x)
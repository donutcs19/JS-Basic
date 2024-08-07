//let & const ใช้นอก scope ไม่่ได้

{
    //in scope
    let name = "shikikie";
}


//local scope
function localFunc(){
    let cars = "tesla";
    console.log(cars);
}
localFunc();

function myFunc(){
    var fname ="shi"; //function scope
    let lname = "kikie"; //function scope
    const age = 27; //function scope
    console.log(fname);
}
myFunc();

//global scope ประกาศตัวแปรไว้นอก function scope สามารถดึงไปใช้ใน  scope ได้
var x = 10;
let y = 20;
const z = 30;



const person ={
    name : "shikikie",
    age : 27,
    address : "cnx-spk"
};

let {name, age, address} = person;  //ลำดับไม่สำคัญเรียงยังไงก็ได้ แต่ console.log ต้องเรียงถูก
console.log(name, age, address);

let {name : n, age : a, address : ad, country = "TH"} = person;  //แทนค่าด้วยการใช้ : (โคลอน) ,country = "TH" คือการแทนค่า (Default value)
console.log(n, a, ad, country);

const brands = ["Mclaren", "Tesla", "Ferrari", "Lamborghini", "Porsche"];
let [brands1, , brands2] = brands; //, , ใช้เว้นว่าง
console.log(brands1, brands2);

const number = [10, 20, 30, 40, 50, 60, 70, 80];
const [num1, num2, ...rest] = number; // ...rest ใช้ แสดงค่าที่เหลือเป็น array  
console.log(num1);
console.log(num2);
console.log(rest);

 
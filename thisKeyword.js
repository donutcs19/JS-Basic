console.log(this); //ใช้เดี่ยวๆคือ windows obj

function myFunc(){
    console.log("shikikie",this);
}
myFunc();

const person = {
    fname: "Shi",
    lname: "Kikie",
    fullName() {
        return this.fname+this.lname;
    }
}
console.log(person.fullName());
// const score = 51;
// if(score > 100){
//     console.log(`Score : ${score} is Over Score`);
// }else if(score >= 90){
//     console.log(`Score : ${score} is Grade A`);
// }else if(score >= 85){
//     console.log(`Score : ${score} is Grade B+`);
// }else if(score >= 80){
//     console.log(`Score : ${score} is Grade B`);
// }else if(score >= 75){
//     console.log(`Score : ${score} is Grade C+`);
// }else if(score >= 70){
//     console.log(`Score : ${score} is Grade C`);
// }else if(score >= 65){
//     console.log(`Score : ${score} is Grade D+`);
// }else if(score >= 60){
//     console.log(`Score : ${score} is Grade D`);
// }else if(score > 50 && score < 0){
//     console.log(`Score : ${score} is Grade F`);
// }else{
//     console.log("[Error] -> can't calculate")
// }



let age = 17;
//if is ternary operator
let msg = (age > 18) ? "You are an adult." : "You are'n an adult."
console.log(msg);

//if original
if(age >= 18){
    console.log("You are an adult.");
}else{
    console.log("You are'n an adult.");
}
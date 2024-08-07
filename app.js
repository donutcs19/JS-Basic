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

const btn = document.getElementById("myBtn");
const bg = document.getElementById("chColor");

btn.addEventListener("click", function(){
    const text = document.getElementById("myText");
    text.textContent = "Welcome to Learn Javascript";
});

bg.addEventListener("mouseover", function(){
    const color = document.getElementById("bg-color");
    color.style.backgroundColor = "yellow";
});

bg.addEventListener("mouseout", function(){
    const color = document.getElementById("bg-color");
    color.style.backgroundColor = "white";
});




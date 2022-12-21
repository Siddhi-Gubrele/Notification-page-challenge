
console.log("called");
function myfunc(div){
    console.log("called");
    console.log(div);

    console.log(div.className);
    div.className = div.className.replace("not-read", "");
    let ct = parseInt(document.getElementById("count").innerHTML);
    console.log(ct);
    ct--;
    document.getElementById("count").innerHTML = ct;
}

function fun(){
    let ele=document.getElementsByClassName("not-read");
    console.log(ele);
    let x=ele.length
    console.log("hello");
    for(let i=0; i<x; i++){
        console.log(ele[i]);
       ele[i].style.background="hsl(211, 68%, 94%)";
    
    let ct = parseInt(document.getElementById("count").innerHTML);
    console.log(ct);
    ct--;
    document.getElementById("count").innerHTML = ct;
    }
}

let divs= document.getElementsByClassName("not-read");
let button = document.getElementById("1");
button.addEventListener("click", () => {fun()});

console.log(divs);
console.log(divs.length);
for(let i = 0; i < divs.length; i++){
    console.log(divs[i]);
    let ele = divs[i];
    divs[i].addEventListener("click", () => {myfunc(ele)});
    console.log(divs[i]);
}





 
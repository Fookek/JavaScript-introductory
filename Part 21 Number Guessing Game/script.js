/*
const submit = document.getElementById("Submit");
const entry = document.getElementById("enter");
const result = document.getElementById("response")

const answer = Math.floor(Math.random() * 100 + 1);
console.log(answer);

let input;



submit.onclick = function(){
    input = Number(entry.value)
    console.log(input);
    if(input > answer){
        result.textContent = "too large";
    }
    else if(input < answer){
        result.textContent = "too small";
    }
    else if(input == answer){
        result.textContent = "Yay, you got it";
    }
}
*/

//using while loops

let running = true;
let input;
const answer = Math.floor(Math.random() * 100 + 1);

while(running == true){
    input = window.prompt("enter number");

    if(input == NaN){
        window.alert("has to be a number");
    }
    else if(input > answer){
        window.alert("too large");
    }
    else if(input < answer){
        window.alert("too small");
    }
    else{
        window.alert("correct!");
        running = false;
    }
}
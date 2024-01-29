let age;
//const cannot be changed
const PI = Number(3.1416);
let r;
let cirumference;



document.getElementById("rsubmit").onclick = function(){
   r = Number(document.getElementById("rinput").value);
   cirumference = 2 * PI * r;
   document.getElementById("routput").textContent = cirumference;
}


/*
age = Number(window.prompt(`age`));

remember to have capital letter at start of tye conversion function

age = age;
age += 1;

console.log(age, typeof age);
*/
let randnum;

const roll = document.getElementById("roll");
const rand = document.getElementById("rand");

roll.onclick = function(){
    randnum = Math.floor(Math.random() * 100000000) + 1;
    rand.textContent = randnum;
}


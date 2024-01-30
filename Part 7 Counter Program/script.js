let counter = 0;

document.getElementById("decrease").onclick = function(){
    counter --;
    document.getElementById("numberbox").textContent = counter
}

document.getElementById("increase").onclick = function(){
    counter ++;
    document.getElementById("numberbox").textContent = counter
}

document.getElementById("reset").onclick = function(){
    counter = 0;
    document.getElementById("numberbox").textContent = counter
}


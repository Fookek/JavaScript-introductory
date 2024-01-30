const fin = document.getElementById("fin");
const straight = document.getElementById("straight");
const gay = document.getElementById("gay");
const bi = document.getElementById("bi");
const submit = document.getElementById("submit");
const finout = document.getElementById("finout");
const sexout = document.getElementById("sexout");

submit.onclick = function(){
    if(fin.checked){
        finout.textContent = "you are finished"
    }
    else{
        finout.textContent = "you are not done"
    }
    if(straight.checked){
        sexout.textContent = "you are straight"
    }
    else if(gay.checked){
        sexout.textContent = "you are gay"
    }
    else if(bi.checked){
        sexout.textContent = "you are bi"
    }
}
const cf = document.getElementById("c-f");
const fc = document.getElementById("f-c");
const entry = document.getElementById("entry");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

convert.onclick = function(){
    let starttemp = Number(entry.value);
    let endtemp;

    if(cf.checked && starttemp != NaN){
        endtemp = (starttemp * 9/5) + 32
        result.textContent = `${endtemp.toFixed(3)} farenheit`

    }
    else if(fc.checked && starttemp != NaN){
        endtemp = (starttemp - 32) * 5/9
        result.textContent = `${endtemp.toFixed(3)} celsius`
    
    }
}
//callback, call a function from another function by entering it as an argument

function sum(callback, x,y){
    let result = x+y;
    callback(result);
}

function displayconsole(content){
    console.log(content);
}

sum(displayconsole, 5, 2);
let username = window.prompt("enter username");
/*
username = username.trim();
let fletter = username.charAt(0);
fletter = fletter.toUpperCase();

let extra = username.slice(1);
extra = extra.toLowerCase();
username = fletter + extra

*/


//method chaining above into 1 line
username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
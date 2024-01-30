//Part 14

/*
let username = "Dacka228              "

console.log(username.charAt(0));
console.log(username.indexOf("a"));
console.log(username.length);
username = username.trim()
console.log(username.length);
console.log(username.repeat(4));
console.log(username.startsWith("D"))
console.log(username.endsWith("0"))
console.log(username.includes("k"))
console.log(username.replaceAll("a", "e"))
console.log(username.padStart(20,0))
console.log(username.padEnd(20,0)
*/

//Part 15

const завут = "даша баркова";

//let firstname = завут.slice(0,4);
//let lastname = завут.slice(5,12);

firstname = завут.slice(0, завут.indexOf(" "))
lastname = завут.slice(завут.indexOf(" ") + 1, завут.length)

console.log(firstname)
console.log(lastname)



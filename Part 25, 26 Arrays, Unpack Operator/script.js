let priorities = ["Family", "Nago", "Dasha"];

priorities.push("Killian");
priorities.pop(); //removes
priorities.unshift("Gangar"); //adds to beginning
priorities.shift(); //removes element from beginning

priorities.length;

let index = priorities.indexOf("Dasha"); //searches for value in brackets, returns index, -1 if doesnt exist

for(let priority of priorities){
    console.log(priority);
}

priorities.sort(); //sorts in alphabetical order can add .reverse() method

let numbers = [1,2,3,4,5];

let max = Math.max(...numbers);
console.log(max);

const name = "Dasha";
let letters = [...name];
console.log(letters);

const name2 = "NAGO";
let letters2 = [...name2].join("-");
console.log(letters2);
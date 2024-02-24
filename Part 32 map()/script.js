//accepts callback as an argument and runs the callback for each element in the array, but returns new array

const numbers = [1,2,3,4,5,6,7,8,9];

let fruits = ["apple", "orange", "banan"];

function square(element){
    return Math.pow(element, 2);
}

function capitalize(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}

console.log(numbers.map(square));

console.log(fruits);
fruits = fruits.map(capitalize);
console.log(fruits)
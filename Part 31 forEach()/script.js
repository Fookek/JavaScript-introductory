//foreach

const numbers = [1,2,3,4,5,6,7,8,9]

numbers.forEach(square);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function square(element, Index, Array){
    Array[Index] = Math.pow(element, 2);
}

const fruits = ["apple", "orange", "lemon"];

function capitalize(element, Index, Array){
    Array[Index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(display);
let food1 = "pizza";
let food2 = "fries";
let food3 = "burger";
let food4 = "ramen";
let food5 = "sushi";

//... in parameters will bundle up all the parameters into an array

function arrayify(...foods){
    console.log(foods);
    console.log(...foods);
    return foods;
}

let foods = [arrayify(food1,food2,food3,food4,food5)];

console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let i of numbers){
        result += i
    }
    return result;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))
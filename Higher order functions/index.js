// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.


const radius = [1, 2, 3];

// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

// function to calculate diameter of the circle
const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));
console.log(calculateDiameter(radius))

// the same logic is repeating again and again , so we can use higher order function to avoid this repetition

const radius = [1, 2, 3];

// logic to clculate area
const area = function(radius){
    return Math.PI * radius * radius;
}

// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));


const circumeference = function(radius){
    return 2 * Math.PI * radius;
}

console.log(calculate(radius, circumeference));
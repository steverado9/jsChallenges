//Ternary operator
//This is an tenary operator used inside an arror function expression
const isNumber = (a) => typeof a === "number" ? "This is a number" : "That's not a number";

console.log(isNumber(10));
console.log(isNumber("Hey there"));
console.log(isNumber(true));

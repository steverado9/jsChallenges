//Ternary operator
function isNumber (a) {
    return typeof a === "number" ? "This is a number" : "That's not a number";
}
console.log(isNumber(10));
console.log(isNumber("Hey there"));
console.log(isNumber(true));

let obj = {
    x: 5,
    y: 20,
    z: 3
};

//Not destructuring
// function mult(obj) {
//     let num = 1;
//     for (const key in obj) {
//         num *= obj[key];
//     }
//     return num; 
// }
// console.log(mult(obj));

//destructuring 
const mult = (object) => {
    let {x, y} = object;
    return x * y;  
}
console.log(mult(obj));

//or
const multiply = ({x, y, z}) => {
    return x * y * z;
}
console.log(multiply(obj));


 
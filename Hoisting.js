//Hoisting
var a = 5, b = 10;

if (b > a) {
    let c = 2;
    c = a + b + c;
    console.log(c);
    
}

// console.log(c);

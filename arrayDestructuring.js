//Destructuring and rest operator
//assign values to a, b, c variables using destructuring and rest operator

let a, b, c;

let arr = [1, 2, 3, 4, 5, 6, 7];

[a, b, ...c] = arr;

// a = arr.shift();

// b = arr.shift();

// c = arr;

console.log(a);

console.log(b);

console.log(c);



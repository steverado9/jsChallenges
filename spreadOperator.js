/* spread operator
    Use the spread operator to construct arr variable
*/

let a, b, c, d, arr;

a = [1, 2];
b = [4, 5];
c = [8, 9, 10];
d = 11;

arr = [0, ...a, 3, ...b, 6, 7, ...c, d];

console.log(arr);


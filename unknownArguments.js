//Create a funtion that will sum all arguments passed to it
// Quantity of argumnet is unknown
// function sum(...arg) {
//     let num = 0;
//     for (const element of arg) { //solution one
//         num += element;
//     }
//     console.log(num);
// }

function sum(...args) {
    let total = args.reduce((acc, elem) => acc + elem, 0) //solution two
    console.log(total);
}
sum(2, 4);
sum(5, 8, 9);
sum(15, 7, 9)







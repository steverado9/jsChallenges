//Create a funtion that will sum all arguments passed to it
// Quantity of argumnet is unknown
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array

const sum = (...args) => {
    let total = args.reduce((acc, elem) => acc + elem, 0) //solution two
    console.log(total);
}
sum(2, 4);
sum(5, 8, 9);
sum(15, 7, 9)







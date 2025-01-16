//create a new function and use it as a default parameter
const missingArg = () => {
    throw new error ("function square requires an argument");
}

const square = (a = missingArg()) => {
    console.log(a * a);
}

square(10);

square();
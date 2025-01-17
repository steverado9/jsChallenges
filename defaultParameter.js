//Default parameters
const multiplyBy = (a, mult = 2) => {
    mult = mult !== undefined ? mult : 2;
    console.log(a * mult);
}

multiplyBy(2);

multiplyBy(2, undefined)

multiplyBy(2, 0)

multiplyBy(5, 10)

//we cannot use mult = mult || 2 beacuse once there is a falsy value, it will atomatically pick 2
//you can also set default parameter inside the function ie mult = 2
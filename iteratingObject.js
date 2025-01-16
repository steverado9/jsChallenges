/*  Iterating over onject
    create a function sumObjectValues() that will sum all values
    of the field that contains numbers
    Ensure that iteration is done only over own proprtties of ths */



const sumObjectValues = (object) => { 
    let total = 0; //0
    for (const key in object) { // a b c d
        if (typeof object[key] === "number") { //true true false true
            total += object[key]; //10 30 42
        }
    }
    return total; //42
}

const nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}

console.log(sumObjectValues(nums));

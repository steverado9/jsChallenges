/*  Object Destructuring

    create shortPerson() function that will destructure each person object.
    sample result:
    {n: "mike", c: spain, a: 23, p: 100}
    if input object does not have postQuantity field, it should get default value 0
 */

let person1 = {
    name: 'mike',
    info: {
        country: 'spain',
        age: 23
    },
    postQuantity: 100
}

let person2 = {
    name: 'Alice',
    info: {
        country: 'Italy',
        age: 25
    }
}

//function
function shortPerson(object) {
    let {name: n, info: {country: c, age: a}, postQuantity: p = 0} = object;
    return {n, c, a, p }
}


console.log(shortPerson(person1));
// {n: "mike", c: spain, a: 23, p: 100}

console.log(shortPerson(person2));
// {n: "Alice", c: italy, a: 25, p: 0}

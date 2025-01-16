/* Template literals
    create carInfo() function that will return info about each car

    car is considered cheap if it's price is <= 20000
    car is considered expensive if its price is > 20000  
*/

let cars = [
    { brand: "Honda", price: 13000 },
    { brand: "Rolls-Royce", price: 120000}
];

//function
function carInfo(car) {
    if (car.price <= 20000) {
        return `Price of my new ${car.brand} is ${car.price} and it is a cheap car`
    } else if (car.price > 20000) {
        return `Price of my new ${car.brand} is ${car.price} and it is an expensive car `
    }
}
cars.forEach(car => console.log(carInfo(car)));

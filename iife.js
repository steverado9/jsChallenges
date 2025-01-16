/* IIFE - Immediatly Invocked function Expression

complete IIFE that will expose the following methods:
greet() - it will take one arguement and return greeting string
changeGreeting() -it will change greeting string

initial greeting string "Hey, that's must be defined inside IIFE*/

let greeting = (() => {
    let greetingString = "Hey, that's";

    function greet(name) {
        return `${greetingString} ${name}`;
    }

    function changeGreeting(newGreeting) {
        greetingString = newGreeting;
    }

    return {
        greet,
        changeGreeting
    }
})();


console.log(greeting.greet("Bob")); 
//Hey that's bob

console.log(greeting.changeGreeting("Good Morning From"));
//undefined

console.log(greeting.greet("Emily"));
//Good Morning From Emily



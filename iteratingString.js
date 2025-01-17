/* iterate over string
    Count the number of the lowerCase vowel letters in the string
    vowel letters - a, e, i, o, u
*/
let vowelsCount = 0;

let vowels = ["a", "e", "i", "o", "u"];

let str = "Today is best day of my life";

for (let s of str) {
    if(vowels.includes(s)) {
        vowelsCount++;
    }  
}
console.log(vowelsCount);



 


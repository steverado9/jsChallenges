/* iterate over string
    Count the number of the lowerCase vowel letters in the string
    vowel letters - a, e, i, o, u
*/

const include = (vowels, word) => {
    if (word === '') return false;
    for (const element of vowels) {
        if (element === word) {
            return true;
        }
    } 
    return false;
}

let vowelsCount = 0;

let vowels = ["a", "e", "i", "o", "u"];

let str = "Today is best day of my life";

for (let s of str) {
    if (include(vowels, s)) {
        vowelsCount++;
    }  
}

console.log(vowelsCount);



 


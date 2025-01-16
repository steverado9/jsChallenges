/* 
Answer the following questions:
    1.  Why no error is generated after line 14? Because i pushed(added) into the array
    2.  why after line 19, typeError is generated? We reassigned to a constant variable

    change one line of code so,that the error goes away
    Do not change line 14 and 19
*/

"use strict";

let arr = [1, 2];

arr.push(3);

console.log(arr);
//[1, 2, 3]

arr = [1, 2, 3, 4];




console.log(arr);

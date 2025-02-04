/* Sum positive and Negative numbers
    Create a function sumPlusMinus() that takes array
    and sums seperately positive and negative numbers.
    
    it should return an object 
    {
    plus: 74 sum of all the positive numbers
    minus: -54 sum of all the negetive numbers
    }
 */

let num = [10, -12, 30, -1, -8, 0, 14, -33, 20];

const sumPlusMinus = (arr) => {
    return arr.reduce(
        (acc, elem) => {
            return {
                plus: elem > 0 ? acc.plus + elem : acc.plus,
                minus: elem < 0 ? acc.minus + elem : acc.minus
            }
        }, {plus: 0, minus: 0} )
}
console.log(sumPlusMinus(num));



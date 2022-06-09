/* PlusMinus */
/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to are acceptable.
Example
There are elements, two positive, two negative and one zero. Their ratios are , and
. Results are printed as:
0.400000
0.400000
0.200000
*/
function plusMinus(arrayInt) {
    let arrayLength = arrayInt.length
    let positiveInts = arrayInt.filter(n => n > 0).length
    let negativeInts = arrayInt.filter(n => n < 0).length
    let zero = arrayInt.filter(n => n === 0).length
    console.log(positiveInts / arrayLength)
    console.log(negativeInts / arrayLength)
    console.log(zero / arrayLength)
}

/* Mini-Max Sum */
/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function miniMaxSum(arr) {

    const maxNum = Math.max(...arr)
    const minNum = Math.min(...arr)

    let minSum = arr.reduce((a, b) => a + b) - maxNum
    let maxSum = arr.reduce((a, b) => a + b) - minNum

   console.log(minSum, maxSum)
}
miniMaxSum([1, 3, 5, 7, 9])

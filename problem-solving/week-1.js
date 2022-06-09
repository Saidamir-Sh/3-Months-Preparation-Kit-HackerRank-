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

/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Example
Return '12:01:00'.
Return '00:01:00'.
Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
string s: a time in hour format
Returns
    string: the time in hour format
Input Format
A single string that represents a time in -hour clock format (i.e.: or).
Constraints
    All input times are valid
*/

function timeConversion(s) {
    console.log(s)
}

timeConversion('07:05:45PM')
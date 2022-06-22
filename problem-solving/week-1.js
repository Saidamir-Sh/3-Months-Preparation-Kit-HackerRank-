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
    let format = s.substring(s.length - 2)
    let hour = s.substring(0, 2)
    let minutes = s.substring(3, 5)
    let seconds = s.substring(6, 8)

    if(format === 'PM') {
        hour = +hour + 12 < 24 ? +hour + 12 : '12'
    }
    if(format === 'AM') {
        hour = hour == 12 ? '00' : hour
    }
    let time = `${hour}:${minutes}:${seconds}`
    console.log(time)
}

timeConversion('07:05:45PM')

/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example
scores = [12, 24, 10, 24]
*/

function breakingRecords(games) {
    let most = games[0];
    let least = games[0];
    
    let dMost = 0;
    let dLeast = 0;
    
    for (const score of games) {
        if (most < score) {
            most = score;
            dMost++;
        }
        else if (score < least) {
            least = score;
            dLeast++;
        }
    }
    
    return [dMost, dLeast];
}
console.log(breakingRecords([9, 10, 5, 20, 20, 4, 5, 2, 25, 1]))


/* Camel Case */
/*
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

    Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
    The operation will either be S (split) or C (combine)
    M indicates method, C indicates class, and V indicates variable
    In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
    In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.

*/
// Task > creating or splitting  variable, method, and class names
// * each input starts with (S or C) followed by semicolon , M, C, V followed by semicolon and words
// * operation is S > split or C > combine
// * M > method, C > class, V > variable
// * in the case of S split operation I need to split it into space-delimination list and all words starting with lower case
// * in the case of C combine operation  I need to combine appropriate  camel case  strings. methods should end with an empty () in order to differentiate variable names

function processData(input) {

    return input
}


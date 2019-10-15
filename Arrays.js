'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let sorting = nums.slice(0).sort((a, b) => a - b)
    var max = Math.max(...sorting);
    var maxSecond = 0;
    for (let i = sorting.length - 1; i >= 0; i--) {
        if (sorting[i] < max) {
            maxSecond = sorting[i];
            break;
        }
    }
    return maxSecond;
}
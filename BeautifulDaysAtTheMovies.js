'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
   let count = 0;
    // Step 1.
    for (let x = i; x <= j; x++) {
        // Step 4.
        if (isBeautifulDay(x, k)) {
            count++;
        }
    }
    // Step 5.
    return count;
}

function isBeautifulDay(x, k) {
    // Step 3.
    return differenceOfReverse(x) % k === 0;
}

function differenceOfReverse(x) {
    let reversedX = parseInt(
        x
            .toString()
            .split('')
            .reverse()
            .join('')
    );
    // Step 2.
    return Math.abs(x - reversedX);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}


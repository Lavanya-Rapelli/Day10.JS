// Problem 3: Diamond Pattern
// Write a program to print a diamond pattern using asterisks (\*) and spaces. The size of the diamond should be taken as input from the user.
// Example:
// Input:
// Enter the size of the diamond: 5

// ​
// Output:
//   *
//  ***
// *****
//  ***
//   *



function printDiamond(size) {
    if (size < 1 || size % 2 === 0) {
        console.log("Invalid size. Please enter a positive odd number.");
        return;
    }

    const n = Math.floor(size / 2);

    // Print the upper part of the diamond
    for (let i = 0; i <= n; i++) {
        let row = "";

        // Add leading spaces
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }

        // Add asterisks
        for (let k = 0; k < 2 * i + 1; k++) {
            row += "*";
        }

        console.log(row);
    }

    // Print the lower part of the diamond
    for (let i = n - 1; i >= 0; i--) {
        let row = "";

        // Add leading spaces
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }

        // Add asterisks
        for (let k = 0; k < 2 * i + 1; k++) {
            row += "*";
        }

        console.log(row);
    }
}

// Directly set the size of the diamond
const size = 5; // Change this value to test with different sizes

printDiamond(size);


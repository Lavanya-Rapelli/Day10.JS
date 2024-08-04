// <!-- Problem 1: Hollow Square Pattern
// Write a program to print a hollow square pattern using asterisks (\*) and spaces. The size of the square should be taken as input from the user.
// Example:
// Input:
// Enter the size of the square: 5

// ​
// Output:
// *****
// *   *
// *   *
// *   *
// ***** 
// <!--  -->

function printHollowSquare(num) {
    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j < num + 1; j++) {
            if (i === 0 || i === num - 1 || j === 0 || j === num) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}
let num = 5; 
printHollowSquare(num);


// Problem Statement

// Write a program to show all the odd numbers between 581 to 623 as output.

/*
-----------------------
=======================
        Solution
=======================
-----------------------
*/

// Using While Loop

var startNumber = 581;

while (startNumber <= 623) {
    console.log(startNumber);
    startNumber +=2;
}


// Using For Loop

for (let i = 581; i <= 623; i +=2){
    console.log(i);  
}
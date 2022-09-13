// Problem Statement

// Write a program to run a For loop between the number 30 to 86. The program need to be stop when it reached to the number 44.


/*
-----------------------
=======================
        Solution
=======================
-----------------------
*/


// Break the Loop using For Loop

for(i = 30; i <= 86; i++) {
    console.log(i);
    if (i === 44){
        break;
    }
}


// Break the Loop using While Loop

var startingNumber = 30;

while(startingNumber <= 86){
    console.log(startingNumber);
    if(startingNumber === 44){
        break;
    }
    startingNumber++;
}
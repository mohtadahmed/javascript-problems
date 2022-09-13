// Problem Statement

// Create an Array using all your books price. Now write a program to show output of the book prices which are below 200tk. Those who have the price higher than 200tk will skip and show the rest of the prices in the output.

// Book Prices: 114, 70, 240, 410, 120, 140, 155, 350, 175, 198, 270.


/*
-----------------------
=======================
        Solution
=======================
-----------------------
*/

var bookPrices = [114, 70, 240, 410, 120, 140, 155, 350, 175, 198, 270];
var price = 0;

//  Using While Loop

while(price < bookPrices.length){
    if((bookPrices[price]) < 200){
        console.log(bookPrices[price]);
    }
    price++;
}


// Using For Loop

for (let i = 0; i < bookPrices.length; i++) {
    if(bookPrices[i] > 200){
        continue;
    }
    else{
        console.log(bookPrices[i]);
    }
}

// Problem Statement

// Create an Array of all your used mobile phone and show them as an output using While Loop.
// Array Items: Nokia, Huawei, Redmi, Xiaomi, Oneplus, Realme, Samsung.


/*
-----------------------
=======================
        Solution
=======================
-----------------------
*/


// Declaring an Array using the given items

var mobilePhones = ["Nokia", "Huawei", "Redmi", "Xiaomi", "Oneplus", "Realme", "Samsung"];
var mobile = 0;


while (mobile < mobilePhones.length) {
    console.log(mobilePhones[mobile]);
    mobile++;
}
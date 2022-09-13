/*
If you have more than 80000tk then you will buy a MacBook, 
if more than 60000tk then you will buy a gaming laptop, 
if more than 40000tk than you will buy a Lenovo Yoga, 
if more than 20000tk than you will buy a old laptop. 
If nothing happens than you will buy a mobile.

Now write a program to check that which thing you can buy with your budget.
*/

/*
-----------------------
=======================
        Solution
=======================
-----------------------
*/


var myBudget = 15000;

if (myBudget > 80000) {
    console.log("My New MacBook is Loading...")
}
else if (myBudget > 60000) {
    console.log("Let's start gaming in new laptop...");
}
else if (myBudget > 40000) {
    console.log("Do some Yoga position...");
}
else if (myBudget > 20000) {
    console.log("No pera..Buy a old one...")
}
else {
   console.log("Fokira Jibon...Mobile diye kaj chalai..."); 
}
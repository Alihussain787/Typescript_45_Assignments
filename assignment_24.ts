/*Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:*/

// • Tests for equality and inequality with strings
console.log("Equality : ", "Ali" == "Ali");// true
console.log("Inequality : ", "Bike" != "Bike");// false


// • Tests using the lower case function
console.log("Equality : ", "RED".toLowerCase() == "red");// true
console.log("Inequality : ", "BLUE".toLowerCase() != "BLUE");// false

// • Numerical tests involving equality and inequality, 
console.log("Equality : ", 5 == 5); // true
console.log("Inequality : ", 5 != 5);// false

// greater than and less than,
console.log("Greater than : ", 10 > 8);// true
console.log("Less than : ", 10 < 6); // false

// greater than or equal to, and less than or equal to
console.log("Greater than or equal : ", 2 >= 2);// true
console.log("Less than or equal : ", 2 <= 1)// false

// • Tests using "and" and "or" operators
console.log("And operator : ", 3 == 3 && 5 != 5);// false
console.log("Or operator : ", 2 != 2 || 3 == 3);// true

// • Test whether an item is in a array
let list = ["Ali","Ameen","Farhan","Khaleel"];
console.log("Item exist in array : ", list.includes("Farhan"));// true

// • Test whether an item is not in a array 
console.log("Item not exist in array : ", list.includes("Aleeza"));// false
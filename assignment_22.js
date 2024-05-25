/*Q22 Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/
var names = ["Ali", "Ameen", "Ahmed", "Aleeza"];
console.log(names[4]); // index 4 not exist index error
names.push("Aneela"); // add new item to array
console.log(names[4]); // print item index 4

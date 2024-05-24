/* Q16 More Guests: You just found a bigger dinner table,
so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
var guest = ["Ali", "Khaleel", "Farhan"];
console.log("Dear ".concat(guest[0], " please come to dinner."));
console.log("Dear ".concat(guest[1], " please come to dinner."));
console.log("Dear ".concat(guest[2], " please come to dinner."));
console.log("".concat(guest[1], " can not come to dinner"));
var replacing = guest.splice(1, 1, "Aliza"); // replace new guest in the list
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], " please come to dinner."));
}
// print statement
console.log("This is information to all guests i have found bigger dinner table thats why i would like to invite more guests.");
// add new guest to the beginning of array
guest.unshift("Aneela");
// add new guest to the middle of array
guest.splice(2, 0, "Awais");
// add new guest to the end of array
guest.push("Irfan");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], " please come to dinner."));
}

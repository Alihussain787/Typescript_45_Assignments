/* Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive
in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.*/
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
// • Start with your program from Exercise 16. 
//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("This is information to all guests i can invite only two guests for dinner.");
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guest.length > 2) {
    var removed_Guest = guest.pop();
    console.log("I'm sorry dear ".concat(removed_Guest, " you are no longer invited to dinner."));
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i], "You'r still invited to dinner");
}
// • Remove the last two names from your list, so you have an empty list. 
while (guest.length > 0) {
    guest.pop();
}
// Print your list to make sure you actually have an empty list at the end of your program.
console.log(guest); // empty list

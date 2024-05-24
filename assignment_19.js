/* Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, */
var guest = ["Ali", "Khaleel", "Farhan"];
console.log("Dear ".concat(guest[0], " please come to dinner."));
console.log("Dear ".concat(guest[1], " please come to dinner."));
console.log("Dear ".concat(guest[2], " please come to dinner."));
// print a message indicating the number of people you are inviting to dinner.
var invited_Guests = guest.length;
console.log("Total ".concat(invited_Guests, " guests are invited to dinner"));

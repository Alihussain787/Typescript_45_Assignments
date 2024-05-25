"use strict";
/*Q31 No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
let user = [];
if (user.length != 0) {
    for (let i = 0; i < user.length; i++) {
        if (user[i].includes("Admin")) {
            console.log(`Hello ${user[i]} would you like to see status report?`);
        }
        else {
            console.log(`Hello ${user} thank you for logging in again.`);
        } // end inner if else statment
    } // end loop
}
else {
    console.log("We need to find some users!");
} // end outer if else statement

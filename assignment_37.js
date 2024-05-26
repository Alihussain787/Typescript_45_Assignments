// Q37 Large Shirts: Modify the make_shirt() function so that shirts are large by default 
//with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
function make_shirt(size, text, size1, text1, size2, text2) {
    if (size1 === void 0) { size1 = "large"; }
    if (text1 === void 0) { text1 = "I love Typescript"; }
    if (size2 === void 0) { size2 = "medium"; }
    if (text2 === void 0) { text2 = "I love Pakistan"; }
    console.log("Make ".concat(size2, " size T-shirt and print on shirt ").concat(text2));
    console.log("Make ".concat(size1, " size T-shirt and print on shirt ").concat(text1));
    console.log("Make ".concat(size, " size T-shirt and print on shirt ").concat(text));
}
make_shirt("small", "AI World");

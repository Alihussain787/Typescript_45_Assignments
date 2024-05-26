//Q42 Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians 
//by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
var magician_names = ["Ali Baba", "Zohaib", "Jawad"];
function show_magicians(magicians) {
    var modified_megicians = make_great(magicians); // this function modify magician_names with Great
    return modified_megicians;
}
function make_great(magicians) {
    var modified_megicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modified_megicians.push("Great ".concat(magicians[i]));
    }
    return modified_megicians;
}
var result = show_magicians(magician_names);
console.log(result);

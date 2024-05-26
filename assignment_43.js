// Q43 Unchanged Magicians: Start with your work from Exercise 42. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and 
//one array with the Great added to each magician’s name.
var magician_names = ["Ali Baba", "Zohaib", "Jawad"];
function show_magicians(magicians) {
    var modified_magicians = make_great(magicians);
    var original_array = magicians;
    console.log(modified_magicians);
    return original_array;
}
function make_great(magicians) {
    var modified_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modified_magicians.push("Great ".concat(magicians[i]));
    }
    return modified_magicians;
}
var result = show_magicians(magician_names);
console.log(result);

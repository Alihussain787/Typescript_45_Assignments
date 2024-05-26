// Q43 Unchanged Magicians: Start with your work from Exercise 42. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and 
//one array with the Great added to each magician’s name.

let magician_names : string[] = ["Ali Baba","Zohaib","Jawad"];

function show_magicians(magicians:string[]):string[]{
    let modified_magicians : string[] = make_great(magicians);
    let original_array : string[] = magicians;
    console.log(modified_magicians);
    return original_array;
}
function make_great(magicians:string[]):string[]{
    let modified_magicians : string[] = [];
    for(let i = 0; i < magicians.length; i++){
        modified_magicians.push(`Great ${magicians[i]}`);
    }
    return modified_magicians;
}
let result = show_magicians(magician_names);
console.log(result);
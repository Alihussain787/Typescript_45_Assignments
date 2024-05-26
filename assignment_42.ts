//Q42 Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians 
//by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.

let magician_names : string[] = ["Ali Baba","Zohaib","Jawad"];

function show_magicians(magicians:string[]):string[]{
    make_great(magicians);// this function modify magician_names with Great
    return magicians;
}
function make_great(magicians:string[]):string[]{
    for(let i = 0; i < magicians.length; i++){
        magicians.splice(i,1,`Great ${magicians[i]}`);
    }
    return magicians;
}
let result = show_magicians(magician_names);
console.log(result);
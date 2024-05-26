// Q37 Large Shirts: Modify the make_shirt() function so that shirts are large by default 
//with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.

function make_shirt(size, text, size1 = "large", text1 = "I love Typescript", size2 = "medium", text2 = "I love Pakistan"){
    console.log(`Make ${size2} size T-shirt and print on shirt ${text2}`);
    console.log(`Make ${size1} size T-shirt and print on shirt ${text1}`);
    console.log(`Make ${size} size T-shirt and print on shirt ${text}`);
}
make_shirt("small","AI World");
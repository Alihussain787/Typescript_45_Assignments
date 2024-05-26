// Q44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.

function sandwiches(...sandwiches:string[]){
    for(let sandeich of sandwiches){
        console.log(`Ordered ${sandeich}`);
    }
    console.log("Your order is ready!");
}

sandwiches("Abc","Def","Ghi");
sandwiches("Z","Y","X","W");
sandwiches("A","B","C","D","E");
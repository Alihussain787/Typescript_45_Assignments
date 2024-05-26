// Q44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function sandwiches() {
    var sandwiches = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwiches[_i] = arguments[_i];
    }
    for (var _a = 0, sandwiches_1 = sandwiches; _a < sandwiches_1.length; _a++) {
        var sandeich = sandwiches_1[_a];
        console.log("Ordered ".concat(sandeich));
    }
    console.log("Your order is ready!");
}
sandwiches("Abc", "Def", "Ghi");
sandwiches("Z", "Y", "X", "W");
sandwiches("A", "B", "C", "D", "E");

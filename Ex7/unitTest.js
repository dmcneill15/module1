//this function returns the sum of two numbers
function sum(a, b){
    return(a+b);
}

//this functions returns the subraction of two numbers
function subtract(a, b){
    return(b-a);
}

//this function returns the multiplication of two numbers
function multiply(a,b){
    return(a*b);
}

//this function returns the division of two numbers
function divide(a,b){
    return(a/b);
}

//this functions returns the concatination of Hello and a given name
function greetings(name){
    return("Hello ".concat(name));
}

//unit tests
//first test to check how the error is thrown
if(sum(10,20) != 31){
    console.log("Error: function sum()");
}

if(sum(10,20) != 30){
    console.log("Error: function sum()");
}

if(subtract(10,20) != 10){
    console.log("Error: function subtract()");
}

if(subtract(20,10) < 0){
    console.log("Error: function subtract() evaluates to negative:a>b");
}


/*
console.log(sum(4, 5));
console.log(subtract(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));
console.log(greetings("Danielle"));
*/
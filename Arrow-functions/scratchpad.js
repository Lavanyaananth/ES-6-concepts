
/* An arrow function expression is a syntactically 
compact alternative to a regular function expression */

/* Syntax */
/* (param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

//Multiple param 
(param1,param2) => {statements}

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements } */


const printMyName = (name,age) => {
    console.log(name, age);
}
printMyName('No name' , '28');
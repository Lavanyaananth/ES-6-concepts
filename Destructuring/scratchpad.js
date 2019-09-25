/* Easily extract array elements or 
object properties and store them in variables */

/* Array destructuring */
const numbers = [1,2,3];
[num1,num2] = numbers ;
console.log(num1,num2);

/* object destructuring */

const {age} = {
    name:'joe', 
    age : '28'
}
console.log(age);

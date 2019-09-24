/* Spread operator */
/* Spread - Used to split up/ pull the array elements or object properties */

/* Example -1 */
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5,6];
console.log(newNumbers);

/* Example -2 */

const person = {
    name: 'Joe'
}

const newArray = {
    ...person,
    age: 28
}

console.log(newArray);

/* rest parameter */
/* The rest parameter syntax allows us to
 represent an indefinite number of arguments as an array. */

 const filter = (...args) => {
     return args.filter(el => el ===1);
 }
 console.log(filter(1,2,3));
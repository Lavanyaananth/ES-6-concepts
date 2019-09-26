/* find () */
/* The find() method returns the value of the first element in the provided array 
that satisfies the provided testing function.*/

const array1 = [5, 25, 4, 65, 22];

const found = array1.find((element) => {
  return element > 10;
});

console.log("find() result:" + " "+ found);


/* map () */
/* The map() method creates a new array with the results of calling a 
provided function on every element in the calling array. */

const array2 = [2,4,6,7];
const mapped = array2.map ((num) =>{
    return num*num;
});

console.log("map() result: " + " "+ mapped);

/* filter */
/* The filter() method creates a new array with all elements 
that pass the test implemented by the provided function.*/

const array3 = [5, 25, 4, 65, 22];

const filtered = array3.filter((element) => {
  return element > 10;
});

console.log("filter() result: " + " "+ filtered);
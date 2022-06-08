// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)
// (i).for loop:for - loops through a block of code a number of times.
//Syntax: for(initialization;condition;inc/dec)
// Example:
// for (let i = 0; i < 5; i++) {
//   declaration
// }
// (ii).for in:(i).for/in - loops through the properties of an object.
// (ii)Forward iteration(one way).
// Syntax:for (key in object) {
  // code block to be executed
// }
// Example 1:Object
// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//   text += person[x];
// }
// The JavaScript for in statement can also loop over the properties of an Array:
// Syntax
// for (variable in array) {
//   code
// }
// 
// Example 2:Array
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }
// for of:The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
// Syntax:for (variable of iterable) {
//   statement
// }
// Example 1:Looping over an array
// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";
// for (let x of cars) {
//   text += x;
// }
// Example 2:Looping over a string:
// let language = "JavaScript";
// let text = "";
// for (let x of language) {
// text += x;
// }
// for each:The forEach () loop was introduced in ES6 (ECMAScript 2015) and it executes the given function once for each element in an array in ascending order. It doesn't execute the callback function for empty array elements.
// Syntax:forEach((element, index, array) => { /* ... */ })
// Example:const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

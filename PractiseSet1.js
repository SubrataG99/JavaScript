// -------------------------------------------------------------Q1
// Write a program to contain a string and number in single variable
let a = "Hello";
let b = 5;
console.log(a+b)

// -------------------------------------------------------------Q2
// Write a program to find the datatype of the last question
console.log(typeof(a+b))

// -------------------------------------------------------------Q3
// Create a const object in js; Can you change it to hold a number later on
const z = {name: "SG", id:100, species: "Homo Sapiens"};
console.log(z)
/* let z = 55
Output : SyntaxError: Identifier 'z' has already been declared
So the answer is NO */

// -------------------------------------------------------------Q4
// Try to add a new key in the above dictionary
z["home"] = "India";
z.level = "Awesome"
console.log(z)
// program to find the length of a string from user
let s = "Hurray !"
console.log("length is " + s.length)

//-----------------------------------------------------------------------
// check if a string is in a string
let sent = "This is second example"
let w = "Th"
console.log(`The word '${w}' ${sent.includes(w) ? 'is' : 'is not'} present`);
console.log(`'${w}' ${sent.startswith(w) ? 'starts' : 'does not start'} the sentence`)
console.log(`'${w}' ${sent.endswith(w) ? 'ends' : 'does not end'} the sentence`))

//-----------------------------------------------------------------------
// program to convert to lowercase and uppercase
let lc = "AweSome"
console.log(lc.toLowerCase())
console.log(lc.toUpperCase())

//-----------------------------------------------------------------------
// program to extract number from string
let ns = "I have 100 coins of 5 rupees and 2 rs value"
let n = ns.match(/\d+/g);
console.log(n);

//-----------------------------------------------------------------------
// Program to check if a char in string can be changed or not
let imm = "Abcdefghi";
imm[1] = "Z";
console.log(imm)
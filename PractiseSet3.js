// -----------------------------------------------------------------------Q1
// Write a code to display marks of a const obj using for in loop.
const stuArr =
{
  "Harry" : 98,
  "Rohan" : 90,
  "Aakash" : 7,
  "Karam" : 45,
  "Poppy" : 51
}
// for(let i = 0; i < Object.keys(stu).length; i++)
// {
//   console.log(Object.keys(stu)[i], "got", stu[Object.keys(stu)[i]])
// }
for(let key in stuArr)
  {
    console.log(key, "got", stuArr[key])
  }
console.log("")

// -----------------------------------------------------------------------Q2
// Write a code to display marks of a const obj using for loop for array.
const stu =
{
  "Harry" : 98,
  "Rohan" : 90,
  "Aakash" : 7,
  "Karam" : 45,
  "Poppy" : 51
}
for(let i = 0; i < Object.keys(stu).length; i++)
{
  console.log(Object.keys(stu)[i], "got", stu[Object.keys(stu)[i]])
}
console.log("")

// -----------------------------------------------------------------------Q3
// Write a program to ask for number until user enters the correct number
let cn = 23;
let chk = 0;
let i = prompt("Enter a number");
i = Number.parseInt(i)
chk = (i>cn ? i-cn : cn-i)
console.log("The difference between guess and correct is :", chk, '\n')
while(i != cn)
  {
    i = prompt("Enter a number");
    i = Number.parseInt(i)
    chk = (i>cn ? i-cn : cn-i)
    console.log("The difference between guess and correct is :", chk, '\n')
  }
console.log("Your entry is correct...\n")
console.log("")

// -----------------------------------------------------------------------Q4
// Write a program to find the mean of 'n' numbers
let n = prompt("Enter the number of terms : ")
n = Number.parseInt(n)
let s = 0;
let avg = 0;
for(let i = 0; i < n; i++)
  {
    let k = prompt("Enter number :")
    k = Number.parseInt(k)
    s = s + k;
  }
avg = s/n;
console.log("Sum of", n, "terms are :", s)
console.log("Average is :", avg)
// -------------------------------------------------------------Q1
// Write a program to check if the age of a person is [10 < age < 30] or not
let a = prompt("Enter your age");
a = Number.parseInt(a)
if((a > 10) && (a < 30))
{
  console.log("In between range of 10 and 30\n");
}
else
{
  console.log("Out of age range\n")
}

// -------------------------------------------------------------Q2
// Write a program to demonstrate switch case statements
switch(a)
  {
    case 10 :
      console.log("10 years old\n");
      break;
    case 15 :
      console.log("15 years old\n");
      break;
    case 18 :
      console.log("18 years old\n");
      break;
    case 20 :
      console.log("20 years old\n");
      break;
    default :
      console.log("Nothing special about age...\n")
  }

// -------------------------------------------------------------Q3
// Write a program to check whether a number is divisible by 2 and 3
let n1 = prompt("Enter a number : ")
n1 = Number.parseInt(n1);
if((n1 % 2 == 0) && (n1 % 3 == 0))
  console.log("Divisible by 2 and 3 both\n")
else
  console.log("Not divisible by 2 and 3\n")
  

// -------------------------------------------------------------Q4
// Write a program to check whether a number is divisible by 2 and 3
let n2 = prompt("Enter a number : ")
n2 = Number.parseInt(n2);
if((n1 % 2 == 0) && (n1 % 3 == 0))
  console.log("Divisible by 2 and 3 both\n")
else if(n2 % 2 == 0)
  console.log("Divisible by 2 only\n")
else if(n2 % 3 == 0)
  console.log("Divisible by 3 only\n")
else
  console.log("Divisible by neither 2 nor 3\n")
  

// -------------------------------------------------------------Q5
// Write a program to predict allowed to drive or not using ternary operator
let judge = a >= 18 ? "Can drive" : "Can't drive";
console.log(judge)
/**
*program that reads 5 Random 3 Digit values
**/
function Randomnumbergeneretor(){
    return Math.floor(Math.random()* 999-100+1)+100;
}
  let num1 = Randomnumbergeneretor();
  let num2 = Randomnumbergeneretor();
  let num3 = Randomnumbergeneretor();
  let num4 = Randomnumbergeneretor();
  let num5 = Randomnumbergeneretor();
/**
  Printing all the generated number.
   */
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);
  console.log(num5);
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
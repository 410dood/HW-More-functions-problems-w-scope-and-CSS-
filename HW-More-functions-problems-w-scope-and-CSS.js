
// What is the difference between a parameter and an argument?
    // parameter is the variable declared in a function and the argument is the actual value of this variable

// Within a function, what is the difference between return and console.log?
    // Return calls the function to action.  Console.log prints that action to the console.


// "COMMIT 1 - Verbal questions".

// Palindrome

const checkPalindrome = (word) => {
  return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
};
console.log(checkPalindrome('racecar'));
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

// "COMMIT 2 - Palindrome"
// Digit Sum
// The parseInt() function parses a string and returns an integer.
// Write a function sumDigits that accepts a number and returns the sum of its digits.

const sumDigits = (number) => {
  let str = number.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
  }

  return sum;
}
console.log(sumDigits(42));

// => 6;

// "COMMIT 3 - Digit Sum".
// Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem. The Math.pow() function returns the base to the exponent power, that is, baseexponent.

const calculateSide = (sideA, sideB) => {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
console.log(calculateSide(8, 6));
// => 10

// "COMMIT 4 - Pythagoras".
// Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as let sum = 0;

let sumArray = [3,5,7,9];
let arrayNumbers
const amountTotal = (sumArray) => {
        let sum = 0;
        for (i = 0; i < sumArray.length; i++) {
             sum += sumArray[i];
        }
        return sum;
}
console.log(amountTotal([1, 2, 3, 4, 5, 6]));
// => 21
// "Commit 5 - Sum Array".
// Prime Numbers

// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.
//
// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

const checkPrime = numCheck => {
  for (let i = 2; i < numCheck; i++) {
     if(numCheck % i === 0)
      return false;
    }
    return true;
}
console.log(checkPrime(11));

// "Commit 6 - Prime Numbers".
// Insert Dash
// Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.//console.log.num.toString());.split(" ")

const insertDash = num => {
   let numArray = num.toString().split('');
     console.log(numArray);
   for (let i = 0; i < numArray.length; i++) {
     if ((numArray[i] % 2===1 ) && (numArray[i + 1] % 2===1 )){
        numArray.splice(i + 1 , 0 , "-");
        }
        console.log(numArray);
      }
      numArray=numArray.join("");
      return numArray;
}
console.log(insertDash(454793));
// => 4547-9-3

// "COMMIT 7 - Insert Dash".

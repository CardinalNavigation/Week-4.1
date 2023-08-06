console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, Your Name!";
}
// Remember to call the function to test

helloName()
console.log(helloName());

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

addNumbers(1, 2);
console.log(addNumbers(1, 2))


// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c) {
  return a * b * c;
}

console.log(multiplyThree(2, 3, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

console.log(isPositive(1), isPositive(5), isPositive(-5));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
  return array[array.length - 1];
}

console.log("Aquire the last array number:", getLast([1, 2, 3, 4, 5]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (let x = 0; x < array.length; x++) {
    // the above allows us to search out the values in the array, starting with the first index [0]
    // and moving to the next iteration if the conditions below the for loop are not met
    if (array[x] === value) {
      return true;
      // this if condition searches each array index, if it cannot log true, then it loops to the next in line
      // when it hits true the loop ends
    }
  }
  return false;
  // having the "return false" outside of the if loop allows the loop to close with a boolean false
  // when the if condition reaches the end of the array.
  // before I had the false condition nestled into the if with and if else statement after, and that did not work
  // because the return statement ended the loop. 
}

console.log(find(4, [1, 2, 3, 4,]))
console.log(find(6, [1, 2, 3, 4,]))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

// we are going to pull the first letter out of the first string number


function isFirstLetter(letter, string) {
  //first we need to add a condition that shows we are grabbing index[0]
  //out of a string. We start by using an if statement to see if 
  //the first letter can be pulled out of the array treating any string like an array, 
  for (let x = 0; x < string.length; x++) {
    if (string[0] === letter) {
      return true;
    }
  }
  return false;
}

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array

// TODO: loop to add items
// TODO: return the sum
// start with for loop to list the items in the array
// sum= sum + x takes 0, then adds each idex items in the array first to the last
// I later realized it need to use array[x] not just x. It was giving me 10 not 15. 
//returning the sum will show is the result of the array

function sumAll(array) {
  let sum = 0;
  console.log(array)
  for (let x = 0; x < array.length; x++) {
    sum += (array[x]);
  }
  console.log(sum);
  return sum;
}
console.log(sumAll([1, 2, 3, 4, 5]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

//its either:
// let value = 0;

// function allPositive() {
//   return value > 0;
// }

// console.log(allPositive(-2, -1, 0, 1, 2, 3))

//or its:
function allPositive(array) {
  for (let x = 0; x < array.length; x++) {
    console.log(array[x]);
    if (array[x] <= 0) {
      array.splice([x], 0)
      console.log(array);
    }
  }
}
console.log(allPositive([-2, -1, 0, 1, 2, 3]))

// function emptyArray() {
//   if (array[x] <= 0) {

//   }
//   console.log(array[x])
// }



//either way i would like to know how this is resolved. I have poured too many hours into it to feel
//like continuing is productive.

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
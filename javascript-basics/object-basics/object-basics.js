/*
  - Objects -> key value pairs
  - Will learn about:
    - creating objects
    - accessing object properties
    - using multiple object operators
    - Understanding the differences between object and primitive data types
    - Using the map, filter and reduce array methods.
*/

let user = new Object();
user["name"] = "John";
user.surname = "Smith";
user["name"] = "Pete";
delete user.name;

function isEmpty(obj) {
  for (key in obj) {
    return false; // if there is at least 1 prop loop will start
  }
  return true; // if loop didnt start there are no properties
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (person in salaries) {
  sum += salaries[person];
}

console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu)

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu)



function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

// re-writing using array methods:

let arr = [1, 2, 3, 4, 5]
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTripledEvens(arr))


// Array Methods (JavaScript.info)

// Translate border-left-width to borderLeftWidth



function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


// Filter range
`Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.`

function filterRange(arr, a, b) {
  return arr.filter((num) => {
    return (num >= a && num <= b);
  })
}

let arr2 = [5, 3, 8, 1];

let filtered = filterRange(arr2, 1, );

console.log( filtered ); // 3,1 (matching values)
console.log( arr2 ); // 5,3,8,1 (not modified)

// Filter range "in place"
`Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
`
console.log("----------------");

let arr3 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr3, 1, 4); // removed the numbers except from 1 to 4

console.log( arr3 ); // [3, 1]

// Sort in decreasing order

let arr4 = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
function sortDecreasing(nums) {
  nums.sort((a, b) => {
    return b - a
  })
}
sortDecreasing(arr4);
console.log(arr4); // 8, 5, 2, 1, -10

// Copy and sort array

`We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let`

let arr5 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  sortedCopy = arr.slice();
  return sortedCopy.sort();
}

let sorted = copySorted(arr5);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr5 ); // HTML, JavaScript, CSS (no changes)

// Create an extendable calculator
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {
    let split = str.split(' ');
    a = +split[0];
    op = split[1];
    b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
  }

  return this.methods[op](a, b);
}
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };

}

// let calc = new Calculator;

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((user) => user.name);

// console.log( names ); // John, Pete, Mary

// let john = { name: "john", surname: "Smith", id: 1 };
// let pete = { name: "pete", surname: "Hunt", id: 2 };
// let mary = { name: "mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName: user.name + ' ' + user.surname,
//   id: user.id
// }))

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith


// // Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
// function sortByAge(users) {
//   users.sort((a,b) => {
//     return a.age - b.age;
//   })
// }

// // sortByAge(users)
// // console.log(users[0].name); // John
// // console.log(users[1].name); // Mary
// // console.log(users[2].name); // Pete


// // `Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// // Multiple runs of shuffle may lead to different orders of elements. For instance:`

// // function shuffle(array) {
// //   array.sort()
// // }



// // let johny = { name: "John", age: 25 };
// // let petey = { name: "Pete", age: 30 };
// // let maryy = { name: "Mary", age: 29 };

// // let arry = [ johny, petey, maryy];

// // function getAverageAge(users) {
// //   const totalAge = users.reduce((sum, currUser) => {
// //     return sum += currUser.age;
// //   }, 0);

// //   return totalAge / users.length;
// // };

// `Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:`


// function unique(arr) {
//   const seen = new Set();  // Create an empty Set to track seen values
  
//   let newArr = arr.filter(item => {
//     // If the item has been seen, return false (don't include it in the result)
//     if (seen.has(item)) {
//       return false;
//     }
    
//     // If the item has not been seen, add it to the Set and include it in the result
//     seen.add(item);
//     return true;  // Keep the item in the filtered array
//   });
//   return newArr;

// }

// let uniqueTest = ["harry", "harry", "bob", "luis"];
// console.log(uniqueTest)
// console.log(unique(uniqueTest));


`Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:`

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)
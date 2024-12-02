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
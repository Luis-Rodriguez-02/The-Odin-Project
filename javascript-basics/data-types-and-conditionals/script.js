/*

This section contains a general overview of topics that you will learn in this lesson:

- Name the eight data types in JavaScript.
- Understand the difference between single, - double, and backtick quotes.
- Embed a variable/expression in a string.
- Understand what a method is.
- Name the three logical operators.
- Understand what the comparison operators are.
- Understand what conditionals are.
- Understand what nesting is.
- Understand what truthy and falsy values are.

// Questions


*/

if (browser === 'Edge') {
  alert('You\'ve got the edge!');
}
else if (browser === 'Chome' || browser === 'Firefox' ||  browser === 'Safari' || browser === 'Opera'){
  alert('Okay we support those browsers too')
}
else {
  alert('We hope that this page looks ok!')
}

let a = +prompt('a', "")

switch (a) {
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 1 );
    break;
  case 2:
  case 3:
    alert( '2,3' );
    break;
  default:
    alert('No matching case');
    break;
}
/*

 - How to define and invoke different kinds of functions
 - How to use the return value
 - What the function scope is



*/

function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))

/*
 - In JavaScript, parameters are the items listed between the parentheses () in the function declaration. Function arguments are the actual values we decide to pass to the function.
 */


 // function declaration -> global scope (hoisted)
  function foo(arguments) {
    return arguments
  }
 // function expression (annonymous)
  (foo) => {
    return foo * 2;
  }

  function checkAge(age) {
    return (age > 18) || confirm("Did parents allow you?")
  }
  
  (age) => {
    return age > 18 ? true : confirm("Did parents allow you")}

    function min(a, b) {
    return a <= b ? a : b
    }
console.log(min(2,-1));
    let a = 3, b = 4;
    let powero = (a,b) => a ** b;
    
    console.log(powero(a, b))


    function betterAsk(question, yes, no) {
      if(confirm(question)) {

      }
    }

    function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
    }
    
    betterAsk('Do you agree', () => alert("You agreed"), () => alert("You cancelled the execution"))
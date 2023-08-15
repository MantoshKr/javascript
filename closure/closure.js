// a closure is a function that remembers the variables from its outer (enclosing) scope
//   even after the outer function has finished executing


function outerFunction() {
  var outerVariable = 'I am from outer';

  function innerFunction() {
    console.log(outerVariable); // inner function has access to outerVariable
  }

  return innerFunction; // return the inner function
}

var closureFunction = outerFunction(); // closureFunction now holds innerFunction

closureFunction(); // Output: "I am from outer"

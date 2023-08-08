//1.Global Scope:
// Variables declared outside of any functions or blocks have global scope, making them accessible from anywhere in the code.

var globalVar = 'I am global'; // Global variable

function accessGlobalVar() {
  console.log(globalVar); // Accessing globalVar inside a function
}

accessGlobalVar(); // Prints 'I am global'
console.log(globalVar); // Also prints 'I am global'


// 2.Function Scope:
// Variables declared within a function are only accessible within that function.

function functionScopeExample() {
    var localVar = 'I am local'; // Local variable
  
    console.log(localVar);
  }
  
  functionScopeExample(); // Prints 'I am local'
  // console.log(localVar); // This would result in an error

  
//  3. Block Scope (let and const):
// Variables declared with let and const have block scope, limited to the block in which they are defined.

if (true) {
    let blockVar = 'I am block-scoped'; // Block-scoped variable
    console.log(blockVar);
  }
  
  // console.log(blockVar); // This would result in an error



//   4.Lexical Scope (Closures):
// Inner functions have access to variables in their outer functions, even after the outer function has finished executing.

function outer() {
    var outerVar = 'Hello';
  
    function inner() {
      console.log(outerVar); // inner can access outerVar
    }
  
    return inner;
  }
  
  var innerFunc = outer();
  innerFunc(); // Prints 'Hello'
  
  
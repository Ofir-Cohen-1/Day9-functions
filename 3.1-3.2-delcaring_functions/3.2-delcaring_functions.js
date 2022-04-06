/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = "Welcome to Appleseeds Bootcamp!";
    return welcome;
  }
  
  // explicit
  
  const welcome2 = () => {
    return "Welcome to Appleseeds Bootcamp!";
  };
  
  // implicit
  
  const welcome3 = () => "Welcome to Appleseeds Bootcamp!";
  
  // ----------------------------------------------------------
  function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
  }
  
  // explicit
  
  const power2 = (a) => {
    return Math.pow(ma, 2);
  };
  
  // implicit
  
  const power3 = (a) => Math.pow(ma, 2);
  
  // From function expressions to IIFE functions.
  const squareRoot = (a) => Math.sqrt(a);
  
  ((a) => Math.sqrt(a))("pass 'a' argument here");
  
  const randomNumbers = (a, b) => Math.random() * (a - b) + b;
  
  ((a, b) => Math.random() * (a - b) + b)("pass 'a, b' arguments here");
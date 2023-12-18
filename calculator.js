// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. Stores that second number
// 5. Prompts the user whether they want to add, subtract, multiply, and divide
// 4. Stores that decision and responds with the result by using an alert.

function makeCalculator() {
  // Get input from the user for the first number
  let n1 = parseFloat(prompt("Enter the first number:"));

  // Check if the input is valid
  if (isNaN(n1)) {
    return "Invalid input for the first number. Please enter a valid number.";
  }

  // Get input from the user for the operation
  let operation = prompt("Enter the operation (+, -, *, /):");

  // Check if the operation is valid
  if (!["+", "-", "*", "/"].includes(operation)) {
    return "Invalid operation. Please enter one of the following: +, -, *, /";
  }

  // Get input from the user for the second number
  let n2 = parseFloat(prompt("Enter the second number:"));

  // Check if the input is valid
  if (isNaN(n2)) {
    return "Invalid input for the second number. Please enter a valid number.";
  }

  // Perform the calculation based on the operation
  let result;
  switch (operation) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      if (n2 !== 0) {
        result = n1 / n2;
      } else {
        return "Cannot divide by zero. Please enter a non-zero second number.";
      }
      break;
    default:
      return "Invalid operation.";
  }

  // Return the result
  return result;
}

// Call the function and display the result
let result = makeCalculator();
console.log("The result is: " + result);

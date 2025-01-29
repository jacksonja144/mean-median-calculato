// Load the readline module to handle input/output from the console
const readline = require('readline');
// Create a readline interface using standard input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store the numbers entered by the user
const numbers = [];

// Function to prompt the user for input
function getInput() {
  // Prompt user for an integer or 'Q/q' to quit
  rl.question('Enter an integer or "Q/q" to quit: ', (input) => {
    // Check if the input is 'q' or 'Q' to quit the program
    if (input.toLowerCase() === 'q') {
      // Display the numbers entered
      displayNumbers();
      // Check if the condition of product equals another number is met
      checkCondition();
      // Close the readline interface to end the program
      rl.close();
    } else if (!isNaN(input) && parseInt(input) == input) { // Validate if the input is an integer
      // Store the valid integer input into the numbers array
      numbers.push(parseInt(input));
      // Recursively prompt for more input
      getInput();
    } else {
      // Display an error message for invalid input
      console.log('Invalid input, please enter an integer or "Q/q" to quit.');
      // Prompt the user again after an invalid input
      getInput();
    }
  });
}

// Function to display the numbers entered by the user
function displayNumbers() {
  console.log('Numbers entered:', numbers.join(', '));
}

// Function to check if the product of any two numbers equals any other number in the list
function checkCondition() {
  let found = false; 
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // Check if the product of two numbers is in the list
      if (numbers.includes(numbers[i] * numbers[j])) {
        // Output a message if the condition is met
        console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[i] * numbers[j]}`);
        found = true; 
        return;
      }
    }
  }
  // Output a message if the condition is not met
  if (!found) {
    console.log('Condition was not met.');
  }
}


getInput();

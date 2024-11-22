'use strict';

// Utility function to select an element
// This function takes a CSS selector and an optional scope (default is document)
// and returns the first element that matches the selector within the scope.
function select(selector, scope = document) {
  return scope.querySelector(selector);
}

// Utility function to add an event listener
// This function takes an event type, a selector, and a callback function.
// It adds the event listener to the element that matches the selector.
function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Function to check if a value is a valid number
// This function takes a value as input and returns true if the value is a number
// and is not an empty string after trimming whitespace. Otherwise, it returns false.
function isValidNumber(value) {
  return !isNaN(value) && value.trim() !== '';
}

// Function to show an error message on an input field
// This function takes an input element and a message as input.
// It clears the input value, sets the placeholder to the error message,
// and adds the 'error' class to the input element to style it with a red border.
function showError(input, message) {
  input.value = '';
  input.placeholder = message;
  input.classList.add('error');
}

// Function to clear the error message from an input field
// This function takes an input element and a placeholder text as input.
// It sets the placeholder to the provided text and removes the 'error' class
// from the input element to remove the red border styling.
function clearError(input, placeholder) {
  input.placeholder = placeholder;
  input.classList.remove('error');
}

// Function to validate the inputs
// This function takes three input elements as input: billAmountInput, tipPercentageInput, and numberOfPeopleInput.
// It checks if the values of these inputs are valid numbers and shows error messages if they are not.
// It returns true if all inputs are valid, otherwise it returns false.
function validateInputs(billAmountInput, tipPercentageInput, numberOfPeopleInput) {
  let isValid = true;

  // Validate bill amount
  if (!isValidNumber(billAmountInput.value)) {
    showError(billAmountInput, 'Enter a valid bill amount');
    isValid = false;
  } else {
    clearError(billAmountInput, 'Enter bill amount');
  }

  // Validate tip percentage
  if (!isValidNumber(tipPercentageInput.value)) {
    showError(tipPercentageInput, 'Enter a valid tip percentage');
    isValid = false;
  } else {
    clearError(tipPercentageInput, 'Enter tip percentage');
  }

  // Validate number of people
  if (!isValidNumber(numberOfPeopleInput.value) || parseInt(numberOfPeopleInput.value) <= 0) {
    showError(numberOfPeopleInput, 'Enter a valid number of people');
    isValid = false;
  } else {
    clearError(numberOfPeopleInput, 'Enter number of people');
  }

  return isValid;
}

// Function to calculate and display the results
// This function takes the bill amount, tip percentage, and number of people as input.
// It calculates the PST, GST, total before tip, tip amount, total amount, and amount per person.
// It then updates the corresponding elements in the DOM to display these values.
function calculateAndDisplayResults(billAmount, tipPercentage, numberOfPeople) {
  const billAmountNum = parseFloat(billAmount);
  const tipPercentageNum = parseFloat(tipPercentage);
  const numberOfPeopleNum = parseInt(numberOfPeople);

  // Calculate PST (Provincial Sales Tax) at 7%
  const pstAmount = (billAmountNum * 0.07).toFixed(2);
  // Calculate GST (Goods and Services Tax) at 5%
  const gstAmount = (billAmountNum * 0.05).toFixed(2);
  // Calculate total before tip by adding bill amount, PST, and GST
  const totalBeforeTip = (billAmountNum + parseFloat(pstAmount) + parseFloat(gstAmount)).toFixed(2);
  // Calculate tip amount based on the tip percentage
  const tipAmount = (billAmountNum * (tipPercentageNum / 100)).toFixed(2);
  // Calculate total amount by adding total before tip and tip amount
  const totalAmount = (parseFloat(totalBeforeTip) + parseFloat(tipAmount)).toFixed(2);
  // Calculate amount per person by dividing total amount by number of people
  const amountPerPerson = (totalAmount / numberOfPeopleNum).toFixed(2);

  // Update the DOM elements with the calculated values
  select('.pst-amount').textContent = pstAmount;
  select('.gst-amount').textContent = gstAmount;
  select('.total-before-tip').textContent = totalBeforeTip;
  select('.tip-amount').textContent = tipAmount;
  select('.total-amount').textContent = totalAmount;
  select('.amount-per-person').textContent = amountPerPerson;
}

// Function to clear the input fields
// This function takes any number of input elements as arguments and clears their values.
function clearInputs(...inputs) {
  inputs.forEach(input => input.value = '');
}

// Event listener for the calculate button
// This function is called when the calculate button is clicked.
// It selects the input elements, validates the inputs, calculates and displays the results if valid,
// and clears the input fields.
listen('click', select('.calculate-tip'), function() {
  const billAmountInput = select('.bill-amount');
  const tipPercentageInput = select('.tip-percentage');
  const numberOfPeopleInput = select('.number-of-people');

  // Validate inputs and calculate results if valid
  if (validateInputs(billAmountInput, tipPercentageInput, numberOfPeopleInput)) {
    calculateAndDisplayResults(billAmountInput.value, tipPercentageInput.value, numberOfPeopleInput.value);
    clearInputs(billAmountInput, tipPercentageInput, numberOfPeopleInput);
  }
});

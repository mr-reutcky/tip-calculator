# Tip Calculator

This project is a simple **Tip Calculator** that computes taxes (PST and GST), the tip amount, and the total amount, as well as the amount per person when splitting the bill.

## Overview

The calculator allows users to:
- Enter a bill amount.
- Enter a tip percentage.
- Enter the number of people to split the bill.

The calculator will then display:
- PST (7%)
- GST (5%)
- Tip amount
- Total amount before tip
- Total amount after adding the tip
- The amount each person has to pay when the bill is split

---

## 1. HTML Structure

The HTML layout of the Tip Calculator contains input fields for the bill amount, tip percentage, and number of people. There is also a button to trigger the calculation, and a section to display the results.

### HTML Elements:
- **Inputs**: For bill amount, tip percentage, and number of people.
- **Button**: To calculate the tip and total.
- **Results**: Displays computed results, such as taxes, tip, total amount, and amount per person.

### HTML Snippet:

``` HTML
<label for="bill-amount">Bill Amount:</label>
<input type="text" class="bill-amount" placeholder="Enter bill amount" />

<label for="tip-percentage">Tip Percentage:</label>
<input type="text" class="tip-percentage" placeholder="Enter tip percentage" />

<label for="number-of-people">Number of People:</label>
<input type="text" class="number-of-people" placeholder="Enter number of people" />

<button class="calculate-tip">Calculate Tip</button>

<div class="result">
  <p>PST (7%): $<span class="pst-amount">0.00</span></p>
  <p>GST (5%): $<span class="gst-amount">0.00</span></p>
  <p>Total Before Tip: $<span class="total-before-tip">0.00</span></p>
  <p>Tip Amount: $<span class="tip-amount">0.00</span></p>
  <p>Total Amount: $<span class="total-amount">0.00</span></p>
  <p class="per-person">Amount per Person: $<span class="amount-per-person">0.00</span></p>
</div>
```
---

## 2. Style Overview

This section covers the CSS styling used for the **Tip Calculator** project. The design focuses on creating a clean, user-friendly interface with modern styling practices.

### Styling Overview

The Tip Calculator is styled using **CSS Flexbox** for layout and a **responsive design** for smooth interaction. Below are the key styling elements:

- **Centered Layout**: The form and results are centered on the page.
- **Button Styling**: Buttons have hover effects for better user interaction.
- **Input Styling**: Inputs are styled with clear placeholders and error states for validation.
- **Responsive Design**: The calculator is designed to look good on different screen sizes.

### Key Elements:

- **Body**: Sets up the background color, font family, and overall layout using flexbox to center the form.
- **Button**: Styled with padding, background color, and hover effects.
- **Input**: Styled with a consistent height, width, and error states when validation fails.

## CSS Code

### Body Styling
The body is styled to center the content both vertically and horizontally, while also setting the background color and font.

``` CSS
body {
  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
  background-color: #121212;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
```
---

## 3. JavaScript Code

The JavaScript is the core of the Tip Calculator. It handles user input validation, performs the necessary calculations 
(PST, GST, tip amount, total, etc.), and updates the user interface with the results.


Key JavaScript Functions

- select: Selects an element from the DOM.
- listen: Adds an event listener to an element.
- isValidNumber: Checks if a value is a valid number.
- showError and clearError: Display and remove error messages.
- validateInputs: Validates user input.
- calculateAndDisplayResults: Performs the calculations and updates the DOM.
 -clearInputs: Clears the input fields.

### isValidNumber Function
``` JavaScript
function isValidNumber(value) {
  return !isNaN(value) && value.trim() !== '';
}
```

### showError and clearError Functions
``` JavaScript
function showError(input, message) {
  input.value = '';
  input.placeholder = message;
  input.classList.add('error');
}
```
``` JavaScript
function clearError(input, placeholder) {
  input.placeholder = placeholder;
  input.classList.remove('error');
}
```
### validateInputs Function
``` JavaScript
function validateInputs(billAmountInput, tipPercentageInput, numberOfPeopleInput) {
  let isValid = true;

  if (!isValidNumber(billAmountInput.value)) {
    showError(billAmountInput, 'Enter a valid bill amount');
    isValid = false;
  } else {
    clearError(billAmountInput, 'Enter bill amount');
  }

  if (!isValidNumber(tipPercentageInput.value)) {
    showError(tipPercentageInput, 'Enter a valid tip percentage');
    isValid = false;
  } else {
    clearError(tipPercentageInput, 'Enter tip percentage');
  }

  if (!isValidNumber(numberOfPeopleInput.value) || parseInt(numberOfPeopleInput.value) <= 0) {
    showError(numberOfPeopleInput, 'Enter a valid number of people');
    isValid = false;
  } else {
    clearError(numberOfPeopleInput, 'Enter number of people');
  }

  return isValid;
}
```
### calculateAndDIsplayResults
``` JavaScript
function calculateAndDisplayResults(billAmount, tipPercentage, numberOfPeople) {
  const billAmountNum = parseFloat(billAmount);
  const tipPercentageNum = parseFloat(tipPercentage);
  const numberOfPeopleNum = parseInt(numberOfPeople);

  const pstAmount = (billAmountNum * 0.07).toFixed(2);
  const gstAmount = (billAmountNum * 0.05).toFixed(2);
  const totalBeforeTip = (billAmountNum + parseFloat(pstAmount) + parseFloat(gstAmount)).toFixed(2);
  const tipAmount = (billAmountNum * (tipPercentageNum / 100)).toFixed(2);
  const totalAmount = (parseFloat(totalBeforeTip) + parseFloat(tipAmount)).toFixed(2);
  const amountPerPerson = (totalAmount / numberOfPeopleNum).toFixed(2);

  select('.pst-amount').textContent = pstAmount;
  select('.gst-amount').textContent = gstAmount;
  select('.total-before-tip').textContent = totalBeforeTip;
  select('.tip-amount').textContent = tipAmount;
  select('.total-amount').textContent = totalAmount;
  select('.amount-per-person').textContent = amountPerPerson;
}
```
### Event Listener
``` JavaScript
listen('click', select('.calculate-tip'), function() {
  const billAmountInput = select('.bill-amount');
  const tipPercentageInput = select('.tip-percentage');
  const numberOfPeopleInput = select('.number-of-people');

  if (validateInputs(billAmountInput, tipPercentageInput, numberOfPeopleInput)) {
    calculateAndDisplayResults(billAmountInput.value, tipPercentageInput.value, numberOfPeopleInput.value);
    clearInputs(billAmountInput, tipPercentageInput, numberOfPeopleInput);
  }
});
```

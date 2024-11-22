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

```html
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

# CSS Styling for Tip Calculator

This section covers the CSS styling used for the **Tip Calculator** project. The design focuses on creating a clean, user-friendly interface with modern styling practices.

## Styling Overview

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

```css
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
##JavaScript Code
The JavaScript is the core of the Tip Calculator. It handles user input validation, performs the necessary calculations 
(PST, GST, tip amount, total, etc.), and updates the user interface with the results.

Here is the full README.md file, containing the HTML, CSS, and JavaScript sections, with code snippets included as requested:

# Tip Calculator Project

This project is a Tip Calculator that allows users to input their bill amount, tip percentage, and the number of people, then calculates the total bill, including taxes, tip, and the amount per person.

## Table of Contents
1. [HTML Structure](#html-structure)
2. [CSS Styling](#css-styling)
3. [JavaScript Functionality](#javascript-functionality)

---

## HTML Structure

The HTML structure of the Tip Calculator contains a form for user input, including the bill amount, tip percentage, and number of people, along with sections for displaying the results.

### Key HTML Elements:

- **Input fields**: Users enter the bill amount, tip percentage, and number of people.
- **Result sections**: Display the calculated values such as PST, GST, total before tip, tip amount, total amount, and amount per person.
- **Calculate button**: Trigger the calculation process when clicked.

### HTML Code Snippet:

```html
<div class="calculator">
  <h1>Tip Calculator</h1>

  <div class="input-section">
    <label for="bill-amount">Bill Amount:</label>
    <input type="text" class="bill-amount" placeholder="Enter bill amount">

    <label for="tip-percentage">Tip Percentage:</label>
    <input type="text" class="tip-percentage" placeholder="Enter tip percentage">

    <label for="number-of-people">Number of People:</label>
    <input type="text" class="number-of-people" placeholder="Enter number of people">

    <button class="calculate-tip">Calculate Tip</button>
  </div>

  <div class="results">
    <p><strong>PST:</strong> $<span class="pst-amount">0.00</span></p>
    <p><strong>GST:</strong> $<span class="gst-amount">0.00</span></p>
    <p><strong>Total Before Tip:</strong> $<span class="total-before-tip">0.00</span></p>
    <p><strong>Tip Amount:</strong> $<span class="tip-amount">0.00</span></p>
    <p><strong>Total Amount:</strong> $<span class="total-amount">0.00</span></p>
    <p><strong>Amount Per Person:</strong> $<span class="amount-per-person">0.00</span></p>
  </div>
</div>
```
---

CSS Styling

The CSS is used to style the layout, form, and results. The primary focus is to create a clean, user-friendly design.
Key CSS Concepts

  - Flexbox: For laying out the input section and results.
  - Error Styling: Adding red borders to invalid inputs.
  - Responsive Design: Ensuring the layout works well on both desktop and mobile devices.

CSS Code Snippet:

``` css
/* Basic styles for the calculator */
.calculator {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, button {
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
}

input.error {
  border-color: red;
}

button {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.results {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.results p {
  font-size: 1.2rem;
}

```

JavaScript Functionality

The JavaScript is the core of the Tip Calculator. It handles user input validation, performs the necessary calculations (PST, GST, tip amount, total, etc.), and updates the user interface with the results.

Key JavaScript Functions

- select: Selects an element from the DOM.
- listen: Adds an event listener to an element.
- isValidNumber: Checks if a value is a valid number.
- showError and clearError: Display and remove error messages.
- validateInputs: Validates user input.
- calculateAndDisplayResults: Performs the calculations and updates the DOM.
 -clearInputs: Clears the input fields.

### isValidNumber Function
```JavaScript
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

'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function isValidNumber(value) {
  return !isNaN(value) && value.trim() !== '';
}

function showError(input, message) {
  input.value = '';
  input.placeholder = message;
  input.classList.add('error');
}

function clearError(input, placeholder) {
  input.placeholder = placeholder;
  input.classList.remove('error');
}

listen('click', select('.calculate-tip'), function() {
  const billAmountInput = select('.bill-amount');
  const tipPercentageInput = select('.tip-percentage');
  const numberOfPeopleInput = select('.number-of-people');

  const billAmount = billAmountInput.value;
  const tipPercentage = tipPercentageInput.value;
  const numberOfPeople = numberOfPeopleInput.value;

  let isValid = true;

  if (!isValidNumber(billAmount)) {
    showError(billAmountInput, 'Enter a valid bill amount');
    isValid = false;
  } else {
    clearError(billAmountInput, 'Enter bill amount');
  }

  if (!isValidNumber(tipPercentage)) {
    showError(tipPercentageInput, 'Enter a valid tip percentage');
    isValid = false;
  } else {
    clearError(tipPercentageInput, 'Enter tip percentage');
  }

  if (!isValidNumber(numberOfPeople) || parseInt(numberOfPeople) <= 0) {
    showError(numberOfPeopleInput, 'Enter a valid number of people');
    isValid = false;
  } else {
    clearError(numberOfPeopleInput, 'Enter number of people');
  }

  if (!isValid) {
    return;
  }

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

  billAmountInput.value = '';
  tipPercentageInput.value = '';
  numberOfPeopleInput.value = '';
});
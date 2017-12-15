

// ------------------------------------------------------------------------

// adding focus to first text field when page loads
function setFocusFirstTextField() {
  document.getElementById('name').focus();
}

setFocusFirstTextField()


// ------------------------------------------------------------------------
//                   ”Job Role” section of the form:
// ------------------------------------------------------------------------

// variables
const select = document.getElementById('title');

// Hiding "other" input field
function hideOther() {
  const input = document.getElementById('other-title');
  input.style.display = 'none';
}

hideOther();

// revealing or hiding text field for the "Other" Job Role menu option
select.addEventListener('change', (e) => {
  const input = document.getElementById('other-title');  
  if (select.value === 'other') {
    input.style.display = '';
  } else {
    input.style.display = 'none';
  }
});


// ------------------------------------------------------------------------
//                  ”T-Shirt Info” section of the form:
// ------------------------------------------------------------------------

// variables
const selectDesign = document.getElementById('design');
const divColors = document.getElementById('colors-js-puns');
const selectColor = document.getElementById('color');
const options = selectColor.children;
let colorPuns = [];
let colorLove = [];

// Exceeds: "Color" drop down menu is hidden until T-Shirt design is selected
function hideColorDropDownMenu() {
  divColors.style.display = 'none';
}

// Displaying only the color names by removing (JS Puns shirt only) and 
// (I &#9829; JS shirt only) since this is obvious by functionality
function filterColorText() {
  for (let i = 0; i < options.length; i++) {
    const RegEx = /\s*\(.*/;
    const colorText = options[i].textContent; 
    options[i].textContent = colorText.replace(RegEx, '');
  }
}

// the two themes options colorPuns and colorLove are created
function fillingOptions() {
  for (let i = 0; i <= 2; i++) {
    colorPuns.push(selectColor[i]);
  }
  for (let i = 3; i <= 5; i++) {
    colorLove.push(selectColor[i]);
  }
}

// listening for any change in the select theme menu
selectDesign.addEventListener('change', (e) => {
  const theme = e.target.value;
  divColors.style.display = '';

  // removes options any time event is triggered,
  // options have to be removed backwards to be effective
  for (let i = 5; i >= 0; i--) {
    selectColor.remove(i);
  }
  
  // depending on theme show the designated options from colorPuns and colorLove or hide color drop down menu
  if (theme === 'js puns') {
    for (let i = 0; i < colorPuns.length; i++) {
      selectColor.appendChild(colorPuns[i]);
    }
  } else if (theme === 'heart js') {
    for (let i = 0; i < colorLove.length; i++) {
      selectColor.appendChild(colorLove[i]);    
    }
  } else {
    hideColorDropDownMenu();
  }
});

hideColorDropDownMenu();
filterColorText();
fillingOptions();


// ------------------------------------------------------------------------
//               ”Register for Activities” section of the form:
// ------------------------------------------------------------------------

// variables
const fieldsetActivities = document.querySelector('.activities');
const inputActi = fieldsetActivities.querySelectorAll('input');
const labelActi = fieldsetActivities.querySelectorAll('label');

// creating, appending and hiding total price elements
function totalInfo() {
  const total = document.createElement('h4');
  total.id = 'total-price';  
  fieldsetActivities.appendChild(total);
  total.style.display = 'none';
}

totalInfo();

// dealing with conflicting checkboxes based on time and day
fieldsetActivities.addEventListener('change', (e) => {
  if (e.target.name === 'js-frameworks') {
    const jsFrame = e.target;
    if (jsFrame.checked) {
      inputActi[3].disabled = true;
      labelActi[3].style.color = 'gray';
    } else {
      inputActi[3].disabled = false;      
      labelActi[3].style.color = 'initial';      
    } 
  }  

  if (e.target.name === 'express') {
    const express = e.target;
    if (express.checked) {
      inputActi[1].disabled = true;
      labelActi[1].style.color = 'gray';
    } else {
      inputActi[1].disabled = false;      
      labelActi[1].style.color = 'initial';      
    } 
  }   

  if (e.target.name === 'js-libs') {
    const jsLibs = e.target;
    if (jsLibs.checked) {
      inputActi[4].disabled = true;
      labelActi[4].style.color = 'gray';
    } else {
      inputActi[4].disabled = false;      
      labelActi[4].style.color = 'initial';      
    } 
  } 

  if (e.target.name === 'node') {
    const jsNode = e.target;
    if (jsNode.checked) {
      inputActi[2].disabled = true;
      labelActi[2].style.color = 'gray';
    } else {
      inputActi[2].disabled = false;      
      labelActi[2].style.color = 'initial';      
    } 
  }   
});

// getting the prices from strings
function returnNum(str) {
  const num = Math.max.apply(null, str.match(/\d+/g));
  return num;
}

// sums the total of the prices array 
function totalPrice(arr) {
  var sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}

// Showing price element with prices 
fieldsetActivities.addEventListener('change', () => {
  const total = document.querySelector('#total-price');
  let labelsChecked = [];
  let prices = [];

  for (let i = 0; i < inputActi.length; i++) {
    if (inputActi[i].checked) {
      labelsChecked.push(labelActi[i]);
      prices.push(returnNum(labelActi[i].textContent));
      total.textContent = 'Total: $' + totalPrice(prices);
      total.style.display = 'block';

    } else if (labelsChecked.length === 0) {
      total.style.display = 'none';
    }
  }
});


// ------------------------------------------------------------------------
//                  Payment Info section of the form:
// ------------------------------------------------------------------------

// variables
const fieldsetPayment = document.querySelectorAll('fieldset')[3];
const selectPayment = document.getElementById('payment');
const ccDiv = document.getElementById('credit-card');
const bitcoinDiv = fieldsetPayment.lastElementChild;
const paypalDiv = bitcoinDiv.previousElementSibling;

// The "Credit Card" payment option should be selected by default
function creditCardDefault() {
  selectPayment[1].selected = true;
  bitcoinDiv.style.display = 'none';
  paypalDiv.style.display = 'none';
}

creditCardDefault();

// listener for showing / hiding payment methods
selectPayment.addEventListener('change', (e) => {
  if (e.target.value === 'select_method') {
    ccDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (e.target.value === 'credit card') {
    ccDiv.style.display = '';
    creditCardDefault();
  } else if (e.target.value === 'paypal') {
    paypalDiv.style.display = '';
    ccDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (e.target.value === 'bitcoin') {
    bitcoinDiv.style.display = '';
    paypalDiv.style.display = 'none';
    ccDiv.style.display = 'none';
  } 
});


// ------------------------------------------------------------------------
//                             Form validation:
// ------------------------------------------------------------------------

// variables
const form = document.querySelector('form');
const inputName = document.getElementById('name');
const email = document.getElementById('mail');
const labelMail = email.previousElementSibling;
const legend = fieldsetActivities.firstElementChild;
const ccNum = document.querySelector('#cc-num');
const labelCCNum = ccNum.previousElementSibling;
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');


// Email validation function returns true or false
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


// listener for validations
form.addEventListener('submit', (e) => {
  let emailToTest = email.value;
  emailToTest = validateEmail(emailToTest);
  let checkedBox = false;

  // name validation: name field can't be blank
  if (inputName.value === '') {
    e.preventDefault();
    inputName.style.border = '1px solid #FF0033';
    inputName.placeholder = 'Please provide your name';
  }

  // email validation:
  // Exceeds: the email field displays a different error message when the email field is empty than it does when the email address is formatted incorrectly  
  if (email.value === '') {
    e.preventDefault();    
    email.style.border = '1px solid #FF0033';
    email.placeholder = 'This e-mail field is empty, please provide an e-mail address';
    labelMail.textContent = 'Email: this e-mail field is empty, please provide an e-mail address';
    labelMail.style.color = '#FF0033';
  } else if (!emailToTest) {
    e.preventDefault();
    email.value = '';
    email.style.border = '1px solid #FF0033';
    email.placeholder = 'Please provide a valid e-mail address';
    labelMail.textContent = 'Email: please provide a valid e-mail address';
    labelMail.style.color = '#FF0033';
  } 

  // checkbox validation: select at least one checkbox for activities
  for (let i = 0; i < inputActi.length; i++) {
    if (inputActi[i].checked) {
      checkedBox = true;
    } 
  }
  if (!checkedBox) {
    e.preventDefault();
    legend.textContent = 'Register for Activities - (please select at least one activity)';
    legend.style.color = '#FF0033';
  }

  // credit card validations
  if (selectPayment.value === 'credit card') {
    // CC field should only accept a number between 13 and 16 digits
    if (ccNum.value === '') {
      e.preventDefault()
      ccNum.style.border = '1px solid #FF0033';
      ccNum.placeholder = 'Pleas provide a credit card number';
    } else if (isNaN(ccNum.value) || ccNum.value.length < 13 || ccNum.value.length > 16) {
      e.preventDefault();
      ccNum.value = '';
      labelCCNum.textContent = 'Card Number: was too long or too short';
      labelCCNum.style.color = '#FF0033';
      ccNum.style.border = '1px solid #FF0033';
      ccNum.placeholder = 'Number between 13-16 digits please';
    }

    // The zipcode field should accept a 5-digit number
    if (isNaN(zip.value) || zip.value === '' || zip.value.length !== 5) {
      e.preventDefault();
      zip.style.border = '1px solid #FF0033';
      zip.placeholder = 'Enter zipcode';
    }

    // CVV accepts a 3 number value
    if (isNaN(cvv.value) || cvv.value === '' || cvv.value.length !== 3) {
      e.preventDefault();      
      cvv.style.border = '1px solid #FF0033';
      cvv.placeholder = 'Enter CVV';
    }
  }
});

// real time validation name field
inputName.addEventListener('input', function (e) {
  inputName.style.border = '';
  inputName.placeholder = '';
});
inputName.oninput = function() {
  if (inputName.value === '') {
    inputName.style.border = '1px solid #FF0033';
    inputName.placeholder = 'Please provide your name';
  }
};

// Exceeds: real time validation mail field 
email.addEventListener('input', () => {
  email.style.border = '';
  email.style.placeholder = '';
  labelMail.textContent = 'Email:';
  labelMail.style.color = '';
});
email.oninput = function() {
  let mailCheck = email.value;
  mailCheck = validateEmail(mailCheck);
  
  if (!mailCheck) {
    mail.style.border = '1px solid #FF0033';
    labelMail.textContent = 'Email: please provide a valid e-mail address';
    labelMail.style.color = '#FF0033';
  }
  if (email.value === '') {
    email.style.border = '1px solid #FF0033';
    labelMail.textContent = 'Email: this e-mail field is empty, please provide an e-mail address';
    labelMail.style.color = '#FF0033';    
  }
};

// listener for activities after submit failure
fieldsetActivities.addEventListener('change', function(e) {
  legend.style.color = '';  
  legend.textContent = 'Register for Activities';
});






































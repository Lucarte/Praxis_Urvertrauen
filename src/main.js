'use strict'

// - // - // - // - // - // -  FORM VALIDATION - // - // - // - // - // - // -

let form = document.querySelector('#register-form');
let nameInput = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let anrede = document.querySelector('#anrede');

function showErrorMessage(input, message) {
  let container = input.parentElement;
  let error = container.querySelector('.error-message');

  if (error) {
    container.removeChild(error);
  }

  if (message) {
    error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    container.appendChild(error);
  }
}

function validateAnrede() {
  let value = anrede.value;
  if (value.length === 0) {
    showErrorMessage(anrede, 'Wahl erforderlich!');
    return false;
  }

  showErrorMessage(anrede, null);
  return true;
}

function validateNameInput() {
  let value = nameInput.value.trim();
  if (!value) {
    showErrorMessage(nameInput, 'Name is a required field');
    return false;
  } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(value)) {
    showErrorMessage(nameInput, 'Nur Buchstaben sind erlaubt');
    return false;
  } else if (value.length === 1) {
    showErrorMessage(nameInput, 'Zu kurz! Mindestes 2 Buchstaben sind erforderlich');;
    return false;
  } else if (value.length > 15) {
    showErrorMessage(nameInput, 'Zu lang! Maximal 15 Buchstaben');;
    return false;
  }

  showErrorMessage(nameInput, null);
  return true;
}


function validateEmail() {
  let value = email.value.trim();

  if (!value) {
    showErrorMessage(email, 'Feld darf nicht leer sein');
    return false;
  } else if (value.indexOf('@' && '.') === -1) {
    showErrorMessage(email, 'Invalide E-Mail adresse.');
    return false;
  } else if (value.indexOf('@') === -1) {
    showErrorMessage(email, 'E-Mail Adresse muss ein @ enthalten.');
    return false;
  } else if (value.indexOf('.') === -1) {
    showErrorMessage(email, 'E-Mail Adresse muss ein Punkt enthalten.');
    return false;
  }

  showErrorMessage(email, null);
  return true;
}

function validateMessage() {
  let value = message.value.trim();

  if (value.length < 2) {
    showErrorMessage(message, 'Feld erforderlich!')
    return false;
  }

  showErrorMessage(message, null);
  return true;
}

function validateForm() {
  let isValidNameInput = validateNameInput();
  let isValidEmail = validateEmail();
  let isValidMessage = validateMessage();
  let isValidAnrede = validateAnrede();

  return isValidAnrede && isValidNameInput && isValidEmail && isValidMessage;
}


anrede.addEventListener('focusout', validateAnrede);
nameInput.addEventListener('focusout', validateNameInput);
email.addEventListener('focusout', validateEmail);
message.addEventListener('focusout', validateMessage);

form.addEventListener('submit', (e) => {
  e.preventDefault(); // ordering NOT to submit to the server
  if (validateForm()) {
    alert('SUCSESS!!!');
  }
});

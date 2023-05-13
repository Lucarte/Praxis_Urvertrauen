'use strict'

// - // - // - // - // - // -  MOUSE EFFECT  - // - // - // - // - // - // -

let circle = document.getElementById('circle');

document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;

  circle.style.left = x - (circle.offsetWidth / 2) + 'px';
  circle.style.top = y - (circle.offsetHeight / 2) + 'px';
});


// - // - // - // - // - // -  FORM VALIDATION - // - // - // - // - // - // -

(function () {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let nameInput = document.querySelector('#name');

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateName() {
    let value = nameInput.value;
    if (!value) {
      showErrorMessage(nameInput, 'Name is a required field');
      return false;
    }

    if (value.length < 2) {
      showErrorMessage(nameInput, 'Name must be at least 2 characters long.');
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field');
      return false;
    }

    // if (value.indexOf('@' && '.') === -1) {
    //   showErrorMessage(emailInput, 'Please enter e valid email address.');
    //   return false;
    // }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'Please enter e valid email address.');
      return false;
    }

    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'Please enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateForm() {
    let isValidName = validateName();
    let isValidEmail = validateEmail();

    return isValidName && isValidEmail;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // ordering NOT to submit to the server
    if (validateForm()) {
      alert('SUCSESS!!!');
    }
  })
})();




// FOR ANUK!!!


//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ CONTACT FORM

// (function () {
//   let application = document.querySelector('.contact-form');
//   const nameInput = document.querySelector('#name');
//   const emailInput = document.querySelector('#email');
//   console.log(nameInput, emailInput);

//   function showErrorMessage(input, message) {
//     let container = input.parentElement;
//     let error = container.querySelector('.error-message');

//     if (error) {
//       container.removeChild(error);
//     }

//     if (message) {
//       let error = document.createElement('div');
//       error.classList.add('error-message');
//       error.innerText = message;
//       container.appendChild(error);
//     }
//   }

//   function verifyName() {
//     let value = nameInput.value;
//     if (!value) {
//       showErrorMessage(nameInput, 'Name muss angegeben werden.');
//       return false;
//     }

//     if (value.length < 2) {
//       showErrorMessage(nameInput, 'Name muss mindestens 2 Buchstaben enthalten.');
//       return false;
//     }

//     showErrorMessage(nameInput, null);
//     return true;
//   }

//   function verifyEmail() {
//     let value = emailInput.value;

//     if (!value) {
//       showErrorMessage(emailInput, 'E-Mail muss angegeben werden.');
//       return false;
//     }

//     if (value.indexOf('@') === -1) {
//       showErrorMessage(emailInput, 'Valide E-Mail eingeben.');
//       return false;
//     }

//     if (value.indexOf('.') === -1) {
//       showErrorMessage(emailInput, 'Valide E-Mail eingeben.');
//       return false;
//     }

//     showErrorMessage(emailInput, null);
//     return true;
//   }

//   function verifyForm() {
//     let isValidName = verifyName;
//     let isValidEmail = verifyEmail;

//     return isValidName && isValidEmail;
//   }

//   application.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (verifyForm()) {
//       alert('GESCHAFFT!')
//     }
//   })
// })();
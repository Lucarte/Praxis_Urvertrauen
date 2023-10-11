"use strict";

// -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- //  
// -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // - Form Validation -- // -------- //
// -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- //

// let form = document.querySelector('#register-form');
// let nameInput = document.querySelector('#name');
// let email = document.querySelector('#email');
// let message = document.querySelector('#message');
// let anrede = document.querySelector('#anrede');

// function showErrorMessage(input, message) {
//   let container = input.parentElement;
//   let error = container.querySelector('.error-message');

//   if (error) {
//     container.removeChild(error);
//   }

//   if (message) {
//     error = document.createElement('div');
//     error.classList.add('error-message');
//     error.innerText = message;
//     container.appendChild(error);
//   }
// }

// function validateAnrede() {
//   let value = anrede.value;
//   if (value.length === 0) {
//     showErrorMessage(anrede, 'Wahl erforderlich!');
//     return false;
//   }

//   showErrorMessage(anrede, null);
//   return true;
// }

// function validateNameInput() {
//   let value = nameInput.value.trim();
//   if (!value) {
//     showErrorMessage(nameInput, 'Wie möchten Sie gennant werden?');
//     return false;
//   } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(value)) {
//     showErrorMessage(nameInput, 'Nur Buchstaben sind erlaubt');
//     return false;
//   } else if (value.length === 1) {
//     showErrorMessage(nameInput, 'Zu kurz! Mindestes 2 Buchstaben sind erforderlich');
//     return false;
//   } else if (value.length > 15) {
//     showErrorMessage(nameInput, 'Zu lang! Maximal 15 Buchstaben');
//     return false;
//   }

//   showErrorMessage(nameInput, null);
//   return true;
// }

// function validateEmail() {
//   let value = email.value.trim();

//   if (!value) {
//     showErrorMessage(email, 'Feld darf nicht leer sein');
//     return false;
//   } else if (value.indexOf('@' && '.') === -1) {
//     showErrorMessage(email, 'Invalide E-Mail adresse.');
//     return false;
//   } else if (value.indexOf('@') === -1) {
//     showErrorMessage(email, 'E-Mail Adresse muss ein @ enthalten.');
//     return false;
//   } else if (value.indexOf('.') === -1) {
//     showErrorMessage(email, 'E-Mail Adresse muss ein Punkt enthalten.');
//     return false;
//   }

//   showErrorMessage(email, null);
//   return true;
// }

// function validateMessage() {
//   let value = message.value.trim();

//   if (value.length < 2) {
//     showErrorMessage(message, 'Wie kann ich Ihnen helfen?')
//     return false;
//   }

//   showErrorMessage(message, null);
//   return true;
// }

// function validateForm() {
//   let isValidNameInput = validateNameInput();
//   let isValidEmail = validateEmail();
//   let isValidMessage = validateMessage();
//   let isValidAnrede = validateAnrede();

//   return isValidAnrede && isValidNameInput && isValidEmail && isValidMessage;
// }

// anrede.addEventListener('focusout', validateAnrede);
// nameInput.addEventListener('focusout', validateNameInput);
// email.addEventListener('focusout', validateEmail);
// message.addEventListener('focusout', validateMessage);

// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // ordering NOT to submit to the server
//   if (validateForm()) {
//     alert('SUCSESS!!!');
//   }
// });

// -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- //  
// -------- // -------- // -------- // -------- // -------- // -------- // -------- // ---- Logic for the Header Dropdown Menus --- //
// -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- // -------- //

document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  // const isDropdownMenu = e.target.matches("[data-dropdown]");
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]')
    e.target.children[0].classList.toggle('active');
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')

  })
})

// Submenus header
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  const isDropdownMenu = e.target.closest("[data-dropdown]");
  const isActiveDropdown = isDropdownMenu && isDropdownMenu.classList.contains("active");

  if (!isDropdownButton && !isDropdownMenu) {
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown
        .querySelector("[data-dropdown-button] > .active")
        .classList.remove("active");
    });
  } else if (isDropdownButton) {
    const dropdown = e.target.closest("[data-dropdown]");
    const isActive = dropdown.classList.contains("active");
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown
        .querySelector("[data-dropdown-button] > .active")
        .classList.remove("active");
    });
    if (!isActive) {
      dropdown.classList.add("active");
      e.target.children[0].classList.add("active");
    } else {
      dropdown.classList.remove("active");
      e.target.children[0].classList.remove("active");
    }
  } else if (isDropdownMenu && !isActiveDropdown) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Hide logo when the nav menu is open - tell it to have opacity null when the nav menu is open

// Function to check if the navigation menu is open
function isNavMenuOpen() {
  const navMenu = document.querySelector(".header__open-nav");
  return navMenu.classList.contains("open");
}

// Function to close the navigation menu
function closeNavMenu() {
  const navMenu = document.querySelector(".header__open-nav");
  navMenu.classList.remove("open");
}

// Add a click event listener to the document
document.addEventListener("click", (event) => {
  const target = event.target;

  if (!isNavMenuOpen()) {
    // If the navigation menu is not open, return early
    return;
  }

  // Check if the click target is outside the navigation menu
  const isInMenu = target.closest(".header__open-nav");
  if (!isInMenu) {
    // Close the navigation menu
    closeNavMenu();
  }
});

// Get the "Termin Vereinbaren" button
const terminVereinbarenButton = document.querySelector(".header__btn");

// Add a click event listener to the "Termin Vereinbaren" button
terminVereinbarenButton.addEventListener("click", () => {
  // Close the navigation menu if it's open
  if (isNavMenuOpen()) {
    closeNavMenu();
  }
});

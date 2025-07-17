"use strict";

// Dropdown Menus
function setupDropdownMenus() {
	document.addEventListener("click", (e) => {
		const isDropdownButton = e.target.matches("[data-dropdown-button]");
		if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
			return;

		let currentDropdown;
		if (isDropdownButton) {
			currentDropdown = e.target.closest("[data-dropdown]");
			e.target.children[0].classList.toggle("active");
		}

		document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
			if (dropdown === currentDropdown) return;
			dropdown.classList.remove("active");
		});
	});

	// Submenus header
	document.addEventListener("click", (e) => {
		const isDropdownButton = e.target.matches("[data-dropdown-button]");
		const isDropdownMenu = e.target.closest("[data-dropdown]");
		const isActiveDropdown =
			isDropdownMenu && isDropdownMenu.classList.contains("active");

		if (!isDropdownButton && !isDropdownMenu) {
			document
				.querySelectorAll("[data-dropdown].active")
				.forEach((dropdown) => {
					dropdown.classList.remove("active");
					dropdown
						.querySelector("[data-dropdown-button] > .active")
						.classList.remove("active");
				});
		} else if (isDropdownButton) {
			const dropdown = e.target.closest("[data-dropdown]");
			const isActive = dropdown.classList.contains("active");
			document
				.querySelectorAll("[data-dropdown].active")
				.forEach((dropdown) => {
					dropdown.classList.remove("active");

					dropdown
						.querySelector("[data-dropdown-button]")

						.classList.remove("active");
				});
			if (!isActive) {
				// Select all elements with the attribute "data-dropdown-button"
				const dropdownButtons = document.querySelectorAll(
					"[data-dropdown-menu]"
				);

				// Loop through each dropdown button
				dropdownButtons.forEach((button) => {
					// Remove the "active" class from the dropdown button
					button.classList.remove("active");
				});
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
}

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

// Call function
setupDropdownMenus();

// change date automatically on footer
document.addEventListener("DOMContentLoaded", () => {
	const yearSpan = document.getElementById("current-year");
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}
});

const switch_mode = document.querySelector(".switch-mode-content");
const form_inputs = document.querySelectorAll(
  ".login-section .form .input input:not(input[type='submit'])"
);
const clear_email_txt = document.querySelector(".login-section .clear");
const show_hide_pass = document.querySelector(
  ".login-section .show-hide-password"
);

// * Scripts
switch_mode.addEventListener("click", () => {
  switch_mode.parentElement.classList.toggle("dark-mode");
  switch_mode.parentElement.nextElementSibling.classList.toggle("dark-mode");
  switch_mode.parentElement.nextElementSibling.nextElementSibling.classList.toggle(
    "dark-mode"
  );
});



// Selectors
const switchMode = document.querySelector(".switch-mode-content");
const formInputs = document.querySelectorAll(".form .input input:not([type='submit'])");
const clearButtons = document.querySelectorAll(".form .clear");
const passwordToggles = document.querySelectorAll(".show-hide-password");


// Dark Mode Toggle
switchMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
});



// Persist Dark Mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Input Clear Button
formInputs.forEach((input) => {
    input.addEventListener("input", () => {
        const clearBtn = input.nextElementSibling;
        clearBtn.style.display = input.value ? "flex" : "none";
    });
});

// Clear Input Functionality
clearButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const inputField = btn.previousElementSibling;
        inputField.value = "";
        btn.style.display = "none";
    });
});

// Password Visibility Toggle (Including Confirm Password)
passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const passwordField = toggle.previousElementSibling; // The input field tied to this toggle
        const isVisible = toggle.classList.toggle("show");
        passwordField.type = isVisible ? "text" : "password";

        // Ensure toggle affects both password and confirm password fields
        if (passwordField.name === "password") {
            const confirmPasswordField = document.querySelector("input[name='confirm_password']");
            if (confirmPasswordField) {
                confirmPasswordField.type = isVisible ? "text" : "password";
            }
        }
    });
});

// Selectors
const languageToggle = document.querySelector(".language .langue"); // Language toggle button
const languageDropdown = document.querySelector(".language .dropdown"); // Dropdown menu
const displayedLanguage = document.querySelector(".language .txt"); // Current displayed language

// Default Languages
const languages = ["English", "Nepali"]; // Supported languages
let currentLanguage = "English"; // Initial language

// Update the dropdown to show only available options
function updateDropdown() {
    languageDropdown.innerHTML = ""; // Clear dropdown
    languages
        .filter((lang) => lang !== currentLanguage) // Show only the other language
        .forEach((lang) => {
            const li = document.createElement("li");
            li.textContent = lang;
            languageDropdown.appendChild(li);
        });
}

// Initialize the dropdown
updateDropdown();

// Toggle dropdown visibility
languageToggle.addEventListener("click", () => {
    const isOpen = languageDropdown.style.height === "40px";
    languageDropdown.style.height = isOpen ? "0px" : "40px"; // Toggle height
});

// Switch language on selection
languageDropdown.addEventListener("click", (event) => {
    const selectedLanguage = event.target.textContent.trim();
    if (languages.includes(selectedLanguage)) {
        currentLanguage = selectedLanguage; // Update current language
        displayedLanguage.textContent = currentLanguage; // Update UI
        languageDropdown.style.height = "0px"; // Close dropdown
        updateDropdown(); // Update dropdown options
    }
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".language")) {
        languageDropdown.style.height = "0px"; // Close dropdown
    }
});

const form = document.querySelector("form");
const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm-password");
const button = document.querySelector("button");

addListeners()

function addListeners(){
    usernameEl.addEventListener("focusout", checkUsername);
    emailEl.addEventListener("focusout", checkEmail);
    passwordEl.addEventListener("focusout", checkPassword);
    confirmPasswordEl.addEventListener("focusout", checkConfirmPassword);
}

function checkUsername(){
    
    const min = 3;
    const max = 25;
    const username = usernameEl.value.trim();
    const isRequired = Validation.isRequired(username);
    const isBetween = Validation.isBetween(username.length,min,max);

    if (!isRequired) {
        Validation.showError(usernameEl ,"This place is required");
    } else if (!isBetween) {
        Validation.showError(usernameEl, `Username must be between ${min} and ${max} charecters`);
    } else {
        Validation.showSuccess(usernameEl);
    }

}

function checkEmail(){

    const email = emailEl.value.trim();
    const isRequired = Validation.isRequired(email);
    const isValidEmail = Validation.isValidEmail(email);

    if (!isRequired) {
        Validation.showError(emailEl, 'This place is required');
    } else if (!isValidEmail) {
        Validation.showError(emailEl, "Email is not valid");
    } else {
        Validation.showSuccess(emailEl);
    }
}

function checkPassword() {
    const password = passwordEl.value.trim();
    const isRequired = Validation.isRequired(password);
    const isPasswordSecure = Validation.isPasswordSecure(password);

    if (!isRequired) {
        Validation.showError(passwordEl, 'This place is required');
    } else if (!isPasswordSecure) {
        Validation.showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        Validation.showSuccess(passwordEl);
    }

}

function checkConfirmPassword(){

    const password = passwordEl.value.trim();
    const confirmPassword = confirmPasswordEl.value.trim();
    const isRequired = Validation.isRequired(confirmPassword);
    
    if (!isRequired) {
        Validation.showError(confirmPasswordEl, 'This place is required');
    } else if (password !== confirmPassword) {
        Validation.showError(confirmPasswordEl, 'Confirm password does not match');
    } else {
        Validation.showSuccess(confirmPasswordEl);
    }
}


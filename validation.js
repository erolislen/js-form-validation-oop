class Validation {

    static isRequired(value){ 
        if(value === "") {
            return false;
        } else {
            return true;
        }
    }

    static isBetween(length,min,max) {
        if (length < min || length > max) {
            return false;
        } else {
            return true;
        }
    }

    static isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    static isPasswordSecure(password) {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\-\_])(?=.{8,})");
        return re.test(password);

    }

    static showError(input,message) {
        const formElement = input.parentElement;
        const error = formElement.querySelector("small");
        error.textContent = message;
        error.classList = "text-danger";
    }

    static showSuccess(input){
        const formElement = input.parentElement;
        const error = formElement.querySelector("small");
        error.textContent = "";
        error.classList = "";
    }

    






}
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    usernameValidation(username.value);
    emailValidation(email.value);
    passwordValidation(password.value);
    passwordConfirm(password2.value);

    localStorage.setItem('name', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('password'));
});


function usernameValidation(name) {
    let userReg = '^[a-z]+[\\._a-z0-9]+';
    if (name.match(userReg)) {
        if (name.length < 4) {
            showError(username, 'Username must be at least 4 characters long');
        } else if (name.length > 15) {
            showError(username, 'Username must be less than 15 characters long');
        } else {
            showSuccess(username);
        }
    } else {
        showError(username, 'Enter valid username!')
    }
}


function emailValidation(emailInput) {
    let mailReg =
        '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    if (emailInput.match(mailReg)) {
        showSuccess(email);
    } else {
        showError(email, "Enter valid email name!");
    }

}

function passwordValidation(password) {
    if (password.length < 6) {
        showError(this.password, 'Password must be at least 6 characters long.')
    } else if (password.length > 20) {
        showError(this.password, 'Password must be less than 20 characters')
    } else {
        showSuccess(this.password);
    }
}

function passwordConfirm(passwordConfirm) {
    if (passwordConfirm === this.password.value && passwordConfirm !== '') {
        showSuccess(password2);
    } else {
        showError(password2, "Password is not the same!")
    }

}

function showSuccess(inputt) {
    let formControl = inputt.parentElement;
    formControl.className = 'form-control success'
}


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;

}
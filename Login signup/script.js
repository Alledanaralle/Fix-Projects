const login = document.querySelector('.login'),
    signup = document.querySelector('.signup'),
    toggle = document.querySelector('.label span'),
    loginForm = document.querySelector('.login-form'),
    signupForm = document.querySelector('.signup-form')

function swap() {
    login.classList.toggle('active')
    signup.classList.toggle('active')
    loginForm.classList.toggle('active')
    signupForm.classList.toggle('active')
    toggle.classList.toggle('active')
}

function showPass() {
    let passField = document.querySelectorAll('#password'),
        eye = document.querySelector('.eye')

    passField.forEach((input) => {
        if (input.type === "text") {
            input.type = "password"
            eye.classList.add("ri-eye-off-line")
            eye.classList.remove("ri-eye-line")
        } else {
            input.type = "text"
            eye.classList.add("ri-eye-line")
            eye.classList.remove("ri-eye-off-line")
        }
    })
}
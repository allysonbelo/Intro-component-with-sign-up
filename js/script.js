//Início validação de E-mail
const inputEmail = document.querySelector('input[type="email"]')

const validateEmail = (event) => {
    const input = event.currentTarget
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const emailTeste = regex.test(input.value)

    if (!emailTeste) {
        inputEmail.classList.add("validate")
    } else {
        inputEmail.classList.remove("validate")
    }
}
inputEmail.addEventListener('input', validateEmail)
//Fim validação de E-mail

//Início validação dos campo nome
const inputName = document.querySelector("#name")
const validateName = () => {
    const name = inputName.value
    if (name.length < 2) {
        inputName.classList.add("validate")
    } else {
        inputName.classList.remove("validate")
    }
}
inputName.addEventListener("input", validateName)
//Fim validação dos campo nome

//Início validação dos campo sobrenome
const inputLastName = document.querySelector("#lastname")
const validateLastName = () => {
    const lastName = inputLastName.value

    if (lastName.length < 2) {
        inputLastName.classList.add("validate")
    } else {
        inputLastName.classList.remove("validate")
    }
}
inputLastName.addEventListener("input", validateLastName)
//Fim validação dos campo sobrenome

//Início validação do campo password
const inputPassword = document.querySelector('#password')
const validatePassword = () => {
    const password = inputPassword.value

    if (password.length < 6) {
        inputPassword.classList.add("validate")
        console.log("invalido");
    } else {
        inputPassword.classList.remove("validate")
        console.log("valido");
    }
}
inputPassword.addEventListener("input", validatePassword)
//Fim validação do campo password


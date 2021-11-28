//Início validação de E-mail
const inputEmail = document.querySelector('input[type="email"]')
const validateEmail = (event) => {
    const input = event.currentTarget
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const emailTeste = regex.test(input.value)

    if (!emailTeste) {
        inputEmail.classList.add("validate")
        inputEmail.parentElement.nextElementSibling.textContent = "Invalid email format!"
        inputEmail.nextElementSibling.style.display = "block"
        inputEmail.parentElement.nextElementSibling.style.display = "block"
    } else {
        inputEmail.classList.remove("validate")
        inputEmail.parentElement.nextElementSibling.textContent = ""
        inputEmail.nextElementSibling.style.display = "none"
        inputEmail.parentElement.nextElementSibling.style.display = "none"
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

    if (inputName.value.length < 2) {
        inputName.nextElementSibling.style.display = "block"
        inputName.parentElement.nextElementSibling.style.display = "block"
    } else {
        inputName.nextElementSibling.style.display = "none"
        inputName.parentElement.nextElementSibling.style.display = "none"
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

    if (inputLastName.value.length < 2) {
        inputLastName.nextElementSibling.style.display = "block"
        inputLastName.parentElement.nextElementSibling.style.display = "block"
    } else {
        inputLastName.nextElementSibling.style.display = "none"
        inputLastName.parentElement.nextElementSibling.style.display = "none"
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
        inputPassword.parentElement.nextElementSibling.textContent = "Must contain 6 characters or more"
        inputPassword.nextElementSibling.style.display = "block"
    } else {
        inputPassword.classList.remove("validate")
        inputPassword.parentElement.nextElementSibling.textContent = ""
        inputPassword.nextElementSibling.style.display = "none"
    }
}
inputPassword.addEventListener("input", validatePassword)
//Fim validação do campo password

//botão
const btnEnviar = document.querySelector("#btn")
btnEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    verificaEstado()
})

function verificaEstado() {

    if (inputName.value.length < 2) {
        inputName.nextElementSibling.style.display = "block"
        inputName.parentElement.nextElementSibling.style.display = "block"
    } else {
        inputName.nextElementSibling.style.display = "none"
        inputName.parentElement.nextElementSibling.style.display = "none"
    }


    if (inputLastName.value.length < 2) {
        inputLastName.nextElementSibling.style.display = "block"
        inputLastName.parentElement.nextElementSibling.style.display = "block"
    } else {
        inputLastName.nextElementSibling.style.display = "none"
        inputLastName.parentElement.nextElementSibling.style.display = "none"
    }

    if (inputEmail.value.length < 10) {
        inputEmail.parentElement.nextElementSibling.textContent = "Invalid email format!"
        inputEmail.nextElementSibling.style.display = "block"
        inputEmail.parentElement.nextElementSibling.style.display = "block"
    } else {
        inputEmail.parentElement.nextElementSibling.textContent = ""
        inputEmail.nextElementSibling.style.display = "none"
        inputEmail.parentElement.nextElementSibling.style.display = "none"
    }

    if (inputPassword.value.length < 6) {
        inputPassword.parentElement.nextElementSibling.textContent = "Must contain 6 characters or more"
        inputPassword.nextElementSibling.style.display = "block"
        inputPassword.parentElement.nextElementSibling.style.display = "block"
    } else {
        inputPassword.parentElement.nextElementSibling.textContent = ""
        inputPassword.nextElementSibling.style.display = "none"
        inputPassword.parentElement.nextElementSibling.style.display = "none"
    }

}
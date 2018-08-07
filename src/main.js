const loginButton = document.getElementById('login-button')
const registerButton = document.getElementById('register-button')

const templates = require('./templates/templates')

loginButton.addEventListener('click', loginForm)
registerButton.addEventListener('click', registerForm)


function renderMain(){
  const container = document.getElementById('form-container')
  container.innerHTML = ''
  document.querySelector('main').classList.remove('d-none')
}

function loginForm() {
  document.querySelector('title').textContent = 'Sign In'
  document.querySelector('main').classList.add('d-none')
  
  const container = document.getElementById('form-container')
  container.innerHTML = templates.loginTemplate()

  const cancelLogin = document.getElementById('cancel-login')
  cancelLogin.addEventListener('click', renderMain)

  // const loginFormSubmit = document.getElementById('login')
  // loginForm.addEventListener('submit', verify)
}

function registerForm() {
  document.querySelector('title').textContent = 'Register'
  document.querySelector('main').classList.add('d-none')
  const container = document.getElementById('form-container')
  container.innerHTML = templates.registerTemplate()

  const cancelRegister = document.getElementById('cancel-register')
  cancelRegister.addEventListener('click', renderMain)

  // const registerFormSubmit = document.getElementById('register')
  // loginForm.addEventListener('submit', verify)
}

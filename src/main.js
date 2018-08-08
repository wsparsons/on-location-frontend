window.baseURL = 'http://localhost:5000'

const loginButton = document.getElementById('login-button')
const logoutButton = document.getElementById('logout-button')
const registerButton = document.getElementById('register-button')
const templates = require('./templates/templates')
const searchButton = document.getElementById('button-search')
const loginPage = require('./render/login')

const renderHomePage = require('./render/home')

// searchButton.addEventListener('click', () => {
//   window.location.hash = '#search'
// })

function homeView () {
  const token = localStorage.getItem('token')
  if (!token) {
        // Render homepage view only if there is no token.
        // renderHome()
    renderHomePage.allMovies()
    loginButton.addEventListener('click', loginPage.createLogin())
    registerButton.addEventListener('click', registerForm)
  } else {
        // renderHome(userId)

      renderHomePage.allMovies()
    }
  
}

homeView()
window.onhashchange = () => homeView()
















function renderMain(){
  const container = document.getElementById('form-container')
  container.innerHTML = ''
  document.querySelector('main').classList.remove('d-none')
}

// function loginForm() {
//   document.querySelector('title').textContent = 'Sign In'
//   document.querySelector('main').classList.add('d-none')

//   const container = document.getElementById('form-container')
//   container.innerHTML = templates.loginTemplate()

//   const cancelLogin = document.getElementById('cancel-login')
//   cancelLogin.addEventListener('click', renderMain)

//   // const loginFormSubmit = document.getElementById('login')
//   // loginForm.addEventListener('submit', verify)
// }

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

window.baseURL = 'http://localhost:5000'
const search = require('./render/search')

const loginButton = document.getElementById('login-button')
const registerButton = document.getElementById('register-button')
const templates = require('./templates/templates')
const searchButton = document.getElementById('button-search')

const renderHomePage = require('./render/home')

loginButton.addEventListener('click', loginForm)
registerButton.addEventListener('click', registerForm)
// searchButton.addEventListener('click', () => {
//   window.location.hash = '#search'
// })

function homeView () {
  renderHomePage.allMovies()

    // const token = localStorage.getItem('token')
    // if (!token) {
    //     // Render homepage view only if there is no token.
    //     // renderHome()
    // } else {
    //     // renderHome(userId)
    // }


    search.renderSearchBar()

}

homeView()
window.onhashchange = () => homeView()
















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

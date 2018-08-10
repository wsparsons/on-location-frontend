//dev api url
window.baseURL = 'http://localhost:5000'
//production api url
// window.baseURL = 'http://onlocation.herokuapp.com'
const search = require('./render/search')

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
    document.querySelector('#logout-span').setAttribute("style", "display: none")
    document.querySelector('#login-span').setAttribute("style", "display: block")

    renderHomePage.allMovies()
    loginButton.addEventListener('click', loginForm)
    registerButton.addEventListener('click', registerForm)
  } else {
        // renderHome(userId)

      document.querySelector('#login-span').setAttribute("style", "display: none")
      const addMovieButton = document.getElementById('add-movie-button')


      addMovieButton.addEventListener('click', search.renderOmdbSearch)
      document.querySelector('#logout-span').setAttribute("style", "display: block")

      renderHomePage.allMovies()
      logoutButton.addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        const container = document.getElementById('form-container')
        container.innerHTML = ''
        console.log('LOGOUT PRESSED')
        homeView()
      })
    }
    search.renderSearchBar()
  }





homeView()
window.onhashchange = () => homeView()
















function renderMain(){
  const container = document.getElementById('form-container')
  container.innerHTML = ''
  document.querySelector('main').classList.remove('d-none')
  document.querySelector('title').textContent = 'On-Location'
}

function loginForm() {
  document.querySelector('title').textContent = 'Sign In'
  document.querySelector('main').classList.add('d-none')

  const container = document.getElementById('form-container')
  container.innerHTML = templates.loginTemplate()

  const cancelLogin = document.getElementById('cancel-login')
  cancelLogin.addEventListener('click', renderMain)

  const loginFormSubmit = document.getElementById('login')
  //loginForm.addEventListener('submit', verify)

  loginFormSubmit.addEventListener('submit', (event) => {
    event.preventDefault()
    const body = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    return axios.post(`${baseURL}/api/users/login`, body)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        return res.data.token
      })
      .then(token => {
        console.log('RENDER MAIN PAGE')
        document.querySelector('main').classList.remove('d-none')
        document.querySelector('#login-span').setAttribute("style", "display: none")
        document.querySelector('#logout-span').removeAttribute("style")
        document.querySelector('title').textContent = 'On-Location'
        renderMain()
        homeView()

      })
      .catch(e => {
        console.log(e)
        let alertspan = document.querySelector('#login-alert')
        alertspan.innerHTML += templates.loginAlertTemplate()
        setTimeout(() => alertspan.innerHTML='', 4000)

      })

  })
}

function registerForm() {
  console.log('IN REGISTER FORM')
  document.querySelector('title').textContent = 'Register'
  document.querySelector('main').classList.add('d-none')
  const container = document.getElementById('form-container')
  container.innerHTML = templates.registerTemplate()

  const cancelRegister = document.getElementById('cancel-register')
  cancelRegister.addEventListener('click', renderMain)

  const registerFormSubmit = document.getElementById('register')
  registerFormSubmit.addEventListener('submit', (event) => {
    event.preventDefault()
    const body = {
      first_name: event.target.firstName.value,
      last_name: event.target.lastName.value,
      email: event.target.registerEmail.value,
      password: event.target.registerPassword.value
    }
    console.log("IN REGISTER PASSING IN: ", body)
    return axios.post(`${baseURL}/api/users/signup`, body)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        return res.data.token
      })
      .then(token => {
        document.querySelector('main').classList.remove('d-none')
        document.querySelector('#login-span').setAttribute("style", "display: none")
        document.querySelector('#logout-span').removeAttribute("style")
        renderMain()
        homeView()
      })
      .catch(e => {
        console.log(e)
        let alertspan = document.querySelector('#register-alert')
        alertspan.innerHTML += templates.registerAlertTemplate()
        setTimeout(() => alertspan.innerHTML = '', 4000)
      })

  })
}

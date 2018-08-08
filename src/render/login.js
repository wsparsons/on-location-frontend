const template = require('../templates/templates')
const renderHomePage = require('./home')

function createLogin() {
    document.querySelector('title').textContent = 'Sign In'
    document.querySelector('main').classList.add('d-none')


    const loginForm = document.querySelector('#form-container')
    loginForm.innerHTML = template.loginTemplate()
    loginForm.addEventListener('submit', (event) => {
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
                document.querySelector('#login-span').setAttribute("style","display: none")
                document.querySelector('#logout-span').removeAttribute("style")
                renderHomePage.allMovies()
                
            })
            .catch(e => {
                console.log(e)
                loginForm.innerHTML += template.loginAlertTemplate()
                setTimeout(() => createLogin(), 4000)
                
            })

    })
 }
function renderMain() {
    const container = document.getElementById('form-container')
    container.innerHTML = ''
    document.querySelector('main').classList.remove('d-none')
}

function loginForm() {
//   document.querySelector('title').textContent = 'Sign In'
//   document.querySelector('main').classList.add('d-none')

//   const container = document.getElementById('form-container')
//   container.innerHTML = templates.loginTemplate()

//   const cancelLogin = document.getElementById('cancel-login')
//   cancelLogin.addEventListener('click', renderMain)

  // const loginFormSubmit = document.getElementById('login')
  // loginForm.addEventListener('submit', verify)
}

module.exports= {
    createLogin,
    loginForm
}
const loginTemplate = () => {
  return `
    <div class="col-6 p-4">
      <h3>Login</h3>
      <hr>
      <form id="login">
        <div class="form-group">
          <label for="login-email">Email Address</label>
          <input type="email" class="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter email" required="required">
        </div>
        <div class="form-group">
          <label for="login-password">Password</label>
          <input type="password" class="form-control" id="login-password" placeholder="Enter Password" required="required">
        </div>
        <button type="submit" class="btn btn-primary" id="sumbit-login">Login</button>
        <button type="button" class="btn btn-danger" id="cancel-login">Cancel</button>
      </form>
      <span id="login-alert"></span>
    </div>`
}

const registerTemplate = () => {
  return `
    <div class="col-6 p-4">
      <h3>Register</h3>
      <hr>
      <form id="register">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="first-name" class="form-control" id="first-name" placeholder="Enter First Name" required>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="last-name" class="form-control" id="last-name" placeholder="Enter Last Name" required>
        </div>
        <div class="form-group">
          <label for="register-email">Email Address</label>
          <input type="email" class="form-control" id="register-email" aria-describedby="emailHelp" placeholder="Enter Email" required>
        </div>
        <div class="form-group">
          <label for="register-password">Password</label>
          <input type="password" class="form-control" id="register-password" placeholder="Enter Password" required>
        </div>
        <button type="submit" class="btn btn-info" id="sumbit-register">Register</button>
        <button type="button" class="btn btn-danger" id="cancel-register">Cancel</button>
      </form>
      <span id="register-alert"></span>
    </div>`
}

const loginAlertTemplate = () => {
  return `
    <br>
    <div class="alert alert-danger" role="alert">
    Email or password is incorrect. Please try again.
    </div>`
}

const registerAlertTemplate = () => {
  return `
  <br>
  <div class="alert alert-danger" role="alert">
  The email address you have entered is already registered. Please try with a different email.
  </div>`
}

const movieCardTemplate = (id, poster, title, plot, time) => {
  return `
    <div class="card m-2 col-5 col-md-3 shadow p-0" href="#movies/${id}">
      <img class="card-img-top" src="${poster}" alt="Card image cap" movie-id=${id}>
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${plot}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated ${time} ago</small>
      </div>
    </div>`
}

const movieInfoTemplate = (movieInfo) => {
  return `
    <div class="row align-items-center pb-2" movie-id=${movieInfo.id}>
      <div class="col-4">
        <img class="img-fluid shadow" src="${movieInfo.poster}" alt="Frozen">
      </div>
      <div class="col-8">
        <h4 class="font-weight-bold">Title: <span class="font-weight-normal">${movieInfo.title}</span></h4>
        <hr>
        <p class="font-weight-bold">Year: <span class="font-weight-normal">${movieInfo.year}</span></p>
        <p class="font-weight-bold">Rated: <span class="font-weight-normal">${movieInfo.rated}</span></p>
        <p class="font-weight-bold">Genre: <span class="font-weight-normal">${movieInfo.genre}</span></p>
        <p class="font-weight-bold">Director: <span class="font-weight-normal">${movieInfo.director}</span></p>
        <p class="font-weight-bold">Plot: <span class="font-weight-normal">${movieInfo.plot}</span></p>
      </div>
    </div>`
}

module.exports = {
  loginTemplate,
  registerTemplate,
  loginAlertTemplate,
  registerAlertTemplate,
  movieCardTemplate,
  movieInfoTemplate
}

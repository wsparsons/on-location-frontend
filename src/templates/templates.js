const loginTemplate = () => {
  return `
    <div class="col-6 p-4">
      <h3>Login</h3>
      <hr>
      <form id="login">
        <div class="form-group">
          <label for="login-email">Email Address</label>
          <input type="email" class="form-control" name="email" id="login-email" aria-describedby="emailHelp" placeholder="Enter email" required="required">
        </div>
        <div class="form-group">
          <label for="login-password">Password</label>
          <input type="password" class="form-control" name="password" id="login-password" placeholder="Enter Password" required="required">
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
          <input type="first-name" class="form-control" name="firstName" id="firstName" placeholder="Enter First Name" required>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="last-name" class="form-control" name="lastName" id="lastName" placeholder="Enter Last Name" required>
        </div>
        <div class="form-group">
          <label for="register-email">Email Address</label>
          <input type="email" class="form-control" name="registerEmail" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter Email" required>
        </div>
        <div class="form-group">
          <label for="register-password">Password</label>
          <input type="password" class="form-control" name="registerPassword" id="registerPassword" placeholder="Enter Password" required>
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

const movieCardTemplate = (movie, time) => {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card m-1 shadow p-0" href="#movies/${movie.id}">
        <img class="card-img-top" src="${movie.poster}" alt="Card image cap" id="movie${movie.id}" data="${movie.id}" data-imdb="${movie.imdbID}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}  (${movie.year})</h5>
          <p class="card-text">${movie.plot || ''}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated ${time} ago</small>
        </div>
      </div>
    </div>`
}

const movieInfoTemplate = (movieInfo) => {
  return `
    <div class="row align-items-center pb-2" id="movie${movieInfo.id}">
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
        <button type="button" class="btn btn-outline-success btn-sm" id="view-scenes" data="${movieInfo.id}">View Scenes</button>
        <button type="button" class="btn btn-outline-primary btn-sm" id="add-scene">Add Scene</button>
      </div>
    </div>`
}

const sceneCardTemplate = (scene, photo, time) => {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card m-1 shadow p-0" id="scene${scene.id}" data="${scene.id}">
        <img class="card-img" src="${photo}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text"><span class="font-weight-bold">Description: </span>${scene.description}</p>
          <p class="card-text"><span class="font-weight-bold">Address: </span>${scene.address}</p>
          <button data="${scene.id}" type="button" class="btn btn-outline-info btn-sm">Edit</button>
          <button data="${scene.id}" type="button" class="btn btn-outline-danger btn-sm" >Delete</button>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated ${time} ago</small>
        </div>
      </div>
    </div>`
}

const searchBar = () => {
  return `
  <div class="row">
    <div class="col p-4">
      <h3>Search for a movie.</h3>
      <hr>

      <div class="input-group mb-3">
          <input id="searchMovieTitle" type="search" class="form-control" placeholder="Enter Movie Title" aria-label="Movie Title" aria-describedby="button-search">
          <div class="input-group-append">
            <a id="searchMovieButton" class="btn btn-outline-secondary" href="/#search">Search</a>
          </div>
      </div>

      <div id="noresults-alert" class="alert alert-danger m-2 p-2 d-none text-center mx-auto" role="alert">
      <i class="fas fa-exclamation-circle"></i> Sorry No Results.
      </div>



    </div>
  </div>
  `
}

const omdbBar = () => {
  return `
  <div class="row">
    <div class="col p-4">
      <h3>Add a movie from OMDB.</h3>
      <hr>
      <div class="input-group mb-3">
        <input id="searchOmdbTitle" type="search" class="form-control" placeholder="Enter Movie Title" aria-label="Movie Title" aria-describedby="button-search">
        <div class="input-group-append">
          <a id="searchOmdbButton" class="btn btn-outline-primary" href="/#search">Search Movie</a>
        </div>
      </div>
    </div>
  </div>
  `
}


module.exports = {
  loginTemplate,
  registerTemplate,
  loginAlertTemplate,
  registerAlertTemplate,
  movieCardTemplate,
  movieInfoTemplate,
  searchBar,
  omdbBar,
  sceneCardTemplate
}

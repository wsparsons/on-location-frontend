const templates = require('../templates/templates')
const moment = require('moment')

function allMovies() {
  axios.get(`${baseURL}/api/movies`)
    .then(response => {
      let movies = response.data.data
      renderAllMovie(movies)

    })
}

function renderAllMovie(movies) {
  let accumulator = ''

  movies.forEach(movie => {
    let createdTime = moment(movie.created_at).toNow(true)
    let updatedTime = moment(movie.updated_at).toNow(true)

    accumulator += templates.movieCardTemplate(movie.id, movie.poster, movie.title, movie.plot, createdTime)
  })

  document.querySelector('#allMoviesCards').innerHTML = accumulator

  let allMoviesImages = document.querySelectorAll('.card-img-top')

  allMoviesImages.forEach(movieImage => {
    movieImage.addEventListener('click', function(event) {
      event.preventDefault()
      let movieId = movieImage.getAttribute('movie-id')
      oneMovie(movieId)
    })
  })
}

function oneMovie(movieId) {
  axios.get(`${baseURL}/api/movies/${movieId}`)
    .then(response => {
      let movieInfo = response.data.data[0]
      // console.log(movieInfo);
      renderOneMovie(movieInfo)
    })
}

function renderOneMovie(movie) {
  document.querySelector('#allMoviesCardContainer').innerHTML = ''
  document.querySelector('#oneMovieCard').innerHTML = templates.movieInfoTemplate(movie)
}


module.exports = {
  allMovies
}

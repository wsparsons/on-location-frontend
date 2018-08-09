const omdb = require('omdb-js')('537f0607')
const searchTarget = document.getElementById('searchbar')
const templates = require('../templates/templates')
const search = require('../requests/search')
const request = require('../requests/movies')
const renderAllMovie = require('../render/home').renderAllMovie
const renderOneMovie = require('../render/home').renderOneMovie

function renderSearchBar() {
  searchTarget.innerHTML = templates.searchBar()

  const searchButton = document.getElementById('searchMovieButton')
  const searchMovieTitle = document.getElementById('searchMovieTitle')

  searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    let searchString = escape(searchMovieTitle.value)
    search.localSearch(searchString)
  })
}

function renderOmdbSearch() {

  searchTarget.innerHTML = templates.omdbBar()
  const searchOmdbTitle = document.getElementById('searchOmdbTitle')
  const searchOmdbButton = document.getElementById('searchOmdbButton')
  document.querySelector('#allMoviesCards').innerHTML = ''

  searchOmdbButton.addEventListener('click', (event) => {
    event.preventDefault()
    let searchString = escape(searchOmdbTitle.value)

    omdb.searchForMovie(`${searchString}`).then(results => {
      // results is an array of movie objects
      let omdbResults = []
      results.Search.forEach((e) => {
        let movie = {
          imdbID: e.imdbID,
          title: e.Title,
          year: e.Year,
          poster: e.Poster
        }
        omdbResults.push(movie)
      })
      // renderAllMovie(omdbResults)

      function renderOmdbMovies(movies) {
        let accumulator = ''
        movies.forEach(movie => {
          let createdTime
          let updatedTime

          accumulator += templates.movieCardTemplate(movie, createdTime)
        })

        document.querySelector('#allMoviesCards').innerHTML = accumulator

      }
      renderOmdbMovies(omdbResults)

      let allMoviesImages = document.querySelectorAll('.card-img-top')

      allMoviesImages.forEach(movieImage => {
        movieImage.addEventListener('click', function(event) {
          event.preventDefault()
          let searchId = movieImage.getAttribute('data-imdb')
          // send the selected imdb id to omdb for results.
          // request.omdbSearch(searchId)

          omdb.getSpecificMovie('', searchId).then(result => {
            // result is a single OMDB API json object json matching the year and title, with "short" plot summary
            let omdbMovie = {
              title: result.Title,
              imdbID: result.imdbID,
              year: result.Year,
              rated: result.Rated,
              genre: result.Genre,
              director: result.Director,
              plot: result.Plot,
              poster: result.Poster
            }
            // Add it to the database, then render it.
            request.addMovie(omdbMovie)
          })
        })
      })
    })
  })
}

module.exports = {
  renderSearchBar,
  renderOmdbSearch
}

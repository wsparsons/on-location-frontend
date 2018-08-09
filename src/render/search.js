const omdb = require('omdb-js')('537f0607')
const searchTarget = document.getElementById('searchbar')
const templates = require('../templates/templates')
const request = require('../requests/search.js')
const renderAllMovie = require('../render/home').renderAllMovie

function renderSearchBar() {
  searchTarget.innerHTML = templates.searchBar()

  const searchButton = document.getElementById('searchMovieButton')
  const searchMovieTitle = document.getElementById('searchMovieTitle')

  searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    let searchString = escape(searchMovieTitle.value)
    request.localSearch(searchString)
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
      console.log(omdbResults)
      renderAllMovie(omdbResults)
      //return omdbResults
    })


    //render searched cards here, map new event listeners.


  })





}

module.exports = {
  renderSearchBar,
  renderOmdbSearch
}

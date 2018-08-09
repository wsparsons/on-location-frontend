const searchTarget = document.getElementById('searchbar')
const templates = require('../templates/templates')
const request = require('../requests/search.js')



function renderSearchBar() {
searchTarget.innerHTML = templates.searchBar()

const searchButton = document.getElementById('searchMovieButton')
const searchMovieTitle = document.getElementById('searchMovieTitle')

searchButton.addEventListener('click',(event) => {
  event.preventDefault()
  let searchString = escape(searchMovieTitle.value)
  request.localSearch(searchString)
})




}

function renderOmdbSearch() {
}

module.exports = {
  renderSearchBar,
  renderOmdbSearch
}
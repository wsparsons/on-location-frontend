const searchTarget = document.getElementById('searchbar')
const templates = require('../templates/templates')
const request = require('../requests/search.js')

function renderSearchBar() {

searchTarget.innerHTML = templates.searchBar()

const searchButton = document.getElementById('searchMovieDB')
const searchMovieTitle = document.getElementById('searchMovieTitle')

searchButton.addEventListener('click',() => {
  request.localSearch(searchMovieTitle.value)

})

}

function renderOmdbSearch() {
}

module.exports = {
  renderSearchBar,
  renderOmdbSearch
}

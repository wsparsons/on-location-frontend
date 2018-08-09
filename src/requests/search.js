const renderAllMovie = require('../render/home').renderAllMovie
const renderSearchBar = require('../render/search').renderSearchBar

async function localSearch(movieTitle) {
  try {
    return axios.get(`${baseURL}/api/movies/search?title=${movieTitle}`)
      .then(
        response => {
          if (response.data.data.length === 0) {

            document.getElementById('noresults-alert').classList.remove('d-none')
            
          }
          if (response.data.data.length >= 1) {
            document.getElementById('noresults-alert').classList.add('d-none')
          }
          renderAllMovie(response.data.data)
        }
      )
  } catch (e) {
    console.error(e)
  }
}

function omdbSearch() {

}

module.exports = {
  localSearch,
  omdbSearch
}

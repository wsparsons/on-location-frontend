const renderAllMovie = require('../render/home').renderAllMovie



function localSearch(movieTitle) {

  return axios.get(`${baseURL}/api/movies/search?title=${movieTitle}`)
    .then(
      response => {
        renderAllMovie(response.data.data)
      }
    )
}

function omdbSearch() {

}

module.exports = {
  localSearch,
  omdbSearch
}

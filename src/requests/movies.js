const oneMovie = require('../render/home').oneMovie

function getAllMovies() {
  return axios.get(`${baseURL}/api/movies`)
    .then(movies => {
      return movies
    })
}

function addMovie(movie) {
  try {
    return axios(`${baseURL}/api/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: movie,
      method: 'POST'
    }).then(response => {
      oneMovie(response.data.movie.id)
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getAllMovies,
  addMovie
}

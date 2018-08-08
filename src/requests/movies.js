function getAllMovies(){
  return axios.get(`${baseURL}/api/movies`)
    .then(movies => {
      return movies
    })
}

module.exports = {
  getAllMovies
}

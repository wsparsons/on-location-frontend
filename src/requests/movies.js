function getAllMovies(){
  return axios.get(`${baseURL}/api/movies`)
    .then(movies => {
      return movies
    })
}


function addMovie(movie){
  try {
    console.log(movie)
    return axios(`${baseURL}/api/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: movie,
      method: 'POST'
    })
  } catch (e) {
    console.error(e)
  }
}



module.exports = {
  getAllMovies,
  addMovie
}

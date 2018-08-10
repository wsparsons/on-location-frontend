const templates = require('../templates/templates')
const moment = require('moment')
const deleteScene = require('../requests/scenes').deleteScene


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
    // let createdTime = moment(movie.created_at).toNow(true)
    // let updatedTime = moment(movie.updated_at).toNow(true)

    accumulator += templates.movieCardTemplate(movie)
  })

  document.querySelector('#allMoviesCards').innerHTML = accumulator

  let allMoviesImages = document.querySelectorAll('.card-img-top')

  allMoviesImages.forEach(movieImage => {
    movieImage.addEventListener('click', function(event) {
      event.preventDefault()
      let movieId = movieImage.getAttribute('data')
      oneMovie(movieId)
    })
  })
}

function oneMovie(movieId) {
  axios.get(`${baseURL}/api/movies/${movieId}`)
    .then(response => {
      let movieInfo = response.data.data[0]

      renderOneMovie(movieInfo)
      addNewSceneForm(movieId)
    })
}

function renderOneMovie(movie) {
  document.querySelector('#allMoviesCardContainer').innerHTML = ''
  document.querySelector('#oneMovieCard').innerHTML = templates.movieInfoTemplate(movie)

  let viewScenesButton = document.querySelector('#view-scenes')
  viewScenesButton.addEventListener('click', function() {
    let oneMovieId = viewScenesButton.getAttribute('data')
    console.log(oneMovieId);
    getAllScenes(oneMovieId)
    //submitNewScene(oneMovieId)

  })

}



function addNewSceneForm(movie) {
  let addSceneCard = document.querySelector('#oneMovieCard')
  let addSceneToggle = document.querySelector('#add-scene')

  console.log("IN SUBMITNEWSCENE! ", addSceneToggle)
  addSceneToggle.addEventListener('click', (event) => {
    addSceneCard.innerHTML += templates.sceneAddTemplate()
    let addSceneForm = document.querySelector('#addSceneForm')
    addSceneForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const body = {
        description: event.target.sceneDescription.value,
        address: event.target.sceneLocation.value
      } //${baseURL}/api/movies/${movie}/scenes
      return axios(`${baseURL}/api/movies/${movie}/scenes`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          },
          data: body,
          method: 'POST'
        })
        .then(response => {
          getAllScenes(movie)

        })
    })
  })
}


// function submitNewScene

function getAllScenes(oneMovieId) {
  axios.get(`${baseURL}/api/movies/${oneMovieId}/scenes`)
    .then(response => {
      // console.log(response);
      let allScenes = response.data.scenes
      // console.log(scenes);
      renderAllScenes(allScenes)
    })
}

function renderAllScenes(scenes) {
    const promises = scenes.map(scene => {
      return axios.get(`${baseURL}/api/movies/${scene.movie_id}/scene/${scene.id}/photos`)
    })

    Promise.all(promises)
      .then(response => {
        const photoURLs = response.map(query => query.data.data[0].photo)

        return scenes.map((scene, i) => {
          // let createdTime = moment(scene.created_at).toNow(true)
          return templates.sceneCardTemplate(scene, photoURLs[i])
        })
      })
      .then(response => {
        document.querySelector('#allScenesCards').innerHTML = response.join('')
        const deleteButtons = document.querySelectorAll('#delete-button')
        deleteButtons.forEach((e) => {''
          e.addEventListener('click', () => {
            let cardMovieId = e.getAttribute("data-movie")
            let cardSceneId = e.getAttribute("data")
            // console.log(cardmovieId, cardsceneId)
            deleteScene(cardMovieId, cardSceneId)
          })
        })
      })
}



module.exports = {
  allMovies,
  renderAllMovie,
  oneMovie
}

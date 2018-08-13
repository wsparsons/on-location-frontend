const rend = require('../render/home')

function deleteScene(movieId, sceneId) {
  console.log('TRYING TO DLETE!!!',movieId, sceneId);
  

  return axios(`${baseURL}/api/movies/${movieId}/scene/${sceneId}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'DELETE'
  })
  .then((res)=>  {
    rend.oneMovie(res.data.scenes[0].movie_id)
  })
}

module.exports = {
  deleteScene
}

function deleteScene(movieId, sceneId) {

  return axios(`${baseURL}/api/movie/${movieId}/scene/${sceneId}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'DELETE'
  })
  // .then(() => reRenderify())

}

module.exports = {
  deleteScene
}

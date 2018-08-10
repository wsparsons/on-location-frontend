function deleteScene(movieId, sceneId) {

  return axios(`${baseURL}/api/movie/${movieId}/scenes/${sceneId}`, {
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

function deleteScene(movieId, sceneId) {
  //getting to here, just need get the delete function working and then re-render the scenes.
  
  return axios(`${baseURL}/api/movies/${movieId}/scene/${sceneId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'DELETE'
    })
    .then(() => {
      // Re render the scenes list
      console.log("scene deleted")
    })

}

module.exports = {
  deleteScene
}

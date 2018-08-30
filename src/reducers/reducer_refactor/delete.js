const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_VIDEO':
      const newVideos = state.videos.slice(0)
      newVideos.splice(action.index, 1)
      return({
        ...state,
        view: action.view,
        videos: newVideos
      })

    default:
      return (state)
  }
}

export default deleteReducer

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_VIDEO':
      return({
        ...state,
        view: action.view,
        editingIndex: action.index,
        updatedTitle: action.title
      })

    case 'SAVE_EDITED_VIDEO':
      if (action.title !== '') {
        const newVideos = state.videos.slice(0)
        newVideos[action.index].title = action.title
        return({
          ...state,
          view: action.view,
          videos: newVideos
        })
      } else {
        return({
          ...state,
          view: action.view
        })
      }

    default:
      return (state)
  }
}

export default editReducer

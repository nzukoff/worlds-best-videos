const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return({
        ...state,
        view: action.view,
        updatedTitle: ''
      })

    case 'SAVE_ADDED_VIDEO':
      if (action.title !== '') {
        return({
          ...state,
          view: action.view,
          videos: [...state.videos, {title: action.title}]
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

export default addReducer

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return({
        ...state,
        updatedTitle: action.title
      })

    default:
      return (state)
  }
}

export default formReducer

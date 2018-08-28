const initialState = {
  view: 'video_list',
  videos: [
    {title: 'Star Wars IV'},
    {title: 'Star Trek II'}
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return({
        ...state, view: action.view
      })

    default:
      return (state)
    case 'EDIT_VIDEO':
      return({
        ...state, view: action.view, editingIndex: action.index
      })
  }
}

// import { combineReducers } from 'redux'
// import view from './view'
// ​
// export default combineReducers({
//   view,
//   videos
// })
export default rootReducer

const initialState = () => {
  return({
    view: 'video_list',
    videos: []
  })
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return({
        ...state, view: action.view
      })

    default:
      return(state)

export default rootReducer

// import { combineReducers } from 'redux'
// import view from './view'
// ​
// export default combineReducers({
//   view,
//   videos
// })

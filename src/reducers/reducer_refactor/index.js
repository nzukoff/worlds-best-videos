const initialState = {
  view: 'video_list',
  videos: [
    {title: 'Star Wars IV'},
    {title: 'Star Trek II'}
  ]
}

const rootReducer = (state = initialState, action) => {
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

    case 'DELETE_VIDEO':
      const newVideos = state.videos.slice(0)
      newVideos.splice(action.index, 1)
      return({
        ...state,
        view: action.view,
        videos: newVideos
      })

    case 'UPDATE_TITLE':
      return({
        ...state,
        updatedTitle: action.title
      })

    default:
      return (state)
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

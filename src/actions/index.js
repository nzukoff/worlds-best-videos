export const setView = (view) => ({  
  type: 'SET_VIEW',
  view: view
})

export const editVideo = (index) => ({
  type: 'EDIT_VIDEO',
  view: 'edit_video',
  index
})
export const addVideo = () => ({
  type: 'ADD_VIDEO',
  view: 'add_video'
})

export const saveAddedVideo = (title) => ({
  type: 'SAVE_ADDED_VIDEO',
  view: 'video_list',
  title
})

export const editVideo = (index, title) => ({
  type: 'EDIT_VIDEO',
  view: 'edit_video',
  index,
  title
})

export const saveEditedVideo = (index, title) => ({
  type: 'SAVE_EDITED_VIDEO',
  view: 'video_list',
  index,
  title
})

export const deleteVideo = (index) => ({
  type: 'DELETE_VIDEO',
  view: 'video_list',
  index
})

export const updateTitle = (title) => ({
  type: 'UPDATE_TITLE',
  title
})

export const getVideoList = () => {
  return async (dispatch) => {
    const response = await fetch('/api/videos')
    const videos = await response.json()
    dispatch(gotVideoList(videos))
  }
}

export const gotVideoList = (videos) => ({
  type: 'GOT_VIDEOS',
  videos
})

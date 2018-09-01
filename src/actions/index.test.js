//need to test that addVideo action creator returns the correct values when called
//correlates with 'clicking the "Add Video" button takes the user to the add video page' test



import * as actions from './index'

describe('actions', () => {
  it('should create an action to add a video', () => {
    const expectedAction = {
      type: 'ADD_VIDEO',
      view: 'add_video'
    }

    expect(actions.addVideo()).toEqual(expectedAction)
  })

  it('should create an action to save a newly added video', () => {
    const title = 'Brazil'
    const expectedAction = {
      type: 'SAVE_ADDED_VIDEO',
      view: 'video_list',
      title: 'Brazil'
    }

    expect(actions.saveAddedVideo(title)).toEqual(expectedAction)
  })

// export const editVideo = (index, title) => ({
//   type: 'EDIT_VIDEO',
//   view: 'edit_video',
//   index,
//   title
// })
//
// export const saveEditedVideo = (index, title) => ({
//   type: 'SAVE_EDITED_VIDEO',
//   view: 'video_list',
//   index,
//   title
// })
//
// export const deleteVideo = (index) => ({
//   type: 'DELETE_VIDEO',
//   view: 'video_list',
//   index
// })
//
// export const updateTitle = (title) => ({
//   type: 'UPDATE_TITLE',
//   title
// })

})

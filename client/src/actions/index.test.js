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

  it('should create an action to edit a selected video', () => {
    const index = 1
    const title = 'Brazil'
    const expectedAction = {
      type: 'EDIT_VIDEO',
      view: 'edit_video',
      index: 1,
      title: 'Brazil'
    }

    expect(actions.editVideo(index, title)).toEqual(expectedAction)
  })

  it('should create an action to save an edited video', () => {
    const index = 1
    const title = 'Brazil'
    const expectedAction = {
      type: 'SAVE_EDITED_VIDEO',
      view: 'video_list',
      index: 1,
      title: 'Brazil'
    }

    expect(actions.saveEditedVideo(index, title)).toEqual(expectedAction)
  })

  it('should create an action to delete a video', () => {
    const index = 1
    const expectedAction = {
      type: 'DELETE_VIDEO',
      view: 'video_list',
      index: 1
    }

    expect(actions.deleteVideo(index)).toEqual(expectedAction)
  })

  it('should create an action to update a video title', () => {
    const title = 'Brazil'
    const expectedAction = {
      type: 'UPDATE_TITLE',
      title: 'Brazil'
    }

    expect(actions.updateTitle(title)).toEqual(expectedAction)
  })
})

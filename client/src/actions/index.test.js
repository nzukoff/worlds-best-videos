import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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

  it('should create an action to update the [fetched] video list', () => {
    const videos = [{title: 'Brazil'}]
    const expectedAction = {
      type: 'GOT_VIDEOS',
      videos: [{title: 'Brazil'}]
    }

    expect(actions.gotVideoList(videos)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  // Setup
  it('should create GOT_VIDEOS when videos are fetched', async () => {
    fetchMock
      .getOnce('/api/videos', {
                                body: [
                                   { title: "The Graduate"}
                                ],
                                headers: {
                                  'content-type': 'application/json'
                                }
                              })

    const expectedActions = [
      { type: 'GOT_VIDEOS', videos: [ { title: "The Graduate" } ] }
    ]

    const store = mockStore({ videos: [] })

    // Exercise
    await store.dispatch(actions.getVideoList())
    expect(store.getActions()).toEqual(expectedActions)
    //expect(true).toBe(false)

    // ;(async () => {
    //   await store.dispatch(actions.getVideoList())
    //   expect(store.getActions()).toEqual(expectedActions)
    //   //expect(true).toBe(false)
    // })()

    // await store.dispatch(actions.getVideoList()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions)
    //   expect(true).toBe(false)
    // })

    // return store.dispatch(actions.getVideoList()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions)
    // })
  })
})

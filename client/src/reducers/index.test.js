import reducer from './index'

describe('reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ]
    }

    expect(reducer(undefined, {})).toEqual(expected)
  })

  it('should return new view and blank updated title', () => {
    const initialState = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ]
    }

    const expected = {
      view: 'add_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: ''
    }

    expect(reducer(initialState, {
                                   type: 'ADD_VIDEO',
                                   view: 'add_video'
                                 }
           )).toEqual(expected)
  })

  it('should return state with new video added and new view', () => {
    const initialState = {
      view: 'add_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: 'Title'
    }

    const expected = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'},
        {title: 'The Graduate'}
      ],
      updatedTitle: 'Title'
    }

    expect(reducer(initialState, {
                                   type: 'SAVE_ADDED_VIDEO',
                                   title: 'The Graduate',
                                   view: 'video_list'
                                 }
           )).toEqual(expected)
  })

  it('should return same video list and new view if new title is blank', () => {
    const initialState = {
      view: 'add_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: ''
    }

    const expected = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: ''
    }

    expect(reducer(initialState, {
                                   type: 'SAVE_ADDED_VIDEO',
                                   title: '',
                                   view: 'video_list'
                                 }
           )).toEqual(expected)
  })

  it('should return state with new updated title', () => {
    const initialState = {
      view: 'add_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: ''
    }

    const expected = {
      view: 'add_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: 'New Title'
    }

    expect(reducer(initialState, {
                                   type: 'UPDATE_TITLE',
                                   title: 'New Title'
                                 }
           )).toEqual(expected)
  })





  it('should return new view, updated title, and editing index', () => {
    const initialState = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ]
    }

    const expected = {
      view: 'edit_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: 'Changed Title',
      editingIndex: 1
    }

    expect(reducer(initialState, {
                                   type: 'EDIT_VIDEO',
                                   view: 'edit_video',
                                   title: 'Changed Title',
                                   index: 1
                                 }
           )).toEqual(expected)
  })

  it('should return state with edited video and new view', () => {
    const initialState = {
      view: 'edit_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: 'The Graduate',
      editingIndex: 1
    }

    const expected = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'The Graduate'}
      ],
      updatedTitle: 'The Graduate',
      editingIndex: 1
    }

    expect(reducer(initialState, {
                                   type: 'SAVE_EDITED_VIDEO',
                                   title: 'The Graduate',
                                   view: 'video_list',
                                   index: 1
                                 }
           )).toEqual(expected)
  })

  it('should return same video list and new view if new title is blank', () => {
    const initialState = {
      view: 'edit_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: '',
      editingIndex: 1
    }

    const expected = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: '',
      editingIndex: 1
    }

    expect(reducer(initialState, {
                                   type: 'SAVE_EDITED_VIDEO',
                                   title: '',
                                   view: 'video_list',
                                   index: 1
                                 }
           )).toEqual(expected)
  })

  it('should return state with deleted video removed from list', () => {
    const initialState = {
      view: 'edit_video',
      videos: [
        {title: 'Star Wars IV'},
        {title: 'Star Trek II'}
      ],
      updatedTitle: 'The Graduate',
      editingIndex: 1
    }

    const expected = {
      view: 'video_list',
      videos: [
        {title: 'Star Wars IV'}
      ],
      updatedTitle: 'The Graduate',
      editingIndex: 1
    }

    expect(reducer(initialState, {
                                   type: 'DELETE_VIDEO',
                                   view: 'video_list',
                                   index: 1
                                 }
           )).toEqual(expected)
  })
})

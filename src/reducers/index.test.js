it('shows a video in the video list when one is added', () => {
  // Setup
  const appWrapper = shallow(<App />)
  appWrapper.setState({videos: [{title: 'Star Wars'}, {title: 'Star Trek II'}]})
  const expected = {title: 'Brazil'}

  // Exercise
  appWrapper.instance().onSaveAddedVideo(expected)

  // Assert
  expect(appWrapper.state().videos).toHaveLength(3)
  expect(appWrapper.state().videos).toContainEqual(expected)
})

it('does not add video or change state if video title is blank', () => {
  // Setup
  const appWrapper = shallow(<App />)
  appWrapper.setState({videos: [{title: 'Star Wars'}, {title: 'Star Trek II'}]})
  const expected = {title: ''}

  // Exercise
  appWrapper.instance().onSaveAddedVideo(expected)

  // Assert
  expect(appWrapper.state().videos).toHaveLength(2)
  expect(appWrapper.state().videos).not.toContainEqual(expected)
})

it('shows a video in the video list when one is edited and saved', () => {
  // Setup
  const appWrapper = shallow(<App />)
  appWrapper.setState({videos: [{title: 'Star Wars'}, {title: 'Star Trek II'}]})
  const expected = {title: 'Brazil'}

  // Exercise
  appWrapper.instance().onSaveEditedVideo(1, expected)

  // Assert
  expect(appWrapper.state().videos).toHaveLength(2)
  expect(appWrapper.state().videos[1]).toEqual(expected)
})

it('does not save edits or change state if video title is blank', () => {
  // Setup
  const appWrapper = shallow(<App />)
  appWrapper.setState({videos: [{title: 'Star Wars'}, {title: 'Star Trek II'}]})
  const expected = {title: ''}

  // Exercise
  appWrapper.instance().onSaveEditedVideo(1, expected)

  // Assert
  expect(appWrapper.state().videos).toHaveLength(2)
  expect(appWrapper.state().videos).not.toContainEqual(expected)
})

it('clicking "Save" button from the edit video page takes the user to the video list page', () => {
  // Setup
  const appWrapper = shallow(<App />);
  appWrapper.setState({videos: [{title: 'Star Wars'}, {title: 'Star Trek II'}], view: 'edit_video'})

  // Exercise
  appWrapper.instance().onSaveEditedVideo(1, {title: ''})

  // Assert
  expect(appWrapper.state().view).toEqual('video_list')
  const videoList = appWrapper.find(VideoList)
  expect(videoList).toHaveLength(1);
})

it('video list page no longer shows video when it is deleted', () => {
  // Setup
  const appWrapper = shallow(<App />)
  appWrapper.setState({videos: [{title: 'Star Wars'}, {title: 'Star Trek II'}]})
  const expected = [{title: 'Star Wars'}]

  // Exercise
  appWrapper.instance().onDeleteVideo(1)

  // Assert
  expect(appWrapper.state().videos).toHaveLength(1)
  expect(appWrapper.state().videos).toEqual(expected)
})

it('saves video when "Save" clicked', () => {
  const onDeleteVideo = sinon.stub()
  const editVideoWrapper = shallow(<EditVideo index={1} videos={[{title: 'Jaws II'}, {title: 'A Few Good Men'}]} onDeleteVideo={onDeleteVideo} />)
  const deleteButton = editVideoWrapper.find('form').find({name: 'delete'})
  expect(deleteButton).toHaveLength(1)
  deleteButton.simulate('click')
  expect(onDeleteVideo.calledOnce).toBe(true)
  expect(onDeleteVideo.calledWith(1)).toBe(true)
})
